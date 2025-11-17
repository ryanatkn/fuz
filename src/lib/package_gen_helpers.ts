/**
 * Build-time helpers for package metadata generation.
 *
 * These functions are used during `gro gen` to analyze TypeScript and Svelte source files
 * and generate package metadata with rich type information and documentation.
 *
 * Design philosophy: Fail fast with clear errors rather than silently producing invalid
 * metadata. All validation errors halt the build immediately with actionable messages.
 *
 * @see package.gen.ts for the main generation task
 * @see src_json.ts for type definitions
 * @see tsdoc_helpers.ts for JSDoc/TSDoc parsing utilities
 * @see ts_helpers.ts for TypeScript analysis
 * @see svelte_helpers.ts for Svelte component analysis
 */

import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Logger} from '@ryanatkn/belt/log.js';
import type {Filer} from '@ryanatkn/gro/filer.js';
import type {Disknode} from '@ryanatkn/gro/disknode.js';
import ts from 'typescript';
import {readFileSync} from 'node:fs';
import {svelte2tsx} from 'svelte2tsx';

import type {Identifier_Json, Module_Json, Src_Json} from '$lib/src_json.js';
import {
	ts_extract_module_comment,
	ts_infer_declaration_kind,
	ts_extract_function_info,
	ts_extract_type_info,
	ts_extract_class_info,
	ts_extract_variable_info,
} from '$lib/ts_helpers.js';
import {tsdoc_parse, tsdoc_apply_to_declaration} from '$lib/tsdoc_helpers.js';
import {svelte_analyze_component} from '$lib/svelte_helpers.js';
import {
	module_extract_path,
	module_get_component_name,
	module_is_typescript,
	module_is_svelte,
	module_is_source,
} from '$lib/module_helpers.js';

/**
 * Validates that no identifier names are duplicated across modules.
 * The flat namespace is intentional - duplicates should fail fast.
 *
 * @throws Error if duplicate identifier names are found
 */
export const package_gen_validate_no_duplicates = (src_json: Src_Json, log: Logger): void => {
	const identifier_locations: Map<string, Array<{module: string; kind: string}>> = new Map();

	// Collect all identifier names and their locations
	for (const mod of src_json.modules ?? []) {
		for (const identifier of mod.identifiers ?? []) {
			const name = identifier.name;
			if (!identifier_locations.has(name)) {
				identifier_locations.set(name, []);
			}
			identifier_locations.get(name)!.push({
				module: mod.path,
				kind: identifier.kind,
			});
		}
	}

	// Check for duplicates
	const duplicates: Array<{name: string; locations: Array<{module: string; kind: string}>}> = [];
	for (const [name, locations] of identifier_locations.entries()) {
		if (locations.length > 1) {
			duplicates.push({name, locations});
		}
	}

	if (duplicates.length > 0) {
		log.error('Duplicate identifier names detected in flat namespace:');
		for (const {name, locations} of duplicates) {
			log.error(`  "${name}" found in:`);
			for (const {module, kind} of locations) {
				log.error(`    - ${module} (${kind})`);
			}
		}
		throw new Error(
			`Found ${duplicates.length} duplicate identifier name${duplicates.length === 1 ? '' : 's'} across modules. ` +
				'The flat namespace requires unique names. Please rename one of the conflicting identifiers. ' +
				'See CLAUDE.md "Identifier namespacing" section for details on this design decision.',
		);
	}
};

/**
 * Enhance a single identifier with rich metadata from TypeScript analysis.
 *
 * @throws Error if TypeScript analysis fails (fails fast)
 */
export const package_gen_enhance_identifier = (
	symbol: ts.Symbol,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
): Identifier_Json => {
	const name = symbol.name;
	const decl_node = symbol.valueDeclaration || symbol.declarations?.[0];

	// Determine kind (fallback to 'variable' if no declaration node)
	const kind = decl_node ? ts_infer_declaration_kind(symbol, decl_node) : 'variable';

	const result: Identifier_Json = {
		name,
		kind,
	};

	if (!decl_node) {
		return result;
	}

	// Extract TSDoc
	const tsdoc = tsdoc_parse(decl_node, source_file);
	tsdoc_apply_to_declaration(result, tsdoc);

	// Extract source line
	const start = decl_node.getStart(source_file);
	const start_pos = source_file.getLineAndCharacterOfPosition(start);
	result.source_line = start_pos.line + 1;

	// Extract type-specific info
	if (result.kind === 'function') {
		ts_extract_function_info(decl_node, symbol, checker, result, tsdoc);
	} else if (result.kind === 'type') {
		ts_extract_type_info(decl_node, symbol, checker, result);
	} else if (result.kind === 'class') {
		ts_extract_class_info(decl_node, symbol, checker, result);
	} else if (result.kind === 'variable') {
		ts_extract_variable_info(decl_node, symbol, checker, result);
	}

	return result;
};

/**
 * Sort modules alphabetically by path for deterministic output and cleaner diffs.
 */
export const package_gen_sort_modules = (modules: Array<Module_Json>): Array<Module_Json> => {
	return modules.slice().sort((a, b) => a.path.localeCompare(b.path));
};

/**
 * Generate the package.ts file content with package_json and src_json exports.
 */
export const package_gen_generate_ts = (package_json: Package_Json, src_json: Src_Json): string => {
	return `// Generated by package.gen.ts
// Do not edit directly - regenerated on build

import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Src_Json} from '$lib/src_json.js';

export const package_json: Package_Json = ${JSON.stringify(package_json, null, '\t')};

export const src_json: Src_Json = ${JSON.stringify(src_json, null, '\t')};
`;
};

/**
 * Collect and filter source files from filer.
 *
 * Returns disknodes for TypeScript/JS files and Svelte components from /src/lib/, excluding test files.
 *
 * @throws Error if no source files are found in /src/lib/
 */
export const package_gen_collect_source_files = (filer: Filer, log: Logger): Array<Disknode> => {
	log.info(`filer has ${filer.files.size} files total`);

	const source_disknodes: Array<Disknode> = [];
	for (const [id, disknode] of filer.files.entries()) {
		if (module_is_source(id)) {
			// Include TypeScript/JS files and Svelte components
			if (module_is_typescript(id) || module_is_svelte(id)) {
				source_disknodes.push(disknode);
			}
		}
	}

	log.info(`found ${source_disknodes.length} source files to analyze`);

	if (source_disknodes.length === 0) {
		throw new Error('No source files found in /src/lib/ - cannot generate package metadata');
	}

	// Sort for deterministic output (stable alphabetical module ordering)
	source_disknodes.sort((a, b) => a.id.localeCompare(b.id));

	return source_disknodes;
};

/**
 * Analyze a Svelte component file and extract metadata.
 *
 * @throws Error if file cannot be read, svelte2tsx transformation fails, or component analysis fails
 */
export const package_gen_analyze_svelte_file = (
	disknode: Disknode,
	module_path: string,
	checker: ts.TypeChecker,
): Module_Json => {
	const source_id = disknode.id;
	const svelte_source = readFileSync(source_id, 'utf-8');

	// Check if component uses TypeScript
	const is_ts_file = svelte_source.includes('lang="ts"');

	// Transform Svelte to TS
	const ts_result = svelte2tsx(svelte_source, {
		filename: source_id,
		isTsFile: is_ts_file,
		emitOnTemplateError: true, // Handle malformed templates gracefully
	});

	// Get component name from filename
	const component_name = module_get_component_name(module_path);

	// Create a temporary source file from the original Svelte content for JSDoc extraction
	const temp_source = ts.createSourceFile(source_id, svelte_source, ts.ScriptTarget.Latest, true);

	// Analyze the component
	const identifier_json = svelte_analyze_component(
		ts_result.code,
		temp_source,
		checker,
		component_name,
	);

	// Extract dependencies and dependents
	const {dependencies, dependents} = package_gen_extract_dependencies(disknode);

	return {
		path: module_path,
		identifiers: [identifier_json],
		dependencies: dependencies.length > 0 ? dependencies : undefined,
		dependents: dependents.length > 0 ? dependents : undefined,
	};
};

/**
 * Analyze a TypeScript file and extract all identifiers.
 *
 * @throws Error if identifier enhancement fails (via package_gen_enhance_identifier)
 */
export const package_gen_analyze_typescript_file = (
	disknode: Disknode,
	source_file: ts.SourceFile,
	module_path: string,
	checker: ts.TypeChecker,
): Module_Json => {
	const mod: Module_Json = {
		path: module_path,
		identifiers: [],
	};

	// Extract module-level comment
	const module_comment = ts_extract_module_comment(source_file);
	if (module_comment) {
		mod.module_comment = module_comment;
	}

	// Extract identifiers - get all exported symbols
	const symbol = checker.getSymbolAtLocation(source_file);
	if (symbol) {
		const exports = checker.getExportsOfModule(symbol);
		for (const export_symbol of exports) {
			const identifier_json = package_gen_enhance_identifier(export_symbol, source_file, checker);
			mod.identifiers!.push(identifier_json);
		}
	}

	// Extract dependencies and dependents
	const {dependencies, dependents} = package_gen_extract_dependencies(disknode);
	if (dependencies.length > 0) {
		mod.dependencies = dependencies;
	}
	if (dependents.length > 0) {
		mod.dependents = dependents;
	}

	return mod;
};

/**
 * Extract dependencies and dependents for a module from the filer's dependency graph.
 *
 * Filters to only include source modules from /src/lib/ (excludes external packages, node_modules, tests).
 * Returns sorted arrays of module paths (relative to src/lib) for deterministic output.
 */
export const package_gen_extract_dependencies = (
	disknode: Disknode,
): {dependencies: Array<string>; dependents: Array<string>} => {
	const dependencies: Array<string> = [];
	const dependents: Array<string> = [];

	// Extract dependencies (files this module imports)
	for (const dep_id of disknode.dependencies.keys()) {
		if (module_is_source(dep_id)) {
			dependencies.push(module_extract_path(dep_id));
		}
	}

	// Extract dependents (files that import this module)
	for (const dependent_id of disknode.dependents.keys()) {
		if (module_is_source(dependent_id)) {
			dependents.push(module_extract_path(dependent_id));
		}
	}

	// Sort for deterministic output
	dependencies.sort();
	dependents.sort();

	return {dependencies, dependents};
};

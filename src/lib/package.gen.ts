/**
 * Custom package generator with full TypeScript analysis
 *
 * Generates package.json and src.json with rich metadata:
 * - JSDoc/TSDoc comments with full tag support
 * - Full type signatures
 * - Source code locations
 * - Parameter information with descriptions and defaults
 * - Return value documentation
 * - Usage examples
 * - Dependency graphs
 * - Svelte component props
 *
 * @see src/lib/src_json.ts for type definitions
 * @see src/lib/tsdoc_helpers.ts for JSDoc/TSDoc parsing
 * @see src/lib/ts_helpers.ts for TypeScript analysis
 * @see src/lib/svelte_helpers.ts for Svelte component analysis
 */

import type {Gen} from '@ryanatkn/gro';
import type {Filer} from '@ryanatkn/gro/filer.js';
import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Logger} from '@ryanatkn/belt/log.js';
import ts from 'typescript';
import {readFileSync} from 'node:fs';
import {load_package_json} from '@ryanatkn/gro/package_json.js';
import {svelte2tsx} from 'svelte2tsx';

import type {Src_Module_Declaration, Src_Module, Src_Json} from '$lib/src_json.js';
import {
	ts_create_program,
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
	module_get_key,
	module_is_typescript,
	module_is_svelte,
	module_is_source,
} from '$lib/module_helpers.js';

export const gen: Gen = async ({log, filer}) => {
	log.info('generating package metadata with full TypeScript analysis...');

	// Ensure filer is initialized
	await filer.init();

	// Read package.json
	const package_json = load_package_json();

	// Create TypeScript program
	const program = ts_create_program(log);
	if (!program) {
		throw new Error('Failed to create TypeScript program - cannot generate package metadata');
	}

	const checker = program.getTypeChecker();

	// Collect source files from filer
	const source_disknodes = collect_source_files(filer, log);

	// Build src.json
	const src_json: Src_Json = {
		name: package_json.name,
		version: package_json.version,
		modules: {},
	};

	for (const disknode of source_disknodes) {
		const source_id = disknode.id;
		const module_path = module_extract_path(source_id);
		const module_key = module_get_key(module_path);
		const is_svelte = module_is_svelte(module_path);

		let mod: Src_Module | null;

		// Handle Svelte files separately (before trying to get TypeScript source file)
		if (is_svelte) {
			mod = analyze_svelte_file(source_id, module_path, checker);
		} else {
			// For TypeScript/JS files, get the source file from the program
			const source_file = program.getSourceFile(source_id);
			if (!source_file) {
				log.warn(`Could not get source file: ${source_id}`);
				continue;
			}

			mod = analyze_typescript_file(source_file, module_path, checker, log);
		}

		if (!mod) {
			const file_type = is_svelte ? 'Svelte component' : 'TypeScript file';
			log.error(`Failed to analyze ${file_type} ${module_path}`);
			continue;
		}

		src_json.modules![module_key] = mod;
	}

	// Sort modules alphabetically for deterministic output and cleaner diffs
	src_json.modules = src_json.modules ? sort_modules(src_json.modules) : undefined;

	log.info('package metadata generation complete');

	return {
		content: generate_package_ts(package_json, src_json),
	};
};

/**
 * Enhance a single declaration with rich metadata
 */
const enhance_declaration = (
	symbol: ts.Symbol,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
	log: Logger,
): Src_Module_Declaration => {
	const name = symbol.name;
	const result: Src_Module_Declaration = {
		name,
		kind: null,
	};

	try {
		const decl_node = symbol.valueDeclaration || symbol.declarations?.[0];
		if (!decl_node) {
			return result;
		}

		// Determine kind
		result.kind = ts_infer_declaration_kind(symbol, decl_node);

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
	} catch (err) {
		log.error(`Error enhancing ${name}:`, err);
	}

	return result;
};

/**
 * Sort modules alphabetically by key for deterministic output and cleaner diffs.
 */
const sort_modules = (modules: Record<string, Src_Module>): Record<string, Src_Module> => {
	const sorted: Record<string, Src_Module> = {};
	for (const key of Object.keys(modules).sort()) {
		sorted[key] = modules[key]!;
	}
	return sorted;
};

const generate_package_ts = (package_json: Package_Json, src_json: Src_Json): string => {
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
 */
const collect_source_files = (filer: Filer, log: Logger): Array<any> => {
	log.info(`filer has ${filer.files.size} files total`);

	const source_disknodes: Array<any> = [];
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

const analyze_svelte_file = (
	source_id: string,
	module_path: string,
	checker: ts.TypeChecker,
): Src_Module | null => {
	try {
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
		const decl = svelte_analyze_component(ts_result.code, temp_source, checker, component_name);

		return {
			path: module_path,
			declarations: [decl],
		};
	} catch (_err) {
		return null;
	}
};

const analyze_typescript_file = (
	source_file: ts.SourceFile,
	module_path: string,
	checker: ts.TypeChecker,
	log: Logger,
): Src_Module | null => {
	const mod: Src_Module = {
		path: module_path,
		declarations: [],
	};

	// Extract module-level comment
	const module_comment = ts_extract_module_comment(source_file);
	if (module_comment) {
		mod.module_comment = module_comment;
	}

	// Extract declarations - extract all exports
	const symbol = checker.getSymbolAtLocation(source_file);
	if (symbol) {
		const exports = checker.getExportsOfModule(symbol);
		for (const export_symbol of exports) {
			const decl = enhance_declaration(export_symbol, source_file, checker, log);
			mod.declarations!.push(decl);
		}
	}

	return mod;
};

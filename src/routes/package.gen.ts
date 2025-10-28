// TODO BLOCK needs to be exported

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
import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import ts from 'typescript';
import {readFileSync} from 'node:fs';

import type {Src_Module_Declaration, Src_Module, Src_Json} from '$lib/src_json.js';
import {
	ts_create_program,
	ts_extract_imports,
	ts_extract_module_comment,
	ts_infer_declaration_kind,
	ts_extract_function_info,
	ts_extract_type_info,
	ts_extract_class_info,
	ts_extract_variable_info,
	ts_is_exported,
} from '$lib/ts_helpers.js';
import {tsdoc_parse} from '$lib/tsdoc_helpers.js';
import {svelte_analyze_component} from '$lib/svelte_helpers.js';

export const gen: Gen = async ({log, filer}) => {
	log.info('generating package metadata with full TypeScript analysis...');

	// Ensure filer is initialized
	await filer.init();

	// Read package.json
	const package_json = read_package_json();

	// Try to import svelte2tsx if available
	let svelte2tsx: typeof import('svelte2tsx').svelte2tsx | undefined;
	try {
		const module = await import('svelte2tsx');
		svelte2tsx = module.svelte2tsx;
		log.info('svelte2tsx available - Svelte components will be analyzed');
	} catch {
		log.info('svelte2tsx not installed - Svelte components will be skipped');
	}

	// Create TypeScript program
	const program = ts_create_program(log);
	if (!program) {
		throw new Error('Failed to create TypeScript program - cannot generate package metadata');
	}

	const checker = program.getTypeChecker();

	// Get source files from filer
	log.info(`filer has ${filer.files.size} files total`);

	// Manually filter files - IDs are absolute paths, so we need to check if they include '/src/lib/'
	// Include Svelte files if svelte2tsx is available
	const source_disknodes: Array<any> = [];
	for (const [id, disknode] of filer.files.entries()) {
		if (id.includes('/src/lib/') && !id.includes('.test.') && !id.includes('.spec.')) {
			// Always include TypeScript/JavaScript files
			if (/\.(ts|js)$/.test(id)) {
				source_disknodes.push(disknode);
			}
			// Include Svelte files if svelte2tsx is available
			else if (id.endsWith('.svelte') && svelte2tsx) {
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

	// Build src.json
	const src_json: Src_Json = {
		name: package_json.name,
		version: package_json.version,
		modules: {},
	};

	for (const disknode of source_disknodes) {
		try {
			const source_id = disknode.id;
			// Extract path relative to src/lib (e.g., "/home/desk/dev/fuz/src/lib/alert.ts" -> "alert.ts")
			const lib_index = source_id.indexOf('/src/lib/');
			const module_path = lib_index !== -1 ? source_id.substring(lib_index + 9) : source_id;
			const module_key = `./${module_path}`;

			log.info(`analyzing: ${module_path}`);

			// Handle Svelte files separately (before trying to get TypeScript source file)
			if (module_path.endsWith('.svelte')) {
				const mod: Src_Module = {
					path: module_path,
					declarations: [],
					imports: [],
				};

				// Use svelte2tsx to transform Svelte component to TS (not TSX) for analysis
				if (svelte2tsx) {
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
						const component_name = module_path
							.replace(/^.*\//, '') // Remove directory
							.replace(/\.svelte$/, ''); // Remove extension

						// Create a temporary source file from the original Svelte content for JSDoc extraction
						const temp_source = ts.createSourceFile(
							source_id,
							svelte_source,
							ts.ScriptTarget.Latest,
							true,
						);

						// Analyze the component
						const decl = svelte_analyze_component(
							ts_result.code,
							temp_source,
							checker,
							component_name,
						);

						mod.declarations!.push(decl);
					} catch (err) {
						log.error(`Failed to analyze Svelte component ${module_path}:`, err);
						// Fallback to basic component declaration
						mod.declarations!.push({
							name: module_path.replace(/^.*\//, '').replace(/\.svelte$/, ''),
							kind: 'component',
						});
					}
				} else {
					// Fallback: just mark as component without detailed analysis
					mod.declarations!.push({
						name: module_path.replace(/^.*\//, '').replace(/\.svelte$/, ''),
						kind: 'component',
					});
				}

				src_json.modules![module_key] = mod;
				continue; // Skip the TypeScript processing below
			}

			// For TypeScript/JavaScript files, get the source file from the program
			const source_file = program.getSourceFile(source_id);
			if (!source_file) {
				log.warn(`Could not get source file: ${source_id}`);
				continue;
			}

			const mod: Src_Module = {
				path: module_path,
				declarations: [],
				imports: ts_extract_imports(source_file),
			};

			// Extract module-level comment
			const module_comment = ts_extract_module_comment(source_file);
			if (module_comment) {
				mod.module_comment = module_comment;
			}

			// Extract declarations based on file type
			if (module_path.endsWith('.ts') || module_path.endsWith('.js')) {
				// TypeScript/JavaScript files - extract all exports
				const symbol = checker.getSymbolAtLocation(source_file);
				if (symbol) {
					const exports = checker.getExportsOfModule(symbol);
					for (const export_symbol of exports) {
						const decl = enhance_declaration(export_symbol, source_file, checker, log);
						mod.declarations!.push(decl);
					}
				}
			}

			src_json.modules![module_key] = mod;
		} catch (err) {
			log.error(`Failed to analyze ${disknode.id}:`, err);
			// Continue with next module
		}
	}

	// Sort modules alphabetically for deterministic output and cleaner diffs
	if (src_json.modules) {
		const sorted_modules: Record<string, Src_Module> = {};
		for (const key of Object.keys(src_json.modules).sort()) {
			sorted_modules[key] = src_json.modules[key]!;
		}
		src_json.modules = sorted_modules;
	}

	// Compute imported_by relationships
	compute_imported_by(src_json);

	log.info('package metadata generation complete');

	return {
		content: generate_package_ts(package_json, src_json),
	};
};

/**
 * Read and parse package.json
 */
const read_package_json = (): Package_Json => {
	const text = readFileSync('package.json', 'utf-8');
	return JSON.parse(text);
};

/**
 * Enhance a single declaration with rich metadata
 */
const enhance_declaration = (
	symbol: ts.Symbol,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
	log: any,
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
		if (tsdoc) {
			result.doc_comment = tsdoc.full_text;
			result.summary = tsdoc.summary;
			result.examples = tsdoc.examples;
			result.deprecated_message = tsdoc.deprecated_message;
			result.see_also = tsdoc.see_also;
			if (tsdoc.throws.length) {
				result.throws = tsdoc.throws;
			}
			if (tsdoc.since) {
				result.since = tsdoc.since;
			}
		}

		// Extract source location
		const start = decl_node.getStart(source_file);
		const end = decl_node.getEnd();
		const start_pos = source_file.getLineAndCharacterOfPosition(start);
		const end_pos = source_file.getLineAndCharacterOfPosition(end);

		result.source_location = {
			line: start_pos.line + 1,
			column: start_pos.character,
			end_line: end_pos.line + 1,
			end_column: end_pos.character,
		};

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

		result.exported = ts_is_exported(decl_node);
	} catch (err) {
		log.error(`Error enhancing ${name}:`, err);
	}

	return result;
};

/**
 * Compute imported_by relationships
 */
const compute_imported_by = (src_json: Src_Json): void => {
	if (!src_json.modules) return;

	for (const [module_key, module] of Object.entries(src_json.modules)) {
		if (!module.imports) continue;

		for (const import_specifier of module.imports) {
			// Find matching modules
			for (const [_other_key, other_module] of Object.entries(src_json.modules)) {
				// Match local imports (starting with ./ or $lib/)
				const module_name = other_module.path.replace(/\.(ts|js|svelte)$/, '');
				if (import_specifier.startsWith('./') && import_specifier.includes(module_name)) {
					other_module.imported_by = other_module.imported_by || [];
					if (!other_module.imported_by.includes(module_key)) {
						other_module.imported_by.push(module_key);
					}
				} else if (import_specifier.startsWith('$lib/')) {
					const import_path = import_specifier.replace('$lib/', '');
					if (import_path.includes(module_name)) {
						other_module.imported_by = other_module.imported_by || [];
						if (!other_module.imported_by.includes(module_key)) {
							other_module.imported_by.push(module_key);
						}
					}
				}
			}
		}
	}
};

/**
 * Generate package.ts content
 */
const generate_package_ts = (package_json: Package_Json, src_json: Src_Json): string => {
	return `// Generated by package.gen.ts
// Do not edit directly - regenerated on build

import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Src_Json} from '$lib/src_json.js';

export const package_json: Package_Json = ${JSON.stringify(package_json, null, '\t')};

export const src_json: Src_Json = ${JSON.stringify(src_json, null, '\t')};
`;
};

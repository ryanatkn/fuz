/**
 * Custom package generator with full TypeScript analysis
 *
 * Generates enhanced package.json and src.json with rich metadata:
 * - JSDoc/TSDoc comments
 * - Full type signatures
 * - Source code locations
 * - Parameter information
 * - Usage examples
 * - Dependency graphs
 *
 * @see src/lib/enhanced_declarations.ts for type definitions
 * @see src/lib/ts_helpers.ts for TypeScript analysis helpers
 */

import type {Gen} from '@ryanatkn/gro';
import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import ts from 'typescript';
import {readFileSync} from 'node:fs';

import type {
	Enhanced_Declaration,
	Enhanced_Module,
	Enhanced_Src_Json,
} from '$lib/enhanced_declarations.js';
import {
	create_ts_program,
	extract_imports,
	extract_module_comment,
	infer_declaration_kind,
	extract_jsdoc,
	extract_function_info,
	extract_type_info,
	extract_class_info,
	extract_variable_info,
	is_exported,
} from '$lib/ts_helpers.js';
import {analyze_svelte_component} from '$lib/svelte_helpers.js';

export const gen: Gen = async ({log, filer}) => {
	log.info('Generating package metadata with full TypeScript analysis...');

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
	const program = create_ts_program(log);
	if (!program) {
		return create_minimal_output(package_json);
	}

	const checker = program.getTypeChecker();

	// Get source files from filer
	log.info(`Filer has ${filer.files.size} files total`);

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
			else if (/\.svelte$/.test(id) && svelte2tsx) {
				source_disknodes.push(disknode);
			}
		}
	}

	log.info(`Found ${source_disknodes.length} source files to analyze`);

	if (source_disknodes.length === 0) {
		log.warn('No source files found, falling back to minimal output');
		return create_minimal_output(package_json);
	}

	// Sort for deterministic output (stable alphabetical module ordering)
	source_disknodes.sort((a, b) => a.id.localeCompare(b.id));

	// Build enhanced src.json
	const enhanced_src_json: Enhanced_Src_Json = {
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

			log.info(`Analyzing: ${module_path}`);

			// Handle Svelte files separately (before trying to get TypeScript source file)
			if (module_path.endsWith('.svelte')) {
				const enhanced_module: Enhanced_Module = {
					path: module_path,
					declarations: [],
					imports: [],
				};

				// Use svelte2tsx to transform Svelte component to TSX for analysis
				if (svelte2tsx) {
					try {
						const svelte_source = readFileSync(source_id, 'utf-8');

						// Check if component uses TypeScript
						const is_ts_file = svelte_source.includes('lang="ts"');

						// Transform Svelte to TSX
						const tsx_result = svelte2tsx(svelte_source, {
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
						const enhanced_decl = analyze_svelte_component(
							tsx_result.code,
							temp_source,
							checker,
							component_name,
						);

						enhanced_module.declarations!.push(enhanced_decl);
					} catch (err) {
						log.error(`Failed to analyze Svelte component ${module_path}:`, err);
						// Fallback to basic component declaration
						enhanced_module.declarations!.push({
							name: module_path.replace(/^.*\//, '').replace(/\.svelte$/, ''),
							kind: 'component',
						});
					}
				} else {
					// Fallback: just mark as component without detailed analysis
					enhanced_module.declarations!.push({
						name: module_path.replace(/^.*\//, '').replace(/\.svelte$/, ''),
						kind: 'component',
					});
				}

				enhanced_src_json.modules![module_key] = enhanced_module;
				continue; // Skip the TypeScript processing below
			}

			// For TypeScript/JavaScript files, get the source file from the program
			const source_file = program.getSourceFile(source_id);
			if (!source_file) {
				log.warn(`Could not get source file: ${source_id}`);
				continue;
			}

			const enhanced_module: Enhanced_Module = {
				path: module_path,
				declarations: [],
				imports: extract_imports(source_file),
			};

			// Extract module-level comment
			const module_comment = extract_module_comment(source_file);
			if (module_comment) {
				enhanced_module.module_comment = module_comment;
			}

			// Extract declarations based on file type
			if (module_path.endsWith('.ts') || module_path.endsWith('.js')) {
				// TypeScript/JavaScript files - extract all exports
				const symbol = checker.getSymbolAtLocation(source_file);
				if (symbol) {
					const exports = checker.getExportsOfModule(symbol);
					for (const export_symbol of exports) {
						const enhanced_decl = enhance_declaration(export_symbol, source_file, checker, log);
						enhanced_module.declarations!.push(enhanced_decl);
					}
				}
			}

			enhanced_src_json.modules![module_key] = enhanced_module;
		} catch (err) {
			log.error(`Failed to analyze ${disknode.id}:`, err);
			// Continue with next module
		}
	}

	// Sort modules alphabetically for deterministic output and cleaner diffs
	if (enhanced_src_json.modules) {
		const sorted_modules: Record<string, Enhanced_Module> = {};
		for (const key of Object.keys(enhanced_src_json.modules).sort()) {
			sorted_modules[key] = enhanced_src_json.modules[key]!;
		}
		enhanced_src_json.modules = sorted_modules;
	}

	// Compute imported_by relationships
	compute_imported_by(enhanced_src_json);

	log.info('Package metadata generation complete');

	return {
		content: generate_package_ts(package_json, enhanced_src_json),
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
 * Create minimal output when TypeScript analysis unavailable
 */
const create_minimal_output = (package_json: Package_Json) => {
	const minimal_src_json: Enhanced_Src_Json = {
		name: package_json.name,
		version: package_json.version,
		modules: {},
	};
	return {
		content: generate_package_ts(package_json, minimal_src_json),
	};
};

/**
 * Enhance a single declaration with rich metadata
 */
const enhance_declaration = (
	symbol: ts.Symbol,
	source_file: ts.SourceFile,
	checker: ts.TypeChecker,
	log: any,
): Enhanced_Declaration => {
	const name = symbol.name;
	const enhanced: Enhanced_Declaration = {
		name,
		kind: null,
	};

	try {
		const decl_node = symbol.valueDeclaration || symbol.declarations?.[0];
		if (!decl_node) {
			return enhanced;
		}

		// Determine kind
		enhanced.kind = infer_declaration_kind(symbol, decl_node);

		// Extract JSDoc
		const jsdoc = extract_jsdoc(decl_node, source_file);
		if (jsdoc) {
			enhanced.doc_comment = jsdoc.full_text;
			enhanced.summary = jsdoc.summary;
			enhanced.examples = jsdoc.examples;
			enhanced.deprecated_message = jsdoc.deprecated_message;
			enhanced.see_also = jsdoc.see_also;
		}

		// Extract source location
		const start = decl_node.getStart(source_file);
		const end = decl_node.getEnd();
		const start_pos = source_file.getLineAndCharacterOfPosition(start);
		const end_pos = source_file.getLineAndCharacterOfPosition(end);

		enhanced.source_location = {
			line: start_pos.line + 1,
			column: start_pos.character,
			end_line: end_pos.line + 1,
			end_column: end_pos.character,
		};

		// Extract type-specific info
		if (enhanced.kind === 'function') {
			extract_function_info(decl_node, symbol, checker, enhanced, jsdoc);
		} else if (enhanced.kind === 'type') {
			extract_type_info(decl_node, symbol, checker, enhanced);
		} else if (enhanced.kind === 'class') {
			extract_class_info(decl_node, symbol, checker, enhanced);
		} else if (enhanced.kind === 'variable') {
			extract_variable_info(decl_node, symbol, checker, enhanced);
		}

		enhanced.exported = is_exported(decl_node);
	} catch (err) {
		log.error(`Error enhancing ${name}:`, err);
	}

	return enhanced;
};

/**
 * Compute imported_by relationships
 */
const compute_imported_by = (src_json: Enhanced_Src_Json): void => {
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
const generate_package_ts = (package_json: Package_Json, src_json: Enhanced_Src_Json): string => {
	return `// Generated by package.gen.ts
// Do not edit directly - regenerated on build

import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Enhanced_Src_Json} from '$lib/enhanced_declarations.js';

export const package_json: Package_Json = ${JSON.stringify(package_json, null, '\t')};

export const src_json: Enhanced_Src_Json = ${JSON.stringify(src_json, null, '\t')};
`;
};

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
 * @see src/lib/package_gen_helpers.ts for buildtime-only helpers
 * @see src/lib/tsdoc_helpers.ts for JSDoc/TSDoc parsing
 * @see src/lib/ts_helpers.ts for TypeScript analysis
 * @see src/lib/svelte_helpers.ts for Svelte component analysis
 */

import type {Gen} from '@ryanatkn/gro';
import {load_package_json} from '@ryanatkn/gro/package_json.js';

import type {Src_Json} from '$lib/src_json.js';
import {ts_create_program} from '$lib/ts_helpers.js';
import {module_extract_path, module_is_svelte} from '$lib/module_helpers.js';
import {
	package_gen_collect_source_files,
	package_gen_sort_modules,
	package_gen_validate_no_duplicates,
	package_gen_generate_ts,
	package_gen_analyze_svelte_file,
	package_gen_analyze_typescript_file,
} from '$lib/package_gen_helpers.js';

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
	const source_disknodes = package_gen_collect_source_files(filer, log);

	// Build src.json with array-based modules
	const src_json: Src_Json = {
		name: package_json.name,
		version: package_json.version,
		modules: [],
	};

	for (const disknode of source_disknodes) {
		const source_id = disknode.id;
		const module_path = module_extract_path(source_id);
		const is_svelte = module_is_svelte(module_path);

		// Handle Svelte files separately (before trying to get TypeScript source file)
		if (is_svelte) {
			const mod = package_gen_analyze_svelte_file(source_id, module_path, checker);
			src_json.modules!.push(mod);
		} else {
			// For TypeScript/JS files, get the source file from the program
			const source_file = program.getSourceFile(source_id);
			if (!source_file) {
				log.warn(`Could not get source file: ${source_id}`);
				continue;
			}

			// May throw, which we want to see
			const mod = package_gen_analyze_typescript_file(source_file, module_path, checker);
			src_json.modules!.push(mod);
		}
	}

	// Sort modules alphabetically for deterministic output and cleaner diffs
	src_json.modules = src_json.modules ? package_gen_sort_modules(src_json.modules) : undefined;

	// Validate no duplicate identifier names across modules
	package_gen_validate_no_duplicates(src_json, log);

	log.info('package metadata generation complete');

	return {
		content: package_gen_generate_ts(package_json, src_json),
	};
};

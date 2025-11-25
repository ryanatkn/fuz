/**
 * Module path and metadata helpers.
 *
 * Provides utilities for working with source module paths, file types,
 * and import relationships in the package generation system.
 *
 * All functions are prefixed with `module_` for clarity.
 */

/**
 * Configuration for module source detection.
 *
 * Allows customizing which paths are considered source modules,
 * useful for projects with non-standard directory structures.
 */
export interface ModuleSourceOptions {
	/** Source directory paths to include. @default ['/src/lib/'] */
	source_paths?: Array<string>;
	/** File extensions to analyze. @default ['.ts', '.js', '.svelte'] */
	extensions?: Array<string>;
	/** Patterns to exclude (matched against full path). @default [/\.test\.ts$/] */
	exclude_patterns?: Array<RegExp>;
}

/**
 * Default options for module source detection.
 */
export const MODULE_SOURCE_DEFAULTS: Required<ModuleSourceOptions> = {
	source_paths: ['/src/lib/'],
	extensions: ['.ts', '.js', '.svelte'],
	exclude_patterns: [/\.test\.ts$/],
};

/**
 * Extract module path relative to src/lib from absolute source ID.
 *
 * @example
 * module_extract_path('/home/user/project/src/lib/foo.ts') // => 'foo.ts'
 * module_extract_path('/home/user/project/src/lib/nested/bar.svelte') // => 'nested/bar.svelte'
 */
export const module_extract_path = (source_id: string): string => {
	const lib_index = source_id.indexOf('/src/lib/');
	return lib_index !== -1 ? source_id.substring(lib_index + 9) : source_id;
};

/**
 * Extract component name from a Svelte module path.
 *
 * @example
 * module_get_component_name('Alert.svelte') // => 'Alert'
 * module_get_component_name('components/Button.svelte') // => 'Button'
 */
export const module_get_component_name = (module_path: string): string =>
	module_path.replace(/^.*\//, '').replace(/\.svelte$/, '');

/**
 * Convert module path to module key format (with ./ prefix).
 *
 * @example
 * module_get_key('foo.ts') // => './foo.ts'
 */
export const module_get_key = (module_path: string): string => `./${module_path}`;

export const module_is_typescript = (path: string): boolean =>
	path.endsWith('.ts') || path.endsWith('.js'); // hackyy but fine?

export const module_is_svelte = (path: string): boolean => path.endsWith('.svelte');

export const module_is_css = (path: string): boolean => path.endsWith('.css');

export const module_is_json = (path: string): boolean => path.endsWith('.json');

export const module_is_test = (path: string): boolean => path.endsWith('.test.ts');

/**
 * Check if a path matches source criteria.
 *
 * Checks source directory paths, file extensions, and exclusion patterns.
 * Uses defaults if no options provided.
 *
 * Rejects nested repo paths by ensuring the first `/src/` leads to the source directory
 * (e.g. rejects `/src/fixtures/repos/foo/src/lib/index.ts` because `/src/fixtures/` ≠ `/src/lib/`).
 *
 * @param path Full path to check
 * @param options Configuration options (uses defaults if not provided)
 * @returns True if the path matches all criteria
 */
export const module_matches_source = (path: string, options?: ModuleSourceOptions): boolean => {
	const opts = {...MODULE_SOURCE_DEFAULTS, ...options};

	// Check if path is in one of the source directories
	// The first /src/ in the path must lead directly to the source directory
	// This rejects nested repos like /src/fixtures/repos/foo/src/lib/
	const in_source_dir = opts.source_paths.some((source_path) => {
		if (!path.includes(source_path)) return false;
		// Find the first /src/ and verify it's part of the source_path
		const first_src_index = path.indexOf('/src/');
		if (first_src_index === -1) return false;
		// The source_path should start at that position
		return path.substring(first_src_index).startsWith(source_path);
	});
	if (!in_source_dir) return false;

	// Check if extension matches
	const has_valid_extension = opts.extensions.some((ext) => path.endsWith(ext));
	if (!has_valid_extension) return false;

	// Check exclusion patterns
	const is_excluded = opts.exclude_patterns.some((pattern) => pattern.test(path));
	if (is_excluded) return false;

	return true;
};

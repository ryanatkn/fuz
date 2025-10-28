/**
 * Module path and metadata helpers.
 *
 * Provides utilities for working with source module paths, file types,
 * and import relationships in the package generation system.
 *
 * All functions are prefixed with `module_` for clarity.
 */

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
 * Normalize module name by removing file extensions.
 *
 * @example
 * module_normalize_name('foo.ts') // => 'foo'
 * module_normalize_name('bar.svelte') // => 'bar'
 */
export const module_normalize_name = (path: string): string =>
	path.replace(/\.(ts|js|svelte)$/, '');

/**
 * Convert module path to module key format (with ./ prefix).
 *
 * @example
 * module_get_key('foo.ts') // => './foo.ts'
 */
export const module_get_key = (module_path: string): string => `./${module_path}`;

/**
 * Check if path is a TypeScript or JS file.
 */
export const module_is_typescript = (path: string): boolean =>
	path.endsWith('.ts') || path.endsWith('.js');

export const module_is_svelte = (path: string): boolean => path.endsWith('.svelte');

export const module_is_test = (path: string): boolean => path.endsWith('.test.ts');

/**
 * Check if ID is a source file in /src/lib/ (excluding tests).
 */
export const module_is_source = (id: string): boolean =>
	id.includes('/src/lib/') && !module_is_test(id);

/**
 * Check if an import specifier matches a module name.
 *
 * Handles both relative (./) and $lib/ import styles.
 *
 * @example
 * module_matches_import('./foo', 'foo') // => true
 * module_matches_import('$lib/foo', 'foo') // => true
 * module_matches_import('$lib/nested/bar', 'bar') // => true
 */
export const module_matches_import = (import_spec: string, module_name: string): boolean => {
	if (import_spec.startsWith('./') && import_spec.includes(module_name)) {
		return true;
	}
	if (import_spec.startsWith('$lib/')) {
		const import_path = import_spec.replace('$lib/', '');
		return import_path.includes(module_name);
	}
	return false;
};

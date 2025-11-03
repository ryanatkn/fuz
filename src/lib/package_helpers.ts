import {strip_end, strip_start} from '@ryanatkn/belt/string.js';
import type {Package_Json} from '@ryanatkn/belt/package_json.js';

/**
 * Parse repository URL from package.json format.
 * Strips 'git+', '.git', and trailing slashes.
 */
export const parse_repo_url = (repository: Package_Json['repository']): string | null => {
	if (!repository) return null;
	const url = typeof repository === 'string' ? repository : repository.url;
	if (!url) return null;
	return strip_end(strip_start(strip_end(url, '.git'), 'git+'), '/');
};

/**
 * Extract repository name without scope from package name.
 * Examples: '@org/pkg' -> 'pkg', 'pkg' -> 'pkg'
 */
export const parse_repo_name = (name: string): string => {
	if (name[0] === '@') {
		const parts = name.split('/');
		if (parts.length < 2) {
			throw new Error(`invalid scoped package name: "${name}" (expected format: @org/package)`);
		}
		return parts[1]!;
	}
	return name;
};

/**
 * Build GitHub file URL for a repository.
 */
export const url_github_file = (
	repo_url: string,
	file_path: string,
	line?: number,
): string => {
	const clean_path = file_path.replace(/^\.\//, '');
	const base = `${repo_url}/blob/main/${clean_path}`;
	return line ? `${base}#L${line}` : base;
};

/**
 * Build npm package URL.
 */
export const url_npm_package = (package_name: string): string =>
	'https://www.npmjs.com/package/' + package_name;

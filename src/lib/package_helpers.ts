import {ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';
import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import {resolve} from '$app/paths';

/**
 * Parse repository URL from package.json format.
 * Strips 'git+', '.git', and trailing slashes.
 */
export const repo_url_parse = (repository: Package_Json['repository']): string | null => {
	if (!repository) return null;
	const url = typeof repository === 'string' ? repository : repository.url;
	if (!url) return null;
	return strip_end(strip_start(strip_end(url, '.git'), 'git+'), '/');
};

/**
 * Extract repository name without scope from package name.
 * Examples: '@org/pkg' -> 'pkg', 'pkg' -> 'pkg'
 */
export const repo_name_parse = (name: string): string => {
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
export const github_file_url = (repo_url: string, file_path: string, line?: number): string => {
	const clean_path = file_path.replace(/^\.\//, '');
	const base = `${repo_url}/blob/main/${clean_path}`;
	return line ? `${base}#L${line}` : base;
};

/**
 * Build npm package URL.
 */
export const npm_package_url = (package_name: string): string =>
	'https://www.npmjs.com/package/' + package_name;

/**
 * Build project-relative API documentation URL with hash anchor (calls resolve internally).
 */
export const api_doc_url = (identifier_name: string): string =>
	resolve(`/docs/api#${encodeURIComponent(identifier_name)}` as any);

/**
 * Build full API documentation URL with domain and hash anchor.
 */
export const api_doc_url_full = (homepage: string, identifier_name: string): string =>
	`${homepage}/docs/api#${encodeURIComponent(identifier_name)}`;

/**
 * Parse GitHub owner/org name from repository URL.
 * Example: 'https://github.com/ryanatkn/fuz' -> 'ryanatkn'
 */
export const github_owner_parse = (repo_url: string): string | null => {
	const stripped = strip_start(repo_url, 'https://github.com/');
	const parts = stripped.split('/');
	return parts[0] || null;
};

/**
 * Build GitHub organization URL from repo URL and repo name.
 * Example: ('https://github.com/ryanatkn/fuz', 'fuz') -> 'https://github.com/ryanatkn'
 */
export const github_org_url = (repo_url: string, repo_name: string): string | null => {
	return repo_url.endsWith('/' + repo_name) ? strip_end(repo_url, '/' + repo_name) : null;
};

/**
 * Check if a package is published to npm.
 * Published packages are not private, have exports, and have a version beyond 0.0.1.
 */
export const package_is_published = (package_json: Package_Json): boolean => {
	return !package_json.private && !!package_json.exports && package_json.version !== '0.0.1';
};

/**
 * Build .well-known URL for package metadata files.
 * Example: ('https://fuz.dev/', 'src.json') -> 'https://fuz.dev/.well-known/src.json'
 */
export const well_known_url = (homepage_url: string, filename: string): string => {
	return `${ensure_end(homepage_url, '/')}.well-known/${filename}`;
};

/**
 * Build package logo URL with favicon.png fallback.
 * Returns null if no homepage URL is provided.
 */
export const package_logo_url = (
	homepage_url: string | null,
	logo_path?: string,
): string | null => {
	if (!homepage_url) return null;
	const path = logo_path ? strip_start(logo_path, '/') : 'favicon.png';
	return ensure_end(homepage_url, '/') + path;
};

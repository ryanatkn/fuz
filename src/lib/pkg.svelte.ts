import type {Package_Json} from '@ryanatkn/belt/package_json.js';

import {create_context} from '$lib/context_helpers.js';
import type {Src_Json} from '$lib/src_json.js';
import {Identifier} from '$lib/identifier.svelte.js';
import {Module} from '$lib/module.svelte.js';
import {
	github_file_url,
	github_org_url,
	github_owner_parse,
	npm_package_url,
	package_is_published,
	package_logo_url,
	repo_name_parse,
	repo_url_parse,
} from '$lib/package_helpers.js';

/**
 * Rich runtime package representation of a package.
 *
 * Wraps minimal serializable data (package_json, src_json) with computed properties
 * and provides the root of the API documentation hierarchy:
 * Pkg -> modules -> identifiers
 *
 * All computed properties are automatically cached via Svelte's $derived mechanism,
 * including the identifier_map which enables O(1) lookups by name.
 *
 * @see module.svelte.ts for Module class
 * @see identifier.svelte.ts for Identifier class
 */
export class Pkg {
	readonly package_json: Package_Json = $state.raw()!;
	readonly src_json: Src_Json = $state.raw()!;

	/**
	 * Package name (e.g., '@ryanatkn/fuz').
	 */
	name = $derived(this.package_json.name);

	/**
	 * Repository name without scope (e.g., 'fuz').
	 */
	repo_name = $derived(repo_name_parse(this.package_json.name));

	// TODO this is not optional, but is being treated as such -- maybe rely on schema validation upstream? or graceful fallback?
	/**
	 * GitHub repository URL (e.g., 'https://github.com/ryanatkn/fuz').
	 */
	repo_url = $derived(
		(() => {
			const url = repo_url_parse(this.package_json.repository);
			if (!url) {
				throw Error('failed to parse pkg - `repo_url` is required in package_json');
			}
			return url;
		})(),
	);

	/**
	 * GitHub owner/org name (e.g., 'ryanatkn').
	 */
	owner_name = $derived(this.repo_url ? github_owner_parse(this.repo_url) : null);

	/**
	 * Homepage URL (e.g., 'https://www.fuz.dev/').
	 */
	homepage_url = $derived(this.package_json.homepage ?? null);

	/**
	 * Logo URL (falls back to favicon.png).
	 */
	logo_url = $derived(package_logo_url(this.homepage_url, this.package_json.logo));

	/**
	 * Logo alt text.
	 */
	logo_alt = $derived(this.package_json.logo_alt ?? `logo for ${this.repo_name}`);

	/**
	 * Whether package is published to npm.
	 */
	published = $derived(package_is_published(this.package_json));

	/**
	 * npm package URL (if published).
	 */
	npm_url = $derived(this.published ? npm_package_url(this.package_json.name) : null);

	/**
	 * Changelog URL (if published).
	 */
	changelog_url = $derived(
		this.published && this.repo_url ? github_file_url(this.repo_url, 'CHANGELOG.md') : null,
	);

	/**
	 * Organization URL (e.g., 'https://github.com/ryanatkn').
	 */
	org_url = $derived(github_org_url(this.repo_url, this.repo_name));

	/**
	 * All modules as rich Module instances (cached via $derived).
	 */
	modules = $derived(
		this.src_json.modules
			? this.src_json.modules.map((module_json) => new Module(this, module_json))
			: [],
	);

	/**
	 * All modules sorted alphabetically by path (cached via $derived).
	 */
	modules_sorted = $derived([...this.modules].sort((a, b) => a.path.localeCompare(b.path)));

	/**
	 * All identifiers across all modules as a flat array (cached via $derived).
	 */
	identifiers = $derived(this.modules.flatMap((module) => module.identifiers));

	/**
	 * Identifier lookup map by name (cached via $derived).
	 * Provides O(1) lookup after first access.
	 */
	identifier_map = $derived(new Map(this.identifiers.map((id) => [id.name, id])));

	constructor(package_json: Package_Json, src_json: Src_Json) {
		this.package_json = package_json;
		this.src_json = src_json;
	}

	/**
	 * Look up an identifier by name.
	 */
	lookup_identifier(name: string): Identifier | undefined {
		return this.identifier_map.get(name);
	}

	/**
	 * Check if an identifier exists.
	 */
	has_identifier(name: string): boolean {
		return this.identifier_map.has(name);
	}

	/**
	 * Look up a module by its canonical path.
	 */
	lookup_module(path: string): Module | undefined {
		return this.modules.find((m) => m.path === path);
	}

	/**
	 * Search identifiers by query string.
	 */
	search_identifiers(query: string): Array<Identifier> {
		if (!query.trim()) return [];

		const all = this.identifiers;
		const lower_query = query.toLowerCase();

		// score and filter
		const results = all
			.map((identifier) => {
				const name_lower = identifier.name.toLowerCase();

				// exact match
				if (name_lower === lower_query) return {identifier, score: 100};

				// starts with
				if (name_lower.startsWith(lower_query)) return {identifier, score: 80};

				// contains
				if (name_lower.includes(lower_query)) return {identifier, score: 60};

				// fuzzy match (simple version - contains all characters in order)
				let query_idx = 0;
				for (const char of name_lower) {
					if (char === lower_query[query_idx]) {
						query_idx++;
						if (query_idx === lower_query.length) {
							return {identifier, score: 40};
						}
					}
				}

				return null;
			})
			.filter((r) => r !== null)
			.sort((a, b) => b.score - a.score)
			.map((r) => r.identifier);

		return results;
	}
}

/**
 * Convenience factory function for creating Pkg instances
 * (kept for backward compatibility during migration)
 */
export const parse_pkg = (package_json: Package_Json, src_json: Src_Json): Pkg => {
	return new Pkg(package_json, src_json);
};

export const pkg_context = create_context<Pkg>();

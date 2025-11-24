import type {Package_Json} from '@ryanatkn/belt/package_json.js';
import type {Src_Json} from '@ryanatkn/belt/src_json.js';

import {create_context} from './context_helpers.js';
import {Identifier} from './identifier.svelte.js';
import {Module} from './module.svelte.js';
import {
	url_github_file,
	url_github_org,
	github_owner_parse,
	url_npm_package,
	package_is_published,
	url_package_logo,
	repo_name_parse,
	repo_url_parse,
} from './package_helpers.js';

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
	logo_url = $derived(url_package_logo(this.homepage_url, this.package_json.logo));

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
	npm_url = $derived(this.published ? url_npm_package(this.package_json.name) : null);

	/**
	 * Changelog URL (if published).
	 */
	changelog_url = $derived(
		this.published && this.repo_url ? url_github_file(this.repo_url, 'CHANGELOG.md') : null,
	);

	/**
	 * Organization URL (e.g., 'https://github.com/ryanatkn').
	 */
	org_url = $derived(url_github_org(this.repo_url, this.repo_name));

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

	// TODO toJSON as Pkg_Json but see that overlap with belt's Pkg_Json

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
	 * Search identifiers by query string with multi-term AND logic.
	 * Searches across identifier name, kind, and module path.
	 * Multiple space-separated terms match only if ALL terms match (each term can match any field).
	 */
	search_identifiers(query: string): Array<Identifier> {
		return pkg_search_identifiers(this.identifiers, query);
	}
}

export const pkg_context = create_context<Pkg>();

/**
 * Search identifiers by query string with multi-term AND logic.
 * Searches across identifier name, kind, and module path.
 * Multiple space-separated terms match only if ALL terms match (each term can match any field).
 */
const pkg_search_identifiers = (
	identifiers: Array<Identifier>,
	query: string,
): Array<Identifier> => {
	if (!query.trim()) return [];

	const terms = query.trim().toLowerCase().split(/\s+/);

	// score and filter with AND logic
	const results = identifiers
		.map((identifier) => {
			let total_score = 0;

			// check that ALL terms match (AND logic)
			for (const term of terms) {
				const name_score = pkg_score_match(identifier.name, term);
				const kind_score = pkg_score_match(identifier.kind, term);
				const module_score = pkg_score_match(identifier.module_path, term);

				const term_best = Math.max(name_score, kind_score, module_score);

				// if this term doesn't match any field, exclude this identifier
				if (term_best === 0) {
					return null;
				}

				// accumulate scores across all terms
				total_score += term_best;
			}

			return {identifier, score: total_score};
		})
		.filter((r) => r !== null)
		.sort((a, b) => b.score - a.score || a.identifier.name.localeCompare(b.identifier.name))
		.map((r) => r.identifier);

	return results;
};

/**
 * Score a search term match against a field value.
 * Returns a score from 0 (no match) to 100 (exact match).
 */
const pkg_score_match = (field_value: string, term: string): number => {
	const field_lower = field_value.toLowerCase();

	// exact match
	if (field_lower === term) return 100;

	// starts with
	if (field_lower.startsWith(term)) return 80;

	// contains
	if (field_lower.includes(term)) return 60;

	// fuzzy match (simple version - contains all characters in order)
	let term_idx = 0;
	for (const char of field_lower) {
		if (char === term[term_idx]) {
			term_idx++;
			if (term_idx === term.length) {
				return 40;
			}
		}
	}

	return 0;
};

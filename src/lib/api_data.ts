/**
 * API documentation data helpers
 * Functions for looking up and searching identifiers using rich Module/Identifier classes
 */

import {Identifier} from '$lib/identifier.svelte.js';
import {Module} from '$lib/module.svelte.js';
import {pkg_context} from '$lib/pkg.js';

/**
 * Get all modules as Module instances
 */
export const get_all_modules = (): Array<Module> => {
	const pkg = pkg_context.get();
	if (!pkg.src_json.modules) return [];
	return pkg.src_json.modules.map((src_module) => new Module(pkg, src_module));
};

/**
 * Get all identifiers as a flat list of Identifier instances
 */
export const get_all_identifiers = (): Array<Identifier> => {
	const modules = get_all_modules();
	return modules.flatMap((module) => module.identifiers);
};

/**
 * Look up an identifier by name (flat namespace)
 * Returns an Identifier instance if found
 */
export const lookup_identifier_by_name = (name: string): Identifier | undefined => {
	const identifiers = get_all_identifiers();
	return identifiers.find((id) => id.name === name);
};

/**
 * Check if an identifier is documented
 */
export const is_known_identifier = (name: string): boolean => {
	return lookup_identifier_by_name(name) !== undefined;
};

/**
 * Search identifiers by name (fuzzy match)
 * Returns Identifier instances sorted by relevance
 */
export const search_identifiers = (query: string): Array<Identifier> => {
	if (!query.trim()) return [];

	const all = get_all_identifiers();
	const lower_query = query.toLowerCase();

	// Score and filter
	const results = all
		.map((identifier) => {
			const name_lower = identifier.name.toLowerCase();

			// Exact match
			if (name_lower === lower_query) return {identifier, score: 100};

			// Starts with
			if (name_lower.startsWith(lower_query)) return {identifier, score: 80};

			// Contains
			if (name_lower.includes(lower_query)) return {identifier, score: 60};

			// Fuzzy match (simple version - contains all characters in order)
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
};

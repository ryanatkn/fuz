/**
 * API documentation data helpers
 * Functions for looking up and searching declarations
 */

import {pkg_context} from '$lib/pkg.js';
import type {Src_Module_Declaration, Src_Module} from '$lib/src_json.js';

/**
 * Look up a declaration by name (flat namespace)
 */
export const lookup_declaration_by_name = (
	name: string,
): {decl: Src_Module_Declaration; module_path: string; module: Src_Module} | undefined => {
	const pkg = pkg_context.get();
	if (!pkg.src_json.modules) return undefined;

	for (const [module_path, module] of Object.entries(pkg.src_json.modules)) {
		if (!module.declarations) continue;

		const decl = module.declarations.find((d) => d.name === name);
		if (decl) {
			return {decl, module_path, module};
		}
	}

	return undefined;
};

/**
 * Get all declarations as a flat list
 */
export const get_all_declarations = (): Array<{
	module_path: string;
	module: Src_Module;
	decl: Src_Module_Declaration;
}> => {
	const pkg = pkg_context.get();
	const all: Array<{module_path: string; module: Src_Module; decl: Src_Module_Declaration}> = [];

	if (!pkg.src_json.modules) return all;

	for (const [module_path, module] of Object.entries(pkg.src_json.modules)) {
		if (!module.declarations) continue;

		for (const decl of module.declarations) {
			// Skip default exports
			if (decl.name === 'default') continue;

			all.push({module_path, module, decl});
		}
	}

	return all;
};

/**
 * Check if an identifier is documented
 */
export const is_known_identifier = (name: string): boolean => {
	return lookup_declaration_by_name(name) !== undefined;
};

/**
 * Search declarations by name (fuzzy match)
 */
export const search_declarations = (
	query: string,
): Array<{module_path: string; module: Src_Module; decl: Src_Module_Declaration}> => {
	if (!query.trim()) return [];

	const all = get_all_declarations();
	const lower_query = query.toLowerCase();

	// Score and filter
	const results = all
		.map((item) => {
			const name_lower = item.decl.name.toLowerCase();

			// Exact match
			if (name_lower === lower_query) return {item, score: 100};

			// Starts with
			if (name_lower.startsWith(lower_query)) return {item, score: 80};

			// Contains
			if (name_lower.includes(lower_query)) return {item, score: 60};

			// Fuzzy match (simple version - contains all characters in order)
			let query_idx = 0;
			for (const char of name_lower) {
				if (char === lower_query[query_idx]) {
					query_idx++;
					if (query_idx === lower_query.length) {
						return {item, score: 40};
					}
				}
			}

			return null;
		})
		.filter((r) => r !== null)
		.sort((a, b) => b.score - a.score)
		.map((r) => r.item);

	return results;
};

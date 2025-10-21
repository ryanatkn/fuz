import {src_json} from '$routes/package.js';
import type {Enhanced_Declaration, Enhanced_Module} from '$lib/enhanced_declarations.js';

/**
 * Look up a declaration by module and name
 */
export const lookup_declaration = (
	module: string,
	name: string,
): Enhanced_Declaration | undefined => {
	// Try with and without extension
	const module_keys = [`./${module}`, `./${module}.ts`, `./${module}.js`, `./${module}.svelte`];

	for (const key of module_keys) {
		const mod = src_json.modules?.[key];
		if (mod?.declarations) {
			const decl = mod.declarations.find((d) => d.name === name);
			if (decl) return decl;
		}
	}

	return undefined;
};

/**
 * Get module by key
 */
export const get_module = (module: string): Enhanced_Module | undefined => {
	// Try with and without extension
	const module_keys = [`./${module}`, `./${module}.ts`, `./${module}.js`, `./${module}.svelte`];

	for (const key of module_keys) {
		const mod = src_json.modules?.[key];
		if (mod) return mod;
	}

	return undefined;
};

/**
 * Get all declarations as a flat list
 */
export const get_all_declarations = (): Array<{
	module_path: string;
	module: Enhanced_Module;
	decl: Enhanced_Declaration;
}> => {
	const all: Array<{module_path: string; module: Enhanced_Module; decl: Enhanced_Declaration}> = [];

	if (!src_json.modules) return all;

	for (const [module_path, module] of Object.entries(src_json.modules)) {
		if (!module.declarations) continue;

		for (const decl of module.declarations) {
			// Skip default exports (component exports)
			if (decl.name === 'default') continue;

			all.push({module_path, module, decl});
		}
	}

	return all;
};

/**
 * Get all modules
 */
export const get_all_modules = (): Array<{
	module_path: string;
	module: Enhanced_Module;
}> => {
	const all: Array<{module_path: string; module: Enhanced_Module}> = [];

	if (!src_json.modules) return all;

	for (const [module_path, module] of Object.entries(src_json.modules)) {
		all.push({module_path, module});
	}

	return all;
};

/**
 * Get dependencies (modules this module imports)
 */
export const get_dependencies = (module_path: string): Array<string> => {
	const mod = src_json.modules?.[module_path];
	return mod?.imports ?? [];
};

/**
 * Get dependents (modules that import this module)
 */
export const get_dependents = (module_path: string): Array<string> => {
	const mod = src_json.modules?.[module_path];
	return mod?.imported_by ?? [];
};

/**
 * Search declarations by name (fuzzy match)
 */
export const search_declarations = (
	query: string,
): Array<{module_path: string; module: Enhanced_Module; decl: Enhanced_Declaration}> => {
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

import type {Declaration} from './declaration.svelte.js';
import type {Library} from './library.svelte.js';

export interface DeclarationSearchState {
	query: string;
	all: Array<Declaration>;
	filtered: Array<Declaration>;
}

/**
 * Creates search state for the API index page (all declarations across all modules).
 */
export const create_declaration_search = (library: Library): DeclarationSearchState => {
	let query = $state('');

	const all = $derived(library.declarations);

	const filtered = $derived.by(() => {
		const items = query.trim() ? library.search_declarations(query) : all;
		return items.sort((a, b) => a.name.localeCompare(b.name));
	});

	return {
		get query() {
			return query;
		},
		set query(v: string) {
			query = v;
		},
		get all() {
			return all;
		},
		get filtered() {
			return filtered;
		},
	};
};

/**
 * Creates search state for module-specific declaration lists.
 */
export const create_module_declaration_search = (
	declarations: Array<Declaration>,
): DeclarationSearchState => {
	let query = $state('');

	const all = $derived(declarations);

	const filtered = $derived.by(() => {
		const trimmed_query = query.trim();
		if (!trimmed_query) return all.sort((a, b) => a.name.localeCompare(b.name));

		const terms = trimmed_query.toLowerCase().split(/\s+/);

		const items = all.filter((d) => {
			const name_lower = d.name.toLowerCase();
			const kind_lower = d.kind.toLowerCase();
			const module_path_lower = d.module_path.toLowerCase();

			return terms.every(
				(term) =>
					name_lower.includes(term) ||
					kind_lower.includes(term) ||
					module_path_lower.includes(term),
			);
		});

		return items.sort((a, b) => a.name.localeCompare(b.name));
	});

	return {
		get query() {
			return query;
		},
		set query(v: string) {
			query = v;
		},
		get all() {
			return all;
		},
		get filtered() {
			return filtered;
		},
	};
};

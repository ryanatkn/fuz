import type {Identifier} from './identifier.svelte.js';
import type {Pkg} from './pkg.svelte.js';

interface IdentifierSearchState {
	query: string;
	all: Array<Identifier>;
	filtered: Array<Identifier>;
}

/**
 * Creates search state for the API index page (all identifiers across all modules).
 * Uses the pkg's built-in search method and sorts results alphabetically.
 */
export const create_identifier_search = (pkg: Pkg): IdentifierSearchState => {
	let query = $state('');

	const all = $derived(pkg.identifiers);

	const filtered = $derived.by(() => {
		const items = query.trim() ? pkg.search_identifiers(query) : all;
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
 * Creates search state for module-specific identifier lists.
 * Supports multi-term AND search (all terms must match, each term can match name/kind/module_path).
 */
export const create_module_identifier_search = (
	identifiers: Array<Identifier>,
): IdentifierSearchState => {
	let query = $state('');

	const all = $derived(identifiers);

	const filtered = $derived.by(() => {
		const trimmed_query = query.trim();
		if (!trimmed_query) return all.sort((a, b) => a.name.localeCompare(b.name));

		const terms = trimmed_query.toLowerCase().split(/\s+/);

		// filter: include identifier only if ALL terms match (each term can match any field)
		const items = all.filter((id) => {
			const name_lower = id.name.toLowerCase();
			const kind_lower = id.kind.toLowerCase();
			const module_path_lower = id.module_path.toLowerCase();

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

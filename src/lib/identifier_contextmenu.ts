import type {Identifier} from '$lib/identifier.svelte.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for an identifier.
 */
export const create_identifier_contextmenu = (
	identifier: Identifier,
): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// View source on GitHub
	if (identifier.source_url) {
		entries.push({
			snippet: 'link',
			props: {
				href: identifier.source_url,
			},
		});
	}

	return entries;
};

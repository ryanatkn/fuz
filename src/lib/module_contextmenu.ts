import type {Module} from '$lib/module.svelte.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for a module.
 */
export const create_module_contextmenu = (module: Module): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// View source on GitHub
	if (module.module_url) {
		entries.push({
			snippet: 'link',
			props: {
				href: module.module_url,
			},
		});
	}

	return entries;
};

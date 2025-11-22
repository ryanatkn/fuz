import type {Module} from './module.svelte.js';
import type {Contextmenu_Params} from './contextmenu_state.svelte.js';

// TODO @many expand contextmenus for docs

export const create_module_contextmenu = (module: Module): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// View source on GitHub
	if (module.url_github) {
		entries.push({
			snippet: 'link',
			props: {
				href: module.url_github,
			},
		});
	}

	return entries;
};

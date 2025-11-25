import type {Identifier} from './identifier.svelte.js';
import type {ContextmenuParams} from './contextmenu_state.svelte.js';

// TODO @many expand contextmenus for docs

export const create_identifier_contextmenu = (identifier: Identifier): Array<ContextmenuParams> => {
	const entries: Array<ContextmenuParams> = [];

	// View source on GitHub
	if (identifier.url_github) {
		entries.push({
			snippet: 'link',
			props: {
				href: identifier.url_github,
			},
		});
	}

	return entries;
};

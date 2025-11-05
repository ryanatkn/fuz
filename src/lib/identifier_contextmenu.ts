import type {Identifier} from '$lib/identifier.svelte.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for an identifier
 */
export const create_identifier_contextmenu = (
	identifier: Identifier,
): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// navigate to API docs
	entries.push({
		snippet: 'link',
		props: {
			href: identifier.api_url,
			icon: '📖',
		},
	});

	// copy identifier name
	entries.push({
		snippet: 'text',
		props: {
			content: `copy name: ${identifier.name}`,
			icon: '📋',
			run: async () => {
				await navigator.clipboard.writeText(identifier.name);
			},
		},
	});

	// copy import statement
	entries.push({
		snippet: 'text',
		props: {
			content: 'copy import',
			icon: '📥',
			run: async () => {
				await navigator.clipboard.writeText(identifier.import_statement);
			},
		},
	});

	// View source on GitHub
	if (identifier.source_url) {
		entries.push({
			snippet: 'link',
			props: {
				href: identifier.source_url,
				icon: '🔗',
			},
		});
	}

	// copy link to docs
	if (identifier.docs_link) {
		entries.push({
			snippet: 'text',
			props: {
				content: 'copy docs link',
				icon: '🔗',
				run: async () => {
					await navigator.clipboard.writeText(identifier.docs_link!);
				},
			},
		});
	}

	return entries;
};

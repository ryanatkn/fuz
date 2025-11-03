import {resolve} from '$app/paths';
import type {Identifier} from '$lib/identifier.svelte.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for an identifier
 */
export const create_identifier_contextmenu = (
	identifier: Identifier,
): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// Navigate to API docs
	const docs_url = resolve(identifier.api_url as any);
	entries.push({
		snippet: 'link',
		props: {
			href: docs_url,
			icon: '📖',
		},
	});

	// Copy identifier name
	entries.push({
		snippet: 'text',
		props: {
			content: `Copy name: ${identifier.name}`,
			icon: '📋',
			run: async () => {
				await navigator.clipboard.writeText(identifier.name);
			},
		},
	});

	// Copy import statement
	entries.push({
		snippet: 'text',
		props: {
			content: 'Copy import',
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

	// Copy link to docs
	if (identifier.docs_link) {
		entries.push({
			snippet: 'text',
			props: {
				content: 'Copy docs link',
				icon: '🔗',
				run: async () => {
					await navigator.clipboard.writeText(identifier.docs_link!);
				},
			},
		});
	}

	return entries;
};

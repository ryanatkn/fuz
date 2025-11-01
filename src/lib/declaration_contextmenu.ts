import {resolve} from '$app/paths';
import {generate_import_statement, type Src_Module_Declaration} from '$lib/src_json.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for a declaration
 */
export const create_declaration_contextmenu = (
	decl: Src_Module_Declaration,
	module_path: string,
	pkg_name: string,
	repo_url?: string,
	homepage_url?: string | null,
): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// Navigate to API docs
	const docs_url = resolve(`/docs/api#${encodeURIComponent(decl.name)}` as any);
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
			content: `Copy name: ${decl.name}`,
			icon: '📋',
			run: async () => {
				await navigator.clipboard.writeText(decl.name);
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
				const stmt = generate_import_statement(decl, module_path, pkg_name);
				await navigator.clipboard.writeText(stmt);
			},
		},
	});

	// View source on GitHub
	if (repo_url && decl.source_line) {
		const source_url = `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '')}#L${decl.source_line}`;
		entries.push({
			snippet: 'link',
			props: {
				href: source_url,
				icon: '🔗',
			},
		});
	}

	// Copy link to docs
	if (homepage_url) {
		entries.push({
			snippet: 'text',
			props: {
				content: 'Copy docs link',
				icon: '🔗',
				run: async () => {
					const url = `${homepage_url}/docs/api#${decl.name}`;
					await navigator.clipboard.writeText(url);
				},
			},
		});
	}

	return entries;
};

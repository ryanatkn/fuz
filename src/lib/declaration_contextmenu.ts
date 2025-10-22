import {generate_import_statement, type Enhanced_Declaration} from '$lib/enhanced_declarations.js';
import type {Contextmenu_Params} from '$lib/contextmenu_state.svelte.js';

/**
 * Create contextmenu entries for a declaration
 */
export const create_declaration_contextmenu = (
	decl: Enhanced_Declaration,
	module_path: string,
	pkg_name: string,
	repo_url?: string,
	homepage_url?: string | null,
): Array<Contextmenu_Params> => {
	const entries: Array<Contextmenu_Params> = [];

	// Navigate to API docs
	const module_slug = module_path.replace(/^\.\//, '').replace(/\.(ts|js|svelte)$/, '');
	const docs_url = `/docs/api/${encodeURIComponent(module_slug)}/${encodeURIComponent(decl.name)}`;
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
	if (repo_url && decl.source_location) {
		const source_url = `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '')}#L${decl.source_location.line}`;
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
					const url = `${homepage_url}/docs/api/${module_slug}/${decl.name}`;
					await navigator.clipboard.writeText(url);
				},
			},
		});
	}

	return entries;
};

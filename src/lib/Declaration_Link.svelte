<script lang="ts">
	import {resolve} from '$app/paths';
	import type {Snippet} from 'svelte';

	import type {Src_Module_Declaration} from '$lib/src_json.js';
	import {contextmenu_attachment} from '$lib/contextmenu_state.svelte.js';
	import {create_declaration_contextmenu} from '$lib/declaration_contextmenu.js';

	const {
		decl,
		module_path,
		pkg_name,
		repo_url,
		homepage_url,
		children,
	}: {
		/**
		 * The declaration to link to
		 */
		decl: Src_Module_Declaration;
		/**
		 * Module path (e.g., "alert.ts")
		 */
		module_path: string;
		/**
		 * Package name for generating import statements
		 */
		pkg_name: string;
		/**
		 * Repository URL for source links
		 */
		repo_url?: string;
		/**
		 * Homepage URL for docs links
		 */
		homepage_url?: string | null;
		/**
		 * Optional content to display (defaults to declaration name)
		 */
		children?: Snippet;
	} = $props();

	// Generate API URL with hash-based navigation
	const api_url = $derived(`/docs/api#${encodeURIComponent(decl.name)}`);

	// Contextmenu entries
	const contextmenu_entries = $derived(
		create_declaration_contextmenu(decl, module_path, pkg_name, repo_url, homepage_url),
	);
</script>

<a
	class="declaration_link chip {decl.kind}_declaration"
	href={resolve(api_url as any)}
	{@attach contextmenu_attachment(contextmenu_entries)}
>
	{#if children}
		{@render children()}
	{:else}
		{decl.name}
	{/if}
</a>

<style>
	.declaration_link {
		cursor: pointer;
		text-decoration: none;
		transition: opacity 0.15s;
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
	}
	.declaration_link:hover {
		opacity: 0.8;
	}
</style>

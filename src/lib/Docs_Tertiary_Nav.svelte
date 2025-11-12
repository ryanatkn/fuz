<script lang="ts">
	import {page} from '$app/state';

	import Docs_Modules_List from '$lib/Docs_Modules_List.svelte';
	import Docs_Page_Links from '$lib/Docs_Page_Links.svelte';
	import {to_tome_pathname, Tome} from '$lib/tome.js';
	import {docs_links_context, DOCS_API_PATH} from '$lib/docs_helpers.svelte.js';
	import {pkg_context} from '$lib/pkg.svelte.js';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';

	interface Props {
		tomes: Array<Tome>;
		tomes_by_name: Map<string, Tome>;
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
	}

	const {tomes, tomes_by_name, sidebar = true}: Props = $props();

	const selected_item = $derived(tomes.find((t) => to_tome_pathname(t) === page.url.pathname));

	const tomes_related_to_selected = $derived(
		selected_item?.related_tomes
			.map((name) => tomes_by_name.get(name))
			.filter((t) => t !== undefined) ?? [],
	);

	const pkg = pkg_context.get();

	const modules_related_to_selected = $derived(
		selected_item?.related_modules
			.map((path) => pkg.lookup_module(path))
			.filter((m) => m !== undefined) ?? [],
	);

	const identifiers_related_to_selected = $derived(
		selected_item?.related_identifiers
			.map((name) => pkg.lookup_identifier(name))
			.filter((i) => i !== undefined) ?? [],
	);

	const docs_links = docs_links_context.get();

	const should_show_page_links = $derived(docs_links.docs_links.length > 0);

	const at_api_root = $derived(page.url.pathname === DOCS_API_PATH);
	const at_module = $derived(page.url.pathname.startsWith(DOCS_API_PATH + '/'));
</script>

<!-- TODO probably add a `nav` wrapper? around which? -->
<aside class="docs_tertiary_nav unstyled">
	{#if tomes_related_to_selected.length}
		<section class="related_section">
			<h4 class="mb_sm">related tomes</h4>
			<ul class="unstyled ml_md">
				{#each tomes_related_to_selected as tome (tome.name)}
					<li><Tome_Link name={tome.name} class="menu_item" /></li>
				{/each}
			</ul>
		</section>
	{/if}
	{#if modules_related_to_selected.length}
		<section class="related_section">
			<h4 class="mb_sm">related modules</h4>
			<ul class="unstyled ml_md">
				{#each modules_related_to_selected as module (module.path)}
					<li><Module_Link module_path={module.path} class="menu_item" /></li>
				{/each}
			</ul>
		</section>
	{/if}
	{#if identifiers_related_to_selected.length}
		<section class="related_section">
			<h4 class="mb_sm">related identifiers</h4>
			<ul class="unstyled ml_md">
				{#each identifiers_related_to_selected as identifier (identifier.name)}
					<li><Identifier_Link name={identifier.name} class="menu_item" /></li>
				{/each}
			</ul>
		</section>
	{/if}
	{#if should_show_page_links}
		<Docs_Page_Links {sidebar} expand_width />
	{/if}
	{#if at_api_root || at_module}
		<Docs_Modules_List expand_width />
	{/if}
</aside>

<style>
	.docs_tertiary_nav {
		/* TODO @many lots of duplicate code between `Docs_Secondary_Nav` and `Docs_Tertiary_Nav` */
		position: fixed;
		right: 0;
		top: var(--docs_primary_nav_height);
		z-index: 1;
		width: var(--docs_sidebar_width);
		height: calc(100% - var(--docs_primary_nav_height));
		padding: var(
			--docs_secondary_nav_padding
		); /* needed with `overflow: auto` to avoid cutting off outline */
		overflow: auto;
		scrollbar-width: thin;
		background-color: var(--fg_1);
	}

	/* sync this breakpoint with `/docs/+layout` */
	@media (max-width: 1000px) {
		.docs_tertiary_nav {
			position: static;
			background-color: initial;
			overflow: initial;
		}
	}
</style>

<script lang="ts">
	import {page} from '$app/stores';

	import Library_Menu from '$lib/Library_Menu.svelte';
	import Library_Page_Links from '$lib/Library_Page_Links.svelte';
	import {to_tome_pathname, Tome} from '$lib/tome.js';
	import {library_links_context} from '$lib/library_helpers.svelte.js';

	interface Props {
		tomes: Array<Tome>;
		tomes_by_name: Map<string, Tome>;
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
	}

	const {tomes, tomes_by_name, sidebar = true}: Props = $props();

	const selected_item = $derived(tomes.find((t) => to_tome_pathname(t) === $page.url.pathname));

	const tomes_related_to_selected = $derived(
		selected_item?.related.map((r) => tomes_by_name.get(r)!),
	);

	const library_links = library_links_context.get();
</script>

<aside class="library_tertiary_nav unstyled">
	{#if tomes_related_to_selected?.length}
		<Library_Menu tomes={tomes_related_to_selected}>
			{#snippet children(category)}<h6>related {category}</h6>{/snippet}
		</Library_Menu>
	{/if}
	{#if library_links.library_links.length > 1}
		<Library_Page_Links {sidebar} />
	{/if}
</aside>

<style>
	.library_tertiary_nav {
		position: fixed;
		right: 0;
		top: var(--library_primary_nav_height);
		z-index: 1;
		width: var(--library_sidebar_width);
		height: calc(100% - var(--library_primary_nav_height));
		padding: var(
			--library_secondary_nav_padding
		); /* needed with `overflow: auto` to avoid cutting off outline */
		overflow: auto;
		background-color: var(--fg_1);
	}

	/* sync this breakpoint with `library/+layout` */
	@media (max-width: 1000px) {
		.library_tertiary_nav {
			position: static;
			background-color: initial;
			overflow: initial;
		}
	}
</style>

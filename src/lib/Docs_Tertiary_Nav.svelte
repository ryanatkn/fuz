<script lang="ts">
	import {page} from '$app/stores';

	import Docs_Menu from '$lib/Docs_Menu.svelte';
	import Docs_Page_Links from '$lib/Docs_Page_Links.svelte';
	import {to_tome_pathname, Tome} from '$lib/tome.js';
	import {docs_links_context} from '$lib/docs_helpers.svelte.js';

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

	const docs_links = docs_links_context.get();
</script>

<aside class="docs_tertiary_nav unstyled">
	{#if tomes_related_to_selected?.length}
		<Docs_Menu tomes={tomes_related_to_selected}>
			{#snippet children(category)}<h4 class="mb_sm">related {category}</h4>{/snippet}
		</Docs_Menu>
	{/if}
	{#if docs_links.docs_links.length > 1}
		<Docs_Page_Links {sidebar} />
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

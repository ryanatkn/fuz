<script lang="ts">
	import {page} from '$app/stores';

	import Library_Menu from '$lib/Library_Menu.svelte';
	import {Tome} from '$lib/tome.js';

	interface Props {
		tomes: Tome[];
		tomes_by_name: Map<string, Tome>;
	}

	const {tomes, tomes_by_name}: Props = $props();

	const selected_item = $derived(tomes.find((c) => c.pathname === $page.url.pathname));

	// TODO BLOCK this gets duplicates as you click around
	const tomes_related_to_selected = $derived(
		selected_item?.related?.map((r) => tomes_by_name.get(r)!),
	);

	// TODO BLOCK sometimes the outline of the <a> cut off but it goes away after a refresh, what's going on?
	// may be due to the transition - also see the menu_item z-index
</script>

<aside class="library_tertiary_nav unstyled">
	{#if tomes_related_to_selected}
		<Library_Menu tomes={tomes_related_to_selected}>
			{#snippet children(category)}<h6>related {category}</h6>{/snippet}
		</Library_Menu>
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
		padding: 0 var(--space_lg);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: auto;
		background-color: var(--fg_1);
	}
</style>

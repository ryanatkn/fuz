<script lang="ts">
	import {page} from '$app/state';
	import {slide} from 'svelte/transition';

	import Docs_List from '$lib/Docs_List.svelte';
	import {docs_links_context} from '$lib/docs_helpers.svelte.js';

	const {
		sidebar = true,
		expand_width = false,
	}: {
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
		expand_width?: boolean;
	} = $props();

	const docs_links = docs_links_context.get();

	const hash = $derived(page.url.hash.slice(1));
</script>

<Docs_List {expand_width} class="docs_page_links">
	<h4 class="mb_sm">on this page</h4>
	{#if sidebar}
		<div class="sidebar_wrapper">{@render content()}</div>
	{:else}
		{@render content()}
	{/if}
</Docs_List>

{#snippet content()}
	<nav aria-label="on this page" class="width_100">
		<ul class="unstyled">
			{#each docs_links.docs_links as item (item.id)}
				<li role="none" transition:slide class:pl_xl4={item.tag === 'h4'}>
					<a
						class="menu_item"
						href="#{item.slug}"
						class:selected={item.slug === hash}
						class:highlighted={docs_links.slugs_onscreen.has(item.slug)}
						><div class="ellipsis">{item.text}</div></a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/snippet}

<style>
	/* this is needed because `.docs_page_links` needs to be a block to collapse the vertical margin */
	.sidebar_wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>

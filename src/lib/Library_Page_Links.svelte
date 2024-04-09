<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';

	import type {Library_Links} from '$lib/library.svelte.js';

	interface Props {
		library_links: Library_Links;
		sidebar?: boolean; // TODO @multiple dialog navs (this shouldn't exist)
	}

	const {library_links, sidebar = true}: Props = $props();

	// TODO BLOCK refactor with `Library_Menu`, probably
	// TODO BLOCK remove CSS below with reusable CSS or a Svelte component

	$inspect($page.url.hash);

	const hash = $derived($page.url.hash.slice(1));

	// TODO BLOCK margin issue with the h6 here and in `Library_Menu`, setting it to 0 here doesn't work when it's the only thing mounted

	// TODO BLOCK the `:global(ul)` below appears to be a bug
</script>

<div class="library_page_links">
	<h6>On this page</h6>
	{#if sidebar}
		<div class="sidebar_wrapper">{@render content()}</div>
	{:else}
		{@render content()}
	{/if}
</div>

{#snippet content()}
	<ul class="unstyled">
		{#each library_links.library_links as item (item.id)}
			<li role="none" transition:slide>
				<a class="menu_item" href="#{item.slug}" class:selected={item.slug === hash}>{item.text}</a>
			</li>
		{/each}
	</ul>
{/snippet}

<style>
	.library_page_links {
		margin: var(--space_xl6) 0;
	}

	/* this is needed because `.library_page_links` needs to be a block to collapse the vertical margin */
	.sidebar_wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.sidebar_wrapper :global(ul) {
		min-width: var(--library_menu_width);
	}

	/* TODO should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	ul a:hover {
		background-color: var(--bg_5);
	}
	ul a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

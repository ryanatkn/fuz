<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';

	import {library_links_context} from '$lib/library_helpers.svelte.js';

	interface Props {
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
	}

	const {sidebar = true}: Props = $props();

	// TODO remove CSS below with reusable CSS or a Svelte component

	const library_links = library_links_context.get();

	const hash = $derived($page.url.hash.slice(1));
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
	<nav aria-label="On this page" class="w_100">
		<ul class="unstyled">
			{#each library_links.library_links as item (item.id)}
				<li role="none" transition:slide class:pl_xl4={item.tag === 'h4'}>
					<a
						class="menu_item overflow_wrap_anywhere line_height_sm"
						href="#{item.slug}"
						class:selected={item.slug === hash}
						class:highlighted={library_links.slugs_onscreen.has(item.slug)}>{item.text}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/snippet}

<style>
	.library_page_links {
		margin: var(--space_xl6) 0;
		width: var(--library_menu_width);
		min-width: var(--library_menu_width);
	}

	/* this is needed because `.library_page_links` needs to be a block to collapse the vertical margin */
	.sidebar_wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	/* TODO @many should be a CSS component class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	a.highlighted {
		background-color: var(--bg_4);
	}
	a:hover {
		background-color: var(--bg_5);
	}
	a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

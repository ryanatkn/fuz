<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';

	import type {Library_Links} from '$lib/library.svelte.js';

	interface Props {
		library_links: Library_Links;
	}

	const {library_links}: Props = $props();

	// TODO BLOCK refactor with `Library_Menu`, probably
	// TODO BLOCK remove CSS below with reusable CSS or a Svelte component

	$inspect($page.url.hash);

	const hash = $derived($page.url.hash.slice(1));

	// TODO BLOCK margin issue with the h6 here and in `Library_Menu`, setting it to 0 here doesn't work when it's the only thing mounted
</script>

<div class="library_page_links">
	<h6>On this page</h6>
	<div class="wrapper">
		<ul class="unstyled">
			{#each library_links.library_links as item (item.id)}
				<li role="none" transition:slide>
					<a class="menu_item" href="#{item.slug}" class:selected={item.slug === hash}
						>{item.text}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	/* this is needed because `.library_page_links` needs to be a block to collapse the vertical margin */
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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

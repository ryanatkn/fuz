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
</script>

<div class="library_page_links">
	<h6>On this page</h6>
	<ul class="unstyled">
		{#each library_links.library_links as item (item.id)}
			<li role="none" transition:slide>
				<a class="menu_item" href="#{item.slug}" class:selected={item.slug === hash}>{item.text}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.library_page_links {
		width: var(--library_menu_width);
	}

	.category:not(:last-child) {
		margin-bottom: var(--space_xl6);
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

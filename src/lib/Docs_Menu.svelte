<script lang="ts">
	import {page} from '$app/state';
	import {slide} from 'svelte/transition';
	import type {Snippet} from 'svelte';

	import {to_tome_pathname, type Tome} from '$lib/tome.js';
	import Docs_Menu_Header from '$lib/Docs_Menu_Header.svelte';

	interface Props {
		tomes: Array<Tome>;
		children?: Snippet<[category: string]>;
		expand_width?: boolean;
	}

	const {tomes, children, expand_width = false}: Props = $props();

	const tomes_by_category = $derived(
		tomes.reduce<Record<string, Array<Tome>>>((result, c) => {
			(result[c.category] ??= []).push(c);
			return result;
		}, {}),
	);

	// TODO remove CSS below with reusable CSS or a Svelte component
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<ul class="docs_menu unstyled" class:expand_width>
	{#each Object.entries(tomes_by_category) as [category, tomes] (category)}
		<li class="category">
			{#if children}{@render children(category)}{:else}<Docs_Menu_Header
					>{category}</Docs_Menu_Header
				>{/if}
			<ul class="unstyled">
				{#each tomes as item (item)}
					{@const pathname = to_tome_pathname(item)}
					<li role="none" transition:slide>
						<a class="menu_item" href={pathname} class:selected={pathname === page.url.pathname}
							><div class="ellipsis">{item.name}</div></a
						>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style>
	/* TODO @many repeated pattern, also I think we want to support this growing? */
	.docs_menu {
		width: var(--docs_menu_width);
		min-width: var(--docs_menu_width);
	}
	.docs_menu.expand_width {
		width: 100%;
	}

	.category {
		margin: var(--space_xl6) 0;
	}

	/* TODO @many should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	a:hover {
		background-color: var(--bg_5);
	}
	a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

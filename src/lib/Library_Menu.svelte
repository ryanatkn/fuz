<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';

	import {to_tome_pathname, type Tome} from '$lib/tome.js';
	import type {Snippet} from 'svelte';

	interface Props {
		tomes: Tome[];
		children?: Snippet<[category: string]>;
	}

	const {tomes, children}: Props = $props();

	const tomes_by_category = $derived(
		tomes.reduce<Record<string, Tome[]>>((result, c) => {
			result[c.category] ??= [];
			result[c.category].push(c);
			return result;
		}, {}),
	);

	// TODO remove CSS below with reusable CSS or a Svelte component
</script>

<ul class="library_menu unstyled">
	{#each Object.entries(tomes_by_category) as [category, tomes] (category)}
		<li class="category">
			{#if children}{@render children(category)}{:else}<h6>{category}</h6>{/if}
			<ul class="unstyled">
				{#each tomes as item (item)}
					{@const pathname = to_tome_pathname(item)}
					<li role="none" transition:slide>
						<a
							class="menu_item ellipsis line_height_lg"
							href={pathname}
							class:selected={pathname === $page.url.pathname}>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style>
	.library_menu {
		width: var(--library_menu_width);
		min-width: var(--library_menu_width);
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

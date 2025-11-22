<script lang="ts">
	import {page} from '$app/state';
	import {slide} from 'svelte/transition';
	import type {Snippet} from 'svelte';

	import Docs_List from './Docs_List.svelte';
	import {to_tome_pathname, type Tome} from './tome.js';
	import Docs_Menu_Header from './Docs_Menu_Header.svelte';

	const {
		tomes,
		children,
		expand_width = false,
	}: {
		tomes: Array<Tome>;
		children?: Snippet<[category: string]>;
		expand_width?: boolean;
	} = $props();

	const tomes_by_category = $derived(
		tomes.reduce<Record<string, Array<Tome>>>((result, c) => {
			(result[c.category] ??= []).push(c);
			return result;
		}, {}),
	);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<Docs_List {expand_width} margin={false} class="docs_menu">
	<ul class="unstyled">
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
</Docs_List>

<style>
	.category {
		margin: var(--space_xl6) 0;
	}
</style>

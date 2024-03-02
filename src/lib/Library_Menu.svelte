<script lang="ts">
	import {page} from '$app/stores';
	import {slide} from 'svelte/transition';
	import {base} from '$app/paths';

	import type {Tome} from '$lib/tome.js';
	import Library_Panel from '$lib/Library_Panel.svelte';

	interface Props {
		tomes: Tome[];
	}

	const {tomes} = $props<Props>();

	// Library_Menu floats alongside the docs, showing scrolled item as selected

	const tomes_by_category = $derived(
		tomes.reduce(
			(result, c) => {
				if (!(c.category in result)) result[c.category] = [];
				result[c.category].push(c);
				return result;
			},
			{} as Record<string, Tome[]>,
		),
	);
</script>

{#each Object.entries(tomes_by_category) as [category, tomes] (category)}
	<div transition:slide>
		<Library_Panel>
			<div class="library_menu">
				<slot {category}>
					<h6>{category}</h6>
				</slot>
				<menu>
					{#each tomes as item (item.slug)}
						<li role="none" transition:slide>
							<a
								class="menu_item"
								href="{base}/library/{item.slug}"
								class:selected={item.pathname === $page.url.pathname}>{item.name}</a
							>
						</li>
					{/each}
				</menu>
			</div>
		</Library_Panel>
	</div>
{/each}

<style>
	.library_menu,
	menu {
		width: 100%;
	}
	h6 {
		padding-bottom: var(--space_sm);
	}
	h6:not(:first-child) {
		margin-top: var(--space_xl);
	}
	li {
		width: 100%;
	}
	/* TODO should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	menu a:hover {
		background-color: var(--bg_5);
	}
	menu a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

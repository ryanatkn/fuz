<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {onDestroy, type Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {page} from '$app/stores';
	import {base} from '$app/paths';

	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links, type Library_Link_Tag} from '$lib/library_helpers.svelte.js';

	interface Props {
		text: string;
		slug: string; // TODO doesn't handle duplicate slugs for subheadings under different `Tome_Title`s, e.g. the generic "example-usage" and "more-details" will cause issues if they're used elsewhere
		tag?: Library_Link_Tag;
		content_attrs?: SvelteHTMLElements['div'];
		attrs?: SvelteHTMLElements['h3'];
		children?: Snippet;
	}

	const {text, slug, tag = 'h3', content_attrs, attrs, children}: Props = $props();

	const id = 'tome_subheading_' + _id++;

	const library_links = get_library_links();

	// Add subheadings only if not on the root page.
	// TODO make reactive?
	if ($page.url.pathname !== base + library_links.root_path) {
		library_links.add(id, text, slug, tag);
		onDestroy(() => {
			library_links.remove(id);
		});
	}
</script>

<svelte:element this={tag} {...attrs} class:tome_subheading={true}
	>{@render content()}</svelte:element
>

{#snippet content()}
	<div {...content_attrs}>
		{#if children}{@render children()}{:else}{text}{/if}
	</div>
	<Hashlink {slug} />
{/snippet}

<style>
	.tome_subheading {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/* TODO @many how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	.tome_subheading:hover :global(.hashlink) {
		opacity: 1;
	}
</style>

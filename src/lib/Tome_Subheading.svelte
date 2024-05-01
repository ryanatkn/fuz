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
		slug: string;
		tag?: Library_Link_Tag;
		attrs?: SvelteHTMLElements['h3'];
		children?: Snippet;
	}

	const {text, slug, tag = 'h3', attrs, children}: Props = $props();

	const id = 'tome_subheading_' + _id++;

	const library_links = get_library_links();

	// Add subheadings only if not on the root page.
	// TODO make reactive?
	if ($page.url.pathname !== base + library_links.root_path) {
		library_links.add(id, text, slug, tag);
		onDestroy(() => library_links.remove(id));
	}
</script>

{#if tag === 'h4'}
	<h4 {...attrs}>{@render content()}</h4>
{:else}
	<h3 {...attrs}>{@render content()}</h3>
{/if}

{#snippet content()}
	{#if children}{@render children()}{:else}{text}{/if}
	<Hashlink {slug} />
{/snippet}

<style>
	:is(h3, h4) {
		position: relative;
	}
	/* TODO @multiple how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	:is(h3, h4):hover :global(.hashlink) {
		opacity: 1;
	}
</style>

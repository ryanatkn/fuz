<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {onDestroy, type Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links} from '$lib/library.svelte.js';

	interface Props {
		slug: string;
		attrs?: SvelteHTMLElements['h3'];
		children: Snippet;
	}

	const {slug, attrs, children}: Props = $props();

	const id = 'tome_subheading_' + _id++;

	const library_links = get_library_links();

	library_links.add(id, children, slug); // TODO make reactive?

	onDestroy(() => library_links.remove(id));
</script>

<h3 {...attrs}>
	{@render children()}
	<Hashlink {slug} />
</h3>

<style>
	h3 {
		position: relative;
	}
	/* TODO @multiple how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	h3:hover :global(.hashlink) {
		opacity: 1;
	}
</style>

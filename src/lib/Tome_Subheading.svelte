<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {onDestroy} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {page} from '$app/stores';
	import {base} from '$app/paths';

	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links} from '$lib/library.svelte.js';

	interface Props {
		text: string;
		slug: string;
		attrs?: SvelteHTMLElements['h3'];
	}

	const {text, slug, attrs}: Props = $props();

	const id = 'tome_subheading_' + _id++;

	const library_links = get_library_links();

	// Add subheadings only if not on the root page.
	// TODO make reactive?
	if ($page.url.pathname !== base + library_links.root_path) {
		library_links.add(id, text, slug);
		onDestroy(() => library_links.remove(id));
	}
</script>

<h3 {...attrs}>
	{text}
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

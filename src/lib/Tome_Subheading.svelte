<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import Hashlink from '$lib/Hashlink.svelte';

	interface Props {
		slug: string;
		attrs?: SvelteHTMLElements['h3'];
		children: Snippet;
	}

	const {slug, attrs, children}: Props = $props();
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

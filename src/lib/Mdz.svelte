<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {mdz_parse} from '$lib/mdz.js';
	import Mdz_Node_View from '$lib/Mdz_Node_View.svelte';

	const {
		content,
		inline = false,
		...rest
	}: (SvelteHTMLElements['div'] | SvelteHTMLElements['span']) & {
		content: string;
		inline?: boolean;
	} = $props();

	const nodes = $derived(mdz_parse(content));

	// TODO maybe rethink how inline works here, possibly remove the wrapper when one element, or otherwise do something smart/convenient/predictable? what could that be
</script>

<svelte:element this={inline ? 'span' : 'div'} class="white_space_pre_wrap" {...rest}>
	<!-- TODO @many currently not using keys, what would be correct here? -->
	{#each nodes as node (node)}<Mdz_Node_View {node} />{/each}
</svelte:element>

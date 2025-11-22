<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {mdz_parse} from './mdz.js';
	import Mdz_Node_View from './Mdz_Node_View.svelte';

	const {
		content,
		inline = false,
		nowrap = false,
		...rest
	}: (SvelteHTMLElements['div'] | SvelteHTMLElements['span']) & {
		content: string;
		inline?: boolean;
		nowrap?: boolean;
	} = $props();

	const nodes = $derived(mdz_parse(content));
</script>

<svelte:element
	this={inline ? 'span' : 'div'}
	{...rest}
	class:white_space_pre={nowrap}
	class:white_space_pre_wrap={!nowrap}
>
	{#each nodes as node (node)}
		<Mdz_Node_View {node} />
	{/each}
</svelte:element>

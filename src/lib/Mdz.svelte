<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {mdz_parse} from '$lib/mdz.js';
	import Mdz_Node_View from '$lib/Mdz_Node_View.svelte';

	const {
		content,
		...rest
	}: SvelteHTMLElements['div'] & {
		content: string;
	} = $props();

	const nodes = $derived(mdz_parse(content));
</script>

<div class="white_space_pre_wrap" {...rest}>
	{#each nodes as node (node)}
		<Mdz_Node_View {node} />
	{/each}
</div>

<script lang="ts">
	import {mdz_parse} from '$lib/mdz.js';
	import Mdz_Node_View from '$lib/Mdz_Node_View.svelte';

	const {
		content,
	}: {
		content: string;
	} = $props();

	const nodes = $derived(mdz_parse(content));
</script>

{#each nodes as node (node)}
	<Mdz_Node_View {node} />
{/each}

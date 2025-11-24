<script lang="ts">
	import type {Snippet} from 'svelte';

	import Ecosystem_Links from './Ecosystem_Links.svelte';
	import Project_Links from './Project_Links.svelte';

	const {
		children,
	}: {
		children?: Snippet;
	} = $props();
</script>

<section class="panel p_lg">
	{#if children}
		{@render children()}
	{:else}
		<h2 class="mt_0 mb_lg">Links</h2>
	{/if}
	<Ecosystem_Links />
	<div class="box row"><Project_Links /></div>
</section>

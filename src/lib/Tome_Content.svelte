<script lang="ts">
	import type {Snippet} from 'svelte';

	import Tome_Header from '$lib/Tome_Header.svelte';
	import {set_tome, type Tome} from '$lib/tome.js';

	interface Props {
		tome: Tome;
		header?: Snippet;
		children: Snippet;
	}

	const {tome, header, children}: Props = $props();

	set_tome(tome);
</script>

<section class="tome_content width_md">
	<header>
		{#if header}
			{@render header()}
		{:else}
			<Tome_Header />
		{/if}
	</header>
	{@render children()}
</section>

<style>
	.tome_content {
		margin-bottom: var(--space_xl9);
	}
	header {
		margin-bottom: var(--space_xl3);
	}
</style>

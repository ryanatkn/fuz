<script lang="ts">
	import type {Snippet} from 'svelte';

	import Tome_Header from '$lib/Tome_Header.svelte';
	import {set_tome, type Tome} from '$lib/tome.js';
	import {get_library_links} from '$lib/library_helpers.svelte.js';
	import {intersect} from '$lib/intersect.ts';

	interface Props {
		tome: Tome;
		header?: Snippet;
		children: Snippet;
	}

	const {tome, header, children}: Props = $props();

	const library_links = get_library_links();

	set_tome(tome);
</script>

<section class="tome_content width_md">
	<header
		use:intersect={({intersecting}) => {
			console.log(`tome`, tome);
			console.log(`intersecting`, intersecting, tome.slug);
			if (intersecting) {
				library_links.slugs_onscreen.add(tome.slug);
			} else {
				library_links.slugs_onscreen.delete(tome.slug);
			}
		}}
	>
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

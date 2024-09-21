<script lang="ts">
	import type {Snippet} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';

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

	set_tome(tome); // TODO make reactive?

	const slug = slugify(tome.name);
</script>

<section
	class="tome_content width_md mb_xl9"
	use:intersect={({intersecting}) => {
		if (intersecting) {
			library_links.slugs_onscreen.add(slug);
		} else {
			library_links.slugs_onscreen.delete(slug);
		}
	}}
>
	<header class="mb_xl3">
		{#if header}
			{@render header()}
		{:else}
			<Tome_Header />
		{/if}
	</header>
	{@render children()}
</section>

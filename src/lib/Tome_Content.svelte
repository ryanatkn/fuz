<script lang="ts">
	import type {Snippet} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';
	import {page} from '$app/state';
	import {resolve} from '$app/paths';

	import Tome_Header from '$lib/Tome_Header.svelte';
	import {tome_context, type Tome} from '$lib/tome.js';
	import {DOCS_PATH_DEFAULT, docs_links_context} from '$lib/docs_helpers.svelte.js';
	import {intersect} from '$lib/intersect.svelte.js';

	const {
		tome,
		docs_path = DOCS_PATH_DEFAULT,
		header,
		children,
	}: {
		tome: Tome;
		docs_path?: string;
		header?: Snippet;
		children: Snippet;
	} = $props();

	const docs_links = docs_links_context.get();

	tome_context.set(tome); // TODO make reactive?

	const slug = slugify(tome.name);

	const at_root = $derived(page.url.pathname === resolve(docs_path as any));
</script>

<section
	class="tome_content width_upto_md mb_xl9"
	{@attach intersect(() =>
		at_root
			? ({intersecting}) => {
					if (intersecting) {
						docs_links.slugs_onscreen.add(slug);
					} else {
						docs_links.slugs_onscreen.delete(slug);
					}
				}
			: null,
	)}
>
	<header
		class="mb_xl3 position_sticky top_0"
		{@attach intersect(() =>
			at_root
				? null
				: ({intersecting}) => {
						if (intersecting) {
							docs_links.slugs_onscreen.add(slug);
						} else {
							docs_links.slugs_onscreen.delete(slug);
						}
					},
		)}
	>
		{#if header}
			{@render header()}
		{:else}
			<Tome_Header />
		{/if}
	</header>
	{@render children()}
</section>

<script lang="ts" module>
	let _id = 0;
</script>

<script lang="ts">
	import {onDestroy, type Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {page} from '$app/stores';
	import {base} from '$app/paths';
	import {slugify} from '@ryanatkn/belt/path.js';

	import Hashlink from '$lib/Hashlink.svelte';
	import {get_register_section_header} from '$lib/Tome_Section.svelte';
	import {library_links_context, type Library_Link_Tag} from '$lib/library_helpers.svelte.js';

	interface Props {
		text: string;
		tag?: Library_Link_Tag;
		attrs?: SvelteHTMLElements['h3'];
		children?: Snippet;
	}

	const {text, tag = 'h3', attrs, children}: Props = $props();

	const slug = slugify(text);

	const register_section_header = get_register_section_header();
	if (!register_section_header) {
		throw Error('Tome_Section_Header must be a child of Tome_Section');
	}
	register_section_header(slug);

	const id = 'tome_section_header_' + _id++;

	const library_links = library_links_context.get();

	// Add section titles only if not on the root page.
	// TODO make reactive?
	if ($page.url.pathname !== base + library_links.root_path) {
		library_links.add(id, text, slug, tag);
		onDestroy(() => {
			library_links.remove(id);
		});
	}
</script>

<header>
	<svelte:element this={tag} {...attrs} class:tome_section_header={true}>
		<div>
			{#if children}
				{@render children()}
			{:else}
				{text}
			{/if}
		</div>
		<Hashlink {slug} />
	</svelte:element>
</header>

<style>
	.tome_section_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	/* TODO @many how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	.tome_section_header:hover :global(.hashlink) {
		opacity: 1;
	}
</style>

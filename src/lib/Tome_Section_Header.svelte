<script lang="ts" module>
	let _id = 0;
</script>

<script lang="ts">
	import {onDestroy, type Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {page} from '$app/state';
	import {resolve} from '$app/paths';
	import {slugify} from '@ryanatkn/belt/path.js';

	import Hashlink from '$lib/Hashlink.svelte';
	import {register_section_header_context} from '$lib/Tome_Section.svelte';
	import {docs_links_context, type Docs_Link_Tag} from '$lib/docs_helpers.svelte.js';

	interface Props {
		text: string;
		tag?: Docs_Link_Tag;
		attrs?: SvelteHTMLElements['h3'];
		children?: Snippet;
	}

	const {text, tag = 'h3', attrs, children}: Props = $props();

	const slug = slugify(text);

	const register_section_header = register_section_header_context.get();
	if (!register_section_header) {
		throw Error('Tome_Section_Header must be a child of Tome_Section');
	}
	register_section_header(slug);

	const id = 'tome_section_header_' + _id++;

	const docs_links = docs_links_context.get();

	// Add section titles only if not on the root page.
	// TODO make reactive?
	if (page.url.pathname !== resolve(docs_links.root_path as any)) {
		docs_links.add(id, text, slug, tag);
		onDestroy(() => {
			docs_links.remove(id);
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

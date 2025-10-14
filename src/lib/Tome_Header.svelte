<script lang="ts" module>
	let _id = 0;
</script>

<script lang="ts">
	import {page} from '$app/state';
	import {onDestroy} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';
	import {DEV} from 'esm-env';

	import {tome_context} from '$lib/tome.js';
	import Hashlink from '$lib/Hashlink.svelte';
	import {docs_links_context, to_docs_path_info} from '$lib/docs_helpers.svelte.js';
	import type {SvelteHTMLElements} from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
	const props: SvelteHTMLElements['h1'] | SvelteHTMLElements['h2'] = $props();

	const tome = tome_context.get(); // TODO make reactive?
	if (DEV && !tome) throw Error('Tome_Header expects a tome in context'); // eslint-disable-line @typescript-eslint/no-unnecessary-condition

	const id = 'tome_header_' + _id++;

	const docs_links = docs_links_context.get();

	const slug = slugify(tome.name);
	docs_links.add(id, tome.name, slug);

	onDestroy(() => {
		docs_links.remove(id);
	});

	const {path, path_is_selected} = $derived(to_docs_path_info(slug, page.url.pathname));
</script>

<svelte:element this={path_is_selected ? 'h1' : 'h2'} {...props} class="tome_header">
	{#if path_is_selected}
		{@render content(tome.name)}
	{:else}
		<a href={path}>{@render content(tome.name)}</a>
	{/if}
	<Hashlink {slug} />
</svelte:element>

{#snippet content(name: string)}
	{name}
{/snippet}

<style>
	.tome_header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: var(--space_xl4);
	}
	/* TODO @many how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	.tome_header:hover :global(.hashlink) {
		opacity: 1;
	}
</style>

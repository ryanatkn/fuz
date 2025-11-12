<script lang="ts">
	import {page} from '$app/state';
	import {onDestroy} from 'svelte';
	import {DEV} from 'esm-env';

	import {tome_context} from '$lib/tome.js';
	import Hashlink from '$lib/Hashlink.svelte';
	import {docs_links_context, docs_slugify, to_docs_path_info} from '$lib/docs_helpers.svelte.js';
	import type {SvelteHTMLElements} from 'svelte/elements';

	// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
	const props: SvelteHTMLElements['h1'] | SvelteHTMLElements['h2'] = $props();

	const tome = tome_context.get(); // TODO make reactive?
	if (DEV && !tome) throw Error('Tome_Header expects a tome in context'); // eslint-disable-line @typescript-eslint/no-unnecessary-condition

	const docs_links = docs_links_context.get();

	const slug = docs_slugify(tome.name);
	const id = docs_links.add(slug, tome.name, page.url.pathname);

	onDestroy(() => {
		docs_links.remove(id);
	});

	const {path, path_is_selected} = $derived(to_docs_path_info(slug, page.url.pathname));
</script>

<svelte:element this={path_is_selected ? 'h1' : 'h2'} {...props} class="tome_header">
	{#if path_is_selected}
		{@render content(tome.name)}
	{:else}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
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

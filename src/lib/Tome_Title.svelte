<script lang="ts">
	import {page} from '$app/stores';
	import type {Snippet} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import {to_library_path_info} from '$lib/helpers.js';
	import Hashlink from '$lib/Hashlink.svelte';

	interface Props {
		tome: Tome;
		children?: Snippet;
	}

	const {tome, children}: Props = $props();

	const slugify = (str: string) => str.toLowerCase().replaceAll(/\s/gu, '-').replaceAll(/\W/gu, ''); // TODO extract to helper

	const slug = $derived(slugify(tome.name));

	const {path, path_is_selected} = $derived(to_library_path_info(tome.slug, $page.url.pathname));
</script>

<h2>
	{#if path_is_selected}
		{@render content(tome.name)}
	{:else}
		<a href={path}>{@render content(tome.name)}</a>
		<Hashlink {slug} />
	{/if}
</h2>

{#snippet content(name: string)}
	{#if children}
		{@render children()}
	{:else}
		{name}
	{/if}
{/snippet}

<style>
	h2 {
		position: relative;
	}
	/* TODO @multiple how can this be done composably? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	h2:hover :global(.hashlink) {
		opacity: 1;
	}
</style>

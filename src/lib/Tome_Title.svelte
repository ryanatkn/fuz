<script lang="ts" context="module">
	let _id = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {onDestroy} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import {to_library_path_info} from '$lib/helpers.js';
	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links} from '$lib/library.svelte.js';

	interface Props {
		tome: Tome;
	}

	const {tome}: Props = $props();

	const id = 'tome_title_' + _id++;

	const slugify = (str: string) => str.toLowerCase().replaceAll(/\s/gu, '-').replaceAll(/\W/gu, ''); // TODO extract to helper

	const slug = $derived(slugify(tome.name));

	const library_links = get_library_links();

	library_links.add(id, tome.name, slug); // TODO make reactive?

	onDestroy(() => library_links.remove(id));

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
	{name}
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

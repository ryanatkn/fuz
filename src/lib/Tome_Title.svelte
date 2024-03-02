<script lang="ts">
	import {page} from '$app/stores';
	import type {Snippet} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import {to_library_path_info} from '$lib/helpers.js';

	interface Props {
		tome: Tome;
		children?: Snippet;
	}

	const {tome, children} = $props<Props>();

	const {path, path_is_selected} = $derived(to_library_path_info(tome.slug, $page.url.pathname));
</script>

<h2 id={tome.name}>
	{#if path_is_selected}
		{@render content(tome.name)}
	{:else}
		<a href={path}>{@render content(tome.name)}</a>
	{/if}
</h2>

{#snippet content(name: string)}
	{#if children}
		{@render children()}
	{:else}
		{name}
	{/if}
{/snippet}

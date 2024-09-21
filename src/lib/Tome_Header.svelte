<script lang="ts" module>
	let _id = 0;
</script>

<script lang="ts">
	import {page} from '$app/stores';
	import {onDestroy} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';
	import {DEV} from 'esm-env';

	import {get_tome} from '$lib/tome.js';
	import Hashlink from '$lib/Hashlink.svelte';
	import {get_library_links, to_library_path_info} from '$lib/library_helpers.svelte.js';

	const tome = get_tome(); // TODO make reactive?
	if (DEV && !tome) throw Error('Tome_Header expects a tome in context'); // eslint-disable-line @typescript-eslint/no-unnecessary-condition

	const id = 'tome_header_' + _id++;

	const library_links = get_library_links();

	const slug = slugify(tome.name);
	library_links.add(id, tome.name, slug);

	onDestroy(() => {
		library_links.remove(id);
	});

	const {path, path_is_selected} = $derived(to_library_path_info(slug, $page.url.pathname));
</script>

<header>
	<svelte:element this={path_is_selected ? 'h1' : 'h2'} class="tome_header">
		{#if path_is_selected}
			{@render content(tome.name)}
		{:else}
			<a href={path}>{@render content(tome.name)}</a>
		{/if}
		<Hashlink {slug} />
	</svelte:element>
</header>

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

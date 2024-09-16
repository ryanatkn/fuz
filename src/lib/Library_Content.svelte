<script lang="ts">
	import {page} from '$app/stores';
	import {base} from '$app/paths';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';

	interface Props {
		root_path?: string;
		tomes: Tome[];
		pkg: Package_Meta;
		repo_name?: Snippet<[repo_name: string]>;
		content?: Snippet;
		root_header?: Snippet;
	}

	const {root_path = '/library', tomes, pkg, repo_name, content, root_header}: Props = $props();
</script>

{#if $page.url.pathname === base + root_path}
	{#if root_header}
		{@render root_header()}
	{:else}
		<div class="box mb_xl5">
			<Package_Summary {pkg} {repo_name} />
		</div>
	{/if}
{/if}
<div class="tomes">
	{#if content}
		{@render content()}
	{:else}
		{#each tomes as tome (tome)}
			<tome.component />
		{/each}
	{/if}
</div>

<style>
	.tomes {
		width: 100%;
	}
</style>

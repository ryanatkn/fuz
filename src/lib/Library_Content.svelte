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
	}

	const {root_path = '/library', tomes, pkg, repo_name}: Props = $props();

	// TODO @multiple  the other of these hacks - what's going on? I can't seem to find anything searching online about this, it's `.` on SSR for some reason
	const TODO_HACK_base = (base as any) === '.' ? '' : base;
</script>

{#if $page.url.pathname === TODO_HACK_base + root_path}
	<div class="box mb_xl5">
		<Package_Summary {pkg} {repo_name} />
	</div>
{/if}
<div class="tomes">
	{#each tomes as tome (tome)}
		<svelte:component this={tome.component} />
	{/each}
</div>

<style>
	.tomes {
		width: 100%;
	}
</style>

<script lang="ts">
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import {page} from '$app/stores';
	import {base} from '$app/paths';

	import type {Tome} from '$lib/tome.js';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import {package_json, src_json} from '$routes/package.js';

	interface Props {
		root_path?: string;
		tomes: Tome[];
	}

	const {root_path = '/library', tomes}: Props = $props();

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

{#if $page.url.pathname === base + root_path}
	<div class="box mb_xl5">
		<Package_Summary {pkg}>
			{#snippet repo_name()}
				<h1 class="m_0">fuz</h1>
			{/snippet}
		</Package_Summary>
	</div>
{/if}
<div class="tomes">
	{#each tomes as tome (tome)}
		<svelte:component this={tome.component} />
	{/each}
</div>
<section class="box">
	<Library_Footer {pkg} />
</section>

<style>
	.tomes {
		width: 100%;
	}
</style>

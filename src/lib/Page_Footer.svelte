<script lang="ts">
	import type {Url} from '@ryanatkn/gro/paths.js';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';

	export let pkg: Package_Meta | {url: string; package_json: null};
	export let root_url: Url | null = null;
</script>

<footer>
	{#if pkg.package_json}
		<Library_Footer {pkg} {root_url} />
	{/if}
	<slot />
	<div class="breadcrumb_wrapper">
		<Breadcrumb>{pkg.package_json?.icon}</Breadcrumb>
	</div>
</footer>

<style>
	footer {
		margin: var(--space_3) 0;
	}
	.breadcrumb_wrapper {
		font-size: var(--size_lg);
		margin-top: var(--space_3);
	}
</style>

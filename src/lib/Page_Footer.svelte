<script lang="ts">
	import type {Url} from '@ryanatkn/gro/paths.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import type {Package_Meta} from '$lib/package_meta.js';

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
		margin: var(--spacing_3) 0;
	}
	.breadcrumb_wrapper {
		font-size: var(--size_lg);
		margin-top: var(--spacing_3);
	}
</style>

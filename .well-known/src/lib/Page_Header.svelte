<script lang="ts">
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	export let pkg: Package_Meta | {url: string; package_json: null};
</script>

<div>
	<Breadcrumb>{pkg.package_json?.icon}</Breadcrumb>
</div>

<style>
	div {
		font-size: var(--size_1);
	}
</style>

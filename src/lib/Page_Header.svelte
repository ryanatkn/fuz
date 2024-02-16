<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import type {Package_Meta} from '$lib/package_meta.js';

	export let pkg: Package_Meta;
</script>

<div>
	<Breadcrumb>{pkg.package_json.icon}</Breadcrumb>
</div>

<style>
	div {
		font-size: var(--size_1);
	}
</style>

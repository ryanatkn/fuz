<script lang="ts">
	import Library_Panel from '$lib/Library_Panel.svelte';
	import type {Package_Meta} from '$lib/package_meta.js';
	import Package_Summary from '$lib/Package_Summary.svelte';

	export let pkg: Package_Meta;
</script>

<Library_Panel><slot><Package_Summary {pkg} /></slot></Library_Panel>

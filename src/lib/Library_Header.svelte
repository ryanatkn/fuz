<script lang="ts">
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Library_Panel from '$lib/Library_Panel.svelte';
	import Package_Summary from '$lib/Package_Summary.svelte';

	export let pkg: Package_Meta;
</script>

<Library_Panel><slot><Package_Summary {pkg} /></slot></Library_Panel>

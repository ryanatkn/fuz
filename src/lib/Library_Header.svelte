<script lang="ts">
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import Library_Panel from '$lib/Library_Panel.svelte';
	import Package_Summary from '$lib/Package_Summary.svelte';

	interface Props {
		pkg: Package_Meta;
		children?: Snippet;
	}

	const {pkg, children}: Props = $props();
</script>

<Library_Panel
	>{#if children}{@render children()}{:else}<Package_Summary {pkg} />{/if}</Library_Panel
>

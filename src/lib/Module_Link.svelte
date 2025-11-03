<script lang="ts">
	import type {Snippet} from 'svelte';

	import {module_doc_url} from '$lib/package_helpers.js';

	const {
		module_path,
		children,
	}: {
		module_path: string;
		children?: Snippet;
	} = $props();

	// generate module doc URL
	const doc_url = $derived(module_doc_url(module_path));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a class="chip" href={doc_url}>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{#if children}
		{@render children()}
	{:else}
		{module_path}
	{/if}
</a>

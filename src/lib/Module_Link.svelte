<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {module_doc_url} from '$lib/package_helpers.js';

	const {
		module_path,
		children,
		class: class_prop,
		...rest
	}: SvelteHTMLElements['a'] & {
		module_path: string;
	} = $props();

	// generate module doc URL
	const doc_url = $derived(module_doc_url(module_path));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {...rest} class="chip {class_prop}" href={doc_url}>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{#if children}
		{@render children()}
	{:else}
		{module_path}
	{/if}
</a>

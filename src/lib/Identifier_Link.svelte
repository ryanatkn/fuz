<script lang="ts">
	import type {Snippet} from 'svelte';
	import {lookup_identifier_by_name} from '$lib/api_data.js';
	import Declaration_Link from '$lib/Declaration_Link.svelte';

	const {
		/**
		 * Identifier name to link to
		 */
		name,
		/**
		 * Optional content to display (defaults to identifier name)
		 */
		children,
	}: {
		name: string;
		children?: Snippet;
	} = $props();

	const identifier = $derived(lookup_identifier_by_name(name));
</script>

{#if identifier}
	<Declaration_Link {identifier}>
		{#if children}
			{@render children()}
		{:else}
			{name}
		{/if}
	</Declaration_Link>
{:else}
	<!-- Fallback to plain text if not found -->
	{#if children}
		{@render children()}
	{:else}
		{name}
	{/if}
{/if}

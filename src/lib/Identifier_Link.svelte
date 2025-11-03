<script lang="ts">
	import type {Snippet} from 'svelte';
	import {pkg_context} from '$lib/pkg.svelte.js';
	import {contextmenu_attachment} from '$lib/contextmenu_state.svelte.js';
	import {create_identifier_contextmenu} from '$lib/identifier_contextmenu.js';

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

	const pkg = pkg_context.get();
	const identifier = $derived(pkg.lookup_identifier(name));

	const contextmenu_entries = $derived(
		identifier ? create_identifier_contextmenu(identifier) : undefined,
	);
</script>

{#if identifier}
	<!-- TODO maybe colors per identifier.kind? -->
	<!-- TODO -next-line doesnt work? -->
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a class="chip" href={identifier.api_url} {@attach contextmenu_attachment(contextmenu_entries)}>
		{#if children}
			{@render children()}
		{:else}
			{name}
		{/if}
	</a>
{:else}
	<!-- Fallback to plain text if not found -->
	{#if children}
		{@render children()}
	{:else}
		{name}
	{/if}
{/if}

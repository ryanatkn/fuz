<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Identifier} from '$lib/identifier.svelte.js';
	import {contextmenu_attachment} from '$lib/contextmenu_state.svelte.js';
	import {create_identifier_contextmenu} from '$lib/identifier_contextmenu.js';

	const {
		identifier,
		children,
	}: {
		/**
		 * The identifier to link to
		 */
		identifier: Identifier;
		/**
		 * Optional content to display (defaults to identifier name)
		 */
		children?: Snippet;
	} = $props();

	// Contextmenu entries
	const contextmenu_entries = $derived(create_identifier_contextmenu(identifier));
</script>

<a
	class="identifier_link chip {identifier.kind}_identifier"
	href={identifier.api_url}
	{@attach contextmenu_attachment(contextmenu_entries)}
>
	{#if children}
		{@render children()}
	{:else}
		{identifier.name}
	{/if}
</a>

<style>
	.identifier_link {
		cursor: pointer;
		text-decoration: none;
		transition: opacity 0.15s;
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
	}
	.identifier_link:hover {
		opacity: 0.8;
	}
</style>

<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {pkg_context} from './pkg.svelte.js';
	import {contextmenu_attachment} from './contextmenu_state.svelte.js';
	import {create_identifier_contextmenu} from './identifier_contextmenu.js';

	const {
		name,
		children,
		class: class_prop = 'chip',
		...rest
	}: SvelteHTMLElements['a'] & {
		name: string;
	} = $props();

	const pkg = pkg_context.get();

	const identifier = $derived(pkg.lookup_identifier(name));

	const contextmenu_entries = $derived(
		identifier ? create_identifier_contextmenu(identifier) : undefined,
	);

	// TODO @many support full https:// url variants - automatic detection? pkg prop?
</script>

{#if identifier}
	<!-- TODO maybe colors per identifier.kind? -->
	<!-- TODO -next-line doesnt work in some cases? -->
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		{...rest}
		class="identifier_link {class_prop}"
		href={identifier.url_api}
		{@attach contextmenu_attachment(contextmenu_entries)}
	>
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

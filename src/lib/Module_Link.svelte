<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {pkg_context} from './pkg.svelte.js';
	import {contextmenu_attachment} from './contextmenu_state.svelte.js';
	import {create_module_contextmenu} from './module_contextmenu.js';

	const {
		module_path,
		children,
		class: class_prop = 'chip',
		...rest
	}: SvelteHTMLElements['a'] & {
		module_path: string; // TODO maybe rename?
	} = $props();

	const pkg = pkg_context.get();

	const module = $derived(pkg.lookup_module(module_path));

	const contextmenu_entries = $derived(module ? create_module_contextmenu(module) : undefined);

	// TODO @many support full https:// url variants - automatic detection? pkg prop?
</script>

{#if module}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		{...rest}
		class="module_link {class_prop}"
		href={module.url_api}
		{@attach contextmenu_attachment(contextmenu_entries)}
	>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
		{#if children}
			{@render children()}
		{:else}
			{module_path}
		{/if}
	</a>
{:else}
	<!-- Fallback to plain text if not found -->
	{#if children}
		{@render children()}
	{:else}
		{module_path}
	{/if}
{/if}

<script lang="ts">
	import type {Snippet} from 'svelte';
	import {lookup_declaration_by_name} from '$lib/api_data.js';
	import {pkg_context} from '$lib/pkg.js';
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

	const pkg = pkg_context.maybe_get();
	const result = $derived(lookup_declaration_by_name(name));
</script>

{#if result && pkg}
	<Declaration_Link
		decl={result.decl}
		module_path={result.module_path}
		pkg_name={pkg.package_json.name}
		repo_url={pkg.repo_url}
		homepage_url={pkg.homepage_url}
	>
		{#if children}
			{@render children()}
		{:else}
			{name}
		{/if}
	</Declaration_Link>
{:else}
	<!-- Fallback to plain text if not found or no context -->
	{#if children}
		{@render children()}
	{:else}
		{name}
	{/if}
{/if}

<script lang="ts">
	import type {Snippet} from 'svelte';
	import {lookup_declaration_by_name} from '$lib/api_data.js';
	import {api_context} from '$lib/api.js';
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

	const api = api_context.maybe_get();
	const result = $derived(lookup_declaration_by_name(name));
</script>

{#if result && api}
	<Declaration_Link
		decl={result.decl}
		module_path={result.module_path}
		pkg_name={api.pkg.package_json.name}
		repo_url={api.pkg.repo_url}
		homepage_url={api.pkg.homepage_url}
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

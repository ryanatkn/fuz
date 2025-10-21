<script lang="ts">
	import {lookup_declaration, get_module} from '$routes/docs/api/api_data.svelte.js';
	import {pkg_context} from '$lib/pkg.js';
	import Api_Page from '$lib/Api_Page.svelte';

	const {params} = $props();

	const pkg = pkg_context.get();

	const {module, identifier} = $derived(params);
	const decl = $derived(module && identifier ? lookup_declaration(module, identifier) : undefined);
	const mod = $derived(module ? get_module(module) : undefined);
	const module_path = $derived(mod?.path ?? module);
</script>

<svelte:head>
	{#if decl}
		<title>{decl.name} - {pkg.package_json.name} API Documentation</title>
	{:else}
		<title>Not Found - {pkg.package_json.name} API Documentation</title>
	{/if}
</svelte:head>

{#if decl && module_path}
	<Api_Page {decl} {module_path} repo_url={pkg.repo_url} />
{:else}
	<div class="not_found pane p_md">
		<h1>Declaration Not Found</h1>
		<p>
			Could not find declaration <code>{identifier}</code> in module <code>{module}</code>.
		</p>
		<p>
			<a href="/docs/api">← Back to API index</a>
		</p>
	</div>
{/if}

<style>
	.not_found {
		max-width: var(--max_width, var(--distance_sm));
		margin: var(--space_lg) auto;
	}
	.not_found h1 {
		margin-top: 0;
	}
	.not_found code {
		font-family: var(--font_family_mono);
		background-color: var(--bg_3);
		padding: 2px 6px;
		border-radius: var(--border_radius_xs);
	}
</style>

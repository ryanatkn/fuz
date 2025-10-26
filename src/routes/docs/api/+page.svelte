<script lang="ts">
	import {get_all_declarations, search_declarations} from '$lib/api_data.js';
	import {api_context} from '$lib/api.js';
	import {pkg_context} from '$lib/pkg.js';
	import type {Src_Json} from '$lib/src_json.js';
	import Api_Page from '$lib/Api_Page.svelte';

	const pkg = pkg_context.get();

	// Set up API context for child components
	api_context.set({
		pkg,
		src_json: pkg.src_json as Src_Json,
	});

	let search_query = $state('');

	const all_declarations = $derived(get_all_declarations());

	// Search results
	const filtered_declarations = $derived.by(() => {
		if (!search_query.trim()) return all_declarations;
		return search_declarations(search_query);
	});

	// Group by kind (component, function, type, etc.)
	const grouped_by_kind = $derived.by(() => {
		const groups: Map<string, Array<{module_path: string; decl: any; module: any}>> = new Map(); // eslint-disable-line svelte/prefer-svelte-reactivity

		for (const item of filtered_declarations) {
			const kind = item.decl.kind || 'other';
			const existing = groups.get(kind) ?? [];
			existing.push(item);
			groups.set(kind, existing);
		}

		return groups;
	});
</script>

<svelte:head>
	<title>API Documentation - {pkg.package_json.name}</title>
</svelte:head>

<div class="api_page">
	<header class="header">
		<h1>API Documentation</h1>
		<p class="subtitle">{pkg.package_json.description}</p>

		<!-- Search -->
		<div class="search_box">
			<input
				type="text"
				class="search_input"
				placeholder="Search declarations..."
				bind:value={search_query}
			/>
		</div>

		<div class="stats">
			<span class="stat">
				{all_declarations.length} declarations
			</span>
			{#if search_query}
				<span class="stat">
					{filtered_declarations.length} results
				</span>
			{/if}
		</div>
	</header>

	{#if grouped_by_kind.size === 0}
		<div class="no_results pane p_md">
			<p>No declarations found matching "{search_query}"</p>
		</div>
	{:else}
		<!-- Render all declarations with anchor IDs -->
		{#each [...grouped_by_kind.entries()] as [kind, items] (kind)}
			<section class="kind_section">
				<h2 class="kind_header">
					<span class="kind_name">{kind}s</span>
					<span class="count">{items.length}</span>
				</h2>

				{#each items as { decl, module_path } (decl.name)}
					<article id={decl.name} class="declaration_detail">
						<Api_Page {decl} {module_path} repo_url={pkg.repo_url} />
					</article>
				{/each}
			</section>
		{/each}
	{/if}
</div>

<style>
	.api_page {
		max-width: var(--max_width, var(--distance_md));
		padding: var(--space_md);
	}

	.header {
		margin-bottom: var(--space_xl);
		border-bottom: var(--border_width) solid var(--border_color);
		padding-bottom: var(--space_md);
		position: sticky;
		top: 0;
		background-color: var(--bg_1);
		z-index: 10;
	}

	.header h1 {
		margin: 0 0 var(--space_xs) 0;
		font-size: var(--font_size_xl2);
	}

	.subtitle {
		color: var(--text_color_3);
		margin: 0 0 var(--space_md) 0;
	}

	.search_box {
		margin-bottom: var(--space_md);
	}

	.search_input {
		width: 100%;
		max-width: 500px;
		padding: var(--space_sm);
		font-size: var(--font_size_md);
		font-family: var(--font_family);
		border: var(--border_width) solid var(--border_color);
		border-radius: var(--border_radius_xs);
		background-color: var(--bg_2);
		color: var(--text_color);
	}

	.search_input:focus {
		outline: none;
		border-color: var(--color_a_5);
	}

	.stats {
		display: flex;
		gap: var(--space_md);
		font-size: var(--font_size_sm);
		color: var(--text_color_3);
	}

	.stat {
		padding: var(--space_xs2) var(--space_xs);
	}

	.no_results {
		background-color: var(--bg_2);
		border-radius: var(--border_radius_xs);
	}

	.kind_section {
		margin-bottom: var(--space_xl);
	}

	.kind_header {
		display: flex;
		align-items: baseline;
		gap: var(--space_sm);
		margin: 0 0 var(--space_lg) 0;
		font-size: var(--font_size_xl);
		padding-bottom: var(--space_sm);
		border-bottom: var(--border_width) solid var(--border_color);
	}

	.kind_name {
		color: var(--text_color_2);
		text-transform: capitalize;
	}

	.count {
		font-size: var(--font_size_sm);
		color: var(--text_color_3);
		font-weight: normal;
	}

	.declaration_detail {
		margin-bottom: var(--space_xl);
		padding: var(--space_md);
		border: var(--border_width) solid var(--border_color);
		border-radius: var(--border_radius_sm);
		background-color: var(--bg_2);
		scroll-margin-top: calc(var(--space_xl) * 2);
	}

	.declaration_detail:target {
		border-color: var(--color_a_5);
		box-shadow: 0 0 0 2px var(--color_a_2);
	}
</style>

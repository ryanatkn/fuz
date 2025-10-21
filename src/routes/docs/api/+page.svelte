<script lang="ts">
	import {get_all_modules, get_all_declarations, search_declarations} from './api_data.svelte.js';
	import {pkg_context} from '$lib/pkg.js';
	import Declaration_Link from '$lib/Declaration_Link.svelte';

	const pkg = pkg_context.get();

	let search_query = $state('');

	const all_modules = $derived(get_all_modules());
	const all_declarations = $derived(get_all_declarations());

	// Search results
	const filtered_declarations = $derived.by(() => {
		if (!search_query.trim()) return all_declarations;
		return search_declarations(search_query);
	});

	// Group by module
	const grouped = $derived.by(() => {
		const groups = new Map<string, Array<{module_path: string; decl: any; module: any}>>();

		for (const item of filtered_declarations) {
			const existing = groups.get(item.module_path) ?? [];
			existing.push(item);
			groups.set(item.module_path, existing);
		}

		return groups;
	});
</script>

<svelte:head>
	<title>API Documentation - {pkg.package_json.name}</title>
</svelte:head>

<div class="api_index">
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
				{all_modules.length} modules
			</span>
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

	{#if grouped.size === 0}
		<div class="no_results pane p_md">
			<p>No declarations found matching "{search_query}"</p>
		</div>
	{:else}
		<div class="modules_list">
			{#each [...grouped.entries()] as [module_path, items] (module_path)}
				{@const module_name = module_path.replace(/^\.\//, '')}
				<section class="module_section">
					<h2 class="module_header">
						<a
							class="module_link"
							href={`/docs/api/${module_name.replace(/\.(ts|js|svelte)$/, '')}`}
						>
							{module_name}
						</a>
						<span class="count">{items.length}</span>
					</h2>

					<ul class="declarations_list unstyled">
						{#each items as { decl, module_path } (decl.name)}
							<li class="declaration_item">
								<Declaration_Link
									{decl}
									{module_path}
									pkg_name={pkg.package_json.name}
									repo_url={pkg.repo_url}
									homepage_url={pkg.homepage_url}
								/>
								{#if decl.summary}
									<span class="summary">{decl.summary}</span>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	{/if}
</div>

<style>
	.api_index {
		max-width: var(--max_width, var(--distance_md));
		padding: var(--space_md);
	}

	.header {
		margin-bottom: var(--space_lg);
		border-bottom: var(--border_width) solid var(--border_color);
		padding-bottom: var(--space_md);
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

	.modules_list {
		display: flex;
		flex-direction: column;
		gap: var(--space_lg);
	}

	.module_section {
		border: var(--border_width) solid var(--border_color);
		border-radius: var(--border_radius_sm);
		padding: var(--space_md);
		background-color: var(--bg_2);
	}

	.module_header {
		display: flex;
		align-items: baseline;
		gap: var(--space_sm);
		margin: 0 0 var(--space_md) 0;
		font-size: var(--font_size_lg);
	}

	.module_link {
		font-family: var(--font_family_mono);
		color: var(--text_color_2);
		text-decoration: none;
		transition: color 0.15s;
	}

	.module_link:hover {
		color: var(--color_a_5);
	}

	.count {
		font-size: var(--font_size_sm);
		color: var(--text_color_3);
		font-weight: normal;
	}

	.declarations_list {
		display: flex;
		flex-direction: column;
		gap: var(--space_sm);
	}

	.declaration_item {
		display: flex;
		align-items: baseline;
		gap: var(--space_sm);
		padding: var(--space_xs);
		border-radius: var(--border_radius_xs);
		transition: background-color 0.15s;
	}

	.declaration_item:hover {
		background-color: var(--bg_3);
	}

	.summary {
		font-size: var(--font_size_sm);
		color: var(--text_color_3);
		flex: 1;
	}
</style>

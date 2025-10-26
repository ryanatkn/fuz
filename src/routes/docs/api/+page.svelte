<script lang="ts">
	import {get_all_declarations, search_declarations} from '$lib/api_data.js';
	import {api_context} from '$lib/api.js';
	import {pkg_context} from '$lib/pkg.js';
	import type {Src_Json} from '$lib/src_json.js';
	import Api_Page from '$lib/Api_Page.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	// Set up API context for child components
	api_context.set({
		pkg,
		src_json: pkg.src_json as Src_Json,
	});

	let search_query = $state('');

	const all_declarations = $derived(get_all_declarations());

	// Search and sort alphabetically
	const sorted_declarations = $derived.by(() => {
		const items = search_query.trim() ? search_declarations(search_query) : all_declarations;
		return items.sort((a, b) => a.decl.name.localeCompare(b.decl.name));
	});
</script>

<svelte:head>
	<title>API Documentation - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	<header class="header">
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
					{sorted_declarations.length} results
				</span>
			{/if}
		</div>
	</header>

	{#if sorted_declarations.length === 0}
		<div class="no_results pane p_md">
			<p>No declarations found matching "{search_query}"</p>
		</div>
	{:else}
		<!-- Render all declarations alphabetically -->
		{#each sorted_declarations as { decl, module_path } (decl.name)}
			<Tome_Section>
				<Tome_Section_Header text={decl.name}>
					{decl.name}
					{#if decl.kind}
						<span class="kind_badge">{decl.kind}</span>
					{/if}
				</Tome_Section_Header>

				<article id={decl.name} class="declaration_detail">
					<Api_Page {decl} {module_path} repo_url={pkg.repo_url} />
				</article>
			</Tome_Section>
		{/each}
	{/if}
</Tome_Content>

<style>
	.header {
		margin-bottom: var(--space_xl);
		border-bottom: var(--border_width) solid var(--border_color);
		padding-bottom: var(--space_md);
		position: sticky;
		top: 0;
		background-color: var(--bg_1);
		z-index: 10;
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

	.kind_badge {
		margin-left: var(--space_sm);
		font-size: var(--font_size_xs);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		background-color: var(--bg_3);
		padding: 2px 8px;
		border-radius: var(--border_radius_xs);
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

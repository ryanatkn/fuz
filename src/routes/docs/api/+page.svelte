<script lang="ts">
	import {pkg_context} from '$lib/pkg.svelte.js';
	import Identifier_Detail from '$lib/Identifier_Detail.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	let search_query = $state('');

	const all_identifiers = $derived(pkg.identifiers);

	// Search and sort alphabetically
	const sorted_identifiers = $derived.by(() => {
		const items = search_query.trim() ? pkg.search_identifiers(search_query) : all_identifiers;
		return items.sort((a, b) => a.name.localeCompare(b.name));
	});
</script>

<svelte:head>
	<title>API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	{#snippet header()}
		<header class="page_header">
			<h1 class="mt_xl4">API docs</h1>
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
					{all_identifiers.length} identifiers
				</span>
				{#if search_query}
					<span class="stat">
						{sorted_identifiers.length} results
					</span>
				{/if}
			</div>
		</header>
	{/snippet}

	{#if sorted_identifiers.length === 0}
		<div class="no_results pane p_md">
			<p>No identifiers found matching "{search_query}"</p>
		</div>
	{:else}
		<!-- Render all identifiers alphabetically -->
		{#each sorted_identifiers as identifier (identifier.name)}
			<Tome_Section>
				<Tome_Section_Header text={identifier.name} />
				<article id={identifier.name} class="declaration_detail">
					<Identifier_Detail {identifier} />
				</article>
			</Tome_Section>
		{/each}
	{/if}
</Tome_Content>

<style>
	.page_header {
		margin-bottom: var(--space_xl);
		border-bottom: var(--border_width) solid var(--border_color);
		padding-bottom: var(--space_md);
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
	}
</style>

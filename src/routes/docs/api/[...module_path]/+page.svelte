<script lang="ts">
	import {pkg_context} from '$lib/pkg.svelte.js';
	import Identifier_Detail from '$lib/Identifier_Detail.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Docs_Search from '$lib/Docs_Search.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import Mdz from '$lib/Mdz.svelte';

	const {params} = $props();

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	// extract module path from params
	const module_path_param = $derived(params.module_path ?? '');

	// find the module using the lookup helper
	const module = $derived(pkg.lookup_module(module_path_param));

	// fallback for 404
	const module_name = $derived(module?.path || '[missing module]');

	let search_query = $state('');

	const all_identifiers = $derived(module?.identifiers ?? []);

	// Search with multi-term AND logic and sort alphabetically
	const sorted_identifiers = $derived.by(() => {
		if (!module) return [];
		const trimmed_query = search_query.trim();
		if (!trimmed_query) return all_identifiers.sort((a, b) => a.name.localeCompare(b.name));

		const terms = trimmed_query.toLowerCase().split(/\s+/);

		// filter: include identifier only if ALL terms match (each term can match any field)
		const items = all_identifiers.filter((id) => {
			const name_lower = id.name.toLowerCase();
			const kind_lower = id.kind.toLowerCase();
			const module_path_lower = id.module_path.toLowerCase();

			return terms.every(
				(term) =>
					name_lower.includes(term) ||
					kind_lower.includes(term) ||
					module_path_lower.includes(term),
			);
		});

		return items.sort((a, b) => a.name.localeCompare(b.name));
	});

	// GitHub source URL for the module
	const source_url = $derived(module?.url_github);

	// TODO BLOCK simplify like Docs, maybe `Docs_Api_Module`?
</script>

<svelte:head>
	<title>{module_name} - API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	{#snippet header()}
		<h1 class="mt_xl4">{module_name}</h1>
	{/snippet}

	{#if !module}
		<section>
			<p>Module not found: {module_path_param}</p>
		</section>
	{:else}
		<!-- Identifiers Section -->
		<Tome_Section>
			<Tome_Section_Header text="Identifiers" />

			<section>
				{#if module?.module_comment}
					<blockquote>
						<Mdz content={module.module_comment} />
					</blockquote>
				{/if}

				{#if all_identifiers.length > 1}
					<Docs_Search
						placeholder="search identifiers in this module..."
						total_count={all_identifiers.length}
						result_count={sorted_identifiers.length}
						bind:search_query
					/>
				{/if}

				{#if source_url}
					<p>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={source_url} class="chip" target="_blank" rel="noopener">view source</a>
					</p>
				{/if}
			</section>

			{#each sorted_identifiers as identifier (identifier.name)}
				<Tome_Section>
					<Tome_Section_Header text={identifier.name} />
					<article id={identifier.name}>
						<Identifier_Detail {identifier} />
					</article>
				</Tome_Section>
			{:else}
				<section>
					{#if search_query}
						<p>No identifiers found matching "{search_query}"</p>
					{:else}
						<p>No identifiers in this module</p>
					{/if}
				</section>
			{/each}
		</Tome_Section>

		<!-- Depends on Section -->
		{#if module.dependencies}
			<Tome_Section>
				<Tome_Section_Header text="Depends on" />
				<ul>
					{#each module.dependencies as dep_path (dep_path)}
						<li>
							<Module_Link module_path={dep_path} />
						</li>
					{/each}
				</ul>
			</Tome_Section>
		{/if}

		<!-- Imported by Section -->
		{#if module.dependents}
			<Tome_Section>
				<Tome_Section_Header text="Imported by" />
				<ul>
					{#each module.dependents as dependent_path (dependent_path)}
						<li>
							<Module_Link module_path={dependent_path} />
						</li>
					{/each}
				</ul>
			</Tome_Section>
		{/if}
	{/if}
</Tome_Content>

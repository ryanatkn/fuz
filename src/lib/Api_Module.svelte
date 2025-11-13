<script lang="ts">
	import {pkg_context, type Pkg} from '$lib/pkg.svelte.js';
	import {get_tome_by_name, type Tome} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Docs_Search from '$lib/Docs_Search.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import Mdz from '$lib/Mdz.svelte';
	import Api_Identifier_List from '$lib/Api_Identifier_List.svelte';
	import {create_module_identifier_search} from '$lib/api_search.svelte.js';

	interface Props {
		/**
		 * The module path parameter from the route (e.g., "lib/Button.svelte").
		 */
		module_path: string | Array<string>;
		/**
		 * The package instance to render API docs for.
		 * Defaults to getting from pkg_context.
		 */
		pkg?: Pkg;
		/**
		 * The tome for the API docs page.
		 * Defaults to looking up the 'api' tome.
		 */
		tome?: Tome;
	}

	const {
		module_path: module_path_param,
		pkg = pkg_context.get(),
		tome = get_tome_by_name('api'),
	}: Props = $props();

	// normalize module_path to string (could be array from [...module_path] route param)
	const module_path = $derived(
		Array.isArray(module_path_param) ? module_path_param.join('/') : module_path_param,
	);

	// find the module using the lookup helper
	const module = $derived(pkg.lookup_module(module_path));

	// fallback for 404
	const module_name = $derived(module?.path || '[missing module]');

	const search = $derived(create_module_identifier_search(module?.identifiers ?? []));

	// GitHub source URL for the module
	const source_url = $derived(module?.url_github);

	// TODO identifiers are h3 here, but h2 on the api listing
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
			<p>Module not found: {module_path}</p>
		</section>
	{:else}
		<!-- Identifiers Section -->
		<Tome_Section>
			<Tome_Section_Header text="Identifiers" />

			<section>
				{#if module.module_comment}
					<blockquote>
						<Mdz content={module.module_comment} />
					</blockquote>
				{/if}

				{#if search.all.length > 1}
					<Docs_Search
						placeholder="search identifiers in this module..."
						total_count={search.all.length}
						result_count={search.filtered.length}
						bind:search_query={search.query}
					/>
				{/if}

				{#if source_url}
					<p>
						<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
						<a href={source_url} class="chip" target="_blank" rel="noopener">view source</a>
					</p>
				{/if}
			</section>

			<Api_Identifier_List identifiers={search.filtered} search_query={search.query} />
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

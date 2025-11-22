<script lang="ts">
	import {pkg_context, type Pkg} from './pkg.svelte.js';
	import {get_tome_by_name, type Tome} from './tome.js';
	import Tome_Content from './Tome_Content.svelte';
	import Tome_Section from './Tome_Section.svelte';
	import Tome_Link from './Tome_Link.svelte';
	import Tome_Section_Header from './Tome_Section_Header.svelte';
	import Docs_Search from './Docs_Search.svelte';
	import Api_Identifier_List from './Api_Identifier_List.svelte';
	import {create_identifier_search} from './api_search.svelte.js';

	interface Props {
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
		/**
		 * Whether to show minimal content (just a link to full API docs).
		 * Used when the API index is shown on a parent docs page.
		 */
		minimal?: boolean;
	}

	const {
		pkg = pkg_context.get(),
		tome = get_tome_by_name('api'),
		minimal = false,
	}: Props = $props();

	const search = create_identifier_search(pkg);
</script>

<svelte:head>
	<title>API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
	{#if minimal}
		<section>
			<p>Browse the full <Tome_Link name="api" /> docs.</p>
		</section>
	{:else}
		<Tome_Section>
			<Tome_Section_Header text="Identifiers" />

			<section>
				<p>{pkg.package_json.description}</p>

				{#if search.all.length > 1}
					<Docs_Search
						total_count={search.all.length}
						result_count={search.filtered.length}
						bind:search_query={search.query}
					/>
				{/if}
			</section>

			<Api_Identifier_List identifiers={search.filtered} search_query={search.query} />
		</Tome_Section>
	{/if}
</Tome_Content>

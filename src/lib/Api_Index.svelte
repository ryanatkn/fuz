<script lang="ts">
	import {pkg_context, type Pkg} from '$lib/pkg.svelte.js';
	import {get_tome_by_name, type Tome} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Docs_Search from '$lib/Docs_Search.svelte';
	import Api_Identifier_List from '$lib/Api_Identifier_List.svelte';
	import {create_identifier_search} from '$lib/api_search.svelte.js';

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
	}

	const {pkg = pkg_context.get(), tome = get_tome_by_name('api')}: Props = $props();

	const search = create_identifier_search(pkg);
</script>

<svelte:head>
	<title>API docs - {pkg.package_json.name}</title>
</svelte:head>

<Tome_Content {tome}>
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
</Tome_Content>

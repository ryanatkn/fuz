<script lang="ts">
	import {page} from '$app/state';
	import {resolve} from '$app/paths';
	import {pkg_context} from '$lib/pkg.svelte.js';
	import Identifier_Detail from '$lib/Identifier_Detail.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Module_Search from '$routes/docs/api/Module_Search.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';

	const pkg = pkg_context.get();
	const tome = get_tome_by_name('api');

	const at_root = $derived(page.url.pathname === resolve('/docs'));

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
	{#if at_root}
		<section>
			<p>Browse the full <Tome_Link name="api" /> docs.</p>
		</section>
	{:else}
		<section>
			<p>{pkg.package_json.description}</p>

			{#if all_identifiers.length > 1}
				<Module_Search
					placeholder="search identifiers..."
					total_count={all_identifiers.length}
					result_count={sorted_identifiers.length}
					bind:search_query
				/>
			{/if}
		</section>

		{#if sorted_identifiers.length === 0}
			<section>
				<p>No identifiers found matching "{search_query}"</p>
			</section>
		{:else}
			{#each sorted_identifiers as identifier (identifier.name)}
				<Tome_Section>
					<Tome_Section_Header text={identifier.name} />
					<article id={identifier.name}>
						<Identifier_Detail {identifier} />
					</article>
				</Tome_Section>
			{/each}
		{/if}
	{/if}
</Tome_Content>

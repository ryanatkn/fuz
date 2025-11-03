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
	<section>
		<p>{pkg.package_json.description}</p>

		<input type="search" placeholder="Search declarations..." bind:value={search_query} />

		<small class="display_block mt_sm">
			{all_identifiers.length} identifiers
			{#if search_query}
				· {sorted_identifiers.length} results
			{/if}
		</small>
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
</Tome_Content>

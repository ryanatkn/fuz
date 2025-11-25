<script lang="ts">
	import type {Identifier} from './identifier.svelte.js';
	import IdentifierDetail from './IdentifierDetail.svelte';
	import TomeSection from './TomeSection.svelte';
	import TomeSectionHeader from './TomeSectionHeader.svelte';

	const {
		identifiers,
		search_query = '',
	}: {
		identifiers: Array<Identifier>;
		search_query?: string;
	} = $props();
</script>

{#if identifiers.length === 0}
	<section>
		{#if search_query}
			<p>No identifiers found matching "{search_query}"</p>
		{:else}
			<p>No identifiers</p>
		{/if}
	</section>
{:else}
	{#each identifiers as identifier (`${identifier.module_path}:${identifier.name}`)}
		<TomeSection>
			<TomeSectionHeader text={identifier.name}>
				<div class="word_break_break_all">{identifier.name}</div>
			</TomeSectionHeader>
			<article id={identifier.name}>
				<IdentifierDetail {identifier} />
			</article>
		</TomeSection>
	{/each}
{/if}

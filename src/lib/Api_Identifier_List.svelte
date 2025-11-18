<script lang="ts">
	import type {Identifier} from '$lib/identifier.svelte.js';
	import Identifier_Detail from '$lib/Identifier_Detail.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	interface Props {
		identifiers: Array<Identifier>;
		search_query?: string;
	}

	const {identifiers, search_query = ''}: Props = $props();
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
		<Tome_Section>
			<Tome_Section_Header text={identifier.name}>
				<div class="word_break_break_all">{identifier.name}</div>
			</Tome_Section_Header>
			<article id={identifier.name}>
				<Identifier_Detail {identifier} />
			</article>
		</Tome_Section>
	{/each}
{/if}

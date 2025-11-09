<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	let {
		placeholder = 'Search identifiers...',
		total_count,
		result_count,
		search_query = $bindable(),
		...rest
	}: SvelteHTMLElements['input'] & {
		placeholder?: string;
		total_count: number;
		result_count?: number;
		search_query: string;
	} = $props();

	const total_text = $derived(
		total_count === 1 ? `${total_count} identifier` : `${total_count} identifiers`,
	);
	const result_text = $derived(
		result_count === 1 ? `${result_count} result` : `${result_count} results`,
	);
	const has_search = $derived(search_query.trim().length > 0);
</script>

<input {...rest} type="search" {placeholder} bind:value={search_query} />

<p class="mt_sm">
	{total_text}
	{#if has_search && result_count !== undefined}
		· {result_text}
	{/if}
</p>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	let {
		variant = 'primary',
		loading = false,
		children,
		...attrs
	}: SvelteHTMLElements['button'] & {
		/** The variant style */
		variant?: 'primary' | 'secondary';
		/** Loading state */
		loading?: boolean;
		/** Content snippet */
		children?: Snippet;
	} = $props();
</script>

<button class="button-{variant}" disabled={loading} {...attrs}>
	{#if loading}Loading...{:else if children}{@render children()}{/if}
</button>

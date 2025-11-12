<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {HTMLButtonAttributes} from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		/** The variant style */
		variant?: 'primary' | 'secondary';
		/** Loading state */
		loading?: boolean;
		/** Content snippet */
		children?: Snippet;
	}

	let {variant = 'primary', loading = false, children, ...attrs}: Props = $props();
</script>

<button class="button-{variant}" disabled={loading} {...attrs}>
	{#if loading}Loading...{:else if children}{@render children()}{/if}
</button>

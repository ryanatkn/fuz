<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {HTMLDetailsAttributes} from 'svelte/elements';

	/**
	 * Like `details` but lazy by default, which can improve performance in some cases.
	 * A downside is that ctrl+f won't find content inside `Details` when closed.
	 * Prefer `details` when you don't need the lazy behavior.
	 */
	interface Props {
		lazy?: boolean;
		open?: boolean | null | undefined;
		attrs?: HTMLDetailsAttributes;
		summary: Snippet;
		children: Snippet;
	}

	// TODO BLOCK @multiple just disable this eslint rule when we use bindings? would prefer not to disable for all Svelte so let continues to signal reassigment
	let {lazy = true, open, attrs, summary, children} = $props<Props>(); // eslint-disable-line prefer-const
</script>

<!-- TODO svelte5 splat attrs -->
<details {...attrs} bind:open>
	{@render summary()}
	{#if lazy}
		{#if open}
			{@render children()}
		{/if}
	{:else}
		{@render children()}
	{/if}
</details>

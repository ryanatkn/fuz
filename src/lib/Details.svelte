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
		attrs?: HTMLDetailsAttributes;
		summary: Snippet;
		children: Snippet;
	}

	// TODO BLOCK what pattern for type declaration?
	const {lazy = true, attrs, summary, children}: Props = $props();
	let {open}: {open?: boolean | null | undefined} = $props.bindable();
</script>

<!-- TODO svelte5 splat attrs -->
<details {...attrs} bind:open>
	{@render summary()}
	{#if !lazy || open}
		{@render children()}
	{/if}
</details>

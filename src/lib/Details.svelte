<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {slide} from 'svelte/transition';

	/**
	 * Like `details` but lazily renders the children by default,
	 * which enables transitions and can improve performance in some cases.
	 * A downside is that ctrl+f won't find content inside `Details` when closed.
	 */
	interface Props {
		open?: boolean;
		lazy?: boolean;
		attrs?: SvelteHTMLElements['details'];
		summary: Snippet;
		summary_attrs?: SvelteHTMLElements['summary'];
		children: Snippet;
	}

	let {open = $bindable(), lazy = true, attrs, summary_attrs, summary, children}: Props = $props(); // eslint-disable-line prefer-const

	// TODO why doesn't the slide out work?
</script>

<details {...attrs} bind:open>
	<summary {...summary_attrs}>{@render summary()}</summary>
	{#if lazy}
		{#if open}
			<div transition:slide>{@render children()}</div>
		{/if}
	{:else}
		{@render children()}
	{/if}
</details>

<script lang="ts" generics="T extends string = 'span'">
	import type {Snippet} from 'svelte';
	import {contextmenu_attachment} from '$lib/contextmenu_state.svelte.js';
	import type {SvelteHTMLElements} from 'svelte/elements';

	const {
		tag = 'span' as T, // TODO why is casting needed?
		attrs,
		entries,
		children,
	}: {
		// TODO custom tag?
		tag?: T;
		attrs?: SvelteHTMLElements[T];
		entries: Snippet;
		children: Snippet;
	} = $props();

	// Ideally this wouldn't have a wrapper element,
	// but I don't see a decent way to map DOM click events
	// from anywhere to the Svelte context without gross overhead.
</script>

<svelte:element
	this={tag}
	class="display_contents"
	{...attrs}
	{@attach contextmenu_attachment(entries)}>{@render children()}</svelte:element
>

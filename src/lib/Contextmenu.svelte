<script lang="ts" generics="T extends string = 'span'">
	import type {Snippet} from 'svelte';
	import {contextmenu_action} from '$lib/contextmenu_state.svelte.js';
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

	// TODO probably do a writeup comparing this to the action syntax,
	// but probably wait until Svelte 5 has the successor to actions
</script>

<svelte:element this={tag} class="display_contents" {...attrs} use:contextmenu_action={entries}
	>{@render children()}</svelte:element
>

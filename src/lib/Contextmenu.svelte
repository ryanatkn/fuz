<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {contextmenu_action} from '$lib/contextmenu_state.svelte.js';

	interface Props {
		attrs?: SvelteHTMLElements['span'] | undefined;
		entries: Snippet;
		children: Snippet;
	}

	const {attrs, entries, children}: Props = $props();

	// Ideally this wouldn't have a wrapper element,
	// but I don't see a decent way to map DOM click events
	// from anywhere to the Svelte context without gross overhead.

	// TODO probably do a writeup comparing this to the action syntax,
	// but probably wait until Svelte 5 has the successor to actions
</script>

<span class="display_contents" {...attrs} use:contextmenu_action={entries}
	>{@render children()}</span
>

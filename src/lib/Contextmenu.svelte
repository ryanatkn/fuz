<script lang="ts">
	import type {Snippet} from 'svelte';
	import {contextmenu_action} from '$lib/contextmenu.svelte.js';

	interface Props {
		entries: Snippet;
		children: Snippet;
	}

	const {entries, children}: Props = $props();

	// Ideally this wouldn't have a wrapper element,
	// but I don't see a decent way to map from click events to the Svelte context.
</script>

<div use:contextmenu_action={entries} class="display_contents">{@render children()}</div>

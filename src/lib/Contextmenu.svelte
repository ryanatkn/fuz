<script lang="ts">
	import type {Snippet} from 'svelte';
	import {get_contextmenu} from '$lib/contextmenu.svelte.js';

	interface Props {
		entries: Snippet;
		children: Snippet;
	}

	const {entries, children} = $props<Props>();

	const contextmenu = get_contextmenu(); // TODO BLOCK use?

	// TODO BLOCK remove the wrapper element and action for context
</script>

<div use:contextmenu.action={entries} class="display_contents">
	{@render children()}
</div>

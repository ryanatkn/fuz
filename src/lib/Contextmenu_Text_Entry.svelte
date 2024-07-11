<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import type {Contextmenu_Run} from '$lib/contextmenu_helpers.svelte.js';

	interface Props {
		run: Contextmenu_Run;
		content: string; // TODO @many rethink this API
		icon: string; // TODO @many rethink this API
	}

	const {run, content, icon: icon_text}: Props = $props();

	// TODO consider making this the implicit default entry, so consumers can simply declare `{run, content}`
</script>

<Contextmenu_Entry {run}>
	{#snippet icon()}{icon_text}{/snippet}
	{content}
</Contextmenu_Entry>

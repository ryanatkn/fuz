<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import type {Contextmenu_Run} from '$lib/contextmenu.svelte.js';

	interface Props {
		run: Contextmenu_Run;
		icon: string; // TODO @multiple think about this API, maybe make a snippet or both? maybe just a snippet after changing from actions to nested components
		content: string; // TODO @multiple think about this API, maybe make a snippet or both? maybe just a snippet after changing from actions to nested components
	}

	// TODO @multiple remove the alias
	const {run, content, icon: icon_text} = $props<Props>();

	// TODO consider making this the implicit default entry, so consumers can simply declare `{run, content}`
</script>

<Contextmenu_Entry {run}>
	{#snippet icon()}{icon_text}{/snippet}
	{content}
</Contextmenu_Entry>

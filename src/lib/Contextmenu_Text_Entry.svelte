<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import type {Contextmenu_Run} from '$lib/contextmenu.js';

	interface Props {
		run: Contextmenu_Run;
		icon: string; // TODO @multiple think about this API, maybe make a snippet or both? maybe just a snippet after changing from actions to nested components
		content: string; // TODO @multiple think about this API, maybe make a snippet or both? maybe just a snippet after changing from actions to nested components
	}

	const {run, content, icon} = $props<Props>();

	// TODO consider making this the implicit default entry, so consumers can simply declare `{run, content}`
</script>

<Contextmenu_Entry {run}>
	<svelte:fragment slot="icon">{icon}</svelte:fragment>
	{content}
</Contextmenu_Entry>

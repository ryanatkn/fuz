<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import type {Contextmenu_Run} from '$lib/contextmenu.js';

	// TODO consider making this the implicit default entry, so consumers can simply declare `{run, content}`

	export let content: string;
	export let icon: string;
	export let run: Contextmenu_Run;
</script>

<Contextmenu_Entry {run}>
	<svelte:fragment slot="icon">{icon}</svelte:fragment>
	{content}
</Contextmenu_Entry>

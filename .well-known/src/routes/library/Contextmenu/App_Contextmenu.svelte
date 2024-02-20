<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';

	export let toggle_about_dialog: () => void;
</script>

<Contextmenu_Entry run={toggle_about_dialog}>
	<svelte:fragment slot="icon">?</svelte:fragment>
	About
</Contextmenu_Entry>

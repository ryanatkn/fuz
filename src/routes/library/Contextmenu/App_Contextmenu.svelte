<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import GithubLogo from '$lib/Github_Logo.svelte';

	export let toggle_about_dialog: () => void;
</script>

<Contextmenu_Link_Entry href="https://github.com/ryanatkn/fuz"
	>{#snippet icon()}<GithubLogo size="var(--icon_size_xs)" />{/snippet}Source code</Contextmenu_Link_Entry
>
<Contextmenu_Entry run={toggle_about_dialog}>
	<svelte:fragment slot="icon">?</svelte:fragment>
	About
</Contextmenu_Entry>

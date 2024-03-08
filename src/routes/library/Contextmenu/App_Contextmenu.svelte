<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import GithubLogo from '$lib/Github_Logo.svelte';

	interface Props {
		toggle_about_dialog: () => void;
	}

	const {toggle_about_dialog}: Props = $props();
</script>

<Contextmenu_Link_Entry href="https://github.com/ryanatkn/fuz"
	>{#snippet icon()}<GithubLogo size="var(--icon_size_xs)" />{/snippet}Source code</Contextmenu_Link_Entry
>
<Contextmenu_Entry run={toggle_about_dialog}>
	{#snippet icon()}?{/snippet}
	About
</Contextmenu_Entry>

<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import Contextmenu_Separator from '$lib/Contextmenu_Separator.svelte';
	import Svg from '$lib/Svg.svelte';
	import {github_logo} from '$lib/logos.js';

	const {
		toggle_about_dialog,
	}: {
		toggle_about_dialog: () => void;
	} = $props();
</script>

<Contextmenu_Link_Entry href="https://github.com/ryanatkn/fuz">
	{#snippet icon()}<Svg data={github_logo} size="var(--icon_size_xs)" />{/snippet}
	Source code
</Contextmenu_Link_Entry>
<Contextmenu_Separator />
<Contextmenu_Entry run={toggle_about_dialog}>
	{#snippet icon()}?{/snippet}
	About
</Contextmenu_Entry>

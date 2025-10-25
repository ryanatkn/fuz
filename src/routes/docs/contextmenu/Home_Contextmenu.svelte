<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import Contextmenu_Separator from '$lib/Contextmenu_Separator.svelte';
	import {to_cats_label, type Cat, type History_Item} from '$routes/docs/contextmenu/helpers.js';
	import Cat_Contextmenu from '$routes/docs/contextmenu/Cat_Contextmenu.svelte';

	interface Props {
		home_cats: Array<Cat>;
		adventure_cats: Array<Cat>;
		act: (item: History_Item) => void;
	}

	const {home_cats, adventure_cats, act}: Props = $props();

	const cat_to_call_home = $derived(to_cats_label(adventure_cats));
</script>

<Contextmenu_Submenu>
	{#snippet icon()}🏠{/snippet}
	home
	{#snippet menu()}
		{#if cat_to_call_home}
			<Contextmenu_Entry run={() => act({type: 'call_cats_home'})}>
				{#snippet icon()}🐈‍⬛{/snippet}
				call
			</Contextmenu_Entry>
			<Contextmenu_Separator />
		{/if}
		{#each home_cats as cat (cat.name)}
			<Cat_Contextmenu name={cat.name} icon={cat.icon} position={cat.position} {act} />
		{/each}
		{#if !cat_to_call_home}
			<Contextmenu_Entry run={() => act({type: 'cat_be_or_do', name: null, position: 'home'})}>
				{#snippet icon()}🏠{/snippet}
				be
			</Contextmenu_Entry>
			<Contextmenu_Entry run={() => act({type: 'call_cats_adventure'})}>
				{#snippet icon()}🦋{/snippet}
				leave
			</Contextmenu_Entry>
		{/if}
	{/snippet}
</Contextmenu_Submenu>

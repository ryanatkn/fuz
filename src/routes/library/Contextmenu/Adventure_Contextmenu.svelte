<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import {type History_Item, type Cat, to_cats_label} from '$routes/library/Contextmenu/helpers.js';
	import Cat_Contextmenu from '$routes/library/Contextmenu/Cat_Contextmenu.svelte';

	interface Props {
		home_cats: Cat[];
		adventure_cats: Cat[];
		act: (item: History_Item) => void;
	}

	const {home_cats, adventure_cats, act} = $props<Props>();

	const cat_to_call_to_adventure = $derived(to_cats_label(home_cats));
</script>

<Contextmenu_Submenu>
	{#snippet icon()}🌄{/snippet}
	adventure
	{#snippet menu()}
		{#if cat_to_call_to_adventure}
			<Contextmenu_Entry run={() => act({type: 'call_cats_adventure'})}>
				{#snippet icon()}🦋{/snippet}
				call
			</Contextmenu_Entry>
		{/if}
		{#each adventure_cats as cat (cat.name)}
			<Cat_Contextmenu name={cat.name} icon={cat.icon} position={cat.position} {act} />
		{/each}
		{#if !cat_to_call_to_adventure}
			<Contextmenu_Entry run={() => act({type: 'call_cats_home'})}>
				{#snippet icon()}🐈‍⬛{/snippet}
				leave
			</Contextmenu_Entry>
		{/if}
	{/snippet}
</Contextmenu_Submenu>

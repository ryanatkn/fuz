<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import {to_cats_label, type Cat, type History_Item} from '$routes/library/Contextmenu/helpers.js';
	import Cat_Contextmenu from '$routes/library/Contextmenu/Cat_Contextmenu.svelte';

	interface Props {
		home_cats: Cat[];
		adventure_cats: Cat[];
		act: (item: History_Item) => void;
	}

	const {home_cats, adventure_cats, act} = $props<Props>();

	const cat_to_call_home = $derived(to_cats_label(adventure_cats));
</script>

<Contextmenu_Submenu>
	<svelte:fragment slot="icon">🏠</svelte:fragment>
	home
	<svelte:fragment slot="menu">
		{#if cat_to_call_home}
			<Contextmenu_Entry run={() => act({type: 'call_cats_home'})}>
				<svelte:fragment slot="icon">🐈‍⬛</svelte:fragment>
				call
			</Contextmenu_Entry>
		{/if}
		{#each home_cats as cat (cat.name)}
			<Cat_Contextmenu name={cat.name} icon={cat.icon} position={cat.position} {act} />
		{/each}
		{#if !cat_to_call_home}
			<Contextmenu_Entry run={() => act({type: 'call_cats_adventure'})}>
				<svelte:fragment slot="icon">🦋</svelte:fragment>
				leave
			</Contextmenu_Entry>
		{/if}
	</svelte:fragment>
</Contextmenu_Submenu>

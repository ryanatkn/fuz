<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import type {Cat_Position, History_Item} from '$routes/library/Contextmenu/helpers.js';

	export let name = 'Cat';
	export let icon: string | null = '😺';
	export let position: Cat_Position;
	export let act: (item: History_Item) => void;
</script>

<Contextmenu_Submenu>
	<svelte:fragment slot="icon">{icon}</svelte:fragment>
	{name}
	<svelte:fragment slot="menu">
		<Contextmenu_Entry
			run={() => act({type: position === 'adventure' ? 'cat_go_home' : 'cat_go_adventure', name})}
		>
			<svelte:fragment slot="icon"
				>{#if position === 'adventure'}🏠{:else}🌄{/if}</svelte:fragment
			>
			{#if position === 'adventure'}go home{:else}go adventure{/if}
		</Contextmenu_Entry>
		<Contextmenu_Entry run={() => act({type: 'cat_be_or_do', name, position})}>
			<svelte:fragment slot="icon"
				>{#if position === 'adventure'}🌄{:else}🏠{/if}</svelte:fragment
			>
			{#if position === 'adventure'}do adventure{:else}be home{/if}
		</Contextmenu_Entry>
	</svelte:fragment>
</Contextmenu_Submenu>

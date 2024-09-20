<script lang="ts">
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import type {Cat_Position, History_Item} from '$routes/library/contextmenu/helpers.js';

	interface Props {
		name?: string;
		icon?: string | null;
		position: Cat_Position;
		act: (item: History_Item) => void;
	}

	const {name = 'Cat', icon: icon_text = '😺', position, act}: Props = $props();
</script>

<Contextmenu_Submenu>
	{#snippet icon()}{icon_text}{/snippet}
	{name}
	{#snippet menu()}
		<Contextmenu_Entry
			run={() => act({type: position === 'adventure' ? 'cat_go_home' : 'cat_go_adventure', name})}
		>
			{#snippet icon()}{#if position === 'adventure'}🏠{:else}🌄{/if}{/snippet}
			{#if position === 'adventure'}go home{:else}go adventure{/if}
		</Contextmenu_Entry>
		<Contextmenu_Entry run={() => act({type: 'cat_be_or_do', name, position})}>
			{#snippet icon()}{#if position === 'adventure'}🌄{:else}🏠{/if}{/snippet}
			{#if position === 'adventure'}do adventure{:else}be home{/if}
		</Contextmenu_Entry>
	{/snippet}
</Contextmenu_Submenu>

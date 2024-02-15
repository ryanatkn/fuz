<script lang="ts">
	import {get_contextmenu, type Contextmenu_Params} from '$lib/contextmenu.js';

	export let name = 'Cat';
	export let icon: string | null = '😺';
	export let show_name = true;
	export let show_icon = true;
	export let contextmenu_action: Contextmenu_Params | Contextmenu_Params[] | null = null;

	const contextmenu = get_contextmenu();
</script>

<!-- TODO add link option? -->

<span class="cat" class:has-icon={show_icon} use:contextmenu.action={contextmenu_action}>
	{#if show_icon}<span class="icon">{icon}</span>{/if}{#if show_name}<span class="name"
			><slot />{name}</span
		>{/if}
</span>

<style>
	.cat {
		display: flex;
		align-items: center;
	}
	.name {
		font-weight: 700;
	}
	.cat.has-icon .name {
		padding: 0 var(--spacing_xs3);
	}
	.icon {
		font-size: var(--icon_size_md);
	}
</style>

<script lang="ts">
	import {get_contextmenu, type Contextmenu_Params} from '$lib/contextmenu.js';

	interface Props {
		name?: string;
		icon?: string | null;
		show_name?: boolean;
		show_icon?: boolean;
		contextmenu_action?: Contextmenu_Params | Contextmenu_Params[] | null;
	}

	const {
		name = 'Cat',
		icon = '😺',
		show_name = true,
		show_icon = true,
		contextmenu_action = null,
	} = $props<Props>();

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
		padding: 0 var(--space_xs3);
	}
	.icon {
		font-size: var(--icon_size_md);
	}
</style>

<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		name?: string;
		icon?: string | null;
		show_name?: boolean;
		show_icon?: boolean;
		children?: Snippet;
	}

	const {name = 'Cat', icon = '😺', show_name = true, show_icon = true, children}: Props = $props();
</script>

<!-- TODO add link option? -->

<span class="cat" class:has-icon={show_icon}>
	{#if show_icon}<span class="icon">{icon}</span>{/if}{#if show_name}<span class="name"
			>{#if children}{@render children()}{/if}{name}</span
		>{/if}
</span>

<style>
	.cat {
		display: flex;
		align-items: center;
		background-color: var(--bg_3);
		border-radius: var(--radius_md);
		border: transparent var(--border_width_4) double;
	}
	.cat:hover {
		border-color: var(--border_color_2);
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

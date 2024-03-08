<script lang="ts">
	import type {Snippet} from 'svelte';

	import {
		get_contextmenu,
		get_contextmenu_dimensions,
		set_contextmenu_dimensions,
	} from '$lib/contextmenu.svelte.js';
	import type {Dimensions} from '$lib/dimensions.svelte.js';

	interface Props {
		icon?: Snippet;
		menu: Snippet;
		children: Snippet;
	}

	const {icon, menu, children}: Props = $props();

	const contextmenu = get_contextmenu();

	const submenu = contextmenu.add_submenu();

	const mouseenter = (e: MouseEvent) => {
		e.stopImmediatePropagation();
		// This timeout fixes a bug on mobile where the mouseenter event
		// fires immediately when the contextmenu appears,
		// and then the newly mounted selected entry immediately receives a click event.
		// The timeout ensures the click event is not passed through.
		setTimeout(() => contextmenu.select(submenu));
	};

	const {layout} = contextmenu;

	const selected = $derived(submenu.selected); // TODO BLOCK destructuring doesn't work here, but does elsewhere?

	let el: HTMLElement | undefined = $state();

	const parent_dimensions = get_contextmenu_dimensions();
	const dimensions = set_contextmenu_dimensions();

	let translate_x = $state(0);
	let translate_y = $state(0);
	$effect(() => {
		if (el) update_position(el, layout, parent_dimensions);
	});
	const update_position = (el: HTMLElement, layout: Dimensions, parent_dimensions: Dimensions) => {
		const {x, y, width, height} = el.getBoundingClientRect();
		dimensions.width = width;
		dimensions.height = height;
		const base_x = x - translate_x;
		const base_y = y - translate_y;
		const overflow_right = base_x + width + parent_dimensions.width - layout.width;
		if (overflow_right <= 0) {
			translate_x = parent_dimensions.width;
		} else {
			const overflow_left = width - base_x;
			if (overflow_left <= 0) {
				translate_x = -width;
			} else if (overflow_left > overflow_right) {
				translate_x = parent_dimensions.width - overflow_right;
			} else {
				translate_x = overflow_left - width;
			}
		}
		translate_y = Math.min(0, layout.height - (base_y + height));
	};
</script>

<li role="none" style:--contextmenu_depth={submenu.depth}>
	<!-- disabling the a11y warning because a parent element handles keyboard events -->
	<div
		class="menu_item plain selectable"
		class:selected
		role="menuitem"
		aria-label="contextmenu submenmu"
		tabindex="-1"
		on:mouseenter={mouseenter}
		aria-expanded={selected}
	>
		<div class="content">
			<div class="icon">
				{#if icon}{@render icon()}{/if}
			</div>
			<div class="title">{@render children()}</div>
		</div>
		<div class="chevron" />
	</div>
	{#if selected}
		<menu
			bind:this={el}
			class="pane"
			style:transform="translate3d({translate_x}px, {translate_y}px, 0)"
			style:max-height="{layout.height}px">{@render menu()}</menu
		>
	{/if}
</li>

<style>
	li {
		display: flex; /* TODO @multiple allows nesting in `.prose`, use `.unprose` if/when it's added */
		position: relative;
	}
	.chevron {
		padding-left: 5px;
	}
	menu {
		z-index: var(--contextmenu_depth);
		position: absolute;
		/* TODO this is a hack to avoid the pixel gap, probably change to 0 after adding transparent bg hitbox */
		left: -1px;
		top: 0;
		max-width: var(--contextmenu_width);
		width: 100%;
		padding-left: 0; /* TODO @multiple allows nesting in `.prose`, use `.unprose` if/when it's added */
	}
	/* TODO hacky, needed because the base `.menu_item` added z-index */
	.menu_item {
		z-index: unset;
	}
</style>

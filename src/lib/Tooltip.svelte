<script lang="ts">
	import {tooltip_context, Tooltip_State} from '$lib/tooltip_state.svelte.js';

	interface Props {
		/**
		 * Optional tooltip state - defaults to context value
		 * @nonreactive
		 */
		tooltip?: Tooltip_State;
		/**
		 * Horizontal offset from anchor point (cursor or element center)
		 */
		offset_x?: number;
		/**
		 * Vertical offset from anchor point (cursor or element bottom)
		 */
		offset_y?: number;
		/**
		 * Padding from viewport edges
		 */
		viewport_padding?: number;
	}

	const {
		tooltip = tooltip_context.get(),
		offset_x = 6,
		offset_y = 6,
		viewport_padding = 10,
	}: Props = $props();

	let el: HTMLElement | undefined = $state();
	let clientWidth = $state(0);
	let clientHeight = $state(0);

	// Get viewport dimensions
	let viewportWidth = $state(typeof window !== 'undefined' ? window.innerWidth : 0);
	let viewportHeight = $state(typeof window !== 'undefined' ? window.innerHeight : 0);

	// Smart positioning - flip if near edge
	const x = $derived.by(() => {
		if (!tooltip.opened) return 0;

		// Offset from anchor point (cursor or element center)
		let pos = tooltip.x + offset_x;

		// Flip to left if would overflow right edge
		if (pos + clientWidth > viewportWidth - viewport_padding) {
			pos = tooltip.x - clientWidth - offset_x;
			// Clamp to left edge
			if (pos < viewport_padding) pos = viewport_padding;
		}

		return pos;
	});

	const y = $derived.by(() => {
		if (!tooltip.opened) return 0;

		// Offset from anchor point (cursor or element bottom)
		let pos = tooltip.y + offset_y;

		// Flip to top if would overflow bottom edge
		if (pos + clientHeight > viewportHeight - viewport_padding) {
			pos = tooltip.y - clientHeight - offset_y;
			// Clamp to top edge
			if (pos < viewport_padding) pos = viewport_padding;
		}

		return pos;
	});

	// Update viewport dimensions on resize
	$effect(() => {
		if (typeof window === 'undefined') return;

		const handle_resize = () => {
			viewportWidth = window.innerWidth;
			viewportHeight = window.innerHeight;
		};

		window.addEventListener('resize', handle_resize);
		return () => window.removeEventListener('resize', handle_resize);
	});

	// Measure tooltip dimensions
	$effect(() => {
		if (el) {
			const rect = el.getBoundingClientRect();
			clientWidth = rect.width;
			clientHeight = rect.height;
		}
	});
</script>

<svelte:window
	onmousedown={() => {
		// Dismiss tooltip on any click (even inside tooltip)
		// This is intentional: tooltips should not contain interactive content
		// For interactive popovers, use a dialog/popover component instead
		if (tooltip.opened) tooltip.hide();
	}}
	onkeydown={(e) => {
		// ARIA requirement: Escape dismisses tooltip
		if (e.key === 'Escape' && tooltip.opened) {
			tooltip.hide();
		}
	}}
/>

{#if tooltip.opened && tooltip.content}
	<div
		id={tooltip.id}
		class="tooltip pane"
		role="tooltip"
		bind:this={el}
		style:transform="translate3d({x}px, {y}px, 0)"
		onmouseenter={() => tooltip.cancel_hide()}
		onmouseleave={() => tooltip.hide(200)}
	>
		{@render tooltip.content()}
	</div>
{/if}

<style>
	.tooltip {
		--tooltip_width: 400px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: var(--tooltip_z_index, 100);
		max-width: var(--tooltip_width);
		pointer-events: auto;
		user-select: none;
		padding: var(--space_sm);
		font-size: var(--font_size_sm);
		border: var(--border_width) var(--border_style) var(--border_color);
		border-radius: var(--border_radius_xs);
		background-color: var(--bg);
		box-shadow: var(--shadow_md);
	}
</style>

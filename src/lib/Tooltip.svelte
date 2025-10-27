<script lang="ts">
	import {onNavigate} from '$app/navigation';
	import {tooltip_context, Tooltip_State} from '$lib/tooltip_state.svelte.js';

	const {
		tooltip = tooltip_context.get(),
		offset_x = 6,
		offset_y = 6,
		viewport_padding = 10,
	}: {
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
	} = $props();

	let el: HTMLElement | undefined = $state();
	let client_width = $state(0);
	let client_height = $state(0);

	// Get viewport dimensions
	let viewport_width = $state(typeof window !== 'undefined' ? window.innerWidth : 0);
	let viewport_height = $state(typeof window !== 'undefined' ? window.innerHeight : 0);

	// Smart positioning - flip if near edge
	const x = $derived.by(() => {
		// Early return to avoid calculations when tooltip is closed
		if (!tooltip.opened) return 0;

		// Offset from anchor point (cursor or element center)
		let pos = tooltip.x + offset_x;

		// Flip to left if would overflow right edge
		if (pos + client_width > viewport_width - viewport_padding) {
			pos = tooltip.x - client_width - offset_x;
			// Clamp to left edge
			if (pos < viewport_padding) pos = viewport_padding;
		}

		return pos;
	});

	const y = $derived.by(() => {
		// Early return to avoid calculations when tooltip is closed
		if (!tooltip.opened) return 0;

		// Offset from anchor point (cursor or element bottom)
		let pos = tooltip.y + offset_y;

		// Flip to top if would overflow bottom edge
		if (pos + client_height > viewport_height - viewport_padding) {
			pos = tooltip.y - client_height - offset_y;
			// Clamp to top edge
			if (pos < viewport_padding) pos = viewport_padding;
		}

		return pos;
	});

	// Update viewport dimensions on resize
	$effect(() => {
		if (typeof window === 'undefined') return;

		const handle_resize = () => {
			viewport_width = window.innerWidth;
			viewport_height = window.innerHeight;
		};

		window.addEventListener('resize', handle_resize);
		return () => window.removeEventListener('resize', handle_resize);
	});

	// Measure tooltip dimensions
	// Re-measure when tooltip opens or position changes (content may change between shows)
	$effect(() => {
		if (el && tooltip.opened) {
			// Note: Accessing tooltip.x and tooltip.y registers them as dependencies
			// This ensures the effect re-runs when position changes, allowing us to
			// re-measure if content changes between shows at different positions
			tooltip.x;
			tooltip.y;
			const rect = el.getBoundingClientRect();
			client_width = rect.width;
			client_height = rect.height;
		}
	});

	// Close tooltip on navigation
	onNavigate(() => {
		tooltip.hide();
	});
</script>

<svelte:window
	onmousedown={(e) => {
		// ARIA compliance: Dismiss tooltip only when clicking outside
		// Tooltips should remain open while cursor is over them (ARIA guideline)
		// This allows reading long tooltips and text selection
		const target_is_inside = el && e.target instanceof Node && el.contains(e.target);
		if (!target_is_inside) {
			tooltip.hide(); // Also cancels pending shows
		}
	}}
	onkeydown={(e) => {
		// ARIA requirement: Escape dismisses tooltip and cancels pending shows
		// hide() calls cancel_show() internally, so this handles both cases
		if (e.key === 'Escape') {
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
		onmouseleave={() => tooltip.hide_delayed()}
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
		padding: var(--space_sm);
		border: var(--border_width) var(--border_style) var(--border_color);
		border-radius: var(--border_radius_xs);
		background-color: var(--bg);
		box-shadow: var(--shadow_md);
	}
</style>

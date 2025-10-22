<script lang="ts">
	import {tooltip_context, Tooltip_State} from '$lib/tooltip_state.svelte.js';

	interface Props {
		/**
		 * Optional tooltip state - defaults to context value
		 * @nonreactive
		 */
		tooltip?: Tooltip_State;
	}

	const {tooltip = tooltip_context.get()}: Props = $props();

	let el: HTMLElement | undefined = $state();
	let clientWidth = $state(0);
	let clientHeight = $state(0);

	// Get viewport dimensions
	let viewportWidth = $state(typeof window !== 'undefined' ? window.innerWidth : 0);
	let viewportHeight = $state(typeof window !== 'undefined' ? window.innerHeight : 0);

	// Smart positioning - flip if near edge
	const x = $derived.by(() => {
		if (!tooltip.opened) return 0;

		// Offset slightly from cursor
		let pos = tooltip.x + 12;

		// Flip to left if would overflow right edge
		if (pos + clientWidth > viewportWidth - 10) {
			pos = tooltip.x - clientWidth - 12;
			// Clamp to left edge
			if (pos < 10) pos = 10;
		}

		return pos;
	});

	const y = $derived.by(() => {
		if (!tooltip.opened) return 0;

		// Offset slightly from cursor
		let pos = tooltip.y + 12;

		// Flip to top if would overflow bottom edge
		if (pos + clientHeight > viewportHeight - 10) {
			pos = tooltip.y - clientHeight - 12;
			// Clamp to top edge
			if (pos < 10) pos = 10;
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
		if (tooltip.opened) tooltip.hide();
	}}
/>

{#if tooltip.opened && tooltip.content}
	<div
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
		background-color: var(--bg_2);
		box-shadow: var(--shadow_md);
	}
</style>

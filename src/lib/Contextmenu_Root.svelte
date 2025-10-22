<script lang="ts">
	/**
	 * This is the default contextmenu root component.
	 * It relies on the standard browser `contextmenu` event
	 * which means it does not work on iOS Safari
	 * because it doesn't fire the `contextmenu` event as of October 2025 --
	 * see https://bugs.webkit.org/show_bug.cgi?id=213953.
	 *
	 * This is the recommended default because
	 * it supports haptic feedback with `navigator.vibrate()` --
	 * longpress cannot work with `navigator.vibrate()` on Android devices
	 * because it's triggered by a timeout and not a direct user event.
	 *
	 * If you need iOS Safari support, use `Contextmenu_Root_For_Safari_Compatibility.svelte`
	 * instead. That version implements custom touch handlers and longpress detection at the
	 * cost of significantly more complexity and no vibrate support.
	 */
	import {swallow} from '@ryanatkn/belt/dom.js';
	import type {ComponentProps, Snippet} from 'svelte';

	import {
		contextmenu_context,
		contextmenu_dimensions_context,
		Contextmenu_State,
		open_contextmenu,
	} from '$lib/contextmenu_state.svelte.js';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import {
		CONTEXTMENU_DEFAULT_OPEN_OFFSET_X,
		CONTEXTMENU_DEFAULT_OPEN_OFFSET_Y,
		CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_DURATION,
		CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_MOVE_TOLERANCE,
		contextmenu_is_valid_target,
		contextmenu_create_keyboard_handlers,
		contextmenu_create_keydown_handler,
		contextmenu_calculate_constrained_x,
		contextmenu_calculate_constrained_y,
	} from '$lib/contextmenu_helpers.js';

	const {
		contextmenu = new Contextmenu_State(),
		open_offset_x = CONTEXTMENU_DEFAULT_OPEN_OFFSET_X,
		open_offset_y = CONTEXTMENU_DEFAULT_OPEN_OFFSET_Y,
		bypass_with_tap_then_longpress = true,
		tap_then_longpress_duration = CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_DURATION,
		tap_then_longpress_move_tolerance = CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_MOVE_TOLERANCE,
		scoped = false,
		children,
	}: {
		/**
		 * The `contextmenu` prop is not reactive because that's a rare corner case and
		 * it's easier to put the `contextmenu` directly in the context
		 * rather than wrapping with a store or other reactivity.
		 * If you need to change the contextmenu prop for some reason, use a `{#key contextmenu}` block:
		 * https://svelte.dev/docs#template-syntax-key
		 * @nonreactive
		 */
		contextmenu?: Contextmenu_State;
		/**
		 * The number of pixels to offset from the pointer X position when opened.
		 * Useful to ensure the first menu item is immediately under the pointer.
		 */
		open_offset_x?: number;
		/**
		 * The number of pixels to offset from the pointer Y position when opened.
		 * Useful to ensure the first menu item is immediately under the pointer.
		 */
		open_offset_y?: number;
		/**
		 * Whether to detect tap-then-longpress to bypass the custom contextmenu.
		 * This allows access to the system contextmenu by tapping once then right-clicking/long-pressing.
		 * Setting to `false` disables the gesture.
		 */
		bypass_with_tap_then_longpress?: boolean;
		/**
		 * The number of milliseconds between taps to detect a gesture that bypasses the custom contextmenu.
		 * Used only when `bypass_with_tap_then_longpress` is true.
		 * If the duration is too long, it'll detect more false positives and interrupt normal usage,
		 * but too short and some people will have difficulty performing the gesture.
		 */
		tap_then_longpress_duration?: number;
		/**
		 * The number of pixels the pointer can be moved between taps to detect a tap-then-longpress.
		 * Used only when `bypass_with_tap_then_longpress` is true.
		 */
		tap_then_longpress_move_tolerance?: number;
		/**
		 * If `true`, wraps `children` with a div and listens to events on it instead of the window.
		 */
		scoped?: boolean;
		children: Snippet;
	} = $props();

	contextmenu_context.set(contextmenu);

	let el: HTMLElement | undefined = $state();

	const {layout, initial_layout} = $derived(contextmenu);

	// Update the layout unless it's custom.
	// Custom layouts are when `contextmenu.initial_layout` is the same as `contextmenu.layout`.
	const custom_layout = $derived(layout === initial_layout);
	let clientWidth: number | undefined = $state();
	let clientHeight: number | undefined = $state();
	$effect(() => {
		if (!custom_layout && clientWidth !== undefined) {
			layout.width = clientWidth;
		}
	});
	$effect(() => {
		if (!custom_layout && clientHeight !== undefined) {
			layout.height = clientHeight;
		}
	});

	const dimensions = contextmenu_dimensions_context.set();
	$effect(() => {
		if (el) {
			const rect = el.getBoundingClientRect();
			dimensions.width = rect.width;
			dimensions.height = rect.height;
		}
	});
	const x = $derived(
		contextmenu_calculate_constrained_x(contextmenu.x, dimensions.width, layout.width),
	);
	const y = $derived(
		contextmenu_calculate_constrained_y(contextmenu.y, dimensions.height, layout.height),
	);

	// State for tap-then-longpress bypass detection
	let touch_x: number | undefined = $state();
	let touch_y: number | undefined = $state();
	let longpress_start_time: number | undefined = $state();
	let longpress_bypass: boolean | undefined = $state();

	const on_window_contextmenu = (e: MouseEvent) => {
		// Handle the tap-then-longpress bypass gesture
		if (longpress_bypass) {
			longpress_bypass = false;
			return;
		}
		const {target} = e;
		if (!contextmenu_is_valid_target(target, e.shiftKey)) {
			return;
		}
		// Don't open contextmenu when clicking on the menu itself
		if (el?.contains(target)) {
			return;
		}
		if (
			open_contextmenu(target, e.clientX + open_offset_x, e.clientY + open_offset_y, contextmenu)
		) {
			swallow(e);
		}
	};

	/**
	 * Touch event handler for tap-then-longpress bypass detection.
	 *
	 * This allows users to access the native context menu by performing a tap
	 * followed by a longpress/right-click within a specified time window.
	 * The bypass gesture is useful for accessing browser features like text selection
	 * or the native context menu when the custom contextmenu would normally override it.
	 *
	 * Note: preventDefault is not called as we're only observing touch patterns,
	 * not intercepting them. The actual bypass happens in on_window_contextmenu.
	 */
	const touchstart = (e: TouchEvent): void => {
		if (!bypass_with_tap_then_longpress) return;

		const {touches, target} = e;
		if (
			contextmenu.opened ||
			touches.length !== 1 ||
			!contextmenu_is_valid_target(target, e.shiftKey)
		) {
			// Reset state if conditions aren't met
			longpress_start_time = undefined;
			touch_x = undefined;
			touch_y = undefined;
			return;
		}

		const {clientX, clientY} = touches[0];

		// Check if this is a tap-then-longpress gesture
		if (
			longpress_start_time !== undefined &&
			performance.now() - longpress_start_time < tap_then_longpress_duration &&
			Math.hypot(clientX - touch_x!, clientY - touch_y!) < tap_then_longpress_move_tolerance
		) {
			// This is a tap-then-longpress - set bypass flag
			longpress_bypass = true;
			longpress_start_time = undefined;
			touch_x = undefined;
			touch_y = undefined;
			return;
		}

		// Record this tap for potential future bypass detection
		longpress_start_time = performance.now();
		touch_x = clientX;
		touch_y = clientY;
	};

	/**
	 * Reset state when touch is cancelled (e.g., when scrolling starts).
	 */
	const touchcancel = (): void => {
		// Reset all bypass detection state
		longpress_start_time = undefined;
		touch_x = undefined;
		touch_y = undefined;
		longpress_bypass = false;
	};

	// Passive listener that runs during the event's `capture` phase
	// so that things like the Dialog don't eat the events and prevent the contextmenu from closing.
	const mousedown = (e: MouseEvent) => {
		if (el && !el.contains(e.target as any)) {
			contextmenu.close();
		}
	};

	const keyboard_handlers = contextmenu_create_keyboard_handlers(contextmenu);
	const keydown = contextmenu_create_keydown_handler(keyboard_handlers);
</script>

<svelte:window
	oncontextmenu={scoped ? undefined : on_window_contextmenu}
	onmousedown={!contextmenu.opened ? undefined : mousedown}
	onkeydown={!contextmenu.opened ? undefined : keydown}
	ontouchstartcapture={scoped || !bypass_with_tap_then_longpress ? undefined : touchstart}
	ontouchcancelcapture={scoped || !bypass_with_tap_then_longpress ? undefined : touchcancel}
/>

{#if scoped}
	<div
		class="contextmenu_root"
		role="region"
		oncontextmenu={on_window_contextmenu}
		ontouchstartcapture={!bypass_with_tap_then_longpress ? undefined : touchstart}
		ontouchcancelcapture={!bypass_with_tap_then_longpress ? undefined : touchcancel}
	>
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}

{#if !custom_layout}
	<div class="contextmenu_layout" bind:clientHeight bind:clientWidth aria-hidden="true"></div>
{/if}
<!-- TODO animate the contextmenu as it appears somehow -->
{#if contextmenu.opened}
	<ul
		class="contextmenu unstyled pane"
		role="menu"
		aria-label="context menu"
		tabindex="-1"
		bind:this={el}
		style:transform="translate3d({x}px, {y}px, 0)"
	>
		<!-- TODO maybe this should be generic? -->
		{#each contextmenu.params as p (p)}
			{#if typeof p === 'function'}
				{@render p()}
			{:else if p.snippet === 'link'}
				{@render link_entry(p.props)}
			{:else if p.snippet === 'text'}
				{@render text_entry(p.props)}
			{/if}
		{/each}
	</ul>
{/if}

{#snippet link_entry(props: ComponentProps<typeof Contextmenu_Link_Entry>)}
	<Contextmenu_Link_Entry {...props} />
{/snippet}

{#snippet text_entry(props: ComponentProps<typeof Contextmenu_Text_Entry>)}
	<Contextmenu_Text_Entry {...props} />
{/snippet}

<style>
	.contextmenu_root {
		display: contents;
	}
	.contextmenu {
		--icon_size: var(--icon_size_xs);
		--contextmenu_width: 320px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: var(--contextmenu_z_index, 200);
		max-width: var(--contextmenu_width);
		width: 100%;
		user-select: none;
	}
	.contextmenu,
	.contextmenu :global(menu.pane) {
		border: var(--contextmenu_border_width, var(--border_width))
			var(--contextmenu_border_style, var(--border_style))
			var(--contextmenu_border_color, var(--border_color));
		border-radius: var(--contextmenu_border_radius, var(--border_radius_xs));
	}

	.contextmenu_layout {
		z-index: -200;
		position: fixed;
		inset: 0;
	}
</style>

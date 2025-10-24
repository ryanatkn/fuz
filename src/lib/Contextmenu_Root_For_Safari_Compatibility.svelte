<script lang="ts">
	/**
	 * This alternative to `Contextmenu_Root`
	 * implements custom touch event handlers and "longpress" detection to work
	 * around iOS Safari not firing the standard `contextmenu` event -- see
	 * https://bugs.webkit.org/show_bug.cgi?id=213953.
	 *
	 * Prefer `Contextmenu_Root.svelte` unless you specifically need iOS Safari support.
	 *
	 * This is a complex implementation with many iOS-specific hacks and edge cases:
	 *
	 * - Custom touch event handlers (touchstart, touchmove, touchend)
	 * - Longpress detection with configurable timing and movement tolerance
	 * - Tap-then-longpress bypass gesture for accessing system contextmenu
	 * - Calls navigator.vibrate() for haptic feedback, but browsers block it due to longpress timeout workaround
	 *
	 * Otherwise, use the default `Contextmenu_Root.svelte` which is much simpler
	 * and relies on the standard `contextmenu` event.
	 */
	import {swallow} from '@ryanatkn/belt/dom.js';
	import {DEV} from 'esm-env';
	import type {ComponentProps, Snippet} from 'svelte';

	import {
		contextmenu_context,
		contextmenu_dimensions_context,
		Contextmenu_State,
		contextmenu_check_global_root,
		open_contextmenu,
	} from '$lib/contextmenu_state.svelte.js';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
	import Contextmenu_Separator from '$lib/Contextmenu_Separator.svelte';
	import {
		CONTEXTMENU_DEFAULT_OPEN_OFFSET_X,
		CONTEXTMENU_DEFAULT_OPEN_OFFSET_Y,
		CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_DURATION,
		CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_MOVE_TOLERANCE,
		CONTEXTMENU_DEFAULT_LONGPRESS_DURATION,
		CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
		contextmenu_is_valid_target,
		contextmenu_create_keyboard_handlers,
		contextmenu_create_keydown_handler,
		contextmenu_calculate_constrained_x,
		contextmenu_calculate_constrained_y,
	} from '$lib/contextmenu_helpers.js';

	const {
		contextmenu = new Contextmenu_State(),
		longpress_move_tolerance = CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
		longpress_duration = CONTEXTMENU_DEFAULT_LONGPRESS_DURATION,
		bypass_with_tap_then_longpress = true,
		tap_then_longpress_duration = CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_DURATION,
		tap_then_longpress_move_tolerance = CONTEXTMENU_DEFAULT_TAP_THEN_LONGPRESS_MOVE_TOLERANCE,
		open_offset_x = CONTEXTMENU_DEFAULT_OPEN_OFFSET_X,
		open_offset_y = CONTEXTMENU_DEFAULT_OPEN_OFFSET_Y,
		scoped = false,
		link_entry = link_entry_default,
		text_entry = text_entry_default,
		separator_entry = separator_entry_default,
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
		 * The number of pixels the pointer can be moved without canceling `longpress`.
		 * Defaults to half the default `--input_height`.
		 */
		longpress_move_tolerance?: number;
		/**
		 * The number of milliseconds after a touch starts before a `longpress` is detected.
		 * This value needs to be lower than iOS's ~500 so we can intercept its behavior.
		 */
		longpress_duration?: number;
		/**
		 * Whether to detect tap-then-longpress to bypass `longpress`.
		 * Setting to `false` disables the gesture.
		 */
		bypass_with_tap_then_longpress?: boolean;
		/**
		 * The number of milliseconds between taps to detect a gesture that bypasses a `longpress`.
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
		 * If `true`, wraps `children` with a div and listens to events on it instead of the window.
		 */
		scoped?: boolean;
		/**
		 * Snippet for rendering link entries.
		 * Set to `null` to disable automatic link detection.
		 * Defaults to `link_entry_default` which renders `Contextmenu_Link_Entry`.
		 */
		link_entry?: Snippet<[ComponentProps<typeof Contextmenu_Link_Entry>]> | null;
		/**
		 * Snippet for rendering copy text entries.
		 * Set to `null` to disable automatic copy text detection.
		 * Defaults to `text_entry_default` which renders `Contextmenu_Text_Entry`.
		 */
		text_entry?: Snippet<[ComponentProps<typeof Contextmenu_Text_Entry>]> | null;
		/**
		 * Snippet for rendering separator entries.
		 * Set to `null` to disable automatic separator rendering.
		 * Defaults to `separator_entry_default` which renders `Contextmenu_Separator`.
		 */
		separator_entry?: Snippet<[ComponentProps<typeof Contextmenu_Separator>]> | null;
		children: Snippet;
	} = $props();

	contextmenu_context.set(contextmenu);

	if (DEV) contextmenu_check_global_root(() => scoped); // TODO @many is this import tree-shaken?

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

	// TODO maybe show an indicator fade in at these coordinates

	// These values are `undefined` when unused, and `null` after being reset.
	let touch_x: number | undefined | null = $state();
	let touch_y: number | undefined | null = $state();
	let longpress_start_time: number | undefined | null = $state();
	let longpress_timeout: NodeJS.Timeout | undefined | null = $state();
	let longpress_opened: boolean | undefined = $state();
	let longpress_bypass: boolean | undefined = $state();
	let tap_tracking_timeout: NodeJS.Timeout | undefined | null = $state();

	/**
	 * Resets only the longpress timeout state, preserving tap tracking for bypass detection.
	 * This is called when a touch ends before longpress completes.
	 */
	const reset_longpress_timeout = (): void => {
		longpress_opened = false;
		if (longpress_timeout != null) {
			clearTimeout(longpress_timeout);
			longpress_timeout = null;
		}
		// Don't clear tap tracking state here - we need it for tap-then-longpress detection
	};

	/**
	 * Clears tap tracking state and bypass flag used for bypass detection.
	 */
	const reset_tap_tracking = (): void => {
		longpress_start_time = null;
		touch_x = null;
		touch_y = null;
		longpress_bypass = false;
		if (tap_tracking_timeout != null) {
			clearTimeout(tap_tracking_timeout);
			tap_tracking_timeout = null;
		}
	};

	/**
	 * Resets all state - both longpress and tap tracking.
	 */
	const reset_all = (): void => {
		reset_longpress_timeout();
		reset_tap_tracking();
	};

	const on_window_contextmenu = (e: MouseEvent) => {
		// handle the tap-then-longpress bypass gesture
		if (longpress_bypass) {
			reset_tap_tracking(); // Clear bypass state after using it
			return;
		}
		// handle touch devices that trigger `'contextmenu'` slower than our longpress
		if (longpress_opened) {
			reset_all();
			swallow(e);
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
			open_contextmenu(target, e.clientX + open_offset_x, e.clientY + open_offset_y, contextmenu, {
				link_enabled: link_entry !== null,
				text_enabled: text_entry !== null,
				separator_enabled: separator_entry !== null,
			})
		) {
			swallow(e);
			reset_all(); // handle touch devices that trigger `'contextmenu'` faster than our longpress
		}
	};

	// Needed for the iOS workaround, is passive.
	const touchstart = (e: TouchEvent): void => {
		longpress_opened = false;
		const {touches, target} = e;
		if (
			contextmenu.opened ||
			touches.length !== 1 ||
			!contextmenu_is_valid_target(target, e.shiftKey)
		) {
			// Reset all state when conditions aren't met
			reset_all();
			return;
		}

		const {clientX, clientY} = touches[0];

		// Bypass the contextmenu behavior in certain conditions including a tap-and-longpress gesture.
		// To handle tap-then-longpress we need to see if `longpress_start_time`
		// is less than `tap_then_longpress_duration`, and also allow a small amount
		// of pointer movement, `tap_then_longpress_move_tolerance`.
		// The builtin `'contextmenu'` event will still fire for non-iOS browsers,
		// so `longpress_bypass` is used to tell the handler `on_window_contextmenu` to exit early.
		if (bypass_with_tap_then_longpress) {
			if (
				longpress_start_time != null &&
				performance.now() - longpress_start_time < tap_then_longpress_duration &&
				Math.hypot(clientX - touch_x!, clientY - touch_y!) < tap_then_longpress_move_tolerance
			) {
				// Tap-then-longpress detected! Set bypass and clear tap tracking state.
				// Must manually clear state (not call reset_tap_tracking) to preserve bypass flag.
				longpress_bypass = true;
				longpress_start_time = null;
				touch_x = null;
				touch_y = null;
				if (tap_tracking_timeout != null) {
					clearTimeout(tap_tracking_timeout); // Prevent timeout from clearing bypass
					tap_tracking_timeout = null;
				}
				return;
			}
			// Record this tap for potential future bypass detection
			longpress_start_time = performance.now();
			// Set timeout to clear stale tap tracking after the detection window expires
			if (tap_tracking_timeout != null) {
				clearTimeout(tap_tracking_timeout);
			}
			tap_tracking_timeout = setTimeout(() => {
				reset_tap_tracking();
			}, tap_then_longpress_duration);
		}

		touch_x = clientX;
		touch_y = clientY;

		if (longpress_timeout != null) reset_longpress_timeout();
		longpress_timeout = setTimeout(() => {
			longpress_opened = true;
			open_contextmenu(target, touch_x! + open_offset_x, touch_y! + open_offset_y, contextmenu, {
				link_enabled: link_entry !== null,
				text_enabled: text_entry !== null,
				separator_enabled: separator_entry !== null,
			});
		}, longpress_duration);
	};

	// Needed for the iOS workaround, is passive.
	const touchmove = (e: TouchEvent): void => {
		// Exit early if no pending longpress or menu is already open
		if (longpress_timeout == null || contextmenu.opened) return;
		const {touches} = e;
		if (touches.length !== 1) return;
		const {clientX, clientY} = touches[0];
		const distance = Math.hypot(clientX - touch_x!, clientY - touch_y!);
		if (distance > longpress_move_tolerance) {
			reset_longpress_timeout();
		}
	};
	// Needed for the iOS workaround, can't be passive.
	const touchend = (e: TouchEvent): void => {
		// Clear longpress timeout if it exists
		if (longpress_timeout != null) {
			// This stops triggering the first item on open.
			if (longpress_opened) swallow(e);
			reset_longpress_timeout();
		}
		// Clear bypass flag if it was set but the contextmenu event hasn't fired yet
		// This handles the case where bypass is detected but user lifts finger before native menu opens
		if (longpress_bypass) {
			reset_tap_tracking();
		}
		// Note: We don't clear tap tracking state here - we preserve it for tap-then-longpress detection
	};

	/**
	 * Handle touchcancel - this should reset all state since the gesture was interrupted.
	 */
	const touchcancel = (): void => {
		reset_all();
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
	ontouchstartcapture={scoped ? undefined : touchstart}
	ontouchmovecapture={scoped ? undefined : touchmove}
	ontouchendcapture={scoped ? undefined : touchend}
	ontouchcancelcapture={scoped ? undefined : touchcancel}
	onmousedown={!contextmenu.opened ? undefined : mousedown}
	onkeydown={!contextmenu.opened ? undefined : keydown}
/>

{#if scoped}
	<div
		class="contextmenu_root"
		role="region"
		oncontextmenu={on_window_contextmenu}
		ontouchstartcapture={touchstart}
		ontouchmovecapture={touchmove}
		ontouchendcapture={touchend}
		ontouchcancelcapture={touchcancel}
	>
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}

{#if !custom_layout}
	<div class="contextmenu_layout" bind:clientHeight bind:clientWidth aria-hidden="true"></div>
{/if}
<!-- TODO Maybe animate a subtle highlight around the contextmenu as it appears? -->
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
				{@render link_entry?.(p.props)}
			{:else if p.snippet === 'text'}
				{@render text_entry?.(p.props)}
			{:else if p.snippet === 'separator'}
				{@render separator_entry?.(p.props)}
			{/if}
		{/each}
	</ul>
{/if}

{#snippet link_entry_default(props: ComponentProps<typeof Contextmenu_Link_Entry>)}
	<Contextmenu_Link_Entry {...props} />
{/snippet}

{#snippet text_entry_default(props: ComponentProps<typeof Contextmenu_Text_Entry>)}
	<Contextmenu_Text_Entry {...props} />
{/snippet}

{#snippet separator_entry_default(props: ComponentProps<typeof Contextmenu_Separator>)}
	<Contextmenu_Separator {...props} />
{/snippet}

<style>
	:global(body) {
		/* TODO fix for iOS -- still does not work to disable iOS default behavior */
		-webkit-touch-callout: none !important;
		/*a {-webkit-user-select: none !important} */
	}

	.contextmenu_root {
		display: contents;
	}
	.contextmenu {
		--icon_size: var(--icon_size_xs);
		/* TODO maybe make this responsive or a max of the page width
		minus some space to tap items covered by the menu on the side,
		or consider a totally different design for small screens (more dialog-like)  */
		--contextmenu_width: 320px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: var(--contextmenu_z_index, 200);
		max-width: var(--contextmenu_width);
		width: 100%;
		/* TODO fix for iOS -- still does not work to disable iOS default behavior */
		-webkit-touch-callout: initial !important;
		-webkit-user-select: none !important;
		user-select: none;
	}
	/* TODO hacky */
	.contextmenu,
	.contextmenu :global(menu.pane) {
		border: var(--contextmenu_border_width, var(--border_width))
			var(--contextmenu_border_style, var(--border_style))
			var(--contextmenu_border_color, var(--border_color));
		border-radius: var(--contextmenu_border_radius, var(--border_radius_xs));
	}

	/* TODO better way to do this? */
	.contextmenu_layout {
		z-index: -200;
		position: fixed;
		inset: 0;
	}
</style>

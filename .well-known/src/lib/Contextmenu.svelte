<script lang="ts">
	import {is_editable, swallow} from '@ryanatkn/belt/dom.js';

	import {
		set_contextmenu,
		set_contextmenu_dimensions,
		type Contextmenu_Store,
		open_contextmenu,
	} from '$lib/contextmenu.js';

	// TODO this is full of hacks to implement "longpress"
	// to work around iOS not firing the `'contextmenu'` event:
	// https://github.com/ryanatkn/fuz/pull/319

	/**
	 * The `contextmenu` prop is not reactive because that's a rare corner case and
	 * it's easier to put the `contextmenu` directly in the context rather than wrapping with a store.
	 * If you need to change the contextmenu prop for some reason, use a `{#key contextmenu}` block:
	 * https://svelte.dev/docs#template-syntax-key
	 * @nonreactive
	 */
	export let contextmenu: Contextmenu_Store;
	set_contextmenu(contextmenu);

	/**
	 * The number of pixels the pointer can be moved without canceling `longpress`.
	 * Defaults to half the default `--input_height`.
	 */
	export let longpress_move_tolerance = 21;

	/**
	 * The number of milliseconds after a touch starts before a `longpress` is detected.
	 * This value needs to be lower than iOS's ~500 so we can intercept its behavior.
	 */
	export let longpress_duration = 633;

	/**
	 * Whether to detect tap-then-longpress to bypass `longpress`.
	 * Setting to `false` disables the gesture.
	 */
	export let bypass_with_tap_then_longpress = true;

	/**
	 * The number of milliseconds between taps to detect a gesture that bypasses a `longpress`.
	 * Used only when `bypass_with_tap_then_longpress` is true.
	 * If the duration is too long, it'll detect more false positives and interrupt normal usage,
	 * but too short and some people will have difficulty performing the gesture.
	 */
	export let tap_then_longpress_duration = 660;

	/**
	 * The number of pixels the pointer can be moved between taps to detect a tap-then-longpress.
	 * Used only when `bypass_with_tap_then_longpress` is true.
	 */
	export let tap_then_longpress_move_tolerance = 7;

	/**
	 * The number of pixels to offset from the pointer X position when opened.
	 * Useful to ensure the first menu item is immediately under the pointer.
	 */
	export let open_offset_x = -2;

	/**
	 * The number of pixels to offset from the pointer Y position when opened.
	 * Useful to ensure the first menu item is immediately under the pointer.
	 */
	export let open_offset_y = -2;

	let el: HTMLElement | undefined;

	$: ({layout, initial_layout} = contextmenu);

	// Update the layout unless it's custom.
	// Custom layouts are when `contextmenu.initial_layout` is the same as `contextmenu.layout`.
	$: custom_layout = layout === initial_layout;
	let clientWidth: number | undefined = undefined;
	let clientHeight: number | undefined = undefined;
	$: if (!custom_layout && clientWidth !== undefined && clientHeight !== undefined) {
		$layout = {width: clientWidth, height: clientHeight};
	}

	$: ({open, x: contextmenu_x, y: contextmenu_y} = $contextmenu);
	const dimensions = set_contextmenu_dimensions();
	$: if (el) {
		const rect = el.getBoundingClientRect();
		$dimensions = {width: rect.width, height: rect.height};
	}
	$: x = contextmenu_x + Math.min(0, $layout.width - (contextmenu_x + $dimensions.width));
	$: y = contextmenu_y + Math.min(0, $layout.height - (contextmenu_y + $dimensions.height));

	// TODO maybe show an indicator fade in at these coordinates

	// These values are `undefined` when unused, and `null` after being reset.
	let touch_x: number | undefined | null;
	let touch_y: number | undefined | null;
	let longpress_start_time: number | undefined | null;
	let longpress_timeout: NodeJS.Timeout | undefined | null;
	let longpress_opened: boolean | undefined;
	let longpress_bypass: boolean | undefined;

	const reset_longpress = (): void => {
		if (longpress_opened) longpress_opened = false;
		if (longpress_timeout == null) return;
		clearTimeout(longpress_timeout);
		longpress_timeout = null;
	};

	const on_window_contextmenu = (e: MouseEvent) => {
		// handle the tap-then-longpress bypass gesture
		if (longpress_bypass) {
			longpress_bypass = false;
			return;
		}
		// handle touch devices that trigger `'contextmenu'` slower than our longpress
		if (longpress_opened) {
			reset_longpress();
			swallow(e);
			return;
		}
		const {target} = e;
		if (
			e.shiftKey ||
			!(target instanceof HTMLElement || target instanceof SVGElement) ||
			el?.contains(target) ||
			is_editable(target)
		) {
			return;
		}
		if (
			open_contextmenu(target, e.clientX + open_offset_x, e.clientY + open_offset_y, contextmenu)
		) {
			swallow(e);
			reset_longpress(); // handle touch devices that trigger `'contextmenu'` faster than our longpress
		}
	};

	// Needed for the iOS workaround, is passive.
	const touchstart = (e: TouchEvent): void => {
		if (longpress_opened) longpress_opened = false;
		const {touches, target} = e;
		if (
			open ||
			touches.length !== 1 ||
			e.shiftKey ||
			!(target instanceof HTMLElement || target instanceof SVGElement) ||
			is_editable(target)
		) {
			return;
		}

		const {clientX, clientY} = touches[0];

		// Bypass the contextmenu behavior in certain conditions including a tap-and-longpress gesture.
		// To handle double-tap-and-hold we need to see if `longpress_start_time`
		// is less than `tap_then_longpress_duration`, and also allow a small amount
		// of movement of pointer movement, `tap_then_longpress_move_tolerance`.
		// The builtin `'contextmenu'` event will still fire for non-iOS browsers,
		// so `longpress_bypass` is used to tell the handler `on_window_contextmenu` to exit early.
		if (bypass_with_tap_then_longpress) {
			if (
				longpress_start_time != null &&
				performance.now() - longpress_start_time < tap_then_longpress_duration &&
				Math.hypot(clientX - touch_x!, clientY - touch_y!) < tap_then_longpress_move_tolerance
			) {
				longpress_bypass = true;
				longpress_start_time = null;
				return;
			}
			longpress_start_time = performance.now();
		}

		touch_x = clientX;
		touch_y = clientY;

		if (longpress_timeout != null) reset_longpress();
		longpress_timeout = setTimeout(() => {
			longpress_opened = true;
			open_contextmenu(target, touch_x! + open_offset_x, touch_y! + open_offset_y, contextmenu);
		}, longpress_duration);
	};

	// Needed for the iOS workaround, is passive.
	const touchmove = (e: TouchEvent): void => {
		if (longpress_timeout == null) return;
		const {touches} = e;
		if (touches.length !== 1) return;
		const {clientX, clientY} = touches[0];
		const distance = Math.hypot(clientX - touch_x!, clientY - touch_y!);
		if (distance > longpress_move_tolerance) {
			if (open) contextmenu.close();
			reset_longpress();
		}
	};
	// Needed for the iOS workaround, can't be passive.
	const touchend = (e: TouchEvent): void => {
		if (longpress_timeout == null) return;
		// This stops triggering the first item on open, and is the reason the handler is `nonpassive`.
		// Hopefully we can find a workaround, maybe by delaying the mounting of the contextmenu to the DOM.
		if (longpress_opened) swallow(e);
		reset_longpress();
	};

	// Passive listener that runs during the event's `capture` phase
	// so that things like the Dialog don't eat the events and prevent the contextmenu from closing.
	const mousedown = (e: MouseEvent) => {
		if (el && !el.contains(e.target as any)) {
			contextmenu.close();
		}
	};

	// TODO customize
	const keyboard_handlers: Map<string, () => void> = new Map([
		['Escape', contextmenu.close],
		['ArrowLeft', contextmenu.collapse_selected],
		['ArrowRight', contextmenu.expand_selected],
		['ArrowDown', contextmenu.select_next],
		['PageDown', contextmenu.select_next],
		['ArrowUp', contextmenu.select_previous],
		['PageUp', contextmenu.select_previous],
		['Home', contextmenu.select_first],
		['End', contextmenu.select_last],
		[' ', contextmenu.activate_selected],
		['Enter', contextmenu.activate_selected],
	]);
	const keydown = (e: KeyboardEvent): void => {
		const handler = keyboard_handlers.get(e.key);
		if (!handler || is_editable(e.target)) return;
		swallow(e);
		handler();
	};
</script>

<!--
	Some of these modifiers may be unnecessary, but some browsers need some of them.
	We use `nonpassive` only to swallow an event.
-->
<!-- Capture keydown so it can handle the event before any dialogs. -->
<svelte:window
	on:contextmenu|capture|nonpassive={on_window_contextmenu}
	on:touchstart|capture|passive={touchstart}
	on:touchmove|capture|passive={touchmove}
	on:touchend|capture|nonpassive={touchend}
	on:touchcancel|capture|nonpassive={touchend}
	on:mousedown|capture|passive={open ? mousedown : undefined}
	on:keydown|capture|nonpassive={open ? keydown : undefined}
/>

{#if !custom_layout}
	<div class="contextmenu_layout" bind:clientHeight bind:clientWidth />
{/if}
<!-- TODO Maybe animate a subtle highlight around the contextmenu as it appears? -->
{#if open}
	<menu
		class="contextmenu pane"
		role="dialog"
		tabindex="-1"
		bind:this={el}
		style:transform="translate3d({x}px, {y}px, 0)"
	>
		{#each $contextmenu.params as p (p)}
			<svelte:component this={p.component} {...p.props} />
		{/each}
	</menu>
{/if}

<style>
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
		/* TODO fix for iOS */
		-webkit-touch-callout: none;
		-webkit-user-select: none;
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
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
</style>

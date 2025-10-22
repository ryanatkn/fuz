import type {Action} from 'svelte/action';
import {on} from 'svelte/events';

/**
 * Parameters for the capture_event action.
 */
export interface Capture_Event_Params {
	/**
	 * The event name to listen for (e.g., 'touchstart', 'touchend', 'contextmenu').
	 */
	event: string;
	/**
	 * Whether the event listener should be passive.
	 * Passive listeners cannot call preventDefault() and provide better scrolling performance.
	 *
	 * Defaults to `true` for better performance.
	 * Set to `false` only when you need to call preventDefault().
	 */
	passive?: boolean;
	/**
	 * The callback function to execute when the event fires.
	 */
	cb: (...args: any) => void;
	/**
	 * Whether the event listener should be disabled.
	 * When true, any existing listener is removed and no new listener is added.
	 */
	disabled?: boolean;
}

/**
 * Svelte action for attaching event listeners in the capture phase with configurable passive mode.
 *
 * This action **always uses capture phase** (`capture: true`), which is important for intercepting
 * events before they reach child elements (e.g., preventing Dialog from consuming events that should
 * close a contextmenu).
 *
 * The `passive` flag is optional and defaults to `true` for better performance. Set it to `false`
 * only when you need to call `preventDefault()` on the event.
 *
 * The action automatically manages cleanup when the element is destroyed or when parameters change.
 *
 * @example
 * ```svelte
 * <!-- Passive touch listener (default, better performance) -->
 * <div use:capture_event={{event: 'touchstart', cb: handleTouch}}>
 *
 * <!-- Non-passive listener (can call preventDefault) -->
 * <div use:capture_event={{event: 'contextmenu', passive: false, cb: handleContext}}>
 * ```
 */
export const capture_event: Action<HTMLElement, Capture_Event_Params> = (el, params) => {
	let cleanup: (() => void) | null = null;
	const sync_event = (p: Capture_Event_Params) => {
		if (cleanup) {
			cleanup();
			cleanup = null;
		}
		if (!p.disabled) {
			cleanup = on(el, p.event, p.cb, {capture: true, passive: p.passive ?? true});
		}
	};
	sync_event(params);
	return {
		update: (p) => {
			sync_event(p);
		},
		destroy: () => {
			cleanup?.();
		},
	};
};

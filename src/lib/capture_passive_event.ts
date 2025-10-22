import type {Attachment} from 'svelte/attachments';
import {on} from 'svelte/events';

/**
 * Parameters for the capture_passive_event attachment.
 */
export interface Capture_Passive_Event_Params {
	/**
	 * The event name to listen for (e.g., 'touchstart', 'touchend', 'contextmenu').
	 */
	event: string;
	/**
	 * The event handler function to execute when the event fires.
	 */
	handler: (...args: any) => void;
	/**
	 * Whether to use capture phase. Defaults to `true`.
	 */
	capture?: boolean;
	/**
	 * Whether the listener should be passive. Defaults to `true`.
	 * Passive listeners cannot call preventDefault() but provide better scrolling performance.
	 */
	passive?: boolean;
	/**
	 * Whether the event listener should be disabled.
	 * When true, no listener is added.
	 */
	disabled?: boolean;
}

/**
 * Svelte attachment for event listeners with configurable capture and passive modes.
 * Both `capture` and `passive` default to `true`.
 * The attachment automatically re-runs when parameters change.
 */
export function capture_passive_event(
	params: Capture_Passive_Event_Params,
): Attachment<Element | Window> {
	return (el) => {
		if (params.disabled) {
			return; // no cleanup needed when disabled
		}
		return on(el, params.event, params.handler, {
			capture: params.capture ?? true,
			passive: params.passive ?? true,
		});
	};
}

import type {Attachment} from 'svelte/attachments';

export interface Intersect_Params {
	/**
	 * Called when the element enters or leaves the viewport until disconnected.
	 */
	onintersect?: On_Intersect;
	/**
	 * Called when the attachment's observer is disconnected,
	 * either by the user calling disconnect or the attachment being destroyed.
	 */
	ondisconnect?: On_Disconnect;
	/**
	 * A value of `1` disconnects after `el` enters and leaves the viewport one time,
	 * similar to 'once' for an event.
	 * `0` disables and `undefined` or a negative number like `-1` never disconnects.
	 */
	count?: number;
	/**
	 * Same as the `options` param to
	 * [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
	 */
	options?: IntersectionObserverInit;
}

export type Intersect_Params_Or_Callback = On_Intersect | Intersect_Params;

/**
 * Creates an attachment that observes element viewport intersection.
 * Uses the lazy function pattern to optimize reactivity:
 * callbacks can update without recreating the observer, preserving state.
 * @param get_params - Function that returns callback, params object, or nullish to disable
 */
export const intersect_attachment =
	(
		get_params: () => Intersect_Params_Or_Callback | null | undefined,
	): Attachment<HTMLElement | SVGElement> =>
	(el) => {
		// State that persists across callback changes
		let intersecting = false;
		let intersections = 0;
		let observer: IntersectionObserver | null = null;
		let current_options: IntersectionObserverInit | undefined = undefined;

		// Current callbacks - updated reactively without recreating observer
		let current_onintersect: On_Intersect | undefined;
		let current_ondisconnect: On_Disconnect | undefined;
		let current_count: number | undefined;

		const disconnect = (): void => {
			if (!observer) return;
			const observer_to_disconnect = observer;
			observer.disconnect();
			if (current_ondisconnect) {
				current_ondisconnect({intersecting, intersections, el, observer: observer_to_disconnect});
			}
			observer = null;
		};

		$effect(() => {
			const params = get_params();

			if (params == null) {
				// Params disabled, disconnect if active
				current_onintersect = undefined;
				current_ondisconnect = undefined;
				current_count = undefined;
				if (observer) {
					disconnect();
				}
				return;
			}

			// Parse params and update current callbacks
			let options: IntersectionObserverInit | undefined;
			if (typeof params === 'function') {
				current_onintersect = params;
				current_ondisconnect = undefined;
				current_count = undefined;
				options = undefined;
			} else {
				current_onintersect = params.onintersect;
				current_ondisconnect = params.ondisconnect;
				current_count = params.count;
				options = params.options;
			}

			// Check if count is 0 (disabled)
			if (current_count === 0) {
				if (observer) {
					disconnect();
				}
				return;
			}

			// Check if options changed (requires observer recreation)
			const options_changed = !options_equal(current_options, options);

			if (options_changed || !observer) {
				// Disconnect old observer if exists
				if (observer) {
					disconnect();
				}

				// Reset state on observer recreation
				intersecting = false;
				intersections = 0;
				current_options = options;

				// Create new observer
				observer = new IntersectionObserver((entries) => {
					intersecting = entries[0]!.isIntersecting;
					if (current_onintersect && observer) {
						current_onintersect({intersecting, intersections, el, observer, disconnect});
					}
					if (intersecting) {
						intersections++;
					} else {
						if (current_count && current_count > 0 && intersections >= current_count) {
							disconnect();
						}
					}
				}, options);
				observer.observe(el);
			}
			// If only callbacks changed, observer stays alive and uses new callbacks from closure
		});

		return disconnect;
	};

// TODO hacky, probably need to add a deep equality helper to belt
const options_equal = (
	a: IntersectionObserverInit | undefined,
	b: IntersectionObserverInit | undefined,
): boolean => {
	if (a === b) return true;
	if (a == null || b == null) return false;
	return JSON.stringify(a) === JSON.stringify(b);
};

// TODO how to forward generic `el` type?
export type On_Intersect = (state: Intersect_State) => void;

export interface Intersect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
	disconnect: () => void;
}

// TODO how to forward generic `el` type?
export type On_Disconnect = (state: Disconnect_State) => void;

export interface Disconnect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
}

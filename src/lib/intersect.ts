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
 * @param params - Callback function or params object, or nullish to disable
 */
export const intersect_attachment =
	(params: Intersect_Params_Or_Callback | null | undefined): Attachment<HTMLElement | SVGElement> =>
	(el) => {
		if (params == null) return;

		let onintersect: On_Intersect | undefined;
		let ondisconnect: On_Disconnect | undefined;
		let count: number | undefined;
		let options: IntersectionObserverInit | undefined;
		let intersecting: boolean;
		let intersections = 0;
		let observer: IntersectionObserver | null = null;

		// Parse params
		if (typeof params === 'function') {
			onintersect = params;
		} else {
			onintersect = params.onintersect;
			ondisconnect = params.ondisconnect;
			count = params.count;
			options = params.options;
		}

		const disconnect = (): void => {
			if (!observer) return;
			observer.disconnect();
			if (ondisconnect) {
				ondisconnect({intersecting, intersections, el, observer});
			}
			observer = null;
		};

		// Set up observer if not disabled
		if (count !== 0) {
			observer = new IntersectionObserver((entries) => {
				intersecting = entries[0]!.isIntersecting;
				if (onintersect && observer) {
					onintersect({intersecting, intersections, el, observer, disconnect});
				}
				if (intersecting) {
					// track count of times it enters the viewport
					intersections++;
				} else {
					// when leaving the viewport, check if it's done
					if (count && count > 0 && intersections >= count) {
						disconnect();
					}
				}
			}, options);
			observer.observe(el);
		}

		// Return cleanup function
		return disconnect;
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

import type {Snippet} from 'svelte';

import {create_context} from '$lib/context_helpers.js';

/**
 * Global tooltip state manager
 *
 * Manages a single tooltip instance that can be shown/hidden
 * with sticky behavior (can move mouse into tooltip)
 */
export class Tooltip_State {
	opened: boolean = $state(false);
	x: number = $state(0);
	y: number = $state(0);
	content: Snippet | null = $state(null);

	// Timer for delayed hide to support sticky behavior
	#hide_timer: ReturnType<typeof setTimeout> | null = null;

	/**
	 * Show tooltip at given position with content
	 */
	show(x: number, y: number, content: Snippet): void {
		// Clear any pending hide
		if (this.#hide_timer) {
			clearTimeout(this.#hide_timer);
			this.#hide_timer = null;
		}

		this.x = x;
		this.y = y;
		this.content = content;
		this.opened = true;
	}

	/**
	 * Hide tooltip (with optional delay for sticky behavior)
	 */
	hide(delay = 0): void {
		if (delay > 0) {
			this.#hide_timer = setTimeout(() => {
				this.opened = false;
				this.content = null;
				this.#hide_timer = null;
			}, delay);
		} else {
			if (this.#hide_timer) {
				clearTimeout(this.#hide_timer);
				this.#hide_timer = null;
			}
			this.opened = false;
			this.content = null;
		}
	}

	/**
	 * Cancel a pending hide operation (for sticky behavior)
	 */
	cancel_hide(): void {
		if (this.#hide_timer) {
			clearTimeout(this.#hide_timer);
			this.#hide_timer = null;
		}
	}
}

/**
 * Tooltip context for accessing global tooltip state
 */
export const tooltip_context = create_context<Tooltip_State>();

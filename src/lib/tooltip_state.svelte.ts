/**
 * Tooltip state management for ARIA-compliant tooltips
 *
 * This module provides a global tooltip system with:
 * - ARIA-compliant show delays (hover triggers after ~400ms)
 * - Sticky behavior (can move cursor into tooltip)
 * - Keyboard navigation support (immediate show on focus)
 * - Smart positioning with viewport edge detection
 *
 * @example
 * ```ts
 * import {Tooltip_State, tooltip_context} from '$lib/tooltip_state.svelte.js';
 *
 * // Create and provide tooltip state
 * const tooltip = new Tooltip_State(400, 200);
 * tooltip_context.set(tooltip);
 *
 * // Use in components
 * const tooltip = tooltip_context.get();
 * tooltip.show_delayed(x, y, content); // Show after delay (hover)
 * tooltip.show(x, y, content);         // Show immediately (focus)
 * tooltip.hide_delayed();              // Hide after delay (sticky)
 * tooltip.hide();                      // Hide immediately
 * ```
 */
import type {Snippet} from 'svelte';

import {create_context} from '$lib/context_helpers.js';

/**
 * Counter for generating unique tooltip IDs
 */
let tooltip_id_counter = 0;

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
	/**
	 * Unique ID for the tooltip element (for aria-describedby)
	 */
	id: string = `tooltip-${++tooltip_id_counter}`;
	/**
	 * Show delay in milliseconds (ARIA pattern specifies "small delay" before showing)
	 */
	show_delay_ms: number;
	/**
	 * Hide delay in milliseconds (for sticky behavior - allows moving cursor into tooltip)
	 */
	hide_delay_ms: number;

	// Timer for delayed show (ARIA spec compliance)
	#show_timer: ReturnType<typeof setTimeout> | null = null;
	// Timer for delayed hide to support sticky behavior
	#hide_timer: ReturnType<typeof setTimeout> | null = null;

	constructor(show_delay_ms = 400, hide_delay_ms = 200) {
		this.show_delay_ms = show_delay_ms;
		this.hide_delay_ms = hide_delay_ms;
	}

	/**
	 * Show tooltip immediately at given position with content
	 */
	show(x: number, y: number, content: Snippet): void {
		// Clear any pending timers
		this.cancel_show();
		this.cancel_hide();

		this.x = x;
		this.y = y;
		this.content = content;
		this.opened = true;
	}

	/**
	 * Show tooltip after delay (ARIA compliance: "appears after a small delay")
	 */
	show_delayed(x: number, y: number, content: Snippet, delay_ms?: number): void {
		// Clear any pending show to restart the timer
		this.cancel_show();
		// Clear any pending hide
		this.cancel_hide();

		const delay = delay_ms ?? this.show_delay_ms;

		this.#show_timer = setTimeout(() => {
			this.x = x;
			this.y = y;
			this.content = content;
			this.opened = true;
			this.#show_timer = null;
		}, delay);
	}

	/**
	 * Cancel a pending show operation
	 */
	cancel_show(): void {
		if (this.#show_timer) {
			clearTimeout(this.#show_timer);
			this.#show_timer = null;
		}
	}

	/**
	 * Hide tooltip immediately
	 */
	hide(): void {
		// Clear any pending show (user moved away before tooltip appeared)
		this.cancel_show();
		// Clear any existing hide timer
		this.cancel_hide();

		this.opened = false;
		this.content = null;
	}

	/**
	 * Hide tooltip after delay (for sticky behavior - allows moving cursor into tooltip)
	 */
	hide_delayed(delay_ms?: number): void {
		// Clear any pending show (user moved away before tooltip appeared)
		this.cancel_show();
		// Clear any existing hide timer
		this.cancel_hide();

		const delay = delay_ms ?? this.hide_delay_ms;

		this.#hide_timer = setTimeout(() => {
			this.opened = false;
			this.content = null;
			this.#hide_timer = null;
		}, delay);
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

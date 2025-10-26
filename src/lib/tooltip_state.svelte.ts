/**
 * Tooltip state management for ARIA-compliant tooltips
 *
 * This module provides a global tooltip system with:
 * - ARIA-compliant show delays (hover triggers after ~400ms)
 * - Sticky behavior (can move cursor into tooltip)
 * - Keyboard navigation support (immediate show on focus)
 * - Smart positioning with viewport edge detection
 *
 * ## ARIA Compliance
 *
 * Following the [ARIA Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/):
 * - Tooltip has `role="tooltip"` (handled by Tooltip.svelte)
 * - Tooltip has unique `id` (accessible via `tooltip.id`)
 * - **IMPORTANT**: Triggering elements MUST reference tooltip via `aria-describedby`
 * - Escape key dismisses tooltip (handled by Tooltip.svelte)
 * - Tooltips remain non-focusable
 *
 * ## Usage Pattern
 *
 * @example
 * ```ts
 * import {Tooltip_State, tooltip_context} from '$lib/tooltip_state.svelte.js';
 *
 * // Create and provide tooltip state
 * const tooltip = new Tooltip_State(400, 200);
 * tooltip_context.set(tooltip);
 * ```
 *
 * @example
 * ```svelte
 * <script lang="ts">
 * import {tooltip_context} from '$lib/tooltip_state.svelte.js';
 *
 * const tooltip = tooltip_context.get();
 * let button_el: HTMLButtonElement;
 *
 * // Show on hover (with delay)
 * const on_mouse_enter = (e: MouseEvent) => {
 *   tooltip.show_delayed(e.clientX, e.clientY, my_tooltip_content);
 * };
 *
 * // Show on focus (immediate for keyboard users)
 * const on_focus = () => {
 *   const rect = button_el.getBoundingClientRect();
 *   tooltip.show(rect.left + rect.width / 2, rect.bottom, my_tooltip_content);
 * };
 *
 * // Hide with delay (allows moving cursor into tooltip)
 * const on_mouse_leave = () => tooltip.hide_delayed();
 *
 * // Hide immediately on blur
 * const on_blur = () => tooltip.hide();
 * </script>
 *
 * <!-- IMPORTANT: Set aria-describedby when tooltip is open -->
 * <button
 *   bind:this={button_el}
 *   aria-describedby={tooltip.opened ? tooltip.id : undefined}
 *   onmouseenter={on_mouse_enter}
 *   onmouseleave={on_mouse_leave}
 *   onfocus={on_focus}
 *   onblur={on_blur}
 * >
 *   Hover or focus me
 * </button>
 *
 * {#snippet my_tooltip_content()}
 *   <div>This is the tooltip content</div>
 * {/snippet}
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
	 *
	 * **IMPORTANT**: Triggering elements must reference this ID via aria-describedby
	 * when the tooltip is open to ensure ARIA compliance.
	 *
	 * @example
	 * ```svelte
	 * <button aria-describedby={tooltip.opened ? tooltip.id : undefined}>
	 *   Trigger
	 * </button>
	 * ```
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
	 * Clear all pending timers (internal helper)
	 */
	#clear_timers(): void {
		this.cancel_show();
		this.cancel_hide();
	}

	/**
	 * Show tooltip immediately at given position with content
	 */
	show(x: number, y: number, content: Snippet): void {
		// Clear any pending timers
		this.#clear_timers();

		this.x = x;
		this.y = y;
		this.content = content;
		this.opened = true;
	}

	/**
	 * Show tooltip after delay (ARIA compliance: "appears after a small delay")
	 */
	show_delayed(x: number, y: number, content: Snippet, delay_ms?: number): void {
		// Clear any pending timers and restart
		this.#clear_timers();

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
		// Clear any pending operations
		this.#clear_timers();

		this.opened = false;
		this.content = null;
	}

	/**
	 * Hide tooltip after delay (for sticky behavior - allows moving cursor into tooltip)
	 */
	hide_delayed(delay_ms?: number): void {
		// Clear any pending operations and start hide timer
		this.#clear_timers();

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

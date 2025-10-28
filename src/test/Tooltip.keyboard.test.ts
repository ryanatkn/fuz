/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, type Snippet} from 'svelte';

import {mount_component, unmount_component, create_keyboard_event} from '$test/test_helpers.js';
import Tooltip from '$lib/Tooltip.svelte';
import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Tooltip - Keyboard Interaction', () => {
	let tooltip_state: Tooltip_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

	beforeEach(() => {
		tooltip_state = new Tooltip_State(400, 200);
		vi.useFakeTimers();
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
		vi.restoreAllMocks();
	});

	describe('Escape key', () => {
		test('dismisses tooltip when Escape is pressed', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should be hidden after Escape');
		});

		test('Escape key does nothing when tooltip is closed', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			assert.strictEqual(tooltip_state.opened, false);

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			// Should remain closed without error
			assert.strictEqual(tooltip_state.opened, false);
		});

		test('Escape key dismisses immediately (not delayed)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			// Should be hidden immediately, not after a delay
			assert.strictEqual(tooltip_state.opened, false);

			// Advance timers to ensure no delayed behavior
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});

		test('Escape cancels pending show', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);
			flushSync();

			// Should not be visible yet
			assert.strictEqual(tooltip_state.opened, false);

			// Press Escape during delay
			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			// Advance past show delay
			vi.advanceTimersByTime(450);
			flushSync();

			// Should remain closed
			assert.strictEqual(tooltip_state.opened, false);
		});
	});

	describe('other keyboard events', () => {
		test('other keys do not dismiss tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const keys = ['Enter', ' ', 'Tab', 'ArrowUp', 'ArrowDown', 'a', '1'];
			for (const key of keys) {
				const event = create_keyboard_event(key);
				window.dispatchEvent(event);
				flushSync();

				assert.strictEqual(
					tooltip_state.opened,
					true,
					`tooltip should remain open after ${key} key`,
				);
			}
		});

		test('keyboard events do not interfere with tooltip positioning', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const initial_transform = tooltip_el.style.transform;

			// Press various keys
			window.dispatchEvent(create_keyboard_event('ArrowUp'));
			window.dispatchEvent(create_keyboard_event('ArrowDown'));
			flushSync();

			const tooltip_el_after = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.strictEqual(
				tooltip_el_after.style.transform,
				initial_transform,
				'position should not change',
			);
		});
	});

	describe('ARIA compliance', () => {
		test('tooltips do not receive focus (focus stays on trigger)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Verify tooltip element has no tabindex
			assert.strictEqual(tooltip_el.getAttribute('tabindex'), null);

			// Try to focus tooltip
			tooltip_el.focus();

			// Active element should not be the tooltip
			assert.notStrictEqual(document.activeElement, tooltip_el);
		});

		test('keyboard navigation does not enter tooltip content', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Tab key should not move focus into tooltip
			const event = create_keyboard_event('Tab');
			tooltip_el.dispatchEvent(event);

			// Tooltip should not contain any focusable descendants
			const focusables = tooltip_el.querySelectorAll(
				'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);
			assert.strictEqual(focusables.length, 0, 'tooltip should not contain focusable elements');
		});
	});

	describe('edge cases', () => {
		test('multiple Escape presses do not cause errors', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Press Escape multiple times
			for (let i = 0; i < 5; i++) {
				const event = create_keyboard_event('Escape');
				window.dispatchEvent(event);
				flushSync();
			}

			assert.strictEqual(tooltip_state.opened, false);
			// Should not throw errors
		});

		test('Escape during delayed hide closes immediately', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Start delayed hide
			tooltip_state.hide_delayed();
			flushSync();

			// Should still be visible during delay
			assert.strictEqual(tooltip_state.opened, true);

			// Press Escape
			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			// Should be closed immediately
			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null);
		});

		test('keyboard events with modifiers do not affect tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Test various modifier combinations (except Escape which should still work)
			const event1 = create_keyboard_event('a', {ctrlKey: true});
			window.dispatchEvent(event1);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);

			const event2 = create_keyboard_event('s', {metaKey: true});
			window.dispatchEvent(event2);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);

			// Escape with modifiers should still dismiss
			const event3 = create_keyboard_event('Escape', {shiftKey: true});
			window.dispatchEvent(event3);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});
	});

	describe('integration with show/hide timing', () => {
		test('Escape works during show delay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);

			// Advance partway through delay
			vi.advanceTimersByTime(200);
			flushSync();

			// Press Escape
			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			// Complete the delay
			vi.advanceTimersByTime(300);
			flushSync();

			// Should not have opened
			assert.strictEqual(tooltip_state.opened, false);
		});

		test('Escape works during hide delay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			tooltip_state.hide_delayed();

			// Advance partway through delay
			vi.advanceTimersByTime(100);
			flushSync();

			// Press Escape (should hide immediately)
			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);

			// Complete the delay (should not cause issues)
			vi.advanceTimersByTime(200);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});
	});
});

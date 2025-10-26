/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, type Snippet} from 'svelte';

import {mount_component, unmount_component, create_mouse_event} from '$lib/test_helpers.js';
import Tooltip from '$lib/Tooltip.svelte';
import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Tooltip - Mouse Interaction', () => {
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

	describe('click dismissal', () => {
		test('clicking outside tooltip dismisses it', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);

			// Click outside (on window)
			const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should be hidden after outside click');
		});

		test('clicking inside tooltip does NOT dismiss it (ARIA compliance)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(tooltip_el, 'tooltip should be rendered');

			// Click inside tooltip
			const event = create_mouse_event('mousedown');
			Object.defineProperty(event, 'target', {
				value: tooltip_el,
				enumerable: true,
				configurable: true,
			});
			window.dispatchEvent(event);
			flushSync();

			// Should still be open (ARIA guideline: "remains open as long as cursor over tooltip")
			assert.strictEqual(tooltip_state.opened, true);
			const still_visible = mounted.container.querySelector('.tooltip');
			assert.ok(still_visible, 'tooltip should remain visible after inside click');
		});

		test('clicking on tooltip child element does NOT dismiss it', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Create child element inside tooltip
			const child = document.createElement('span');
			tooltip_el.appendChild(child);

			// Click on child element
			const event = create_mouse_event('mousedown');
			Object.defineProperty(event, 'target', {
				value: child,
				enumerable: true,
				configurable: true,
			});
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);
		});

		test('clicking dismisses immediately (not delayed)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Click outside
			const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
			window.dispatchEvent(event);
			flushSync();

			// Should be hidden immediately
			assert.strictEqual(tooltip_state.opened, false);

			// Advance timers to ensure no delayed behavior
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});

		test('click dismissal when tooltip is closed does nothing', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			assert.strictEqual(tooltip_state.opened, false);

			// Click when closed
			const event = create_mouse_event('mousedown');
			window.dispatchEvent(event);
			flushSync();

			// Should remain closed without error
			assert.strictEqual(tooltip_state.opened, false);
		});
	});

	describe('hover behavior', () => {
		test('mouse enter on tooltip cancels hide delay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Start hide delay
			tooltip_state.hide_delayed();

			// Mouse enters tooltip
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const event = create_mouse_event('mouseenter');
			tooltip_el.dispatchEvent(event);
			flushSync();

			// Advance past hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should still be open
			assert.strictEqual(tooltip_state.opened, true);
			const still_visible = mounted.container.querySelector('.tooltip');
			assert.ok(still_visible, 'tooltip should remain visible after mouse enter');
		});

		test('mouse leave on tooltip starts hide delay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Mouse leaves tooltip
			const event = create_mouse_event('mouseleave');
			tooltip_el.dispatchEvent(event);
			flushSync();

			// Should still be visible during delay
			assert.strictEqual(tooltip_state.opened, true);

			// Advance past hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should now be hidden
			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el_after = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el_after, null, 'tooltip should be hidden after delay');
		});

		test('mouse enter and leave multiple times', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Mouse leaves
			tooltip_el.dispatchEvent(create_mouse_event('mouseleave'));
			flushSync();

			// Mouse enters again before hide completes
			vi.advanceTimersByTime(100);
			tooltip_el.dispatchEvent(create_mouse_event('mouseenter'));
			flushSync();

			// Complete original hide delay
			vi.advanceTimersByTime(200);
			flushSync();

			// Should still be visible
			assert.strictEqual(tooltip_state.opened, true);

			// Mouse leaves again
			const new_tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			new_tooltip_el.dispatchEvent(create_mouse_event('mouseleave'));
			flushSync();

			// Complete hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should now be hidden
			assert.strictEqual(tooltip_state.opened, false);
		});
	});

	describe('sticky behavior (ARIA compliance)', () => {
		test('tooltip remains open when moving cursor from trigger to tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			// Simulate user hovering over trigger and showing tooltip
			tooltip_state.show_delayed(100, 200, content);

			// Complete show delay
			vi.advanceTimersByTime(450);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);

			// User moves cursor away from trigger (would normally start hide delay)
			tooltip_state.hide_delayed();

			// But then moves into tooltip before hide completes
			vi.advanceTimersByTime(100);
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			tooltip_el.dispatchEvent(create_mouse_event('mouseenter'));
			flushSync();

			// Complete hide delay
			vi.advanceTimersByTime(200);
			flushSync();

			// Should still be open
			assert.strictEqual(tooltip_state.opened, true);
		});

		test('tooltip closes when cursor leaves both trigger and tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Mouse enters tooltip
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			tooltip_el.dispatchEvent(create_mouse_event('mouseenter'));
			flushSync();

			// Mouse leaves tooltip
			tooltip_el.dispatchEvent(create_mouse_event('mouseleave'));
			flushSync();

			// Should still be visible during delay
			assert.strictEqual(tooltip_state.opened, true);

			// Complete hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should now be closed
			assert.strictEqual(tooltip_state.opened, false);
		});

		test('allows reading long tooltip content', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Mouse enters tooltip (user reading content)
			tooltip_el.dispatchEvent(create_mouse_event('mouseenter'));
			flushSync();

			// Simulate long reading time
			vi.advanceTimersByTime(5000);
			flushSync();

			// Tooltip should still be visible
			assert.strictEqual(tooltip_state.opened, true);

			// Mouse leaves
			tooltip_el.dispatchEvent(create_mouse_event('mouseleave'));
			flushSync();

			vi.advanceTimersByTime(250);
			flushSync();

			// Now it should close
			assert.strictEqual(tooltip_state.opened, false);
		});
	});

	describe('edge cases', () => {
		test('multiple rapid clicks outside do not cause errors', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Rapidly click outside multiple times
			for (let i = 0; i < 10; i++) {
				const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
				window.dispatchEvent(event);
				flushSync();
			}

			assert.strictEqual(tooltip_state.opened, false);
			// Should not throw errors
		});

		test('click during show delay cancels show', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);

			// Advance partway through delay
			vi.advanceTimersByTime(200);
			flushSync();

			// Click outside
			const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
			window.dispatchEvent(event);
			flushSync();

			// Complete the delay
			vi.advanceTimersByTime(300);
			flushSync();

			// Should not have opened
			assert.strictEqual(tooltip_state.opened, false);
		});

		test('click during hide delay closes immediately', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			tooltip_state.hide_delayed();

			// Advance partway through delay
			vi.advanceTimersByTime(100);
			flushSync();

			// Click outside (should close immediately)
			const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);

			// Complete the delay (should not cause issues)
			vi.advanceTimersByTime(200);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});

		test('mouse events on non-existent tooltip element do not error', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			// Tooltip is not open
			assert.strictEqual(tooltip_state.opened, false);

			// Try to dispatch mouse events (should not error)
			const event = create_mouse_event('mouseenter');
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
		});

		test('mouseenter without el reference does not error', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Manually trigger state update that might cause el to be undefined
			tooltip_state.hide();
			flushSync();

			// This should not cause errors even if el is undefined
			const event = create_mouse_event('mousedown');
			window.dispatchEvent(event);
			flushSync();

			// Should not throw
		});
	});

	describe('interaction with state timing', () => {
		test('click outside works during show delay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);

			// Click outside during show delay
			const event = create_mouse_event('mousedown', {clientX: 500, clientY: 500});
			window.dispatchEvent(event);
			flushSync();

			// Complete show delay
			vi.advanceTimersByTime(450);
			flushSync();

			// Should not have opened
			assert.strictEqual(tooltip_state.opened, false);
		});

		test('mouseenter during show delay does not interfere', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);

			// Advance partway through delay
			vi.advanceTimersByTime(200);
			flushSync();

			// Dispatching events during show delay should not cause errors
			const event = create_mouse_event('mouseenter');
			window.dispatchEvent(event);
			flushSync();

			// Complete show delay
			vi.advanceTimersByTime(300);
			flushSync();

			// Should be open
			assert.strictEqual(tooltip_state.opened, true);
		});
	});
});

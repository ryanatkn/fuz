/* eslint-disable @typescript-eslint/no-empty-function */
import {describe, test, assert, beforeEach, vi} from 'vitest';
import type {Snippet} from 'svelte';

import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

describe('Tooltip_State', () => {
	let tooltip: Tooltip_State;

	beforeEach(() => {
		tooltip = new Tooltip_State();
		vi.useFakeTimers();
	});

	describe('initialization', () => {
		test('creates with default state', () => {
			assert.strictEqual(tooltip.opened, false);
			assert.strictEqual(tooltip.x, 0);
			assert.strictEqual(tooltip.y, 0);
			assert.strictEqual(tooltip.content, null);
		});

		test('creates with default show delay', () => {
			assert.strictEqual(tooltip.show_delay_ms, 400);
		});

		test('creates with custom show delay', () => {
			const custom_tooltip = new Tooltip_State(300);
			assert.strictEqual(custom_tooltip.show_delay_ms, 300);
		});

		test('creates with unique ID', () => {
			assert.ok(tooltip.id, 'ID should be truthy');
			assert.ok(tooltip.id.startsWith('tooltip-'), 'ID should start with tooltip-');
		});

		test('generates unique IDs for multiple instances', () => {
			const tooltip1 = new Tooltip_State();
			const tooltip2 = new Tooltip_State();
			assert.notStrictEqual(tooltip1.id, tooltip2.id, 'Each instance should have unique ID');
		});
	});

	describe('show', () => {
		test('sets opened to true immediately', () => {
			const content = () => {};
			tooltip.show(100, 200, content as Snippet);
			assert.strictEqual(tooltip.opened, true);
		});

		test('sets position', () => {
			const content = () => {};
			tooltip.show(150, 250, content as Snippet);
			assert.strictEqual(tooltip.x, 150);
			assert.strictEqual(tooltip.y, 250);
		});

		test('sets content', () => {
			const content = () => {};
			tooltip.show(0, 0, content as Snippet);
			assert.strictEqual(tooltip.content, content);
		});

		test('cancels pending hide', () => {
			const content = () => {};
			tooltip.show(0, 0, content as Snippet);
			tooltip.hide(100); // Schedule hide with delay

			// Show again before hide executes
			const new_content = () => {};
			tooltip.show(10, 10, new_content as Snippet);

			// Advance timers
			vi.advanceTimersByTime(150);

			// Should still be opened because hide was cancelled
			assert.strictEqual(tooltip.opened, true);
			assert.strictEqual(tooltip.content, new_content);
		});

		test('cancels pending show', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			// Show immediately before delayed show executes
			const new_content = () => {};
			tooltip.show(150, 250, new_content as Snippet);

			// Should be opened immediately
			assert.strictEqual(tooltip.opened, true);

			// Advance timers to verify delayed show was cancelled
			vi.advanceTimersByTime(500);
			assert.strictEqual(tooltip.x, 150, 'should use immediate show position');
			assert.strictEqual(tooltip.content, new_content);
		});
	});

	describe('hide', () => {
		beforeEach(() => {
			const content = () => {};
			tooltip.show(100, 100, content as Snippet);
		});

		test('immediately hides with no delay', () => {
			tooltip.hide(0);
			assert.strictEqual(tooltip.opened, false);
			assert.strictEqual(tooltip.content, null);
		});

		test('immediately hides with default (no argument)', () => {
			tooltip.hide();
			assert.strictEqual(tooltip.opened, false);
			assert.strictEqual(tooltip.content, null);
		});

		test('delays hide when delay is provided', () => {
			tooltip.hide(100);

			// Should still be opened immediately after calling hide
			assert.strictEqual(tooltip.opened, true);

			// Advance time partially
			vi.advanceTimersByTime(50);
			assert.strictEqual(tooltip.opened, true);

			// Advance past the delay
			vi.advanceTimersByTime(60);
			assert.strictEqual(tooltip.opened, false);
			assert.strictEqual(tooltip.content, null);
		});

		test('cancels previous hide timer when hiding again', () => {
			tooltip.hide(100);
			tooltip.hide(200);

			// Advance past first timeout
			vi.advanceTimersByTime(150);
			assert.strictEqual(tooltip.opened, true, 'first timeout should be cancelled');

			// Advance to second timeout
			vi.advanceTimersByTime(100);
			assert.strictEqual(tooltip.opened, false, 'second timeout should execute');
		});
	});

	describe('cancel_hide', () => {
		beforeEach(() => {
			const content = () => {};
			tooltip.show(100, 100, content as Snippet);
		});

		test('cancels pending hide', () => {
			tooltip.hide(100);
			tooltip.cancel_hide();

			// Advance past when hide would have executed
			vi.advanceTimersByTime(150);

			// Should still be opened
			assert.strictEqual(tooltip.opened, true);
		});

		test('does nothing if no pending hide', () => {
			tooltip.cancel_hide();
			assert.strictEqual(tooltip.opened, true);
			// Should not throw
		});

		test('does nothing after immediate hide', () => {
			tooltip.hide(0);
			tooltip.cancel_hide();
			assert.strictEqual(tooltip.opened, false);
			// Should not throw or change state
		});
	});

	describe('show_delayed', () => {
		test('shows tooltip after delay', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			// Should not be opened immediately
			assert.strictEqual(tooltip.opened, false);

			// Advance time partially
			vi.advanceTimersByTime(200);
			assert.strictEqual(tooltip.opened, false);

			// Advance past the delay
			vi.advanceTimersByTime(250);
			assert.strictEqual(tooltip.opened, true);
			assert.strictEqual(tooltip.x, 100);
			assert.strictEqual(tooltip.y, 200);
			assert.strictEqual(tooltip.content, content);
		});

		test('uses default show_delay_ms', () => {
			const content = () => {};
			tooltip.show_delayed(50, 50, content as Snippet);

			vi.advanceTimersByTime(399);
			assert.strictEqual(tooltip.opened, false);

			vi.advanceTimersByTime(2);
			assert.strictEqual(tooltip.opened, true);
		});

		test('uses custom delay_ms parameter', () => {
			const content = () => {};
			tooltip.show_delayed(50, 50, content as Snippet, 100);

			vi.advanceTimersByTime(99);
			assert.strictEqual(tooltip.opened, false);

			vi.advanceTimersByTime(2);
			assert.strictEqual(tooltip.opened, true);
		});

		test('restarts timer when called again', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			// Advance partially
			vi.advanceTimersByTime(200);

			// Call again, resetting timer
			const new_content = () => {};
			tooltip.show_delayed(150, 250, new_content as Snippet);

			// Original timer should be cancelled
			vi.advanceTimersByTime(250);
			assert.strictEqual(tooltip.opened, false);

			// Advance to complete new timer
			vi.advanceTimersByTime(200);
			assert.strictEqual(tooltip.opened, true);
			assert.strictEqual(tooltip.x, 150);
			assert.strictEqual(tooltip.content, new_content);
		});

		test('cancels pending hide', () => {
			const content = () => {};
			tooltip.show(0, 0, content as Snippet);
			tooltip.hide(100);

			// Start show_delayed before hide completes (this cancels the hide)
			const new_content = () => {};
			tooltip.show_delayed(50, 50, new_content as Snippet);

			// Advance past when hide would have executed (but it was cancelled)
			// Tooltip should still be open from original show()
			vi.advanceTimersByTime(150);
			assert.strictEqual(tooltip.opened, true, 'should still be open (hide was cancelled)');

			// Complete show delay - should update content
			vi.advanceTimersByTime(300);
			assert.strictEqual(tooltip.opened, true, 'should remain open');
			assert.strictEqual(tooltip.content, new_content);
		});
	});

	describe('cancel_show', () => {
		test('cancels pending show', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			// Cancel before it shows
			tooltip.cancel_show();

			// Advance past when it would have shown
			vi.advanceTimersByTime(500);

			// Should not be opened
			assert.strictEqual(tooltip.opened, false);
		});

		test('does nothing if no pending show', () => {
			tooltip.cancel_show();
			// Should not throw
		});

		test('does nothing after show completes', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			vi.advanceTimersByTime(500);
			assert.strictEqual(tooltip.opened, true);

			tooltip.cancel_show();
			assert.strictEqual(tooltip.opened, true);
			// Should not affect already-shown tooltip
		});
	});

	describe('hide with pending show', () => {
		test('cancels pending show when hiding', () => {
			const content = () => {};
			tooltip.show_delayed(100, 200, content as Snippet);

			// Hide before show completes
			tooltip.hide();

			// Advance past when show would have happened
			vi.advanceTimersByTime(500);

			// Should remain closed
			assert.strictEqual(tooltip.opened, false);
		});
	});

	describe('sticky behavior', () => {
		test('supports showing, delayed hide, cancel, then delayed hide again', () => {
			const content = () => {};

			// Show tooltip
			tooltip.show(0, 0, content as Snippet);
			assert.strictEqual(tooltip.opened, true);

			// Mouse leaves, start hide timer
			tooltip.hide(200);
			assert.strictEqual(tooltip.opened, true);

			// Mouse enters tooltip, cancel hide
			tooltip.cancel_hide();
			vi.advanceTimersByTime(250);
			assert.strictEqual(tooltip.opened, true, 'should still be open after cancelling');

			// Mouse leaves tooltip again, hide for real
			tooltip.hide(200);
			vi.advanceTimersByTime(250);
			assert.strictEqual(tooltip.opened, false, 'should close after second hide');
		});
	});
});

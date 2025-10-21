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
	});

	describe('show', () => {
		test('sets opened to true', () => {
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

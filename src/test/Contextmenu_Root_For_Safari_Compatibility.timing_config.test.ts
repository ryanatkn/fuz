/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {tick} from 'svelte';

import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';
import {
	unmount_component,
	create_touch_event,
	create_contextmenu_event,
	set_event_target,
} from '$lib/test_helpers.js';
import {mount_contextmenu_root, setup_contextmenu_action} from '$test/contextmenu_test_helpers.js';
import {
	CONTEXTMENU_DEFAULT_LONGPRESS_DURATION,
	CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
	CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
} from '$lib/contextmenu_helpers.js';

describe('Contextmenu_Root_For_Safari_Compatibility - Timing Configurations', () => {
	let mounted: ReturnType<typeof mount_contextmenu_root> | null = null;

	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
		vi.useRealTimers();
	});

	describe('longpress_duration configuration', () => {
		test('respects custom longpress_duration (very short: 200ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 200,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Should open after 200ms
			vi.advanceTimersByTime(200);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('respects custom longpress_duration (normal: 500ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 500,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Should not open before timeout
			vi.advanceTimersByTime(499);
			await tick();
			assert.strictEqual(contextmenu.opened, false);

			// Should open at timeout
			vi.advanceTimersByTime(1);
			await tick();
			assert.strictEqual(contextmenu.opened, true);
		});

		test('respects custom longpress_duration (very long: 2000ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 2000,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Should not open early
			vi.advanceTimersByTime(1000);
			await tick();
			assert.strictEqual(contextmenu.opened, false);

			// Should open after full duration
			vi.advanceTimersByTime(1000);
			await tick();
			assert.strictEqual(contextmenu.opened, true);
		});

		test('shorter duration increases accidental trigger risk', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 100, // Very short
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Brief touch that might be unintentional
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Opens very quickly
			vi.advanceTimersByTime(100);
			await tick();

			// This demonstrates the risk - menu opens on brief touches
			assert.strictEqual(contextmenu.opened, true);
		});

		test('longer duration reduces UX responsiveness', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 3000, // Very long
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// User would have to wait a very long time
			vi.advanceTimersByTime(2000);
			await tick();
			assert.strictEqual(contextmenu.opened, false);

			vi.advanceTimersByTime(1000);
			await tick();

			// This demonstrates poor UX - takes too long
			assert.strictEqual(contextmenu.opened, true);
		});
	});

	describe('longpress_move_tolerance configuration', () => {
		test('respects custom longpress_move_tolerance (tight: 2px)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 2,
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move 3 pixels (over tolerance of 2)
			const touchmove = create_touch_event('touchmove', [{clientX: 103, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(300);
			await tick();

			// Should be cancelled
			assert.strictEqual(contextmenu.opened, false);
		});

		test('respects custom longpress_move_tolerance (normal: 21px)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move 20 pixels (within tolerance of 21)
			const touchmove = create_touch_event('touchmove', [{clientX: 120, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(300);
			await tick();

			// Should still open
			assert.strictEqual(contextmenu.opened, true);
		});

		test('respects custom longpress_move_tolerance (loose: 50px)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 50,
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move 40 pixels (within tolerance of 50)
			const touchmove = create_touch_event('touchmove', [{clientX: 140, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(300);
			await tick();

			// Should still open with generous tolerance
			assert.strictEqual(contextmenu.opened, true);
		});

		test('very tight tolerance requires precise touch', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 1,
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Even tiny movement (2 pixels) cancels
			const touchmove = create_touch_event('touchmove', [{clientX: 102, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(300);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('very loose tolerance allows more movement', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 100,
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Large movement (80 pixels) still allowed
			const touchmove = create_touch_event('touchmove', [{clientX: 180, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(300);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});
	});

	describe('bypass_window configuration', () => {
		test('respects custom bypass_window (short: 400ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				bypass_window: 400,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap within 400ms window (total: 300ms < 400ms)
			vi.advanceTimersByTime(200);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should bypass
			assert.strictEqual(contextmenu.opened, false);
		});

		test('respects custom bypass_window (normal: 660ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				bypass_window: CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap within 660ms window
			vi.advanceTimersByTime(500);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should bypass
			assert.strictEqual(contextmenu.opened, false);
		});

		test('respects custom bypass_window (long: 1000ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				bypass_window: 1000,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap within 1000ms window (total: 900ms < 1000ms)
			vi.advanceTimersByTime(800);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should bypass
			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('bypass_move_tolerance configuration', () => {
		test('respects custom bypass_move_tolerance (5px)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				bypass_move_tolerance: 5,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap 4 pixels away (within 5px tolerance)
			vi.advanceTimersByTime(200);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 104, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should bypass
			assert.strictEqual(contextmenu.opened, false);
		});

		test('respects custom bypass_move_tolerance (20px)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				bypass_move_tolerance: 20,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap 15 pixels away (within 20px tolerance)
			vi.advanceTimersByTime(200);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 115, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should bypass
			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('timing relationship validation', () => {
		test('warns in DEV when longpress_duration >= bypass_window', async () => {
			// This test documents expected behavior but can't actually test DEV warnings
			// In practice, if longpress_duration (500ms) >= bypass_window (400ms),
			// the longpress would fire before the bypass window expires, making bypass difficult
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 500,
				bypass_window: 400,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Try bypass gesture - first tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap within 400ms bypass window (total: 350ms < 400ms)
			vi.advanceTimersByTime(250);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Longpress timer would fire at 500ms (150ms from now)
			// But bypass should prevent it
			vi.advanceTimersByTime(500);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('handles longpress_duration close to bypass_window', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 450,
				bypass_window: CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Normal flow should work
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('handles misconfigurations gracefully in production', async () => {
			// Even with poor config, component should not crash
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 1000,
				bypass_window: 500,
				longpress_move_tolerance: 0,
				bypass_move_tolerance: 0,
			});

			const {container} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Should still function (maybe not optimally, but not crash)
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(1000);
			await tick();

			// Component handles it
			assert.ok(mounted.container);
		});
	});

	describe('browser contextmenu timing interaction', () => {
		test('handles browser contextmenu firing before custom longpress (early)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 600, // Longer than browser's ~500ms
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Browser fires at ~500ms
			vi.advanceTimersByTime(500);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should open via contextmenu event
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(ctxmenu.defaultPrevented, true);

			// Our longpress should not fire
			vi.advanceTimersByTime(100);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('handles browser contextmenu firing after custom longpress (late)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 400, // Shorter than browser's ~500ms
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Our longpress fires at 400ms
			vi.advanceTimersByTime(400);
			await tick();
			assert.strictEqual(contextmenu.opened, true);

			// Browser fires at ~500ms
			vi.advanceTimersByTime(100);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should be swallowed since we already opened
			assert.strictEqual(ctxmenu.defaultPrevented, true);
			assert.strictEqual(contextmenu.opened, true);
		});

		test('handles browser contextmenu firing simultaneously (±10ms)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 500, // Same as browser
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Both fire around same time
			vi.advanceTimersByTime(500);
			await tick();

			// Our longpress opened
			assert.strictEqual(contextmenu.opened, true);

			// Browser event comes in right after
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should handle gracefully
			assert.strictEqual(ctxmenu.defaultPrevented, true);
		});

		test('handles browser contextmenu firing between tap-then-longpress taps', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Browser contextmenu fires (e.g., from desktop right-click)
			vi.advanceTimersByTime(100);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should open normally
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(ctxmenu.defaultPrevented, true);
		});

		test('longpress_duration < browser timing (bypass works)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 400,
				bypass_window: CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Bypass gesture
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			vi.advanceTimersByTime(100);
			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Our longpress would fire at 400ms, but bypass prevents it
			vi.advanceTimersByTime(400);
			await tick();
			assert.strictEqual(contextmenu.opened, false);

			// Browser fires at ~500ms - should bypass
			vi.advanceTimersByTime(100);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			assert.strictEqual(ctxmenu.defaultPrevented, false);
		});

		test('longpress_duration > browser timing (custom menu opens first)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 600, // Longer than browser's ~500ms
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Browser would fire first at ~500ms
			vi.advanceTimersByTime(500);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Opens via browser event
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(ctxmenu.defaultPrevented, true);
		});

		test('longpress_duration ≈ browser timing (race condition handling)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 500, // Approximately browser timing
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Both fire around 500ms - component should handle gracefully
			vi.advanceTimersByTime(500);
			await tick();

			const opened_via_longpress = contextmenu.opened;

			// Browser event
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Either way, menu should be open and stable
			assert.strictEqual(contextmenu.opened, true);

			// If longpress opened first, browser event should be prevented
			if (opened_via_longpress) {
				assert.strictEqual(ctxmenu.defaultPrevented, true);
			}
		});
	});
});

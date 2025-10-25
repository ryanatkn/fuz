/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, tick} from 'svelte';

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
} from '$lib/contextmenu_helpers.js';

describe('Contextmenu_Root_For_Safari_Compatibility - Touch Event Handling', () => {
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

	describe('longpress detection', () => {
		test('starts longpress timer on touchstart', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);

			window.dispatchEvent(event);

			// Menu should not be open yet
			assert.strictEqual(contextmenu.opened, false);

			// But timeout should be started - we can't directly observe this,
			// but advancing time will prove it
			// Advance partway through longpress duration
			vi.advanceTimersByTime(100);
			assert.strictEqual(contextmenu.opened, false); // Still not open

			// Complete the remaining longpress duration
			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION - 100);
			await tick();

			// Now it should be open
			assert.strictEqual(contextmenu.opened, true);
		});

		test('opens menu after longpress_duration elapses', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_duration: 300,
			});

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);

			// Advance to custom longpress_duration (300ms)
			vi.advanceTimersByTime(300);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 98); // 100 + offset (-2)
			assert.strictEqual(contextmenu.y, 198); // 200 + offset (-2)
		});

		test('cancels longpress on touchmove beyond tolerance', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 10,
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

			// Move beyond tolerance (11 pixels)
			const touchmove = create_touch_event('touchmove', [{clientX: 111, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Advance past longpress duration - should not open due to movement
			vi.advanceTimersByTime(500);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('allows longpress with movement within tolerance', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 10,
				longpress_duration: 300,
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

			// Move within tolerance (5 pixels)
			const touchmove = create_touch_event('touchmove', [{clientX: 105, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Advance to custom longpress_duration (300ms) - should open despite movement
			vi.advanceTimersByTime(300);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('cancels longpress on touchend before timeout', async () => {
			const {container, contextmenu} = (mounted = mount_contextmenu_root(
				Contextmenu_Root_For_Safari_Compatibility,
			));

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// End touch before timeout (200ms into longpress)
			vi.advanceTimersByTime(200);
			const touchend = create_touch_event('touchend', []);
			set_event_target(touchend, target);
			window.dispatchEvent(touchend);

			// Advance remaining time past when it would have opened
			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION - 200 + 100);
			await tick();

			// Should not open
			assert.strictEqual(contextmenu.opened, false);
		});

		test('ignores touchstart when contextmenu already open', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Open menu manually
			contextmenu.open(
				[{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}}],
				150,
				250,
			);
			flushSync();

			// Try touchstart
			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			// Advance past longpress duration - position should remain unchanged
			vi.advanceTimersByTime(500);
			await tick();

			assert.strictEqual(contextmenu.x, 150);
			assert.strictEqual(contextmenu.y, 250);
		});

		test('ignores touchstart with multiple touches', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Two-finger touch
			const event = create_touch_event('touchstart', [
				{clientX: 100, clientY: 200, target},
				{clientX: 150, clientY: 250, target},
			]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			// Should not start longpress with multiple touches
			vi.advanceTimersByTime(500);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('ignores touchstart on editable elements', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const input = document.createElement('input');
			container.appendChild(input);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target: input}]);
			set_event_target(event, input);
			window.dispatchEvent(event);

			// Should not start longpress on editable elements
			vi.advanceTimersByTime(500);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('preserves touch coordinates for menu positioning', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			const event = create_touch_event('touchstart', [{clientX: 123, clientY: 456, target}]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Menu should be at touch coordinates with offset
			assert.strictEqual(contextmenu.x, 121); // 123 - 2
			assert.strictEqual(contextmenu.y, 454); // 456 - 2
		});
	});

	describe('native contextmenu interaction', () => {
		test('swallows native contextmenu event when longpress already opened menu', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Simulate longpress opening the menu
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
			const initial_x = contextmenu.x;
			const initial_y = contextmenu.y;

			// Now browser fires contextmenu event
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should be prevented and position unchanged
			assert.strictEqual(ctxmenu.defaultPrevented, true);
			assert.strictEqual(contextmenu.x, initial_x);
			assert.strictEqual(contextmenu.y, initial_y);
		});

		test('handles native contextmenu firing before custom longpress', async () => {
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

			// Browser fires contextmenu at ~500ms (before our 600ms custom longpress)
			vi.advanceTimersByTime(500);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should open from contextmenu event
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(ctxmenu.defaultPrevented, true);

			// Our longpress timeout should not reopen it (complete to 600ms total)
			vi.advanceTimersByTime(100);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('handles native contextmenu firing after custom longpress', async () => {
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

			// Our custom longpress opens at 400ms (before browser's ~500ms)
			vi.advanceTimersByTime(400);
			await tick();
			assert.strictEqual(contextmenu.opened, true);

			// Browser fires contextmenu later at ~500ms (100ms after our longpress)
			vi.advanceTimersByTime(100);
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Should be swallowed
			assert.strictEqual(ctxmenu.defaultPrevented, true);
			assert.strictEqual(contextmenu.opened, true);
		});

		test('resets state when native contextmenu opens menu', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Browser fires contextmenu (e.g., from right-click on desktop)
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			assert.strictEqual(contextmenu.opened, true);

			// Now close it
			contextmenu.close();

			// Start a new touch - should work normally
			const touchstart = create_touch_event('touchstart', [{clientX: 150, clientY: 250, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 148); // 150 - 2
			assert.strictEqual(contextmenu.y, 248); // 250 - 2
		});
	});

	describe('touchend behavior', () => {
		test('prevents clicking first item when menu just opened from longpress', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			let clicked = false;
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => (clicked = true)}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Wait for longpress
			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, true);

			// Touchend immediately after - should be swallowed
			const touchend = create_touch_event('touchend', []);
			set_event_target(touchend, target);
			window.dispatchEvent(touchend);

			// Should not have clicked
			assert.strictEqual(clicked, false);
			assert.strictEqual(touchend.defaultPrevented, true);
		});

		test('clears longpress timeout on touchend', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

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

			// End touch before longpress completes
			vi.advanceTimersByTime(200);
			const touchend = create_touch_event('touchend', []);
			set_event_target(touchend, target);
			window.dispatchEvent(touchend);

			// Continue advancing past when longpress would have triggered
			vi.advanceTimersByTime(500);
			await tick();

			// Should not open
			assert.strictEqual(contextmenu.opened, false);
		});

		test('preserves tap tracking state for bypass detection', async () => {
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

			// First tap duration (short tap)
			vi.advanceTimersByTime(100);

			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap quickly after first tap ends (total 200ms, within bypass window)
			vi.advanceTimersByTime(100);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// This should trigger bypass, so longpress should not open menu
			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, false);

			// But contextmenu event should be allowed through (bypass)
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			// Bypass means event is NOT prevented
			assert.strictEqual(ctxmenu.defaultPrevented, false);
		});
	});

	describe('touchcancel behavior', () => {
		test('resets all longpress state on touchcancel', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

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

			// Cancel touch partway through longpress
			vi.advanceTimersByTime(200);
			const touchcancel = create_touch_event('touchcancel', []);
			set_event_target(touchcancel, target);
			window.dispatchEvent(touchcancel);

			// Advance past when longpress would have triggered
			vi.advanceTimersByTime(500);
			await tick();

			// Should not open
			assert.strictEqual(contextmenu.opened, false);
		});

		test('clears bypass flag on touchcancel', async () => {
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

			// First tap duration (short tap)
			vi.advanceTimersByTime(100);

			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap starts (total 200ms from first tap, within bypass window)
			vi.advanceTimersByTime(100);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// This sets bypass flag internally

			// Now cancel
			const touchcancel = create_touch_event('touchcancel', []);
			set_event_target(touchcancel, target);
			window.dispatchEvent(touchcancel);

			// Try contextmenu - should open normally (bypass cleared)
			const ctxmenu = create_contextmenu_event(100, 200);
			set_event_target(ctxmenu, target);
			target.dispatchEvent(ctxmenu);

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(ctxmenu.defaultPrevented, true);
		});

		test('handles touchcancel during longpress timeout', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

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

			// Cancel partway through longpress (300ms into default 500ms)
			vi.advanceTimersByTime(300);
			const touchcancel = create_touch_event('touchcancel', []);
			set_event_target(touchcancel, target);
			window.dispatchEvent(touchcancel);

			// Complete the would-be timeout (to 500ms total)
			vi.advanceTimersByTime(200);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('handles touchcancel after menu opened', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Open menu via longpress
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();
			assert.strictEqual(contextmenu.opened, true);

			// Cancel after opening
			const touchcancel = create_touch_event('touchcancel', []);
			set_event_target(touchcancel, target);
			window.dispatchEvent(touchcancel);

			// Menu should remain open
			assert.strictEqual(contextmenu.opened, true);
		});
	});

	describe('movement tolerance', () => {
		test('movement at exactly tolerance pixels allows longpress', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
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

			// Move exactly 21 pixels (at tolerance)
			// Component uses: distance > tolerance
			// So 21 > 21 = false, longpress is NOT cancelled (continues)
			const touchmove = create_touch_event('touchmove', [{clientX: 121, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should open because movement at exactly tolerance is allowed
			// Component logic: 21 > 21 = false, so longpress continues
			assert.strictEqual(contextmenu.opened, true);
		});

		test('movement just under tolerance allows longpress', async () => {
			const {container, contextmenu} = (mounted = mount_contextmenu_root(
				Contextmenu_Root_For_Safari_Compatibility,
			));

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move just under default tolerance
			const move_distance = CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE - 1;
			const touchmove = create_touch_event('touchmove', [
				{clientX: 100 + move_distance, clientY: 200, target},
			]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, true);
		});

		test('movement just over tolerance cancels longpress', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: CONTEXTMENU_DEFAULT_LONGPRESS_MOVE_TOLERANCE,
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

			// Move 22 pixels (just over 21)
			const touchmove = create_touch_event('touchmove', [{clientX: 122, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			assert.strictEqual(contextmenu.opened, false);
		});

		test('diagonal movement calculates distance correctly (Math.hypot)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility, undefined, {
				longpress_move_tolerance: 10,
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

			// Move diagonally: 6 pixels in X, 8 pixels in Y
			// Distance = sqrt(36 + 64) = sqrt(100) = 10 (exactly at tolerance)
			// Component uses: distance > tolerance
			// So 10 > 10 = false, longpress is NOT cancelled
			const touchmove = create_touch_event('touchmove', [{clientX: 106, clientY: 208, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();

			// Should open because movement at exactly tolerance is allowed
			assert.strictEqual(contextmenu.opened, true);
		});

		test('menu does NOT close on movement after opening (recent fix)', async () => {
			mounted = mount_contextmenu_root(Contextmenu_Root_For_Safari_Compatibility);

			const {container, contextmenu} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
			]);

			// Open menu via longpress
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			vi.advanceTimersByTime(CONTEXTMENU_DEFAULT_LONGPRESS_DURATION);
			await tick();
			assert.strictEqual(contextmenu.opened, true);

			// Now move significantly while menu is open
			const touchmove = create_touch_event('touchmove', [{clientX: 200, clientY: 300, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Menu should remain open (component checks if menu is open and exits early)
			assert.strictEqual(contextmenu.opened, true);
		});
	});
});

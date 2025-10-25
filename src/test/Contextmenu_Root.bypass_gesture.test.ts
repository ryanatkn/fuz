/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';

import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
import {
	unmount_component,
	create_contextmenu_event,
	create_touch_event,
	set_event_target,
} from '$lib/test_helpers.js';
import {mount_contextmenu_root, setup_contextmenu_action} from '$test/contextmenu_test_helpers.js';
import {CONTEXTMENU_DEFAULT_BYPASS_WINDOW} from '$lib/contextmenu_helpers.js';

describe('Contextmenu_Root - Tap-Then-Longpress Bypass Gesture', () => {
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

	test('bypasses contextmenu on tap-then-longpress', () => {
		const custom_bypass_window = 600;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
			bypass_move_tolerance: 5,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart1, target);
		window.dispatchEvent(touchstart1);

		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap within bypass window
		const time_between_taps = 300; // Within custom_bypass_window (600ms)
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart2, target);
		window.dispatchEvent(touchstart2);

		// Now trigger contextmenu event - should be bypassed
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		// The bypass should allow the native contextmenu to open (event not prevented)
		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('does not bypass if second tap is too far', async () => {
		const bypass_move_tolerance = 5;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
			bypass_move_tolerance,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap too far away (10px exceeds bypass_move_tolerance of 5px)
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 110, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Contextmenu should open normally (not bypassed)
		const contextEvent = create_contextmenu_event(110, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true); // Menu should open
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('does not bypass if second tap is too late', async () => {
		const custom_bypass_window = 600;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap too late (exceeds bypass window)
		const time_past_window = custom_bypass_window + 100; // 700ms, past the 600ms threshold
		vi.advanceTimersByTime(time_past_window);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Contextmenu should open normally
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('bypass can be disabled', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: false,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap within what would normally be bypass window
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Should still open menu since bypass is disabled
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('respects custom bypass_window', () => {
		const custom_bypass_window = 1000;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
			bypass_move_tolerance: 5,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap within custom bypass window should trigger bypass
		const time_within_window = 800; // Within custom_bypass_window (1000ms)
		vi.advanceTimersByTime(time_within_window);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Should bypass
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('respects custom bypass_move_tolerance', () => {
		const custom_bypass_move_tolerance = 20;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: CONTEXTMENU_DEFAULT_BYPASS_WINDOW,
			bypass_move_tolerance: custom_bypass_move_tolerance,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap 15 pixels away (within custom tolerance of 20px)
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 115, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Should bypass since within tolerance
		const contextEvent = create_contextmenu_event(115, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('ignores touch events when contextmenu already open', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Open the contextmenu first
		contextmenu.open(
			[{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}}],
			100,
			200,
		);
		assert.strictEqual(contextmenu.opened, true);

		// First tap - should be ignored due to contextmenu being open
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Close the contextmenu
		contextmenu.close();
		assert.strictEqual(contextmenu.opened, false);

		// Second tap - should NOT create bypass (first tap was ignored)
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// Contextmenu should open normally (no bypass since first tap was ignored)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('ignores touch events with multiple touches', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap with two fingers - should be ignored
		const touchstart1 = create_touch_event('touchstart', [
			{clientX: 100, clientY: 200, target},
			{clientX: 150, clientY: 200, target},
		]);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second normal tap - should NOT create bypass (first tap was ignored)
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// Contextmenu should open normally (no bypass)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('ignores touch events on editable elements', () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		// Test with input element
		const input = document.createElement('input');
		document.body.appendChild(input);

		// First tap on input - should be ignored
		const touchstart1 = create_touch_event('touchstart', [
			{clientX: 100, clientY: 200, target: input},
		]);
		set_event_target(touchstart1, input);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second tap - should NOT create bypass
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [
			{clientX: 100, clientY: 200, target: input},
		]);
		set_event_target(touchstart2, input);
		window.dispatchEvent(touchstart2);

		// Contextmenu should not be prevented (allows native menu on inputs)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, input);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		input.remove();
	});

	test('ignores touch events with shift key pressed', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap with shift key - should be ignored
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}], {
			shiftKey: true,
		});
		set_event_target(touchstart1, target);
		window.dispatchEvent(touchstart1);
		const touchend1 = create_touch_event('touchend', []);
		window.dispatchEvent(touchend1);

		// Second normal tap - should NOT create bypass
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart2, target);
		window.dispatchEvent(touchstart2);

		// Contextmenu should open normally (no bypass)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('touchcancel resets bypass state', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action so menu can open
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);

		// Touch gets cancelled (e.g., scrolling starts)
		const cancelEvent = create_touch_event('touchcancel', []);
		window.dispatchEvent(cancelEvent);

		// Second tap after cancel
		const time_after_cancel = 100;
		vi.advanceTimersByTime(time_after_cancel);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Contextmenu should open normally (no bypass since state was reset)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('touchcancel clears bypass flag if set', () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);

		// Second tap to set bypass flag
		const time_between_taps = 200;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Cancel should clear the bypass flag
		const cancelEvent = create_touch_event('touchcancel', []);
		window.dispatchEvent(cancelEvent);

		// Now contextmenu event should be handled normally (not bypassed)
		// Note: No items registered so it won't open, but should not be in bypass mode
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		// Bypass flag was cleared, so event is processed normally (not prevented due to no items)
		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('handles rapid tap sequences (3+ taps)', () => {
		const custom_bypass_window = 600;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);

		// Second tap quickly
		const time_to_second_tap = 200;
		vi.advanceTimersByTime(time_to_second_tap);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart2);

		// Third tap quickly - should not cause issues
		const time_to_third_tap = 200;
		vi.advanceTimersByTime(time_to_third_tap);
		const touchstart3 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart3);

		// Contextmenu should be bypassed (tap 2 + tap 3 form the bypass)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		assert.strictEqual(contextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('handles mixed touch and mouse input', async () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First touch
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		window.dispatchEvent(touchstart1);

		// Then mouse click (simulating hybrid device)
		const time_to_mouse_event = 300;
		vi.advanceTimersByTime(time_to_mouse_event);
		const mouseEvent = create_contextmenu_event(100, 200);
		set_event_target(mouseEvent, target);
		window.dispatchEvent(mouseEvent);

		// Should open menu normally (no bypass from mixed input)
		assert.strictEqual(mouseEvent.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});

	test('keyboard contextmenu respects bypass', () => {
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// First tap to set up potential bypass
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart1, target);
		window.dispatchEvent(touchstart1);

		// Second tap to trigger bypass
		const time_between_taps = 300;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart2, target);
		window.dispatchEvent(touchstart2);

		// Keyboard-triggered contextmenu (Menu key) immediately after
		const keyboardContextEvent = create_contextmenu_event(100, 200);
		set_event_target(keyboardContextEvent, target);
		window.dispatchEvent(keyboardContextEvent);

		// Should respect bypass for any contextmenu trigger
		assert.strictEqual(keyboardContextEvent.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		target.remove();
	});

	test('bypass works with contextmenu event after gesture', async () => {
		const custom_bypass_window = 600;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
			bypass_move_tolerance: 5,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// First tap
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart1, target);
		window.dispatchEvent(touchstart1);

		// Second tap (detect bypass)
		const time_between_taps = 200;
		vi.advanceTimersByTime(time_between_taps);
		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart2, target);
		window.dispatchEvent(touchstart2);

		// Contextmenu event fires (browser's native longpress)
		const contextEvent = create_contextmenu_event(100, 200);
		set_event_target(contextEvent, target);
		window.dispatchEvent(contextEvent);

		// Bypass should allow native contextmenu (event not prevented)
		assert.strictEqual(contextEvent.defaultPrevented, false, 'event should not be prevented');
		assert.strictEqual(contextmenu.opened, false, 'fuz menu should not open');

		target.remove();
	});

	test('contextmenu works normally after bypass is consumed', async () => {
		const custom_bypass_window = 600;
		mounted = mount_contextmenu_root(Contextmenu_Root, undefined, {
			bypass_with_tap_then_longpress: true,
			bypass_window: custom_bypass_window,
		});

		const {contextmenu} = mounted;

		const target = document.createElement('div');
		document.body.appendChild(target);

		// Setup contextmenu action
		await setup_contextmenu_action(target, [
			{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => undefined}},
		]);

		// Perform tap-then-longpress gesture
		const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart1, target);
		window.dispatchEvent(touchstart1);

		const time_between_taps = 200;
		vi.advanceTimersByTime(time_between_taps);

		const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
		set_event_target(touchstart2, target);
		window.dispatchEvent(touchstart2);

		// Trigger and consume bypass
		const contextEvent1 = create_contextmenu_event(100, 200);
		set_event_target(contextEvent1, target);
		window.dispatchEvent(contextEvent1);

		assert.strictEqual(contextEvent1.defaultPrevented, false);
		assert.strictEqual(contextmenu.opened, false);

		// Wait for tap tracking to expire
		const time_to_expire = custom_bypass_window + 400; // Well past the bypass window
		vi.advanceTimersByTime(time_to_expire);

		// Now try normal contextmenu - should work
		const contextEvent2 = create_contextmenu_event(150, 250);
		set_event_target(contextEvent2, target);
		window.dispatchEvent(contextEvent2);

		assert.strictEqual(contextEvent2.defaultPrevented, true);
		assert.strictEqual(contextmenu.opened, true);

		target.remove();
	});
});

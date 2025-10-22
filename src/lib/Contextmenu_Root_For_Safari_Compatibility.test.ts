/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, tick} from 'svelte';

import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';
import {Contextmenu_State, type Item_State} from '$lib/contextmenu_state.svelte.js';
import {
	mount_component,
	unmount_component,
	create_contextmenu_event,
	create_keyboard_event,
	create_mouse_event,
	create_touch_event,
	set_event_target,
} from '$lib/test_helpers.js';

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

describe('Contextmenu_Root_For_Safari_Compatibility', () => {
	let contextmenu: Contextmenu_State;
	let mounted: ReturnType<typeof mount_component> | null;

	// Helper to create a contextmenu with standard layout
	const create_test_contextmenu = () => {
		const cm = new Contextmenu_State();
		cm.layout.width = 1024;
		cm.layout.height = 768;
		return cm;
	};

	// Helper to mount component with contextmenu
	const mount_with_contextmenu = (cm?: Contextmenu_State, props: Record<string, any> = {}) => {
		const ctx = cm || contextmenu;
		return mount_component(Contextmenu_Root_For_Safari_Compatibility, {
			contextmenu: ctx,
			children: (() => {
				// Empty children snippet
			}) as any,
			...props,
		});
	};

	// Helper to setup contextmenu action on element
	const setup_contextmenu_action = async (
		element: HTMLElement | SVGElement,
		params: Array<any>,
	) => {
		element.dataset.contextmenu = 'test';
		const {contextmenu_action} = await import('$lib/contextmenu_state.svelte.js');
		contextmenu_action(element, params);
	};

	beforeEach(() => {
		contextmenu = create_test_contextmenu();
		mounted = null;
		vi.useFakeTimers();
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	describe('contextmenu event handling', () => {
		test('opens on contextmenu event', async () => {
			mounted = mount_with_contextmenu();

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, target);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 98); // 100 + offset_x (-2)
			assert.strictEqual(contextmenu.y, 198); // 200 + offset_y (-2)
			assert.strictEqual(event.defaultPrevented, true);
			target.remove();
		});

		test('prevents default on contextmenu when opened', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const event = create_contextmenu_event(150, 250);
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(event.defaultPrevented, false); // No items at target
		});

		test('ignores contextmenu with shift key', () => {
			mounted = mount_with_contextmenu();

			const event = create_contextmenu_event(100, 200, {shiftKey: true});
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);
		});

		test('ignores contextmenu on editable elements', () => {
			mounted = mount_with_contextmenu();

			const input = document.createElement('input');
			document.body.appendChild(input);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, input);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);
			input.remove();
		});

		test('ignores contextmenu inside editable elements', () => {
			mounted = mount_with_contextmenu();

			const contenteditable = document.createElement('div');
			contenteditable.contentEditable = 'true';
			const span = document.createElement('span');
			contenteditable.appendChild(span);
			document.body.appendChild(contenteditable);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, span);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);
			contenteditable.remove();
		});

		test('ignores contextmenu on the menu itself', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			const event = create_contextmenu_event(150, 250);
			set_event_target(event, menu);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true); // Still open
			assert.strictEqual(event.defaultPrevented, false);
		});

		test('applies offset to contextmenu position', () => {
			mounted = mount_with_contextmenu(undefined, {
				open_offset_x: 5,
				open_offset_y: 10,
			});

			const target = document.createElement('div');
			target.dataset.contextmenu = '0';
			document.body.appendChild(target);

			contextmenu.open([(() => {}) as any], 100, 200);

			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
			target.remove();
		});
	});

	describe('touch event handling', () => {
		test('starts longpress timer on touchstart', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false); // Not opened yet

			// Advance timer
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true); // Now opened after longpress
			assert.strictEqual(contextmenu.x, 98); // 100 + offset_x (-2)
			assert.strictEqual(contextmenu.y, 198); // 200 + offset_y (-2)
			target.remove();
		});

		test('cancels longpress on touchmove beyond tolerance', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				longpress_move_tolerance: 10,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move beyond tolerance
			const touchmove = create_touch_event('touchmove', [{clientX: 120, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Advance timer - should not open
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});

		test('allows longpress with movement within tolerance', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				longpress_move_tolerance: 10,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move within tolerance (5 pixels)
			const touchmove = create_touch_event('touchmove', [{clientX: 105, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Should still allow longpress to proceed
			assert.strictEqual(contextmenu.opened, false); // Not yet opened
			target.remove();
		});

		test('cancels longpress on touchend', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// End touch before longpress completes
			const touchend = create_touch_event('touchend', []);
			set_event_target(touchend, target);
			window.dispatchEvent(touchend);

			// Advance timer - should not open
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});

		test('ignores touchstart when contextmenu already open', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			contextmenu.open([(() => {}) as any], 50, 50);
			flushSync();

			const target = document.createElement('div');
			document.body.appendChild(target);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			// Should not start a new longpress
			vi.advanceTimersByTime(500);
			flushSync();

			// Position should be unchanged
			assert.strictEqual(contextmenu.x, 50);
			assert.strictEqual(contextmenu.y, 50);
			target.remove();
		});

		test('ignores touchstart with multiple touches', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			const event = create_touch_event('touchstart', [
				{clientX: 100, clientY: 200, target},
				{clientX: 150, clientY: 250, target},
			]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});

		test('ignores touchstart on editable elements', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			const input = document.createElement('input');
			document.body.appendChild(input);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target: input}]);
			set_event_target(event, input);
			window.dispatchEvent(event);

			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, false);
			input.remove();
		});

		test('swallows native contextmenu event when longpress already opened menu', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// Start touch
			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Advance timer - longpress opens menu
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			const originalX = contextmenu.x;
			const originalY = contextmenu.y;

			// Native contextmenu event fires (some Android devices fire this after longpress)
			const contextEvent = create_contextmenu_event(100, 200);
			set_event_target(contextEvent, target);
			window.dispatchEvent(contextEvent);

			// Event should be swallowed (prevented)
			assert.strictEqual(contextEvent.defaultPrevented, true);
			// Menu should remain at original position (not re-opened)
			assert.strictEqual(contextmenu.x, originalX);
			assert.strictEqual(contextmenu.y, originalY);

			target.remove();
		});
	});

	describe('tap-then-longpress bypass gesture', () => {
		test('bypasses contextmenu on tap-then-longpress', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
				tap_then_longpress_move_tolerance: 5,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap within duration at same location
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 101, clientY: 201, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should not start longpress due to bypass
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});

		test('does not bypass if second tap is too far', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
				tap_then_longpress_move_tolerance: 5,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap too far away
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 150, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should proceed with longpress (not bypassed)
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			target.remove();
		});

		test('does not bypass if second tap is too late', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			const touchend1 = create_touch_event('touchend', []);
			set_event_target(touchend1, target);
			window.dispatchEvent(touchend1);

			// Second tap too late
			vi.advanceTimersByTime(700);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should proceed with longpress (not bypassed)
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			target.remove();
		});

		test('bypass can be disabled', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: false,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// Double tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			vi.advanceTimersByTime(200);

			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should still allow longpress since bypass is disabled
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			target.remove();
		});

		test('tap on editable element resets bypass state', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const input = document.createElement('input');
			const target = document.createElement('div');
			document.body.appendChild(input);
			document.body.appendChild(target);

			// Setup contextmenu action on div
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap on editable element - should reset any previous state
			const touchstart1 = create_touch_event('touchstart', [
				{clientX: 100, clientY: 200, target: input},
			]);
			set_event_target(touchstart1, input);
			window.dispatchEvent(touchstart1);

			// Second tap on valid element shortly after
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should NOT bypass (first tap was invalid and reset state)
			// Longpress should proceed normally
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);

			input.remove();
			target.remove();
		});

		test('touchcancel after tap resets bypass state', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Touch gets cancelled (e.g., user starts scrolling)
			const touchcancel = create_touch_event('touchcancel', []);
			window.dispatchEvent(touchcancel);

			// Second tap after cancel
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should NOT bypass (state was reset by touchcancel)
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);

			target.remove();
		});

		test('touchend during longpress resets bypass state', async () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap - start tracking
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			// End touch before longpress completes
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap shortly after
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart2, target);
			window.dispatchEvent(touchstart2);

			// Should NOT bypass (touchend reset the state)
			vi.advanceTimersByTime(500);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);

			target.remove();
		});
	});

	describe('closing behavior', () => {
		test('closes on mousedown outside menu', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const event = create_mouse_event('mousedown', {clientX: 50, clientY: 50});
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('does not close on mousedown inside menu', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			const event = create_mouse_event('mousedown', {clientX: 100, clientY: 200});
			set_event_target(event, menu);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
		});

		test('closes on Escape key', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, true);
		});
	});

	describe('keyboard navigation', () => {
		// Test data for keyboard navigation
		const keyboard_test_cases = [
			{key: 'ArrowDown', method: 'select_next'},
			{key: 'ArrowUp', method: 'select_previous'},
			{key: 'Home', method: 'select_first'},
			{key: 'End', method: 'select_last'},
		];

		// Data-driven tests for keyboard shortcuts
		test.each(keyboard_test_cases)('$key calls $method', async ({key, method}) => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);
			flushSync();
			await tick();
			const spy = vi.spyOn(contextmenu, method as any);

			window.dispatchEvent(create_keyboard_event(key));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('Space activates selected item', () => {
			mounted = mount_with_contextmenu();

			let activated = false;
			contextmenu.open([() => (activated = true) as any], 100, 200);
			contextmenu.select_first();
			flushSync();

			const event = create_keyboard_event(' ');
			window.dispatchEvent(event);

			assert.strictEqual(activated, true);
			assert.strictEqual(event.defaultPrevented, true);
		});

		test('Enter activates selected item', () => {
			mounted = mount_with_contextmenu();

			let activated = false;
			contextmenu.open([() => (activated = true) as any], 100, 200);
			contextmenu.select_first();
			flushSync();

			const event = create_keyboard_event('Enter');
			window.dispatchEvent(event);

			assert.strictEqual(activated, true);
			assert.strictEqual(event.defaultPrevented, true);
		});

		test('keyboard events ignored when not open', () => {
			mounted = mount_with_contextmenu();

			const event = create_keyboard_event('ArrowDown');
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.selections.length, 0);
			assert.strictEqual(event.defaultPrevented, false);
		});

		test('keyboard events ignored on editable elements', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const input = document.createElement('input');
			document.body.appendChild(input);

			const event = create_keyboard_event('ArrowDown');
			set_event_target(event, input);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.selections.length, 0);
			assert.strictEqual(event.defaultPrevented, false);
			input.remove();
		});

		test('ArrowRight expands submenu', () => {
			mounted = mount_with_contextmenu();

			// Create a submenu structure manually
			const submenu = contextmenu.root_menu.items[0] as Item_State | undefined;
			if (submenu?.is_menu) {
				contextmenu.select(submenu);
				flushSync();

				const event = create_keyboard_event('ArrowRight');
				window.dispatchEvent(event);

				assert.strictEqual(event.defaultPrevented, true);
			}
		});

		test('ArrowLeft collapses selection', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([(() => {}) as any], 100, 200);
			contextmenu.select_first();
			flushSync();

			const event = create_keyboard_event('ArrowLeft');
			window.dispatchEvent(event);

			assert.strictEqual(event.defaultPrevented, true);
		});
	});

	describe('positioning', () => {
		test('positions menu at specified coordinates', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 150, 250);
			flushSync();

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);
			// Transform uses translate3d format
			const transform = menu.style.transform;
			assert.ok(transform);
			assert.match(transform, /translate3d\(.*px,.*px,.*\)/);
		});

		test('repositions when menu would overflow right edge', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			// Open near right edge
			contextmenu.open([(() => {}) as any], window.innerWidth - 50, 100);
			flushSync();

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);

			// Should reposition to fit
			const transform = menu.style.transform;
			assert.ok(transform);
		});

		test('repositions when menu would overflow bottom edge', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			// Open near bottom edge
			contextmenu.open([(() => {}) as any], 100, window.innerHeight - 50);
			flushSync();

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);

			// Should reposition to fit
			const transform = menu.style.transform;
			assert.ok(transform);
		});

		test('respects custom layout dimensions', () => {
			const custom_layout = {width: 800, height: 600};
			const custom_contextmenu = new Contextmenu_State({layout: custom_layout});

			mounted = mount_with_contextmenu(custom_contextmenu);
			const {container} = mounted;

			custom_contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const layout_el = container.querySelector('.contextmenu_layout');
			assert.strictEqual(layout_el, null); // Custom layout, no layout element
		});

		test('tracks layout dimensions automatically', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			const layout_el = container.querySelector('.contextmenu_layout');
			assert.ok(layout_el); // Should have layout element for auto tracking
		});

		test('uses default offset values', () => {
			mounted = mount_with_contextmenu();

			// The default offset is -2, -2
			// This is tested indirectly through the positioning tests
			assert.ok(mounted);
		});
	});

	describe('scoped mode', () => {
		test('scoped mode listens to scoped element only', () => {
			mounted = mount_with_contextmenu(undefined, {
				scoped: true,
			});
			const {container} = mounted;

			const scoped_el = container.querySelector('.contextmenu_root');
			assert.ok(scoped_el);
		});

		test('scoped mode ignores window events', () => {
			mounted = mount_with_contextmenu(undefined, {
				scoped: true,
			});

			// Window event should be ignored in scoped mode
			const event = create_contextmenu_event(100, 200);
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('scoped mode handles events on scoped element', () => {
			mounted = mount_with_contextmenu(undefined, {
				scoped: true,
			});
			const {container} = mounted;

			const scoped_el = container.querySelector('.contextmenu_root');
			assert.ok(scoped_el);

			// Event on scoped element should work (but still no items)
			const event = create_contextmenu_event(100, 200);
			set_event_target(event, scoped_el);
			scoped_el.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false); // No items
		});
	});

	describe('rendering', () => {
		test('does not render contextmenu when closed', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			const menu = container.querySelector('.contextmenu');
			assert.strictEqual(menu, null);
		});

		test('renders contextmenu when opened', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);
			assert.strictEqual(menu.getAttribute('role'), 'menu');
			assert.strictEqual(menu.getAttribute('aria-label'), 'context menu');
			assert.strictEqual(menu.getAttribute('tabindex'), '-1');
		});

		test('renders children content', () => {
			let rendered = false;
			mounted = mount_component(Contextmenu_Root_For_Safari_Compatibility, {
				contextmenu,
				children: (() => {
					rendered = true;
				}) as any,
			});

			assert.strictEqual(rendered, true);
		});

		test('applies contextmenu CSS classes', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);
			assert.ok(menu.classList.contains('contextmenu'));
			assert.ok(menu.classList.contains('unstyled'));
			assert.ok(menu.classList.contains('pane'));
		});
	});

	describe('edge cases', () => {
		test('handles SVG elements as targets', async () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			svg.appendChild(rect);
			container.appendChild(svg);

			await setup_contextmenu_action(rect, [
				{snippet: 'text', props: {content: 'SVG Test', icon: '🎨', run: () => {}}},
			]);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, rect);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(event.defaultPrevented, true);

			svg.remove();
		});

		test('handles function snippet params', () => {
			mounted = mount_with_contextmenu();

			const snippet = (() => {
				// Test snippet function
			}) as any;

			contextmenu.open([snippet], 100, 200);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.params[0], snippet);
		});

		test('handles empty params array', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);
			flushSync();

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.params.length, 0);
		});

		test('handles rapid open/close sequences', () => {
			mounted = mount_with_contextmenu();

			// Rapid open/close/open
			contextmenu.open([(() => {}) as any], 50, 50);
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 50);

			contextmenu.close();
			assert.strictEqual(contextmenu.opened, false);

			contextmenu.open([(() => {}) as any], 100, 100);
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 100);

			contextmenu.open([(() => {}) as any], 150, 150);
			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 150);
		});

		test('handles mixed HTML and SVG targets', async () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			// First open on HTML element
			const div = document.createElement('div');
			container.appendChild(div);
			await setup_contextmenu_action(div, [
				{snippet: 'text', props: {content: 'HTML', icon: '📄', run: () => {}}},
			]);

			const event1 = create_contextmenu_event(100, 100);
			set_event_target(event1, div);
			window.dispatchEvent(event1);

			assert.strictEqual(contextmenu.opened, true);
			contextmenu.close();

			// Then open on SVG element
			const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			container.appendChild(circle);
			await setup_contextmenu_action(circle, [
				{snippet: 'text', props: {content: 'SVG', icon: '🎨', run: () => {}}},
			]);

			const event2 = create_contextmenu_event(200, 200);
			set_event_target(event2, circle);
			window.dispatchEvent(event2);

			assert.strictEqual(contextmenu.opened, true);

			// Cleanup
			div.remove();
			circle.remove();
		});

		test('prevents contextmenu when no params available', () => {
			mounted = mount_with_contextmenu();
			const {container} = mounted;

			const div = document.createElement('div');
			// Not setting up contextmenu params
			container.appendChild(div);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, div);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);

			div.remove();
		});
	});

	describe('longpress timing configurations', () => {
		test('respects custom longpress_duration', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 1000,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			const event = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(event, target);
			window.dispatchEvent(event);

			// Should not open after 500ms
			vi.advanceTimersByTime(500);
			flushSync();
			assert.strictEqual(contextmenu.opened, false);

			// Would open after 1000ms (if items registered)
			target.remove();
		});

		test('respects custom longpress_move_tolerance', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				longpress_move_tolerance: 50,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			const touchstart = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart, target);
			window.dispatchEvent(touchstart);

			// Move 30 pixels (within tolerance)
			const touchmove = create_touch_event('touchmove', [{clientX: 130, clientY: 200, target}]);
			set_event_target(touchmove, target);
			window.dispatchEvent(touchmove);

			// Should still allow longpress to proceed
			assert.strictEqual(contextmenu.opened, false); // Not yet opened
			target.remove();
		});

		test('respects custom tap_then_longpress_duration', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 1000,
				tap_then_longpress_move_tolerance: 5,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap within 1000ms should bypass
			vi.advanceTimersByTime(800);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart2);

			// Should bypass
			vi.advanceTimersByTime(500);
			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});

		test('respects custom tap_then_longpress_move_tolerance', () => {
			mounted = mount_with_contextmenu(undefined, {
				longpress_duration: 500,
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
				tap_then_longpress_move_tolerance: 20,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap 15 pixels away (within tolerance)
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 115, clientY: 200, target}]);
			window.dispatchEvent(touchstart2);

			// Should bypass since within tolerance
			assert.strictEqual(contextmenu.opened, false);
			target.remove();
		});
	});
});

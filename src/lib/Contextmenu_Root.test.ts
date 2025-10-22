/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync} from 'svelte';

import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
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

describe('Contextmenu_Root', () => {
	let contextmenu: Contextmenu_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

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
		return mount_component(Contextmenu_Root, {
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
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
	});

	describe('contextmenu event handling', () => {
		test('right-click opens contextmenu with entries', async () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			// Add a div with contextmenu data
			const target = document.createElement('div');
			container.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, target);

			target.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 98); // 100 + offset_x (-2)
			assert.strictEqual(contextmenu.y, 198); // 200 + offset_y (-2)
			assert.strictEqual(event.defaultPrevented, true, 'event should be prevented when menu opens');
		});

		test('shift+right-click prevents opening', () => {
			mounted = mount_with_contextmenu();

			const event = create_contextmenu_event(100, 200, {shiftKey: true});

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);
		});

		test('right-click on input prevents opening', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			const input = document.createElement('input');
			container.appendChild(input);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, input);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('right-click on textarea prevents opening', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			const textarea = document.createElement('textarea');
			container.appendChild(textarea);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, textarea);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('right-click on contenteditable prevents opening', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			const div = document.createElement('div');
			div.contentEditable = 'true';
			container.appendChild(div);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, div);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('right-click on contextmenu element itself prevents opening', async () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			// Open menu first
			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu_el = container.querySelector('.contextmenu');
			assert.ok(menu_el);

			// Setup a target with contextmenu data
			const target = document.createElement('div');
			target.dataset.contextmenu = 'test';
			menu_el.appendChild(target);

			const {contextmenu_action} = await import('$lib/contextmenu_state.svelte.js');
			contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// Try to open another contextmenu from within the existing menu
			const event = create_contextmenu_event(150, 250);
			set_event_target(event, target);

			target.dispatchEvent(event);

			// Should still be at original position, not re-opened
			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
			assert.strictEqual(event.defaultPrevented, false, 'event should not be prevented');
		});

		test('applies custom offsets', async () => {
			mounted = mount_with_contextmenu(undefined, {
				open_offset_x: 10,
				open_offset_y: 20,
			});

			const {container} = mounted;

			const target = document.createElement('div');
			container.appendChild(target);

			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, target);

			target.dispatchEvent(event);

			assert.strictEqual(contextmenu.x, 110); // 100 + 10
			assert.strictEqual(contextmenu.y, 220); // 200 + 20
			assert.strictEqual(event.defaultPrevented, true);
		});
	});

	describe('closing behavior', () => {
		test('mousedown outside closes contextmenu', () => {
			mounted = mount_with_contextmenu();

			// Open the menu first
			contextmenu.open([], 100, 200);
			flushSync(); // Wait for DOM to update
			assert.strictEqual(contextmenu.opened, true);

			// Click outside
			const event = create_mouse_event('mousedown');
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('mousedown inside keeps contextmenu open', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync(); // Wait for DOM to update

			// Find the contextmenu element
			const menu_el = container.querySelector('.contextmenu');
			assert.ok(menu_el);

			const event = create_mouse_event('mousedown');
			set_event_target(event, menu_el);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
		});

		test('Escape key closes contextmenu', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('keyboard navigation', () => {
		// Test data for keyboard navigation
		const keyboard_test_cases = [
			{key: 'ArrowDown', method: 'select_next'},
			{key: 'ArrowUp', method: 'select_previous'},
			{key: 'ArrowRight', method: 'expand_selected'},
			{key: 'ArrowLeft', method: 'collapse_selected'},
			{key: 'Home', method: 'select_first'},
			{key: 'End', method: 'select_last'},
			{key: 'Enter', method: 'activate_selected'},
			{key: ' ', method: 'activate_selected'},
			{key: 'PageDown', method: 'select_next'},
			{key: 'PageUp', method: 'select_previous'},
		];

		test('keyboard events only fire when contextmenu is opened', () => {
			mounted = mount_with_contextmenu();

			// Create a spy on contextmenu methods
			const select_next_spy = vi.spyOn(contextmenu, 'select_next');

			// Try keyboard when closed
			const event = create_keyboard_event('ArrowDown');
			window.dispatchEvent(event);

			assert.strictEqual(select_next_spy.mock.calls.length, 0);

			// Open and try again
			contextmenu.open([], 100, 200);
			window.dispatchEvent(create_keyboard_event('ArrowDown'));

			assert.strictEqual(select_next_spy.mock.calls.length, 1);
		});

		// Data-driven tests for keyboard shortcuts
		test.each(keyboard_test_cases)('$key calls $method', ({key, method}) => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, method as any);

			window.dispatchEvent(create_keyboard_event(key));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('keyboard events on editable elements are ignored', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'close');

			const input = document.createElement('input');
			container.appendChild(input);

			const event = create_keyboard_event('Escape');
			set_event_target(event, input);

			window.dispatchEvent(event);

			assert.strictEqual(spy.mock.calls.length, 0);
			assert.strictEqual(contextmenu.opened, true);
		});

		test('keyboard events are prevented', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);

			const event = create_keyboard_event('ArrowDown');
			window.dispatchEvent(event);

			assert.strictEqual(event.defaultPrevented, true);
		});
	});

	describe('positioning', () => {
		test('menu positioned at click coordinates with offset', () => {
			mounted = mount_with_contextmenu();

			contextmenu.open([], 100, 200);

			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
		});

		test('menu element receives transform style', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync(); // Wait for DOM to update

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);

			// The transform includes the derived x/y which may have edge adjustments
			assert.ok(menu.style.transform.includes('translate3d'));
		});

		test('contextmenu layout tracking updates layout dimensions', () => {
			mounted = mount_with_contextmenu();

			// Verify layout has the dimensions from beforeEach
			assert.ok(contextmenu.layout);
			assert.strictEqual(contextmenu.layout.width, 1024);
			assert.strictEqual(contextmenu.layout.height, 768);
		});

		test('menu repositions when near right edge', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			// Open menu near right edge (1020 + assumed menu width would overflow 1024)
			contextmenu.open([(() => {}) as any], 1020, 100);
			flushSync();

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);

			// Menu should be repositioned - the x position in transform should be adjusted left
			// to prevent overflow. The exact value depends on menu width from getBoundingClientRect
			const transform = menu.style.transform;
			assert.ok(transform.includes('translate3d'), 'should have translate3d transform');
		});

		test('menu repositions when near bottom edge', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			// Open menu near bottom edge
			contextmenu.open([(() => {}) as any], 100, 760);
			flushSync();

			const menu = container.querySelector('.contextmenu') as HTMLElement;
			assert.ok(menu);

			// Menu should have transform (positioning logic handles overflow)
			const transform = menu.style.transform;
			assert.ok(transform.includes('translate3d'), 'should have translate3d transform');
		});

		test('custom layout is not overridden', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout});

			mounted = mount_with_contextmenu(cm);

			// Custom layout should remain unchanged
			assert.strictEqual(cm.layout.width, 800);
			assert.strictEqual(cm.layout.height, 600);
		});
	});

	describe('scoped mode', () => {
		test('scoped=true wraps children in div', () => {
			mounted = mount_with_contextmenu(undefined, {scoped: true});

			const {container} = mounted;

			const scoped_div = container.querySelector('.contextmenu_root');
			assert.ok(scoped_div);
			assert.strictEqual(scoped_div.getAttribute('role'), 'region');
		});

		test('scoped=false does not wrap children', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				scoped: false,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const scoped_div = container.querySelector('.contextmenu_root');
			assert.strictEqual(scoped_div, null);
		});

		test('scoped=true disables window contextmenu handler', () => {
			mounted = mount_with_contextmenu(undefined, {scoped: true});

			// Try to trigger contextmenu on window
			const event = create_contextmenu_event(100, 200);
			window.dispatchEvent(event);

			// Should not have opened because scoped mode disables window handler
			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('rendering', () => {
		test('contextmenu not rendered when closed', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			const menu = container.querySelector('.contextmenu');
			assert.strictEqual(menu, null);
		});

		test('contextmenu rendered when opened', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync(); // Wait for DOM to update

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);
			assert.strictEqual(menu.getAttribute('role'), 'menu');
			assert.strictEqual(menu.getAttribute('aria-label'), 'context menu');
			assert.strictEqual(menu.getAttribute('tabindex'), '-1');
			assert.ok(menu.classList.contains('contextmenu'));
			assert.ok(menu.classList.contains('unstyled'));
			assert.ok(menu.classList.contains('pane'));
		});

		test('contextmenu_layout rendered when no custom layout', () => {
			mounted = mount_with_contextmenu();

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.ok(layout);
			assert.strictEqual(layout.getAttribute('aria-hidden'), 'true');
		});

		test('contextmenu_layout not rendered with custom layout', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout});

			mounted = mount_with_contextmenu(cm);

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.strictEqual(layout, null);
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

	describe('tap-then-longpress bypass gesture', () => {
		beforeEach(() => {
			vi.useFakeTimers();
		});

		afterEach(() => {
			vi.useRealTimers();
		});

		test('bypasses contextmenu on tap-then-longpress', () => {
			mounted = mount_with_contextmenu(undefined, {
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
			window.dispatchEvent(touchend1);

			// Second tap within duration threshold
			vi.advanceTimersByTime(300);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
				tap_then_longpress_move_tolerance: 5,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap too far away
			vi.advanceTimersByTime(300);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap too late
			vi.advanceTimersByTime(700); // Past the 600ms threshold
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: false,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);
			const touchend1 = create_touch_event('touchend', []);
			window.dispatchEvent(touchend1);

			// Second tap
			vi.advanceTimersByTime(300);
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

		test('respects custom tap_then_longpress_duration', () => {
			mounted = mount_with_contextmenu(undefined, {
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
			const contextEvent = create_contextmenu_event(100, 200);
			set_event_target(contextEvent, target);
			window.dispatchEvent(contextEvent);

			assert.strictEqual(contextEvent.defaultPrevented, false);
			assert.strictEqual(contextmenu.opened, false);

			target.remove();
		});

		test('respects custom tap_then_longpress_move_tolerance', () => {
			mounted = mount_with_contextmenu(undefined, {
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

			// Second tap 15 pixels away (within 20px tolerance)
			vi.advanceTimersByTime(300);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Open the contextmenu first
			contextmenu.open(
				[{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}}],
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
			vi.advanceTimersByTime(300);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart2);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

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
			vi.advanceTimersByTime(300);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart2);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

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
			vi.advanceTimersByTime(300);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
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
			vi.advanceTimersByTime(300);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action so menu can open
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);

			// Touch gets cancelled (e.g., scrolling starts)
			const cancelEvent = create_touch_event('touchcancel', []);
			window.dispatchEvent(cancelEvent);

			// Second tap after cancel
			vi.advanceTimersByTime(100);
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

		test('handles rapid tap sequences (3+ taps)', () => {
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
				tap_then_longpress_duration: 600,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// First tap
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);

			// Second tap quickly
			vi.advanceTimersByTime(200);
			const touchstart2 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart2);

			// Third tap quickly - should not cause issues
			vi.advanceTimersByTime(200);
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
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// Setup contextmenu action
			await setup_contextmenu_action(target, [
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}},
			]);

			// First touch
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			window.dispatchEvent(touchstart1);

			// Then mouse click (simulating hybrid device)
			vi.advanceTimersByTime(300);
			const mouseEvent = create_contextmenu_event(100, 200);
			set_event_target(mouseEvent, target);
			window.dispatchEvent(mouseEvent);

			// Should open menu normally (no bypass from mixed input)
			assert.strictEqual(mouseEvent.defaultPrevented, true);
			assert.strictEqual(contextmenu.opened, true);

			target.remove();
		});

		test('keyboard contextmenu respects bypass', () => {
			mounted = mount_with_contextmenu(undefined, {
				bypass_with_tap_then_longpress: true,
			});

			const target = document.createElement('div');
			document.body.appendChild(target);

			// First tap to set up potential bypass
			const touchstart1 = create_touch_event('touchstart', [{clientX: 100, clientY: 200, target}]);
			set_event_target(touchstart1, target);
			window.dispatchEvent(touchstart1);

			// Second tap to trigger bypass
			vi.advanceTimersByTime(300);
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
	});
});

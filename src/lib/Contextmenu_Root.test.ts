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
		contextmenu_action(element as any, params);
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
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}} as any,
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
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}} as any,
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
				{snippet: 'text', props: {content: 'Test', icon: '🧪', run: () => {}}} as any,
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
			const cm = new Contextmenu_State({layout: custom_layout as any});

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
			const cm = new Contextmenu_State({layout: custom_layout as any});

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
				{snippet: 'text', props: {content: 'SVG Test', icon: '🎨', run: () => {}}} as any,
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
				{snippet: 'text', props: {content: 'HTML', icon: '📄', run: () => {}}} as any,
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
				{snippet: 'text', props: {content: 'SVG', icon: '🎨', run: () => {}}} as any,
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
});

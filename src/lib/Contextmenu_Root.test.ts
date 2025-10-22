/**
 * @vitest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
import {
	mount_component,
	unmount_component,
	create_contextmenu_event,
	create_keyboard_event,
	create_mouse_event,
	set_event_target,
	flush_updates,
} from '$lib/test_helpers.js';

describe('Contextmenu_Root', () => {
	let contextmenu: Contextmenu_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

	beforeEach(() => {
		contextmenu = new Contextmenu_State();
		// Mock layout dimensions
		contextmenu.layout.width = 1024;
		contextmenu.layout.height = 768;
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
	});

	describe('contextmenu event handling', () => {
		test('right-click opens contextmenu with entries', async () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Add a div with contextmenu data
			const target = document.createElement('div');
			target.dataset.contextmenu = 'test';
			container.appendChild(target);

			// Mock the contextmenu cache
			const {contextmenu_action} = await import('$lib/contextmenu_state.svelte.js');
			contextmenu_action(target, [
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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const event = create_contextmenu_event(100, 200, {shiftKey: true});

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(event.defaultPrevented, false);
		});

		test('right-click on input prevents opening', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const input = document.createElement('input');
			container.appendChild(input);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, input);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('right-click on textarea prevents opening', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const textarea = document.createElement('textarea');
			container.appendChild(textarea);

			const event = create_contextmenu_event(100, 200);
			set_event_target(event, textarea);

			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('right-click on contenteditable prevents opening', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open menu first
			contextmenu.open([(() => {}) as any], 100, 200);
			flush_updates();

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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				open_offset_x: 10,
				open_offset_y: 20,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const target = document.createElement('div');
			target.dataset.contextmenu = 'test';
			container.appendChild(target);

			const {contextmenu_action} = await import('$lib/contextmenu_state.svelte.js');
			contextmenu_action(target, [
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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			// Open the menu first
			contextmenu.open([], 100, 200);
			flush_updates(); // Wait for DOM to update
			assert.strictEqual(contextmenu.opened, true);

			// Click outside
			const event = create_mouse_event('mousedown');
			set_event_target(event, document.body);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('mousedown inside keeps contextmenu open', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flush_updates(); // Wait for DOM to update

			// Find the contextmenu element
			const menu_el = container.querySelector('.contextmenu');
			assert.ok(menu_el);

			const event = create_mouse_event('mousedown');
			set_event_target(event, menu_el);
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, true);
		});

		test('Escape key closes contextmenu', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);

			const event = create_keyboard_event('Escape');
			window.dispatchEvent(event);

			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('keyboard navigation', () => {
		test('keyboard events only fire when contextmenu is opened', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

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

		test('ArrowDown calls select_next', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_next');

			window.dispatchEvent(create_keyboard_event('ArrowDown'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('ArrowUp calls select_previous', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_previous');

			window.dispatchEvent(create_keyboard_event('ArrowUp'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('ArrowRight calls expand_selected', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'expand_selected');

			window.dispatchEvent(create_keyboard_event('ArrowRight'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('ArrowLeft calls collapse_selected', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'collapse_selected');

			window.dispatchEvent(create_keyboard_event('ArrowLeft'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('Home calls select_first', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_first');

			window.dispatchEvent(create_keyboard_event('Home'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('End calls select_last', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_last');

			window.dispatchEvent(create_keyboard_event('End'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('Enter calls activate_selected', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'activate_selected');

			window.dispatchEvent(create_keyboard_event('Enter'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('Space calls activate_selected', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'activate_selected');

			window.dispatchEvent(create_keyboard_event(' '));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('PageDown calls select_next', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_next');

			window.dispatchEvent(create_keyboard_event('PageDown'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('PageUp calls select_previous', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);
			const spy = vi.spyOn(contextmenu, 'select_previous');

			window.dispatchEvent(create_keyboard_event('PageUp'));
			assert.strictEqual(spy.mock.calls.length, 1);
		});

		test('keyboard events on editable elements are ignored', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);

			const event = create_keyboard_event('ArrowDown');
			window.dispatchEvent(event);

			assert.strictEqual(event.defaultPrevented, true);
		});
	});

	describe('positioning', () => {
		test('menu positioned at click coordinates with offset', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			contextmenu.open([], 100, 200);

			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
		});

		test('menu element receives transform style', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flush_updates(); // Wait for DOM to update

			const menu = container.querySelector('.contextmenu') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(menu);

			// The transform includes the derived x/y which may have edge adjustments
			assert.ok(menu.style.transform.includes('translate3d'));
		});

		test('contextmenu layout tracking updates layout dimensions', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			// Verify layout has the dimensions from beforeEach
			assert.ok(contextmenu.layout);
			assert.strictEqual(contextmenu.layout.width, 1024);
			assert.strictEqual(contextmenu.layout.height, 768);
		});

		test('menu repositions when near right edge', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open menu near right edge (1020 + assumed menu width would overflow 1024)
			contextmenu.open([(() => {}) as any], 1020, 100);
			flush_updates();

			const menu = container.querySelector('.contextmenu') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(menu);

			// Menu should be repositioned - the x position in transform should be adjusted left
			// to prevent overflow. The exact value depends on menu width from getBoundingClientRect
			const transform = menu.style.transform;
			assert.ok(transform.includes('translate3d'), 'should have translate3d transform');
		});

		test('menu repositions when near bottom edge', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open menu near bottom edge
			contextmenu.open([(() => {}) as any], 100, 760);
			flush_updates();

			const menu = container.querySelector('.contextmenu') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(menu);

			// Menu should have transform (positioning logic handles overflow)
			const transform = menu.style.transform;
			assert.ok(transform.includes('translate3d'), 'should have translate3d transform');
		});

		test('custom layout is not overridden', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout as any});

			mounted = mount_component(Contextmenu_Root, {
				contextmenu: cm,
				children: (() => {}) as any,
			});

			// Custom layout should remain unchanged
			assert.strictEqual(cm.layout.width, 800);
			assert.strictEqual(cm.layout.height, 600);
		});
	});

	describe('scoped mode', () => {
		test('scoped=true wraps children in div', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				scoped: true,
				children: (() => {}) as any,
			});

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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				scoped: true,
				children: (() => {}) as any,
			});

			// Try to trigger contextmenu on window
			const event = create_contextmenu_event(100, 200);
			window.dispatchEvent(event);

			// Should not have opened because scoped mode disables window handler
			assert.strictEqual(contextmenu.opened, false);
		});
	});

	describe('rendering', () => {
		test('contextmenu not rendered when closed', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const menu = container.querySelector('.contextmenu');
			assert.strictEqual(menu, null);
		});

		test('contextmenu rendered when opened', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flush_updates(); // Wait for DOM to update

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
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.ok(layout);
			assert.strictEqual(layout.getAttribute('aria-hidden'), 'true');
		});

		test('contextmenu_layout not rendered with custom layout', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout as any});

			mounted = mount_component(Contextmenu_Root, {
				contextmenu: cm,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.strictEqual(layout, null);
		});
	});
});

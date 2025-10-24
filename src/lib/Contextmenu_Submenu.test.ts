/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach} from 'vitest';
import {flushSync} from 'svelte';

import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
import {
	mount_component,
	unmount_component,
	create_contextmenu_event,
	set_event_target,
} from '$lib/test_helpers.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Contextmenu_Submenu', () => {
	let contextmenu: Contextmenu_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

	const create_test_contextmenu = () => {
		const cm = new Contextmenu_State();
		cm.layout.width = 1024;
		cm.layout.height = 768;
		return cm;
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

	describe('contextmenu event handling on nested elements', () => {
		test('right-clicking on nested element inside contextmenu does not reopen', () => {
			// Mount contextmenu root
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open contextmenu
			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu, 'contextmenu should be rendered');

			// Create a nested element inside the menu (simulating submenu structure)
			const nested_div = document.createElement('div');
			nested_div.className = 'test_nested';
			nested_div.textContent = 'Nested content';
			menu.appendChild(nested_div);

			const original_x = contextmenu.x;
			const original_y = contextmenu.y;

			// Right-click on the nested element
			const event = create_contextmenu_event(150, 250);
			set_event_target(event, nested_div);
			nested_div.dispatchEvent(event);

			// Contextmenu should not reopen (position unchanged)
			assert.strictEqual(contextmenu.x, original_x);
			assert.strictEqual(contextmenu.y, original_y);

			// Event should not be prevented (allows browser contextmenu)
			assert.strictEqual(
				event.defaultPrevented,
				false,
				'event should not be prevented to allow browser contextmenu',
			);
		});

		test('right-clicking on deeply nested element does not reopen contextmenu', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			// Create deeply nested structure (like a submenu with content)
			const level1 = document.createElement('div');
			const level2 = document.createElement('menu');
			const level3 = document.createElement('div');
			level3.className = 'deeply_nested';
			level3.textContent = 'Deeply nested';

			menu.appendChild(level1);
			level1.appendChild(level2);
			level2.appendChild(level3);

			const original_x = contextmenu.x;
			const original_y = contextmenu.y;

			// Right-click on the deeply nested element
			const event = create_contextmenu_event(200, 300);
			set_event_target(event, level3);
			level3.dispatchEvent(event);

			// Contextmenu should not reopen
			assert.strictEqual(contextmenu.x, original_x);
			assert.strictEqual(contextmenu.y, original_y);

			assert.strictEqual(
				event.defaultPrevented,
				false,
				'event should not be prevented to allow browser contextmenu',
			);
		});

		test('containment check works for elements added after menu opens', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			contextmenu.open([(() => {}) as any], 100, 200);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			// Dynamically add element after menu is open (simulating submenu expansion)
			const dynamic_element = document.createElement('div');
			dynamic_element.className = 'dynamic_submenu';
			menu.appendChild(dynamic_element);

			const original_params = contextmenu.params;

			// Right-click on dynamically added element
			const event = create_contextmenu_event(180, 280);
			set_event_target(event, dynamic_element);
			dynamic_element.dispatchEvent(event);

			// Contextmenu params should not change
			assert.deepStrictEqual(contextmenu.params, original_params);

			assert.strictEqual(
				event.defaultPrevented,
				false,
				'event should not be prevented to allow browser contextmenu',
			);
		});
	});

	describe('link inside nested structure', () => {
		test('link in nested structure still uses stopPropagation', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open menu with a link entry
			contextmenu.open(
				[
					{
						snippet: 'link',
						props: {href: 'https://nested.test/'},
					},
				],
				100,
				200,
			);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			const link = menu.querySelector('a[href="https://nested.test/"]');
			assert.ok(link, 'link should be rendered');

			// Track if window handler was called
			let window_handler_called = false;
			const window_listener = () => {
				window_handler_called = true;
			};
			window.addEventListener('contextmenu', window_listener);

			try {
				const event = create_contextmenu_event(150, 250);
				set_event_target(event, link);
				link.dispatchEvent(event);

				// Window handler should not be called due to stopPropagation
				assert.strictEqual(
					window_handler_called,
					false,
					'event should not propagate to window handler',
				);

				assert.strictEqual(
					event.defaultPrevented,
					false,
					'event should not be prevented to allow browser contextmenu',
				);
			} finally {
				window.removeEventListener('contextmenu', window_listener);
			}
		});
	});
});

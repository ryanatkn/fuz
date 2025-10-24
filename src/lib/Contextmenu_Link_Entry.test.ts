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

describe('Contextmenu_Link_Entry', () => {
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

	describe('contextmenu event handling on links', () => {
		test('right-clicking on link entry stops propagation', () => {
			// Mount the contextmenu root with a link entry
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
						props: {href: 'https://www.fuz.dev/'},
					},
				],
				100,
				200,
			);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu, 'contextmenu should be rendered');

			const link = menu.querySelector('a[href="https://www.fuz.dev/"]');
			assert.ok(link, 'link entry should be rendered');

			// Track if window handler was called
			let window_handler_called = false;
			const original_position_x = contextmenu.x;
			const original_position_y = contextmenu.y;

			// Add a temporary listener to verify propagation is stopped
			const window_listener = () => {
				window_handler_called = true;
			};
			window.addEventListener('contextmenu', window_listener);

			try {
				// Right-click on the link
				const event = create_contextmenu_event(150, 250);
				set_event_target(event, link);
				link.dispatchEvent(event);

				// Verify the contextmenu stayed at original position (didn't reopen)
				assert.strictEqual(contextmenu.x, original_position_x);
				assert.strictEqual(contextmenu.y, original_position_y);

				// Event should not be prevented (allows browser's default contextmenu)
				assert.strictEqual(
					event.defaultPrevented,
					false,
					'event should not be prevented to allow browser contextmenu',
				);

				// Window handler should not be called due to stopPropagation
				assert.strictEqual(
					window_handler_called,
					false,
					'event should not propagate to window handler',
				);
			} finally {
				window.removeEventListener('contextmenu', window_listener);
			}
		});

		test('right-clicking on multiple links stops propagation for each', () => {
			mounted = mount_component(Contextmenu_Root, {
				contextmenu,
				children: (() => {}) as any,
			});

			const {container} = mounted;

			// Open menu with multiple link entries
			contextmenu.open(
				[
					{
						snippet: 'link',
						props: {href: 'https://www.fuz.dev/'},
					},
					{
						snippet: 'link',
						props: {href: 'https://example.com/'},
					},
				],
				100,
				200,
			);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			const links = menu.querySelectorAll('a');
			assert.strictEqual(links.length, 2, 'should have 2 links');

			// Track if window handler was called
			let window_handler_called = false;
			const window_listener = () => {
				window_handler_called = true;
			};
			window.addEventListener('contextmenu', window_listener);

			try {
				// Test both links
				for (const link of links) {
					window_handler_called = false; // Reset for each link

					const event = create_contextmenu_event(150, 250);
					set_event_target(event, link);
					link.dispatchEvent(event);

					// Event should not propagate for any link
					assert.strictEqual(
						window_handler_called,
						false,
						`event should not propagate for link ${link.getAttribute('href')}`,
					);

					assert.strictEqual(
						event.defaultPrevented,
						false,
						'event should not be prevented to allow browser contextmenu',
					);
				}
			} finally {
				window.removeEventListener('contextmenu', window_listener);
			}
		});

		test('prevents Fuz contextmenu from reopening when right-clicking link', () => {
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
						props: {href: 'https://www.fuz.dev/'},
					},
				],
				100,
				200,
			);
			flushSync();

			const menu = container.querySelector('.contextmenu');
			assert.ok(menu);

			const link = menu.querySelector('a[href="https://www.fuz.dev/"]');
			assert.ok(link);

			// Store the original params count
			const original_params = contextmenu.params;

			// Right-click on the link
			const event = create_contextmenu_event(150, 250);
			set_event_target(event, link);
			link.dispatchEvent(event);

			// The contextmenu params should not have changed
			// (if the bug existed, query_contextmenu_params would detect the <a> tag and reopen)
			assert.deepStrictEqual(
				contextmenu.params,
				original_params,
				'contextmenu params should not change',
			);

			// Position should not change
			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
		});
	});
});

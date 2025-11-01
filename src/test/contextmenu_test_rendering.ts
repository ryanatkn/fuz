/**
 * Shared rendering tests for contextmenu components.
 * Tests DOM rendering, lifecycle, and layout element behavior.
 */

import {describe, test, assert, afterEach} from 'vitest';
import {flushSync} from 'svelte';
import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
import {unmount_component} from '$test/test_helpers.js';
import {mount_contextmenu_root, type Shared_Test_Options} from '$test/contextmenu_test_helpers.js';

export const create_shared_rendering_tests = (
	Component: any,
	component_name: string,
	_options: Shared_Test_Options = {},
): void => {
	describe(`${component_name} - Rendering`, () => {
		let mounted: ReturnType<typeof mount_contextmenu_root> | null = null;

		afterEach(async () => {
			if (mounted) {
				await unmount_component(mounted.instance, mounted.container);
				mounted = null;
			}
		});

		test('contextmenu not rendered when closed', () => {
			mounted = mount_contextmenu_root(Component);

			const {container} = mounted;

			const menu = container.querySelector('.contextmenu');
			assert.strictEqual(menu, null);
		});

		test('contextmenu rendered when opened', () => {
			mounted = mount_contextmenu_root(Component);

			const {container, contextmenu} = mounted;

			contextmenu.open([(() => undefined) as any], 100, 200);
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
			mounted = mount_contextmenu_root(Component);

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.ok(layout);
			assert.strictEqual(layout.getAttribute('aria-hidden'), 'true');
		});

		test('contextmenu_layout not rendered with custom layout', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout});

			mounted = mount_contextmenu_root(Component, cm);

			const {container} = mounted;

			const layout = container.querySelector('.contextmenu_layout');
			assert.strictEqual(layout, null);
		});
	});
};

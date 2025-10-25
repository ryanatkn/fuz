/**
 * Shared scoped mode tests for contextmenu components.
 * Tests scoped=true/false behavior and wrapper div.
 */

import {describe, test, assert, afterEach} from 'vitest';
import {unmount_component, create_contextmenu_event} from '$lib/test_helpers.js';
import {mount_contextmenu_root, type Shared_Test_Options} from '$test/contextmenu_test_helpers.js';

export const create_shared_scoped_tests = (
	Component: any,
	component_name: string,
	_options: Shared_Test_Options = {},
): void => {
	describe(`${component_name} - Scoped Mode`, () => {
		let mounted: ReturnType<typeof mount_contextmenu_root> | null = null;

		afterEach(async () => {
			if (mounted) {
				await unmount_component(mounted.instance, mounted.container);
				mounted = null;
			}
		});

		test('scoped=true wraps children in div', () => {
			mounted = mount_contextmenu_root(Component, undefined, {scoped: true});

			const {container} = mounted;

			const scoped_div = container.querySelector('.contextmenu_root');
			assert.ok(scoped_div);
			assert.strictEqual(scoped_div.getAttribute('role'), 'region');
		});

		test('scoped=false does not wrap children', () => {
			mounted = mount_contextmenu_root(Component, undefined, {scoped: false});

			const {container} = mounted;

			const scoped_div = container.querySelector('.contextmenu_root');
			assert.strictEqual(scoped_div, null);
		});

		test('scoped=true disables window contextmenu handler', () => {
			mounted = mount_contextmenu_root(Component, undefined, {scoped: true});

			const {contextmenu} = mounted;

			// Try to trigger contextmenu on window
			const event = create_contextmenu_event(100, 200);
			window.dispatchEvent(event);

			// Should not have opened because scoped mode disables window handler
			assert.strictEqual(contextmenu.opened, false);
		});
	});
};

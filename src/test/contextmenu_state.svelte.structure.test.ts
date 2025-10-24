import {describe, test, assert, beforeEach} from 'vitest';

import {
	Contextmenu_State,
	Entry_State,
	Submenu_State,
	Root_Menu_State,
} from '$lib/contextmenu_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Contextmenu_State - Structure', () => {
	let contextmenu: Contextmenu_State;

	beforeEach(() => {
		contextmenu = new Contextmenu_State();
	});

	describe('menu structure', () => {
		test('Entry_State initializes correctly', () => {
			const run = () => {};
			const entry = new Entry_State(contextmenu.root_menu, () => run);

			assert.strictEqual(entry.is_menu, false);
			assert.strictEqual(entry.menu, contextmenu.root_menu);
			assert.strictEqual(entry.selected, false);
			assert.strictEqual(entry.run(), run);
			assert.strictEqual(entry.pending, false);
			assert.strictEqual(entry.error_message, null);
			assert.strictEqual(entry.promise, null);
		});

		test('Submenu_State initializes correctly', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);

			assert.strictEqual(submenu.is_menu, true);
			assert.strictEqual(submenu.menu, contextmenu.root_menu);
			assert.strictEqual(submenu.depth, 2);
			assert.strictEqual(submenu.selected, false);
			assert.deepEqual(submenu.items, []);
		});

		test('Root_Menu_State initializes correctly', () => {
			const root = new Root_Menu_State();

			assert.strictEqual(root.is_menu, true);
			assert.strictEqual(root.menu, null);
			assert.strictEqual(root.depth, 1);
			assert.deepEqual(root.items, []);
		});

		test('nested menu hierarchy', () => {
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);
			const entry = new Entry_State(submenu2, () => () => {});

			assert.strictEqual(entry.menu, submenu2);
			assert.strictEqual(submenu2.menu, submenu1);
			assert.strictEqual(submenu1.menu, contextmenu.root_menu);
			assert.strictEqual(contextmenu.root_menu.menu, null);
		});

		test('deep nesting (5+ levels) works correctly', () => {
			// Create a 6-level deep menu structure
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);
			const submenu3 = new Submenu_State(submenu2, 4);
			const submenu4 = new Submenu_State(submenu3, 5);
			const submenu5 = new Submenu_State(submenu4, 6);
			const entry = new Entry_State(submenu5, () => () => {});

			// Verify depth property
			assert.strictEqual(submenu1.depth, 2);
			assert.strictEqual(submenu2.depth, 3);
			assert.strictEqual(submenu3.depth, 4);
			assert.strictEqual(submenu4.depth, 5);
			assert.strictEqual(submenu5.depth, 6);

			// Verify hierarchy chain
			assert.strictEqual(entry.menu, submenu5);
			assert.strictEqual(submenu5.menu, submenu4);
			assert.strictEqual(submenu4.menu, submenu3);
			assert.strictEqual(submenu3.menu, submenu2);
			assert.strictEqual(submenu2.menu, submenu1);
			assert.strictEqual(submenu1.menu, contextmenu.root_menu);
		});

		test('empty menus at various depths handled correctly', () => {
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);
			const submenu3 = new Submenu_State(submenu2, 4);

			// All submenus are empty
			assert.strictEqual(submenu1.items.length, 0);
			assert.strictEqual(submenu2.items.length, 0);
			assert.strictEqual(submenu3.items.length, 0);

			// Can still navigate structure
			contextmenu.root_menu.items.push(submenu1);
			submenu1.items.push(submenu2);
			submenu2.items.push(submenu3);

			// Verify structure is intact
			assert.strictEqual(contextmenu.root_menu.items[0], submenu1);
			assert.strictEqual(submenu1.items[0], submenu2);
			assert.strictEqual(submenu2.items[0], submenu3);
		});

		test('menu hierarchy validation', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const entry = new Entry_State(submenu, () => () => {});

			// Root menu has no parent
			assert.strictEqual(contextmenu.root_menu.menu, null);

			// Submenu's parent is root
			assert.strictEqual(submenu.menu, contextmenu.root_menu);

			// Entry's parent is submenu
			assert.strictEqual(entry.menu, submenu);

			// Entry is not a menu
			assert.strictEqual(entry.is_menu, false);

			// Submenu and root are menus
			assert.strictEqual(submenu.is_menu, true);
			assert.strictEqual(contextmenu.root_menu.is_menu, true);
		});

		test('circular reference prevention', () => {
			// Verify that the structure doesn't allow circular references
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);

			// Menu property is set at construction and shouldn't create cycles
			assert.strictEqual(submenu1.menu, contextmenu.root_menu);
			assert.strictEqual(submenu2.menu, submenu1);

			// Items array doesn't reference parents
			contextmenu.root_menu.items.push(submenu1);
			submenu1.items.push(submenu2);

			// Verify no cycles exist by walking up the chain
			let current: any = submenu2;
			let depth = 0;
			while (current && depth < 10) {
				current = current.menu;
				depth++;
			}
			assert.ok(depth < 10, 'Should reach null parent without cycling');
		});
	});

	describe('reset_items', () => {
		test('resets entry promise and error', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			entry.promise = Promise.resolve();
			entry.error_message = 'error';

			contextmenu.reset_items([entry]);

			assert.strictEqual(entry.promise, null);
			assert.strictEqual(entry.error_message, null);
		});

		test('resets entry pending flag', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			entry.promise = Promise.resolve();
			entry.pending = true;

			contextmenu.reset_items([entry]);

			assert.strictEqual(entry.promise, null);
			assert.strictEqual(entry.pending, false);
		});

		test('recursively resets submenu items', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const entry = new Entry_State(submenu, () => () => {});
			entry.promise = Promise.resolve();
			entry.error_message = 'error';
			submenu.items.push(entry);

			contextmenu.reset_items([submenu]);

			assert.strictEqual(entry.promise, null);
			assert.strictEqual(entry.error_message, null);
		});

		test('handles empty items array', () => {
			contextmenu.reset_items([]);
			// Should not throw
		});

		test('handles deeply nested structure', () => {
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);
			const entry = new Entry_State(submenu2, () => () => {});
			entry.error_message = 'error';
			submenu2.items.push(entry);
			submenu1.items.push(submenu2);

			contextmenu.reset_items([submenu1]);

			assert.strictEqual(entry.error_message, null);
		});

		test('reset preserves structure', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const entry1 = new Entry_State(submenu, () => () => {});
			const entry2 = new Entry_State(submenu, () => () => {});
			entry1.error_message = 'error1';
			entry2.error_message = 'error2';
			submenu.items.push(entry1, entry2);

			contextmenu.reset_items([submenu]);

			// Structure preserved
			assert.strictEqual(submenu.items.length, 2);
			assert.strictEqual(submenu.items[0], entry1);
			assert.strictEqual(submenu.items[1], entry2);

			// State cleared
			assert.strictEqual(entry1.error_message, null);
			assert.strictEqual(entry2.error_message, null);
		});

		test('reset clears all async state', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => async () => {});
			entry.promise = Promise.resolve({ok: true});
			entry.pending = true;
			entry.error_message = 'async error';

			contextmenu.reset_items([entry]);

			// All async-related state should be cleared
			assert.strictEqual(entry.promise, null);
			assert.strictEqual(entry.pending, false);
			assert.strictEqual(entry.error_message, null);
		});
	});
});

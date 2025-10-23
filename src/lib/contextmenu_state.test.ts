import {describe, test, assert, beforeEach} from 'vitest';

import {
	Contextmenu_State,
	Entry_State,
	Submenu_State,
	Root_Menu_State,
} from '$lib/contextmenu_state.svelte.js';

/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-empty-function */

describe('Contextmenu_State', () => {
	let contextmenu: Contextmenu_State;

	beforeEach(() => {
		contextmenu = new Contextmenu_State();
	});

	describe('initialization', () => {
		test('creates with default state', () => {
			assert.strictEqual(contextmenu.opened, false);
			assert.strictEqual(contextmenu.x, 0);
			assert.strictEqual(contextmenu.y, 0);
			assert.deepEqual(contextmenu.params, []);
			assert.strictEqual(contextmenu.error, undefined);
			assert.deepEqual(contextmenu.selections, []);
		});

		test('creates layout when no initial layout provided', () => {
			assert.ok(contextmenu.layout);
			assert.strictEqual(contextmenu.initial_layout, undefined);
		});

		test('uses provided initial layout', () => {
			const custom_layout = {width: 800, height: 600};
			const cm = new Contextmenu_State({layout: custom_layout as any});
			assert.strictEqual(cm.layout, custom_layout);
			assert.strictEqual(cm.initial_layout, custom_layout);
		});

		test('has root_menu initialized', () => {
			assert.ok(contextmenu.root_menu);
			assert.strictEqual(contextmenu.root_menu.is_menu, true);
			assert.strictEqual(contextmenu.root_menu.menu, null);
			assert.strictEqual(contextmenu.root_menu.depth, 1);
			assert.deepEqual(contextmenu.root_menu.items, []);
		});
	});

	describe('open and close', () => {
		test('open sets state correctly', () => {
			const params = [
				{snippet: 'text' as const, props: {content: 'Test', icon: '🧪', run: () => {}}},
			];
			contextmenu.open(params, 100, 200);

			assert.strictEqual(contextmenu.opened, true);
			assert.strictEqual(contextmenu.x, 100);
			assert.strictEqual(contextmenu.y, 200);
			assert.strictEqual(contextmenu.params, params);
		});

		test('open clears selections', () => {
			// Setup some selections first
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			entry.selected = true;
			contextmenu.selections.push(entry);

			contextmenu.open([], 0, 0);
			assert.strictEqual(contextmenu.selections.length, 0);
		});

		test('close sets opened to false', () => {
			contextmenu.open([], 100, 200);
			assert.strictEqual(contextmenu.opened, true);

			contextmenu.close();
			assert.strictEqual(contextmenu.opened, false);
		});

		test('close resets entry states', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			entry.promise = Promise.resolve();
			entry.error_message = 'test error';
			contextmenu.root_menu.items.push(entry);

			contextmenu.open([], 0, 0); // Must open first, otherwise close() returns early
			contextmenu.close();

			assert.strictEqual(entry.promise, null);
			assert.strictEqual(entry.error_message, null);
		});

		test('close does nothing when already closed', () => {
			assert.strictEqual(contextmenu.opened, false);
			contextmenu.close(); // Should not throw
			assert.strictEqual(contextmenu.opened, false);
		});

		test('close resets nested submenu items', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const entry = new Entry_State(submenu, () => () => {});
			entry.error_message = 'error';
			submenu.items.push(entry);
			contextmenu.root_menu.items.push(submenu);

			contextmenu.open([], 0, 0); // Must open first, otherwise close() returns early
			contextmenu.close();

			assert.strictEqual(entry.error_message, null);
		});
	});

	describe('selection management', () => {
		let entry1: Entry_State;
		let entry2: Entry_State;
		let entry3: Entry_State;

		beforeEach(() => {
			entry1 = new Entry_State(contextmenu.root_menu, () => () => {});
			entry2 = new Entry_State(contextmenu.root_menu, () => () => {});
			entry3 = new Entry_State(contextmenu.root_menu, () => () => {});
			contextmenu.root_menu.items.push(entry1, entry2, entry3);
		});

		test('select() marks item as selected', () => {
			contextmenu.select(entry1);

			assert.strictEqual(entry1.selected, true);
			assert.deepEqual(contextmenu.selections, [entry1]);
		});

		test('select() deselects previous selection', () => {
			contextmenu.select(entry1);
			contextmenu.select(entry2);

			assert.strictEqual(entry1.selected, false);
			assert.strictEqual(entry2.selected, true);
			assert.deepEqual(contextmenu.selections, [entry2]);
		});

		test('select() with same item does nothing', () => {
			contextmenu.select(entry1);
			const selections_ref = contextmenu.selections;
			contextmenu.select(entry1);

			assert.strictEqual(contextmenu.selections, selections_ref);
			assert.strictEqual(entry1.selected, true);
		});

		test('select_next() selects next item', () => {
			contextmenu.select(entry1);
			contextmenu.select_next();

			assert.strictEqual(entry2.selected, true);
			assert.strictEqual(entry1.selected, false);
		});

		test('select_next() wraps to first item', () => {
			contextmenu.select(entry3);
			contextmenu.select_next();

			assert.strictEqual(entry1.selected, true);
			assert.strictEqual(entry3.selected, false);
		});

		test('select_next() selects first when no selection', () => {
			contextmenu.select_next();
			assert.strictEqual(entry1.selected, true);
		});

		test('select_previous() selects previous item', () => {
			contextmenu.select(entry2);
			contextmenu.select_previous();

			assert.strictEqual(entry1.selected, true);
			assert.strictEqual(entry2.selected, false);
		});

		test('select_previous() wraps to last item', () => {
			contextmenu.select(entry1);
			contextmenu.select_previous();

			assert.strictEqual(entry3.selected, true);
			assert.strictEqual(entry1.selected, false);
		});

		test('select_previous() selects last when no selection', () => {
			contextmenu.select_previous();
			assert.strictEqual(entry3.selected, true);
		});

		test('select_first() selects first item', () => {
			contextmenu.select(entry3);
			contextmenu.select_first();

			assert.strictEqual(entry1.selected, true);
			assert.strictEqual(entry3.selected, false);
		});

		test('select_last() selects last item', () => {
			contextmenu.select(entry1);
			contextmenu.select_last();

			assert.strictEqual(entry3.selected, true);
			assert.strictEqual(entry1.selected, false);
		});

		test('collapse_selected() does nothing with single level', () => {
			contextmenu.select(entry1);
			contextmenu.collapse_selected();

			assert.strictEqual(entry1.selected, true);
			assert.strictEqual(contextmenu.selections.length, 1);
		});

		test('collapse_selected() deselects nested item', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const nested_entry = new Entry_State(submenu, () => () => {});
			submenu.items.push(nested_entry);

			// Manually set up a nested selection
			contextmenu.root_menu.items[0].selected = true;
			submenu.selected = true;
			nested_entry.selected = true;
			contextmenu.selections = [contextmenu.root_menu.items[0], submenu, nested_entry];

			contextmenu.collapse_selected();

			assert.strictEqual(nested_entry.selected, false);
			assert.strictEqual(submenu.selected, true);
			assert.strictEqual(contextmenu.selections.length, 2);
		});

		test('expand_selected() does nothing on non-menu item', () => {
			contextmenu.select(entry1);
			const selections_len = contextmenu.selections.length;
			contextmenu.expand_selected();

			assert.strictEqual(contextmenu.selections.length, selections_len);
		});

		test('expand_selected() selects first child of submenu', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const child = new Entry_State(submenu, () => () => {});
			submenu.items.push(child);
			contextmenu.root_menu.items = [submenu];

			contextmenu.select(submenu);
			contextmenu.expand_selected();

			assert.strictEqual(child.selected, true);
			assert.strictEqual(contextmenu.selections.length, 2);
			assert.strictEqual(contextmenu.selections[1], child);
		});
	});

	describe('activation', () => {
		test('activate() runs synchronous callback and closes', () => {
			let ran = false;
			const entry = new Entry_State(contextmenu.root_menu, () => () => {
				ran = true;
			});

			contextmenu.open([], 0, 0);
			void contextmenu.activate(entry);

			assert.strictEqual(ran, true);
			assert.strictEqual(contextmenu.opened, false);
		});

		test('activate() handles synchronous error', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => {
				throw new Error('test error');
			});

			void contextmenu.activate(entry);

			assert.strictEqual(entry.error_message, 'test error');
			assert.strictEqual(contextmenu.error, 'test error');
		});

		test('activate() handles async success and closes', async () => {
			let resolved = false;
			const entry = new Entry_State(contextmenu.root_menu, () => async () => {
				resolved = true;
				return {ok: true};
			});

			contextmenu.open([], 0, 0);
			const promise = contextmenu.activate(entry);

			assert.strictEqual(entry.pending, true);
			assert.strictEqual(entry.error_message, null);

			await promise;

			assert.strictEqual(resolved, true);
			assert.strictEqual(entry.pending, false);
			assert.strictEqual(contextmenu.opened, false);
		});

		test('activate() handles async error', async () => {
			const entry = new Entry_State(contextmenu.root_menu, () => async () => {
				throw new Error('async error');
			});

			const promise = contextmenu.activate(entry);
			await promise;

			assert.strictEqual(entry.error_message, 'async error');
			assert.strictEqual(contextmenu.error, 'async error');
			assert.strictEqual(entry.pending, false);
		});

		test('activate() handles async failure result', async () => {
			const entry = new Entry_State(contextmenu.root_menu, () => async () => {
				return {ok: false, message: 'failed'};
			});

			contextmenu.open([], 0, 0);
			await contextmenu.activate(entry);

			assert.strictEqual(entry.error_message, 'failed');
			assert.strictEqual(contextmenu.error, 'failed');
			assert.strictEqual(contextmenu.opened, true); // Should not close on failure
		});

		test('activate() on submenu calls expand_selected', () => {
			const submenu = new Submenu_State(contextmenu.root_menu, 2);
			const child = new Entry_State(submenu, () => () => {});
			submenu.items.push(child);

			contextmenu.select(submenu);
			void contextmenu.activate(submenu);

			assert.strictEqual(child.selected, true);
		});

		test('activate_selected() activates current selection', () => {
			let ran = false;
			const entry = new Entry_State(contextmenu.root_menu, () => () => {
				ran = true;
			});

			contextmenu.open([], 0, 0);
			contextmenu.select(entry);
			void contextmenu.activate_selected();

			assert.strictEqual(ran, true);
		});

		test('activate_selected() selects first when no selection', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			contextmenu.root_menu.items.push(entry);

			void contextmenu.activate_selected();

			assert.strictEqual(entry.selected, true);
		});

		test('activate() closes on async non-result return', async () => {
			const entry = new Entry_State(contextmenu.root_menu, () => async () => {
				return 'some value';
			});

			contextmenu.open([], 0, 0);
			await contextmenu.activate(entry);

			assert.strictEqual(contextmenu.opened, false);
		});

		test('activate() ignores stale promise', async () => {
			let resolve1: any;
			let resolve2: any;
			const promise1 = new Promise((r) => (resolve1 = r));
			const promise2 = new Promise((r) => (resolve2 = r));

			let call_count = 0;
			const entry = new Entry_State(contextmenu.root_menu, () => () => {
				call_count++;
				return call_count === 1 ? promise1 : promise2;
			});

			contextmenu.open([], 0, 0);

			// First activation
			void contextmenu.activate(entry);
			assert.strictEqual(entry.pending, true);

			// Second activation (should replace first promise)
			void contextmenu.activate(entry);

			// Resolve first promise (should be ignored)
			resolve1({ok: true});
			await promise1;

			assert.strictEqual(contextmenu.opened, true); // Should still be open

			// Resolve second promise (should close)
			resolve2({ok: true});
			await promise2;

			assert.strictEqual(contextmenu.opened, false);
		});
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
	});

	describe('derived validation properties', () => {
		describe('can_collapse', () => {
			test('returns false with no selection', () => {
				assert.strictEqual(contextmenu.can_collapse, false);
			});

			test('returns false with single selection at root level', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				assert.strictEqual(contextmenu.can_collapse, false);
			});

			test('returns true with nested selection', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();

				assert.strictEqual(contextmenu.can_collapse, true);
			});

			test('returns false after collapsing to root level', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();
				contextmenu.collapse_selected();

				assert.strictEqual(contextmenu.can_collapse, false);
			});
		});

		describe('can_expand', () => {
			test('returns false with no selection', () => {
				assert.strictEqual(contextmenu.can_expand, false);
			});

			test('returns false when entry is selected', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				assert.strictEqual(contextmenu.can_expand, false);
			});

			test('returns true when submenu with items is selected', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);
				contextmenu.select(submenu);

				assert.strictEqual(contextmenu.can_expand, true);
			});

			test('returns false when empty submenu is selected', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				contextmenu.root_menu.items.push(submenu);
				contextmenu.select(submenu);

				assert.strictEqual(contextmenu.can_expand, false);
			});

			test('returns false after expanding into submenu', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();

				// Now entry is selected, which is not a menu
				assert.strictEqual(contextmenu.can_expand, false);
			});
		});

		describe('can_select_next', () => {
			test('returns false with empty menu', () => {
				assert.strictEqual(contextmenu.can_select_next, false);
			});

			test('returns false with single item', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry);

				assert.strictEqual(contextmenu.can_select_next, false);
			});

			test('returns true with multiple items', () => {
				const entry1 = new Entry_State(contextmenu.root_menu, () => () => {});
				const entry2 = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry1, entry2);

				assert.strictEqual(contextmenu.can_select_next, true);
			});

			test('returns true with multiple items and selection', () => {
				const entry1 = new Entry_State(contextmenu.root_menu, () => () => {});
				const entry2 = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry1, entry2);
				contextmenu.select(entry1);

				assert.strictEqual(contextmenu.can_select_next, true);
			});

			test('checks current menu level when in submenu', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();

				// Only one item in submenu
				assert.strictEqual(contextmenu.can_select_next, false);
			});

			test('returns true in submenu with multiple items', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry1 = new Entry_State(submenu, () => () => {});
				const entry2 = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry1, entry2);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();

				assert.strictEqual(contextmenu.can_select_next, true);
			});
		});

		describe('can_select_previous', () => {
			test('returns false with empty menu', () => {
				assert.strictEqual(contextmenu.can_select_previous, false);
			});

			test('returns false with single item', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry);

				assert.strictEqual(contextmenu.can_select_previous, false);
			});

			test('returns true with multiple items', () => {
				const entry1 = new Entry_State(contextmenu.root_menu, () => () => {});
				const entry2 = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry1, entry2);

				assert.strictEqual(contextmenu.can_select_previous, true);
			});

			test('returns true with multiple items and selection', () => {
				const entry1 = new Entry_State(contextmenu.root_menu, () => () => {});
				const entry2 = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry1, entry2);
				contextmenu.select(entry2);

				assert.strictEqual(contextmenu.can_select_previous, true);
			});

			test('checks current menu level when in submenu', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);

				contextmenu.select(submenu);
				contextmenu.expand_selected();

				// Only one item in submenu
				assert.strictEqual(contextmenu.can_select_previous, false);
			});
		});

		describe('can_activate', () => {
			test('returns false with no selection', () => {
				assert.strictEqual(contextmenu.can_activate, false);
			});

			test('returns true with enabled entry selected', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => () => {});
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				assert.strictEqual(contextmenu.can_activate, true);
			});

			test('returns false with disabled entry selected', () => {
				const entry = new Entry_State(
					contextmenu.root_menu,
					() => () => {},
					() => true,
				);
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				assert.strictEqual(contextmenu.can_activate, false);
			});

			test('returns true when submenu with items is selected', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				const entry = new Entry_State(submenu, () => () => {});
				submenu.items.push(entry);
				contextmenu.root_menu.items.push(submenu);
				contextmenu.select(submenu);

				assert.strictEqual(contextmenu.can_activate, true);
			});

			test('returns false when empty submenu is selected', () => {
				const submenu = new Submenu_State(contextmenu.root_menu, 2);
				contextmenu.root_menu.items.push(submenu);
				contextmenu.select(submenu);

				assert.strictEqual(contextmenu.can_activate, false);
			});

			test('returns true for entry with async action', () => {
				const entry = new Entry_State(contextmenu.root_menu, () => async () => {});
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				assert.strictEqual(contextmenu.can_activate, true);
			});

			test('evaluates disabled function for entries', () => {
				let counter = 0;
				const entry = new Entry_State(
					contextmenu.root_menu,
					() => () => {},
					() => {
						counter++;
						return false;
					},
				);
				contextmenu.root_menu.items.push(entry);
				contextmenu.select(entry);

				// Access the property to trigger evaluation
				const result = contextmenu.can_activate;
				assert.strictEqual(result, true);
				// Verify the disabled function was called
				assert.ok(counter > 0);
			});
		});
	});
});

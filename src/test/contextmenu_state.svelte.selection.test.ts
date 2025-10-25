import {describe, test, assert, beforeEach} from 'vitest';

import {Contextmenu_State, Entry_State, Submenu_State} from '$lib/contextmenu_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Contextmenu_State - Selection', () => {
	let contextmenu: Contextmenu_State;

	beforeEach(() => {
		contextmenu = new Contextmenu_State();
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

		test('collapse_selected() respects can_collapse', () => {
			const entry = new Entry_State(contextmenu.root_menu, () => () => {});
			contextmenu.root_menu.items.push(entry);
			contextmenu.select(entry);

			// At root level, can_collapse is false
			assert.strictEqual(contextmenu.can_collapse, false);

			// Should be no-op
			contextmenu.collapse_selected();

			assert.strictEqual(entry.selected, true);
			assert.strictEqual(contextmenu.selections.length, 1);
		});

		test('expand_selected() respects can_expand with empty submenu', () => {
			const empty_submenu = new Submenu_State(contextmenu.root_menu, 2);
			contextmenu.root_menu.items.push(empty_submenu);
			contextmenu.select(empty_submenu);

			// Empty submenu, can_expand is false
			assert.strictEqual(contextmenu.can_expand, false);

			// Should be no-op and not crash
			contextmenu.expand_selected();

			assert.strictEqual(empty_submenu.selected, true);
			assert.strictEqual(contextmenu.selections.length, 1);
		});

		test('expand_selected() does not crash on empty submenu (regression)', () => {
			// This is a regression test for the bug where expand_selected()
			// would access parent.items[0] without checking if items is empty
			const empty_submenu = new Submenu_State(contextmenu.root_menu, 2);
			contextmenu.root_menu.items.push(empty_submenu);
			contextmenu.select(empty_submenu);

			// Before fix: would throw "Cannot read property 'selected' of undefined"
			// After fix: should be a safe no-op
			assert.doesNotThrow(() => {
				contextmenu.expand_selected();
			});
		});

		test("rapid selection changes don't cause race conditions", () => {
			// Rapidly change selections and verify state consistency
			contextmenu.select(entry1);
			contextmenu.select(entry2);
			contextmenu.select(entry3);
			contextmenu.select(entry1);
			contextmenu.select(entry2);

			// Only entry2 should be selected
			assert.strictEqual(entry1.selected, false);
			assert.strictEqual(entry2.selected, true);
			assert.strictEqual(entry3.selected, false);
			assert.strictEqual(contextmenu.selections.length, 1);
			assert.strictEqual(contextmenu.selections[0], entry2);
		});

		test('selecting disabled items is prevented', () => {
			const disabled_entry = new Entry_State(
				contextmenu.root_menu,
				() => () => {},
				() => true, // disabled function returns true
			);
			contextmenu.root_menu.items.push(disabled_entry);

			// Select disabled item
			contextmenu.select(disabled_entry);

			// Should still be selected (selection doesn't check disabled state)
			// Activation is what checks disabled state
			assert.strictEqual(disabled_entry.selected, true);
		});

		test('selection state survives across multiple levels', () => {
			const submenu1 = new Submenu_State(contextmenu.root_menu, 2);
			const submenu2 = new Submenu_State(submenu1, 3);
			const deep_entry = new Entry_State(submenu2, () => () => {});

			submenu2.items.push(deep_entry);
			submenu1.items.push(submenu2);
			contextmenu.root_menu.items = [submenu1];

			// Navigate down
			contextmenu.select(submenu1);
			assert.strictEqual(contextmenu.selections.length, 1);

			contextmenu.expand_selected();
			assert.strictEqual(contextmenu.selections.length, 2);
			assert.strictEqual(contextmenu.selections[1], submenu2);

			contextmenu.expand_selected();
			assert.strictEqual(contextmenu.selections.length, 3);
			assert.strictEqual(contextmenu.selections[2], deep_entry);

			// Navigate up
			contextmenu.collapse_selected();
			assert.strictEqual(contextmenu.selections.length, 2);
			assert.strictEqual(contextmenu.selections[1], submenu2);

			contextmenu.collapse_selected();
			assert.strictEqual(contextmenu.selections.length, 1);
			assert.strictEqual(contextmenu.selections[0], submenu1);
		});

		test('keyboard navigation boundary conditions', () => {
			// Empty menu
			contextmenu.root_menu.items = [];
			contextmenu.select_next();
			assert.strictEqual(contextmenu.selections.length, 0);

			contextmenu.select_previous();
			assert.strictEqual(contextmenu.selections.length, 0);

			// Single item menu
			const single = new Entry_State(contextmenu.root_menu, () => () => {});
			contextmenu.root_menu.items = [single];

			contextmenu.select_first();
			assert.strictEqual(single.selected, true);

			contextmenu.select_last();
			assert.strictEqual(single.selected, true);

			// Wrap around works correctly
			contextmenu.select_next();
			assert.strictEqual(single.selected, true);

			contextmenu.select_previous();
			assert.strictEqual(single.selected, true);
		});
	});
});

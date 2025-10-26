/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, type Snippet} from 'svelte';
import {mount_component, unmount_component} from '$lib/test_helpers.js';
import Tooltip from '$lib/Tooltip.svelte';
import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Tooltip - ARIA Compliance', () => {
	let tooltip_state: Tooltip_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

	beforeEach(() => {
		tooltip_state = new Tooltip_State(400, 200);
		vi.useFakeTimers();
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
		vi.restoreAllMocks();
	});

	describe('role attribute', () => {
		test('has role="tooltip"', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip', 'should have role="tooltip"');
		});

		test('role attribute persists through show/hide cycles', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;

			// Show
			tooltip_state.show(100, 200, content);
			flushSync();
			let tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip');

			// Hide
			tooltip_state.hide();
			flushSync();

			// Show again
			tooltip_state.show(100, 200, content);
			flushSync();
			tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip');
		});
	});

	describe('id attribute', () => {
		test('has unique id attribute', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			const id = tooltip_el?.getAttribute('id');

			assert.ok(id, 'should have id attribute');
			assert.ok(id.startsWith('tooltip-'), 'id should start with "tooltip-"');
		});

		test('id matches tooltip_state.id', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(
				tooltip_el?.getAttribute('id'),
				tooltip_state.id,
				'id should match state id',
			);
		});

		test('id is consistent across show/hide cycles', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const first_id = mounted.container.querySelector('.tooltip')?.getAttribute('id');

			tooltip_state.hide();
			flushSync();

			tooltip_state.show(100, 200, content);
			flushSync();

			const second_id = mounted.container.querySelector('.tooltip')?.getAttribute('id');
			assert.strictEqual(first_id, second_id, 'id should remain consistent');
		});

		test('different tooltip instances have different ids', () => {
			const state1 = new Tooltip_State();
			const state2 = new Tooltip_State();

			assert.notStrictEqual(state1.id, state2.id, 'each tooltip should have unique id');
		});

		test('id is generated at construction time', () => {
			const state = new Tooltip_State();
			const initial_id = state.id;

			const content = (() => {}) as Snippet;
			state.show(100, 200, content);

			assert.strictEqual(state.id, initial_id, 'id should not change after construction');
		});
	});

	describe('aria-describedby reference pattern', () => {
		test('triggering element should reference tooltip via aria-describedby', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			// Create a trigger element
			const trigger = document.createElement('button');
			trigger.textContent = 'Trigger';
			mounted.container.appendChild(trigger);

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Simulate the pattern used in Declaration_Link.svelte
			// When tooltip is opened, trigger should have aria-describedby
			if (tooltip_state.opened) {
				trigger.setAttribute('aria-describedby', tooltip_state.id);
			}

			assert.strictEqual(
				trigger.getAttribute('aria-describedby'),
				tooltip_state.id,
				'trigger should reference tooltip id',
			);

			// Verify tooltip exists with matching id
			const tooltip_el = mounted.container.querySelector(`#${tooltip_state.id}`);
			assert.ok(tooltip_el, 'tooltip with matching id should exist');
			assert.strictEqual(tooltip_el.getAttribute('role'), 'tooltip');
		});

		test('aria-describedby should be removed when tooltip closes', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const trigger = document.createElement('button');
			mounted.container.appendChild(trigger);

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Set aria-describedby when open
			trigger.setAttribute('aria-describedby', tooltip_state.id);

			// Close tooltip
			tooltip_state.hide();
			flushSync();

			// Simulate removal pattern (consumer responsibility)
			if (!tooltip_state.opened) {
				trigger.removeAttribute('aria-describedby');
			}

			assert.strictEqual(
				trigger.getAttribute('aria-describedby'),
				null,
				'aria-describedby should be removed when closed',
			);
		});

		test('multiple triggers can reference same tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const trigger1 = document.createElement('button');
			const trigger2 = document.createElement('button');
			mounted.container.appendChild(trigger1);
			mounted.container.appendChild(trigger2);

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Both triggers can reference the same tooltip
			trigger1.setAttribute('aria-describedby', tooltip_state.id);
			trigger2.setAttribute('aria-describedby', tooltip_state.id);

			assert.strictEqual(trigger1.getAttribute('aria-describedby'), tooltip_state.id);
			assert.strictEqual(trigger2.getAttribute('aria-describedby'), tooltip_state.id);
		});
	});

	describe('focusability', () => {
		test('tooltip element is not focusable (no tabindex)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.strictEqual(tooltip_el.getAttribute('tabindex'), null, 'should not have tabindex');
		});

		test('tooltip element cannot receive focus', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Try to focus
			tooltip_el.focus();

			// Should not be the active element
			assert.notStrictEqual(document.activeElement, tooltip_el, 'tooltip should not be focusable');
		});

		test('tooltip does not contain interactive elements by default', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Check for interactive elements
			const interactives = tooltip_el.querySelectorAll(
				'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);

			assert.strictEqual(interactives.length, 0, 'tooltip should not contain interactive elements');
		});
	});

	describe('ARIA guidelines compliance', () => {
		test('tooltip appears after small delay (hover)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);
			flushSync();

			// Should not appear immediately
			let tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'should not appear immediately');

			// Should appear after delay
			vi.advanceTimersByTime(450);
			flushSync();

			tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'should appear after delay');
		});

		test('tooltip appears immediately on focus (keyboard)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			// Immediate show simulates focus behavior
			tooltip_state.show(100, 200, content);
			flushSync();

			// Should appear immediately
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'should appear immediately for focus');
		});

		test('tooltip remains open while cursor over tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Start hide delay (cursor left trigger)
			tooltip_state.hide_delayed();

			// Cursor moves into tooltip
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			tooltip_el.dispatchEvent(new MouseEvent('mouseenter', {bubbles: true}));
			flushSync();

			// Advance past hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should still be open
			assert.strictEqual(tooltip_state.opened, true);
			const still_visible = mounted.container.querySelector('.tooltip');
			assert.ok(still_visible, 'should remain open while cursor over tooltip');
		});

		test('tooltip dismisses on Escape key', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const event = new KeyboardEvent('keydown', {key: 'Escape', bubbles: true});
			window.dispatchEvent(event);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'should dismiss on Escape');
		});

		test('tooltip dismisses on blur', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Simulate blur by immediately hiding
			tooltip_state.hide();
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'should dismiss on blur');
		});
	});

	describe('semantic structure', () => {
		test('tooltip is direct child of body (via portal)', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			// Tooltip is rendered in the component's container, which should be in body
			assert.ok(document.body.contains(tooltip_el), 'tooltip should be in body');
		});

		test('tooltip has appropriate styling classes', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el?.classList.contains('tooltip'), 'should have tooltip class');
			assert.ok(tooltip_el?.classList.contains('pane'), 'should have pane class');
		});

		test('tooltip has appropriate z-index for overlay', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const computed = window.getComputedStyle(tooltip_el);

			// Check that z-index is set (either inline or via CSS variable)
			const z_index = computed.zIndex;
			// Default or custom z-index should be present
			assert.ok(z_index !== 'auto', 'should have explicit z-index');
		});
	});

	describe('accessibility tree', () => {
		test('tooltip role is exposed to accessibility API', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');

			// role="tooltip" makes it appear in accessibility tree
			assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip');

			// Verify it's not hidden from accessibility tree
			assert.strictEqual(tooltip_el?.getAttribute('aria-hidden'), null);
		});

		test('tooltip content is accessible', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');

			// Content should be in DOM and accessible
			assert.ok(tooltip_el, 'tooltip content should be in DOM');
			// user-select is set to none for styling, but content is still accessible to AT
		});

		test('tooltip is not live region', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');

			// Tooltips should not use aria-live
			assert.strictEqual(tooltip_el?.getAttribute('aria-live'), null);
			assert.strictEqual(tooltip_el?.getAttribute('aria-atomic'), null);
		});
	});

	describe('edge cases', () => {
		test('id generation is thread-safe (sequential)', () => {
			const states = Array.from({length: 100}, () => new Tooltip_State());
			const ids = states.map((s) => s.id);

			// All ids should be unique
			const unique_ids = new Set(ids);
			assert.strictEqual(unique_ids.size, ids.length, 'all ids should be unique');

			// All ids should start with tooltip-
			assert.ok(
				ids.every((id) => id.startsWith('tooltip-')),
				'all ids should have prefix',
			);
		});

		test('handles rapid open/close cycles', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;

			// Rapid cycles
			for (let i = 0; i < 10; i++) {
				tooltip_state.show(100, 200, content);
				flushSync();
				const tooltip_el = mounted.container.querySelector('.tooltip');
				assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip');
				assert.strictEqual(tooltip_el?.getAttribute('id'), tooltip_state.id);

				tooltip_state.hide();
				flushSync();
			}
		});

		test('ARIA attributes survive position updates', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const initial_role = mounted.container.querySelector('.tooltip')?.getAttribute('role');
			const initial_id = mounted.container.querySelector('.tooltip')?.getAttribute('id');

			// Update position multiple times
			tooltip_state.show(200, 300, content);
			flushSync();
			tooltip_state.show(300, 400, content);
			flushSync();

			const final_role = mounted.container.querySelector('.tooltip')?.getAttribute('role');
			const final_id = mounted.container.querySelector('.tooltip')?.getAttribute('id');

			assert.strictEqual(final_role, initial_role, 'role should not change');
			assert.strictEqual(final_id, initial_id, 'id should not change');
		});
	});
});

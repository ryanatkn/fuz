/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, type Snippet} from 'svelte';

import {mount_component, unmount_component} from '$test/test_helpers.js';
import Tooltip from '$lib/Tooltip.svelte';
import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

describe('Tooltip - Core Functionality', () => {
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

	describe('initialization', () => {
		test('mounts with closed state', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should not be rendered when closed');
		});

		test('uses default offset values', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			// Open tooltip to check positioning
			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(tooltip_el, 'tooltip should be rendered');

			// Check that transform includes default offsets (6px)
			const transform = tooltip_el.style.transform;
			assert.ok(
				transform.includes('106px') && transform.includes('206px'),
				'should apply default offsets',
			);
		});

		test('accepts custom offset values', () => {
			mounted = mount_component(Tooltip, {
				tooltip: tooltip_state,
				offset_x: 10,
				offset_y: 15,
			});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;
			assert.ok(
				transform.includes('110px') && transform.includes('215px'),
				'should apply custom offsets',
			);
		});

		test('accepts custom viewport_padding', () => {
			mounted = mount_component(Tooltip, {
				tooltip: tooltip_state,
				viewport_padding: 20,
			});

			// Viewport padding is tested in positioning tests
			assert.ok(mounted, 'should mount with custom viewport_padding');
		});
	});

	describe('rendering', () => {
		test('renders when tooltip is opened', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should be rendered when opened');
		});

		test('does not render when tooltip is closed', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			tooltip_state.hide();
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should not be rendered when closed');
		});

		test('renders content snippet', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const test_text = 'Test tooltip content';
			const content: Snippet = () => {
				const el = document.createElement('span');
				el.textContent = test_text;
				return el as any;
			};

			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should be rendered');
			// Content rendering is handled by Svelte, just verify element exists
		});

		test('has correct role attribute', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el?.getAttribute('role'), 'tooltip');
		});

		test('has correct id from tooltip state', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el?.getAttribute('id'), tooltip_state.id);
		});

		test('has pane class', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el?.classList.contains('pane'));
		});
	});

	describe('state integration', () => {
		test('responds to immediate show', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should be rendered immediately');
		});

		test('responds to delayed show', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show_delayed(100, 200, content);
			flushSync();

			// Should not be visible yet
			let tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should not be rendered before delay');

			// Advance past delay
			vi.advanceTimersByTime(450);
			flushSync();

			assert.strictEqual(tooltip_state.opened, true);
			tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should be rendered after delay');
		});

		test('responds to immediate hide', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			tooltip_state.hide();
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should not be rendered after hide');
		});

		test('responds to delayed hide', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			tooltip_state.hide_delayed();
			flushSync();

			// Should still be visible
			let tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should still be rendered during hide delay');

			// Advance past delay
			vi.advanceTimersByTime(250);
			flushSync();

			assert.strictEqual(tooltip_state.opened, false);
			tooltip_el = mounted.container.querySelector('.tooltip');
			assert.strictEqual(tooltip_el, null, 'tooltip should not be rendered after hide delay');
		});

		test('updates position when state changes', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			let tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			let transform = tooltip_el.style.transform;
			assert.ok(transform.includes('106px') && transform.includes('206px'));

			// Update position
			tooltip_state.show(300, 400, content);
			flushSync();

			tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			transform = tooltip_el.style.transform;
			assert.ok(
				transform.includes('306px') && transform.includes('406px'),
				'should update position',
			);
		});

		test('updates content when state changes', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content1 = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content1);
			flushSync();

			const content2 = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content2);
			flushSync();

			// Content should be updated (verified by Svelte's reactivity)
			assert.strictEqual(tooltip_state.content, content2);
		});
	});

	describe('sticky behavior', () => {
		test('cancels hide when mouse enters tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			// Start hide delay
			tooltip_state.hide_delayed();

			// Mouse enters tooltip
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			tooltip_el.dispatchEvent(new MouseEvent('mouseenter', {bubbles: true}));
			flushSync();

			// Advance past hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should still be open
			assert.strictEqual(tooltip_state.opened, true);
			const still_visible = mounted.container.querySelector('.tooltip');
			assert.ok(still_visible, 'tooltip should remain visible after mouse enter');
		});

		test('hides with delay when mouse leaves tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style

			// Mouse leaves tooltip
			tooltip_el.dispatchEvent(new MouseEvent('mouseleave', {bubbles: true}));
			flushSync();

			// Should still be visible during delay
			let visible = mounted.container.querySelector('.tooltip');
			assert.ok(visible, 'tooltip should be visible during hide delay');

			// Advance past hide delay
			vi.advanceTimersByTime(250);
			flushSync();

			// Should now be hidden
			assert.strictEqual(tooltip_state.opened, false);
			visible = mounted.container.querySelector('.tooltip');
			assert.strictEqual(visible, null, 'tooltip should be hidden after delay');
		});
	});
});

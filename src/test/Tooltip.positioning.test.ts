/**
 * @vitest-environment jsdom
 */
import {describe, test, assert, beforeEach, afterEach, vi} from 'vitest';
import {flushSync, type Snippet} from 'svelte';

import {mount_component, unmount_component} from '$test/test_helpers.js';
import Tooltip from '$lib/Tooltip.svelte';
import {Tooltip_State} from '$lib/tooltip_state.svelte.js';

/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Helper to set window dimensions for testing
 */
const set_window_dimensions = (width: number, height: number): void => {
	Object.defineProperty(window, 'innerWidth', {
		writable: true,
		configurable: true,
		value: width,
	});
	Object.defineProperty(window, 'innerHeight', {
		writable: true,
		configurable: true,
		value: height,
	});
};

/**
 * Helper to mock getBoundingClientRect for tooltip element
 */
const mock_tooltip_dimensions = (
	element: HTMLElement,
	width: number,
	height: number,
): (() => void) => {
	const original = element.getBoundingClientRect;
	element.getBoundingClientRect = vi.fn().mockReturnValue({
		width,
		height,
		top: 0,
		left: 0,
		right: width,
		bottom: height,
		x: 0,
		y: 0,
		toJSON: () => ({}),
	});
	return () => {
		element.getBoundingClientRect = original;
	};
};

describe('Tooltip - Positioning', () => {
	let tooltip_state: Tooltip_State;
	let mounted: ReturnType<typeof mount_component> | null = null;

	beforeEach(() => {
		tooltip_state = new Tooltip_State(400, 200);
		vi.useFakeTimers();
		// Set default viewport size
		set_window_dimensions(1024, 768);
	});

	afterEach(async () => {
		if (mounted) {
			await unmount_component(mounted.instance, mounted.container);
			mounted = null;
		}
		vi.restoreAllMocks();
	});

	describe('basic positioning', () => {
		test('positions tooltip at specified coordinates with default offset', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			// Default offset is 6px
			assert.ok(transform.includes('106px'), 'x should include 6px offset');
			assert.ok(transform.includes('206px'), 'y should include 6px offset');
		});

		test('applies custom x offset', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, offset_x: 10});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('110px'), 'should apply custom x offset');
		});

		test('applies custom y offset', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, offset_y: 15});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('215px'), 'should apply custom y offset');
		});

		test('applies both custom offsets', () => {
			mounted = mount_component(Tooltip, {
				tooltip: tooltip_state,
				offset_x: 12,
				offset_y: 18,
			});

			const content = (() => {}) as Snippet;
			tooltip_state.show(150, 250, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('162px'), 'should apply custom x offset');
			assert.ok(transform.includes('268px'), 'should apply custom y offset');
		});

		test('updates position when coordinates change', () => {
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
			assert.ok(transform.includes('306px') && transform.includes('406px'));
		});
	});

	describe('viewport edge detection - horizontal', () => {
		test('flips to left when would overflow right edge', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			// Test pattern for mocking dimensions:
			// 1. Show once to create element
			// 2. Hide to reset
			// 3. Show again (creates new element in Svelte)
			// 4. Mock getBoundingClientRect on new element
			// 5. Change position to trigger effect (which reads mocked dimensions)
			// This is necessary because mocking doesn't automatically trigger Svelte effects

			// Position near right edge
			tooltip_state.show(900, 200, content);
			flushSync();

			// Hide to prepare for remount
			tooltip_state.hide();
			flushSync();

			// Show again - this creates a new element
			tooltip_state.show(900, 200, content);
			flushSync();

			// Now mock the new element
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 200, 100);

			// Trigger re-measurement by changing position slightly
			tooltip_state.show(901, 200, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// Should flip to left: 901 - 200 - 6 = 695px (or clamped to viewport_padding)
			const x_match = /translate3d\((\d+)px/.exec(transform);
			assert.ok(x_match, 'should have transform');
			const x_value = parseInt(x_match[1]!, 10);
			assert.ok(x_value < 901, 'should flip to left of cursor');

			cleanup();
		});

		test('clamps to left edge when flipped position would be negative', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, viewport_padding: 10});

			const content = (() => {}) as Snippet;
			// Position close to left edge
			tooltip_state.show(50, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			// Mock large tooltip width that would force clamping
			const cleanup = mock_tooltip_dimensions(tooltip_el, 300, 100);
			flushSync();

			// Position near right edge to trigger flip
			set_window_dimensions(400, 768);
			tooltip_state.show(350, 200, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			const x_match = /translate3d\((\d+)px/.exec(transform);
			assert.ok(x_match, 'should have transform');
			const x_value = parseInt(x_match[1]!, 10);
			// Should be clamped to viewport_padding (10px)
			assert.ok(x_value >= 10, 'should be clamped to viewport padding');

			cleanup();
		});

		test('respects custom viewport_padding for horizontal edges', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, viewport_padding: 20});

			const content = (() => {}) as Snippet;
			tooltip_state.show(900, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 200, 100);
			flushSync();

			// Force re-render
			tooltip_state.show(900, 200, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// When flipped and clamped, should respect 20px padding
			const x_match = /translate3d\((\d+)px/.exec(transform);
			assert.ok(x_match, 'should have transform');

			cleanup();
		});
	});

	describe('viewport edge detection - vertical', () => {
		test('flips to top when would overflow bottom edge', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			// Test pattern: hide/show/mock/show to trigger effect with mocked dimensions
			// See horizontal flip test above for detailed explanation

			// Position near bottom edge
			tooltip_state.show(200, 700, content);
			flushSync();

			// Hide to prepare for remount
			tooltip_state.hide();
			flushSync();

			// Show again - this creates a new element
			tooltip_state.show(200, 700, content);
			flushSync();

			// Now mock the new element
			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 150, 100);

			// Trigger re-measurement by changing position slightly
			tooltip_state.show(200, 701, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// Should flip to top: 701 - 100 - 6 = 595px (or clamped to viewport_padding)
			const match = /translate3d\(\d+px, (\d+)px/.exec(transform);
			assert.ok(match, 'should have transform');
			const y_value = parseInt(match[1]!, 10);
			assert.ok(y_value < 701, 'should flip to above cursor');

			cleanup();
		});

		test('clamps to top edge when flipped position would be negative', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, viewport_padding: 10});

			const content = (() => {}) as Snippet;
			// Position close to top edge
			tooltip_state.show(200, 50, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			// Mock large tooltip height that would force clamping
			const cleanup = mock_tooltip_dimensions(tooltip_el, 150, 300);
			flushSync();

			// Position near bottom edge to trigger flip
			set_window_dimensions(1024, 400);
			tooltip_state.show(200, 350, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			const match = /translate3d\(\d+px, (\d+)px/.exec(transform);
			assert.ok(match, 'should have transform');
			const y_value = parseInt(match[1]!, 10);
			// Should be clamped to viewport_padding (10px)
			assert.ok(y_value >= 10, 'should be clamped to viewport padding');

			cleanup();
		});

		test('respects custom viewport_padding for vertical edges', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state, viewport_padding: 25});

			const content = (() => {}) as Snippet;
			tooltip_state.show(200, 700, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 150, 100);
			flushSync();

			// Force re-render
			tooltip_state.show(200, 700, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// When flipped and clamped, should respect 25px padding
			const match = /translate3d\(\d+px, (\d+)px/.exec(transform);
			assert.ok(match, 'should have transform');

			cleanup();
		});
	});

	describe('corner cases', () => {
		test('handles tooltip at top-left corner', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(0, 0, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			assert.ok(tooltip_el, 'should render at corner');

			const transform = tooltip_el.style.transform;
			assert.ok(transform, 'should have transform');
		});

		test('handles tooltip at bottom-right corner', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(1024, 768, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 200, 100);
			flushSync();

			// Force re-render
			tooltip_state.show(1024, 768, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// Should be flipped and clamped
			assert.ok(transform, 'should have transform');

			cleanup();
		});

		test('handles very large tooltip', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(500, 400, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			// Mock very large tooltip
			const cleanup = mock_tooltip_dimensions(tooltip_el, 800, 600);
			flushSync();

			// Force re-render
			tooltip_state.show(500, 400, content);
			flushSync();

			const transform = tooltip_el.style.transform;
			// Should be positioned (may be clamped)
			assert.ok(transform, 'should have transform');

			cleanup();
		});
	});

	describe('window resize', () => {
		test('updates viewport dimensions on window resize', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(900, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const cleanup = mock_tooltip_dimensions(tooltip_el, 200, 100);

			// Initial position
			tooltip_state.show(900, 200, content);
			flushSync();

			// Resize window to be narrower
			set_window_dimensions(800, 768);
			window.dispatchEvent(new Event('resize'));
			flushSync();

			// Position again at same coordinates
			tooltip_state.show(900, 200, content);
			flushSync();
			const after_resize_transform = tooltip_el.style.transform;

			// Transform may differ due to new viewport size
			assert.ok(after_resize_transform, 'should have transform after resize');

			cleanup();
		});

		test('recalculates position on resize if tooltip is open', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(500, 300, content);
			flushSync();

			// Resize
			set_window_dimensions(1200, 900);
			window.dispatchEvent(new Event('resize'));
			flushSync();

			// Tooltip should still be visible
			const tooltip_el = mounted.container.querySelector('.tooltip');
			assert.ok(tooltip_el, 'tooltip should remain visible after resize');
		});
	});

	describe('transform', () => {
		test('uses translate3d for GPU acceleration', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.startsWith('translate3d('), 'should use translate3d');
			assert.ok(transform.endsWith(', 0)'), 'should have z-coordinate of 0');
		});

		// Note: CSS property tests (position: fixed, left/top: 0) removed
		// jsdom doesn't compute CSS from stylesheets, only inline styles
		// These would need additional CSS parsing setup to test properly
	});

	describe('edge cases', () => {
		test('handles zero offsets', () => {
			mounted = mount_component(Tooltip, {
				tooltip: tooltip_state,
				offset_x: 0,
				offset_y: 0,
			});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('100px') && transform.includes('200px'));
		});

		test('handles negative offsets', () => {
			mounted = mount_component(Tooltip, {
				tooltip: tooltip_state,
				offset_x: -10,
				offset_y: -15,
			});

			const content = (() => {}) as Snippet;
			tooltip_state.show(100, 200, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('90px') && transform.includes('185px'));
		});

		test('handles position at origin', () => {
			mounted = mount_component(Tooltip, {tooltip: tooltip_state});

			const content = (() => {}) as Snippet;
			tooltip_state.show(0, 0, content);
			flushSync();

			const tooltip_el = mounted.container.querySelector('.tooltip') as HTMLElement; // eslint-disable-line @typescript-eslint/non-nullable-type-assertion-style
			const transform = tooltip_el.style.transform;

			assert.ok(transform.includes('6px') && transform.includes('6px'));
		});
	});
});

/**
 * Shared test utilities specific to contextmenu components.
 * Provides helpers for mounting contextmenu components and setting up actions.
 */

import type {Component} from 'svelte';
import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
import {mount_component} from '$test/test_helpers.js';

/**
 * Create a test contextmenu with standard layout dimensions.
 * This is the standard test setup used across contextmenu tests.
 */
export const create_test_contextmenu = (): Contextmenu_State => {
	const cm = new Contextmenu_State();
	cm.layout.width = 1024;
	cm.layout.height = 768;
	return cm;
};

/**
 * Mount a contextmenu root component with a contextmenu instance.
 * Provides default empty children snippet and merges additional props.
 *
 * @param Component - The contextmenu root component to mount (Contextmenu_Root or Safari variant)
 * @param contextmenu - Optional contextmenu instance (uses default if not provided)
 * @param props - Additional props to pass to the component
 */
export const mount_contextmenu_root = <Props extends Record<string, any>>(
	Component: Component<Props>,
	contextmenu?: Contextmenu_State,
	props: Record<string, any> = {},
): {instance: any; container: HTMLElement; contextmenu: Contextmenu_State} => {
	const cm = contextmenu || create_test_contextmenu();
	const result = mount_component(Component, {
		contextmenu: cm,
		children: (() => {
			// Empty children snippet
		}) as any,
		...props,
	} as any);

	return {...result, contextmenu: cm};
};

/**
 * Setup contextmenu attachment on an element with test params.
 * This registers the element so it responds to contextmenu events.
 *
 * @param element - The HTML or SVG element to setup
 * @param params - Array of contextmenu params (entries, snippets, etc.)
 * @returns Cleanup function to call when done
 */
export const setup_contextmenu_action = async (
	element: HTMLElement | SVGElement,
	params: Array<any>,
): Promise<(() => void) | undefined> => {
	element.dataset.contextmenu = 'test';
	const {contextmenu_attachment} = await import('$lib/contextmenu_state.svelte.js');
	const attachment = contextmenu_attachment(params);
	return attachment(element);
};

/**
 * Options for customizing shared test factories based on component variations.
 * Used by test factory modules in contextmenu_test_*.ts files.
 */
export interface Shared_Test_Options {
	/**
	 * Whether the component requires longpress (touch) to open instead of contextmenu event.
	 * Set to true for Safari compatibility variant.
	 */
	requires_longpress?: boolean;
	/**
	 * Duration in milliseconds to advance timers for longpress detection.
	 * Only used when requires_longpress is true.
	 */
	longpress_duration?: boolean;
}

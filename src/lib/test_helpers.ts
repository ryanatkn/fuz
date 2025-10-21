/**
 * Shared test utilities for vitest tests.
 * Provides helpers for component mounting and DOM event creation.
 */

import {mount, unmount, type Component, flushSync} from 'svelte';

/**
 * Mount a Svelte component for testing.
 * Creates a container div, appends it to document.body, and mounts the component.
 *
 * @example
 * const {instance, container} = mount_component(MyComponent, {foo: 'bar'});
 * // ... test code
 * unmount_component(instance, container);
 */
export const mount_component = <Props extends Record<string, any>>(
	Component: Component<Props>,
	props: Props,
): {instance: any; container: HTMLElement} => {
	const container = document.createElement('div');
	document.body.appendChild(container);

	const instance = mount(Component, {
		target: container,
		props,
	});

	return {instance, container};
};

/**
 * Unmount a component and remove its container from the DOM.
 *
 * @example
 * const mounted = mount_component(MyComponent, {});
 * unmount_component(mounted.instance, mounted.container);
 */
export const unmount_component = async (instance: any, container: HTMLElement): Promise<void> => {
	await unmount(instance);
	container.remove();
};

/**
 * Create a contextmenu (right-click) mouse event.
 *
 * @example
 * const event = create_contextmenu_event(100, 200);
 * element.dispatchEvent(event);
 */
export const create_contextmenu_event = (
	x: number,
	y: number,
	options: MouseEventInit = {},
): MouseEvent => {
	return new MouseEvent('contextmenu', {
		bubbles: true,
		cancelable: true,
		clientX: x,
		clientY: y,
		...options,
	});
};

/**
 * Create a keyboard event.
 *
 * @example
 * const event = create_keyboard_event('Escape');
 * window.dispatchEvent(event);
 */
export const create_keyboard_event = (
	key: string,
	options: KeyboardEventInit = {},
): KeyboardEvent => {
	return new KeyboardEvent('keydown', {
		bubbles: true,
		cancelable: true,
		key,
		...options,
	});
};

/**
 * Create a generic mouse event.
 *
 * @example
 * const event = create_mouse_event('mousedown', {clientX: 100});
 * element.dispatchEvent(event);
 */
export const create_mouse_event = (type: string, options: MouseEventInit = {}): MouseEvent => {
	return new MouseEvent(type, {
		bubbles: true,
		cancelable: true,
		...options,
	});
};

/**
 * Set the target property on an event (for testing).
 * The target property is readonly, so we need to use Object.defineProperty.
 *
 * @example
 * const event = create_contextmenu_event(100, 200);
 * set_event_target(event, myElement);
 * window.dispatchEvent(event);
 */
export const set_event_target = (event: Event, target: EventTarget): void => {
	Object.defineProperty(event, 'target', {
		value: target,
		enumerable: true,
		configurable: true,
	});
};

/**
 * Flush all pending Svelte updates synchronously.
 * Useful in tests when you need the DOM to update immediately after a state change.
 *
 * @example
 * contextmenu.open([], 100, 200);
 * flush_updates(); // DOM is now updated
 * const menu = container.querySelector('.contextmenu');
 */
export const flush_updates = (): void => {
	flushSync();
};

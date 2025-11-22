import type {Component} from 'svelte';

import {create_context} from './context_helpers.js';

/**
 * Component registry for custom Svelte components that can be used in mdz content.
 *
 * For example, registering 'Alert' allows using `<Alert>...</Alert>` in mdz content.
 *
 * The Map values are the Svelte component constructors.
 */
export type Mdz_Components = Map<string, Component<any, any>>; // TODO support params

/**
 * Element registry for HTML elements that can be used in mdz content.
 *
 * For example, registering 'div' allows using `<div>...</div>` in mdz content.
 *
 * The Map values are boolean placeholders for future configuration options.
 */
export type Mdz_Elements = Map<string, boolean>;

/**
 * Context for providing custom mdz components.
 * Must be set by the application using mdz.
 */
export const mdz_components_context = create_context<Mdz_Components>();

/**
 * Context for providing allowed HTML elements.
 * Must be set by the application using mdz.
 * By default, no HTML elements are allowed.
 */
export const mdz_elements_context = create_context<Mdz_Elements>();

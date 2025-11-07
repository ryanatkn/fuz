import type {Component} from 'svelte';
import {create_context} from '$lib/context_helpers.js';

/**
 * Component registry for custom Svelte components that can be used in mdz content.
 *
 * For example, registering 'Alert' allows using `<Alert>...</Alert>` in TSDoc comments.
 *
 * Component names must start with an uppercase letter to distinguish them from HTML elements.
 */
export type Mdz_Components = Record<string, Component<any>>;

/**
 * Context for providing custom mdz components.
 * Must be set by the application using mdz.
 */
export const mdz_components_context = create_context<Mdz_Components>();

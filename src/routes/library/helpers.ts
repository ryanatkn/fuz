import {getContext, setContext} from 'svelte';
import {writable, type Writable} from 'svelte/store';

import type {Theme_Variable} from '$lib/theme.js';

const SELECTED_VARIABLE_KEY = Symbol('selected_variable');

export const set_selected_variable = (
	value: Writable<Theme_Variable | null> = writable(null),
): Writable<Theme_Variable | null> => setContext(SELECTED_VARIABLE_KEY, value);

export const get_selected_variable = (): Writable<Theme_Variable | null> =>
	getContext(SELECTED_VARIABLE_KEY);

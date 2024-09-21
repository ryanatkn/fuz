import type {Style_Variable} from '@ryanatkn/moss/variable.js';
import {Svelte_Context} from '$lib/context_helpers.ts';

// TODO maybe change this to a generic wrapper class for any value?
// TODO @many add to $lib?
export class Selected_Style_Variable {
	value: Style_Variable | null = $state()!;

	constructor(initial: Style_Variable | null = null) {
		this.value = initial;
	}
}

export const selected_variable_context = new Svelte_Context({
	label: 'selected_variable',
	fallback: () => new Selected_Style_Variable(null),
});

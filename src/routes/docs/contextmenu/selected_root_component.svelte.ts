import {create_context} from '$lib/context_helpers.js';
import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';

export type Contextmenu_Root_Variant = 'standard' | 'compat';

export class Selected_Contextmenu_Root_Component {
	variant: Contextmenu_Root_Variant = $state('standard');

	component = $derived(
		this.variant === 'standard' ? Contextmenu_Root : Contextmenu_Root_For_Safari_Compatibility,
	);

	name = $derived(
		this.component === Contextmenu_Root
			? 'Contextmenu_Root'
			: 'Contextmenu_Root_For_Safari_Compatibility',
	);

	constructor(initial_variant: Contextmenu_Root_Variant = 'standard') {
		this.variant = initial_variant;
	}
}

export const selected_contextmenu_root_component_context = create_context(
	() => new Selected_Contextmenu_Root_Component('standard'),
);

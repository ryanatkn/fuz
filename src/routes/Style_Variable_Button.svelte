<script lang="ts">
	import {default_variables} from '$lib/variables';
	import {get_selected_variable} from '$routes/style_variable_helpers.js';

	// TODO @multiple add to $lib?

	// TODO add contextmenu behavior

	export let name: string; // TODO type? generate from `tomes`? or keep extensible?

	export let classes: string | undefined = undefined;

	export let inline = false;

	export let plain = true;

	$: variable = default_variables.find((v) => v.name === name);
	$: if (!variable) throw new Error(`cannot find variable named "${name}"`);

	const selected_variable = get_selected_variable();
</script>

<button
	{...$$restProps}
	class={classes}
	class:inline
	class:plain
	type="button"
	on:click={() => ($selected_variable = variable ?? null)}><slot>{name}</slot></button
>

<style>
	button {
		min-height: var(--input_height_sm);
	}
</style>

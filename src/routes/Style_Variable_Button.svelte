<script lang="ts">
	import type {HTMLButtonAttributes} from 'svelte/elements';

	import {default_variables} from '$lib/variables';
	import {get_selected_variable} from '$routes/style_variable_helpers.js';

	interface Props {
		name: string; // TODO type? generate from `tomes`? or keep extensible?
		classes?: string;
		inline?: boolean;
		plain?: boolean;
		attrs?: HTMLButtonAttributes;
	}

	const {name, classes, inline = false, plain = true, attrs}: Props = $props();

	// TODO @multiple add to $lib?

	// TODO add contextmenu behavior

	const variable = $derived.by(() => {
		const v = default_variables.find((v) => v.name === name);
		if (!v) throw new Error(`cannot find variable named "${name}"`);
		return v;
	});

	const selected_variable = get_selected_variable();
</script>

<button
	type="button"
	{...attrs}
	class={classes}
	class:inline
	class:plain
	on:click={() => ($selected_variable = variable ?? null)}
	><slot><span class="font_family_mono">{name}</span></slot></button
>

<style>
	button {
		min-height: var(--input_height_sm);
	}
</style>

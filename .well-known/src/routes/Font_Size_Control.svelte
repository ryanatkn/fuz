<script lang="ts">
	import {font_sizes} from '$lib/variable_data.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	// TODO @multiple publish in $lib when ready

	// TODO the API is strange

	export let selected_font_size = 2; // TODO improve API, is index for `'md'`

	const min = 1;
	const max = font_sizes.length;

	$: selected_name = font_sizes[selected_font_size - 1];
</script>

<label
	><div class="title row width_full wrap">
		<slot>font-size</slot> =
		<input
			class="inline"
			type="number"
			style:width="var(--space_xl7)"
			style:min-width="var(--space_xl7)"
			bind:value={selected_font_size}
			{min}
			step={1}
			{max}
		/>
		= var(<Style_Variable_Button name="size_{selected_name}"
			>--size_{selected_name}</Style_Variable_Button
		>)
	</div>
	<input type="range" bind:value={selected_font_size} {min} step={1} {max} />
</label>

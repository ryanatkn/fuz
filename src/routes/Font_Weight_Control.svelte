<script lang="ts">
	// TODO @multiple publish in $lib when ready

	export let selected_font_weight = 400;
</script>

<label
	><div class="title row w_100 wrap">
		<slot>font-weight</slot> =
		<input
			class="inline flex_1"
			type="number"
			bind:value={selected_font_weight}
			min={100}
			step={100}
			max={900}
		/>
	</div>
	<input type="range" bind:value={selected_font_weight} min={100} step={100} max={900} />
</label>

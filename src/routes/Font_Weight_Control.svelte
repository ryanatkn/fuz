<script lang="ts">
	export let selected_font_weight = 500;
</script>

<label
	><div class="title row width_full wrap">
		selected_font_weight = <input
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

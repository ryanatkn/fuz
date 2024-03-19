<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		selected_font_weight?: number;
		children?: Snippet;
	}

	// const {children}: Props = $props();
	// let {selected_font_weight = 400}: Props = $props.bindable();
	let {selected_font_weight = 400, children}: Props = $props();

	// TODO @multiple publish in $lib when ready
</script>

<label
	><div class="title row w_100 wrap">
		{#if children}
			{@render children()}
		{:else}
			font-weight
		{/if} =
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

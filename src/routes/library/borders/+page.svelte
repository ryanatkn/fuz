<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	const LIBRARY_ITEM_NAME = 'borders';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<!-- TODO  -->
	<!-- <div>border_disabled</div> -->
	<!-- <div>border_color</div> -->
	<!-- <div>border_style</div> -->
	<!-- <div>border_width</div> -->
	<!-- <div>outline_width</div> -->
	<!-- <div>outline_style</div> -->
	<!-- <div>outline_color</div> -->

	<div class="prose">
		<h3>Border colors</h3>
		<div class="border_colors">
			{#each {length: 5} as _, i}
				{@const name = 'border_color_' + (i + 1)}
				<div class="border" style:border-color="var(--{name})">
					<Style_Variable_Button {name} />
				</div>
			{/each}
		</div>

		<h3>Border widths</h3>
		<div class="border_widths">
			{#each {length: 6} as _, i}
				{@const name = 'border_width_' + (i + 1)}
				<div class="border_width" style:border-width="var(--{name})">
					<Style_Variable_Button {name} />
				</div>
			{/each}
		</div>

		<div>outline_width_1</div>
		<div>outline_width_2</div>
		<div>outline_width_3</div>

		<div>radius_md</div>
		<div>radius_sm</div>
		<div>radius_xs</div>
		<div>radius_xs2</div>
	</div>
</Tome_Detail>

<style>
	.border_colors {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border {
		border-width: 1px;
		border-style: solid;
		padding: var(--space_md);
		margin-bottom: var(--space_md);
		width: 200px;
		display: flex;
		justify-content: center;
	}
	.border_widths {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border_width {
		border-color: var(--fg_6);
		border-style: solid;
		padding: var(--space_md);
		margin-bottom: var(--space_md);
		width: 200px;
		display: flex;
		justify-content: center;
	}
</style>

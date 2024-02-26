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
		<section>
			<h3>Border colors</h3>
			<div class="border_colors">
				{#each {length: 5} as _, i}
					{@const name = 'border_color_' + (i + 1)}
					<div class="border_color_wrapper">
						<div class="border_color" style:border-color="var(--{name})">
							<Style_Variable_Button {name} />
						</div>
						{#each {length: 5} as _, i}
							<div
								class="border_color_width"
								style:border-color="var(--{name})"
								style:border-width="var(--{'border_width_' + (i + 2)})"
							></div>
						{/each}
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h3>Border widths</h3>
			<div class="border_widths">
				{#each {length: 6} as _, i}
					{@const name = 'border_width_' + (i + 1)}
					<div class="border_width" style:border-width="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h3>Outline widths</h3>
			<div class="outline_widths">
				{#each {length: 3} as _, i}
					{@const name = 'outline_width_' + (i + 1)}
					<div class="outline_width" style:outline-width="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h3>Border radii</h3>
			<div class="border_radii">
				{#each ['xs2', 'xs', 'sm', 'md'] as radius}
					{@const name = 'radius_' + radius}
					<div class="border_radius" style:border-radius="var(--{name})">
						<Style_Variable_Button {name} />
					</div>
				{/each}
			</div>
		</section>
	</div>
</Tome_Detail>

<style>
	.border_colors {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border_color_wrapper {
		display: flex;
	}
	.border_color {
		width: 200px;
		display: flex;
		justify-content: center;
		margin-bottom: var(--space_md);
		border-width: 1px;
		border-style: solid;
		padding: var(--space_md);
	}
	.border_color_width {
		border-style: solid;
		padding: 2px;
		margin-left: var(--space_xs2);
		margin-bottom: var(--space_md);
	}

	.border_widths {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border_width {
		width: 200px;
		display: flex;
		justify-content: center;
		margin-bottom: var(--space_md);
		border-color: var(--border_color_5);
		border-style: solid;
		padding: var(--space_md);
	}

	.outline_widths {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.outline_width {
		width: 200px;
		display: flex;
		justify-content: center;
		margin-bottom: var(--space_md);
		outline-color: var(--outline_color);
		outline-style: solid;
		padding: var(--space_md);
	}

	.border_radii {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.border_radius {
		display: flex;
		justify-content: center;
		width: 200px;
		margin-bottom: var(--space_md);
		padding: var(--space_md);
		background-color: var(--fg_2);
	}
</style>

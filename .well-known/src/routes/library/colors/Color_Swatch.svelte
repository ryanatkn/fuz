<script lang="ts">
	import {hsl_to_hex_string, hsl_to_rgb, parse_hsl_string} from '@ryanatkn/belt/colors.js';

	import {get_selected_variable} from '$routes/library/helpers.js';
	import {default_variables} from '$lib/variables.js';

	export let color_name: string;
	export let computed_styles: CSSStyleDeclaration;

	const get_color_hsl_string = (name: string) => {
		const v = computed_styles.getPropertyValue('--' + name);
		return v;
	};

	const selected_variable = get_selected_variable();
	const select_variable = (variable_name: string) => {
		$selected_variable = default_variables.find((v) => v.name === variable_name)!;
	};
</script>

<ul>
	{#each {length: 9} as _, i}
		{@const num = i + 1}
		{@const variable_name = `color_${color_name}_${num}`}
		{@const hsl_string = get_color_hsl_string(variable_name)}
		{@const hsl = parse_hsl_string(hsl_string)}
		<li style:--bg_color="var(--{variable_name})">
			<div class="color"></div>
			<div class="text">
				<button class="plain" on:click={() => select_variable(variable_name)}
					>{variable_name}</button
				>
				<div class="hex">{hsl_to_hex_string(...hsl)}</div>
				<div class="hsl">{hsl_string}</div>
				<div class="rgb">rgb({hsl_to_rgb(...hsl).join(', ')})</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	ul {
		width: 100%;
		margin-bottom: 32px;
	}
	li {
		display: flex;
		align-items: stretch;
		font-family: var(--font_family_mono);
		min-height: 32px;
	}
	li:hover {
		background-color: var(--bg);
	}
	.text {
		display: flex;
		align-items: center;
		flex: 1;
		padding-left: var(--spacing_sm);
	}
	button {
		/* TODO var? see the 32px elsewhere here and the Hue_Swatch as well */
		--min_height: 32px;
	}
	.hex {
		width: 80px;
		font-size: var(--size_sm);
		padding-left: var(--spacing_sm);
	}
	.hsl {
		width: 150px;
		font-size: var(--size_sm);
	}
	.rgb {
		font-size: var(--size_sm);
	}
	.color {
		width: 100px;
		min-width: 50px;
		background-color: var(--bg_color);
		color: hsl(210, 55%, 62%);
	}
	@media (max-width: 630px) {
		.text {
			flex-direction: column;
			align-items: flex-start;
			padding: var(--spacing_sm);
		}
	}
</style>

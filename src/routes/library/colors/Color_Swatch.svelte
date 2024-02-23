<script lang="ts">
	import {hsl_to_hex_string, hsl_to_rgb, parse_hsl_string} from '@ryanatkn/belt/colors.js';

	export let color_name: string;
	export let computed_styles: CSSStyleDeclaration;

	const get_color_hsl_string = (name: string) => {
		const v = computed_styles.getPropertyValue('--' + name);
		return v;
	};

	// TODO BLOCK responsive
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
				<div class="name">{variable_name}</div>
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
	}
	li {
		display: flex;
		align-items: center;
		font-family: var(--font_family_mono);
	}
	.text {
		display: flex;
		flex: 1;
		padding-left: var(--spacing_sm);
	}
	.name {
		width: 100px;
	}
	.hex {
		width: 75px;
		font-size: var(--size_sm);
	}
	.hsl {
		width: 150px;
		font-size: var(--size_sm);
	}
	.rgb {
		font-size: var(--size_sm);
	}
	.color {
		height: 32px;
		width: 100px;
		background-color: var(--bg_color);
		color: hsl(210, 55%, 62%);
	}
</style>

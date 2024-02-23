<script lang="ts">
	import {hsl_to_rgb, parse_hsl_string} from '@ryanatkn/belt/colors.js';

	export let color_name: string;
	export let computed_styles: CSSStyleDeclaration;

	const get_color_value = (name: string) => {
		const v = computed_styles.getPropertyValue('--' + name);
		return v;
	};
</script>

<ul>
	{#each {length: 9} as _, i}
		{@const num = i + 1}
		{@const variable_name = `color_${color_name}_${num}`}
		{@const value = get_color_value(variable_name)}
		{@const hsl = parse_hsl_string(value)}
		<li style:--bg_color="var(--{variable_name})">
			<div class="color"></div>
			<code>{variable_name}</code>
			<span>{value}</span>
			<span>rgb({hsl_to_rgb(...hsl).join(', ')})</span>
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
	}
	.color {
		height: 32px;
		width: 100px;
		background-color: var(--bg_color);
		color: hsl(210, 55%, 62%);
	}
</style>

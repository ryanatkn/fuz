<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		fill?: string;
		/**
		 * Sets both the `width` and `height` of the svg. Overridden by the `width` and `height` props.
		 */
		size?: string;
		/**
		 * Sets the `width` of the svg. Overrides `size`.
		 */
		width?: string;
		/**
		 * Sets the `height` of the svg. Overrides `size`.
		 */
		height?: string;
		label?: string;
		inline?: boolean;
		classes?: string;
		path_attrs?: SvelteHTMLElements['path'];
		attrs?: SvelteHTMLElements['svg'];
	}

	const {
		fill = 'var(--color_g_5)',
		size,
		width,
		height,
		label = "three sleepy z's",
		inline,
		classes,
		path_attrs,
		attrs,
	}: Props = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 100 100"
	{...attrs}
	aria-label={label}
	style:width={final_width}
	style:height={final_height}
	class={classes}
	class:inline
>
	<g>
		<path
			{...path_attrs}
			d="m 75.29285,61.962268 1.752156,1.914421 14.843359,1.811307 L 74.065203,86.193332 99.966781,85.408255 98.719988,83.648246 85.143565,82.136577 98.430963,62.887945"
			style:fill
		/>
	</g>
	<g>
		<path
			{...path_attrs}
			d="m 47.636533,44.203704 2.295155,2.48945 25.618425,0.406407 L 45.93783,91.082857 89.425317,93.78003 87.862334,91.36274 61.57861,83.03068 86.244719,42.177019"
			style:fill
		/>
		<path
			{...path_attrs}
			d="M 0.62464489,0.27405496 3.9721704,4.0993769 50.515703,10.089712 0.04581262,99.957542 68.009395,98.901532 65.391343,95.487941 24.119119,88.067804 66.301842,2.2896897"
			style:fill
		/>
	</g>
</svg>

<style>
	.inline {
		display: inline-block;
		vertical-align: middle;
	}
</style>

<script lang="ts">
	interface Props {
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
		fill?: string;
		label?: string;
		classes?: string;
		attrs?: any;
	}

	const {
		size = 'var(--size, var(--size_md))',
		width,
		height,
		fill = '#8cb4ff',
		label = 'GitHub icon',
		classes,
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
>
	<path
		d="M42 .2 13.4 92.3H1.7L30.2.2Zm10.4 0v92.1H42V.2Zm40.3 0L64.2 92.3H52.5L81 .2Zm10.4 0v92.1H92.7V.2Z"
		{fill}
	/>
</svg>

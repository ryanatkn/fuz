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
		classes?: string;
		path_attrs?: SvelteHTMLElements['path'];
		attrs?: SvelteHTMLElements['svg'];
	}

	const {
		fill = '#f75e22', // TODO change to Moss orange color when it's added
		size,
		width,
		height,
		label = 'a friendly pixelated spider facing you',
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
>
	<g>
		<path
			{...path_attrs}
			d="m 25,81.200002 h 6.2 v -12.5 h 6.3 v -18.7 h -6.3 v 6.2 H 12.5 v 6.3 H 0 v -6.3 h 6.2 v -6.2 H 25 v -6.3 h 12.5 v -6.2 h -6.3 v -6.3 H 18.7 v -6.2 H 6.2 v -6.3 H 25 v 6.3 h 12.5 v -6.3 H 31.2 V 6.2 h 6.3 v 6.300002 h 6.2 V 31.200001 H 56.2 V 12.500002 h 6.3 V 6.2 h 6.2 v 12.500001 h -6.2 v 18.800001 h 6.2 v -12.5 h 12.5 v -12.5 h 12.5 v 6.2 h -6.2 v 12.5 H 75 v 12.5 h 6.2 v 6.3 h 12.5 v 6.2 h 6.299997 v 6.3 H 87.5 v -6.3 H 75 v -6.2 h -6.3 v 12.5 H 75 v 12.5 h 6.2 V 99.99999 H 75 V 81.200002 h -6.3 v -12.5 h -6.2 v -12.5 H 43.7 v 18.8 h -6.2 v 12.5 H 31.2 V 99.99999 H 25 Z"
			style:fill
		/>
	</g>
</svg>

<script lang="ts">
	import Spider from '$lib/Spider.svelte';

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
		label?: string;
		classes?: string;
	}

	const {size, width, height, label = 'a fuzzy tuft of green moss', classes}: Props = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);

	// TODO publish a plain SVG probably

	// color:
	// #298e29
	// hsl(120, 55%, 36%)
	// rgb(41, 142, 41)

	// TODO BLOCK make the color `fill` and remove the span? could use `:global(.spider)` for the transform until a real svg is created
</script>

<span
	style:--text_color="var(--color_b_5)"
	class="inline_block"
	style:width={final_width}
	style:height={final_height}><Spider {label} {classes} /></span
>

<style>
	span {
		transform: scaleX(-1) rotate(180deg);
	}
</style>

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

	const {
		size,
		width,
		height,
		label = 'a friendly brown spider facing you',
		classes,
	}: Props = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);

	// color:
	// #6a3e1b
	// hsl(27, 60%, 26%)
	// rgb(106, 62, 27)

	// TODO BLOCK make the color `fill` and remove the span?
</script>

<span
	style:--text_color="var(--color_f_5)"
	class="inline_block"
	style:width={final_width}
	style:height={final_height}><Spider {label} {classes} /></span
>

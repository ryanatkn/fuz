<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	interface Props {
		/**
		 * Sets both `width` and `height`.
		 */
		size?: string;
		/**
		 * Overrides `size`.
		 */
		width?: string;
		/**
		 * Overrides `size`.
		 */
		height?: string;
		label?: string;
	}

	const {size, width, height, label = 'a little brown spider'}: Props = $props();

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
	style:height={final_height}><Spider {label} /></span
>

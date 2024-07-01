<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
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

	const {size, width, height, label = 'a little yellow spider'}: Props = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);

	// color:
	// #b19a25
	// hsl(50, 65%, 42%)
	// rgb(177, 154, 37)

	// TODO BLOCK make the color `fill` and remove the span?
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span
	style:--text_color="var(--color_e_5)"
	class="inline_block"
	style:width={final_width}
	style:height={final_height}><Spider {label} /></span
>

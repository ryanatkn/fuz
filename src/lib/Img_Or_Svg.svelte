<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	const {
		src,
		label,
		size,
		width,
		height,
		svg_attrs,
		img_attrs,
		attrs,
	}: {
		src: string;
		label?: string;
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
		svg_attrs?: SvelteHTMLElements['svg'];
		img_attrs?: SvelteHTMLElements['img'];
		/** Shared attributes for both img and svg. */
		attrs?: Pick<SvelteHTMLElements['div'], 'class' | 'style'>; // TODO more shared attributes? can't use `div` directly for svg, users can always assert the type as a hacky workaround
	} = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);
</script>

{#if src.endsWith('.svg')}
	<svg
		role="img"
		{...attrs}
		{...svg_attrs}
		aria-label={label}
		style:width={final_width}
		style:height={final_height}
	>
		<image href={src} class="width_100 height_100" />
	</svg>
{:else}
	<img
		{...attrs}
		{...img_attrs}
		{src}
		alt={label}
		style:width={final_width}
		style:height={final_height}
	/>
{/if}

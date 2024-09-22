<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import type {Svg_Data} from '$lib/svg.js';

	interface Props {
		data: Svg_Data;
		/**
		 * Overrides `data.fill`.
		 */
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
		attrs?: SvelteHTMLElements['svg'];
	}

	const {data, fill, size, width, height, label, inline, classes, attrs}: Props = $props();

	const final_fill = $derived(fill ?? data.fill ?? 'var(--text_color, #000)'); // can be overridden by each path's `fill` attribute
	const final_width = $derived(width ?? size); // TODO @many default value? `100%` or omitted or something else?
	const final_height = $derived(height ?? size); // TODO @many default value? `100%` or omitted or something else?
</script>

<svg
	viewBox={data.viewBox ?? '0 0 100 100'}
	{...attrs}
	aria-label={label ?? data.label}
	style:width={final_width}
	style:height={final_height}
	class={classes}
	class:inline
>
	{#if data.raw}{@html data.raw}{/if}<!-- eslint-disable-line svelte/no-at-html-tags -->
	{#if data.paths}
		{#each data.paths as path (path)}
			<path fill={final_fill} {...path} />
		{/each}
	{/if}
</svg>

<style>
	.inline {
		display: inline-block;
		vertical-align: middle;
	}
</style>

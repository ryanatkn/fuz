<script lang="ts" module>
	import {ensure_end} from '@ryanatkn/belt/string.js';
	import type {SvelteHTMLElements} from 'svelte/elements';

	export interface Svg_Data {
		/**
		 * Raw svg markup string that's inserted unsafely as a child of the `svg` element.
		 * This is an escape hatch for non-`path` markup -
		 * generally, you should instead use the `paths` property to avoid security/CSP implications.
		 */
		raw?: string;
		/**
		 * List of svg `path` attribute objects. The `d` attribute is required.
		 */
		paths?: Array<{d: string} & SvelteHTMLElements['path']>;
		attrs?: SvelteHTMLElements['svg'];
		fill?: string;
		width?: string;
		height?: string;
		label?: string;
		/**
		 * Defaults to `"0 0 100 100"`.
		 */
		viewBox?: string;
	}
</script>

<script lang="ts">
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
		/**
		 * Flex shrink behavior? Defaults to `true`.
		 */
		shrink?: boolean;
		attrs?: SvelteHTMLElements['svg'];
	}

	const {data, fill, size, width, height, label, inline, shrink = true, attrs}: Props = $props();

	const final_fill = $derived(fill ?? data.fill ?? 'var(--text_color, #000)'); // can be overridden by each path's `fill` attribute
	const final_width = $derived(width ?? size); // TODO @many default value? `100%` or omitted or something else?
	const final_height = $derived(height ?? size); // TODO @many default value? `100%` or omitted or something else?

	// merge `style` so users don't accidentally clobber any style data - maybe support other attrs or somehow clean this up?
	const style = $derived(
		data.attrs?.style && attrs?.style
			? ensure_end(data.attrs.style, ';') + ' ' + attrs.style
			: (data.attrs?.style ?? attrs?.style),
	);
</script>

<svg
	viewBox={data.viewBox ?? '0 0 100 100'}
	{...data.attrs}
	{...attrs}
	aria-label={label ?? data.label}
	{style}
	style:width={final_width}
	style:height={final_height}
	class:inline
	style:flex-shrink={shrink ? 1 : 0}
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

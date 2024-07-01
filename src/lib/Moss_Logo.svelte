<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
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
		fill = 'var(--color_b_5)',
		size,
		width,
		height,
		label = 'a fuzzy tuft of green moss',
		classes,
		path_attrs,
		attrs,
	}: Props = $props();

	// TODO publish a plain SVG probably

	// color:
	// #298e29
	// hsl(120, 55%, 36%)
	// rgb(41, 142, 41)

	// TODO BLOCK make the color `fill` and remove the span? could use `:global(.spider)` for the transform until a real svg is created

	const transform = 'transform: scaleX(-1) rotate(180deg)';
	const style = $derived(attrs?.style ? transform + '; ' + attrs.style : transform);
</script>

<Spider {fill} {size} {width} {height} {label} {classes} {path_attrs} attrs={{...attrs, style}} />

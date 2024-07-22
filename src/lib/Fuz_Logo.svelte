<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import Spider from '$lib/Spider.svelte';
	import {
		to_fuz_project_color,
		to_fuz_project_color_name,
		type Fuz_Project_Name,
	} from '$lib/fuz.js';

	// TODO think about this API
	interface Props {
		project?: Fuz_Project_Name;
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
		path_attrs?: SvelteHTMLElements['path'];
		attrs?: SvelteHTMLElements['svg'];
	}

	const {project, fill, size, width, height, label, inline, classes, path_attrs, attrs}: Props =
		$props();

	const final_fill = $derived(
		project ? to_fuz_project_color(project) : (fill ?? 'var(--color_f_5)'),
	);
	const final_label = $derived(
		label ??
			(project
				? `a friendly ${to_fuz_project_color_name(project)} spider facing you`
				: fill
					? 'a friendly spider facing you'
					: 'a friendly brown spider facing you'),
	);
</script>

<Spider
	fill={final_fill}
	{size}
	{width}
	{height}
	label={final_label}
	{inline}
	{classes}
	{path_attrs}
	{attrs}
/>

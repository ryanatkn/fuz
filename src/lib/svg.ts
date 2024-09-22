import type {SvelteHTMLElements} from 'svelte/elements';

// TODO BLOCK maybe rename module to `svg_helpers.ts`?

export interface Svg_Data {
	/**
	 * List of svg `path` attribute objects. The `d` attribute is required.
	 */
	paths: Array<{d: string} & SvelteHTMLElements['path']>;
	fill?: string;
	width?: string;
	height?: string;
	label?: string;
	/**
	 * Defaults to `"0 0 100 100"`.
	 */
	viewBox?: string;
}

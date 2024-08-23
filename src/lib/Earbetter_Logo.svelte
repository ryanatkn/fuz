<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

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
		inline?: boolean;
		classes?: string;
		path_attrs?: SvelteHTMLElements['path'];
		attrs?: SvelteHTMLElements['svg'];
	}

	const {
		fill = '#6a40bf',
		size,
		width,
		height,
		label = 'two beamed musical notes with ears',
		inline,
		classes,
		path_attrs,
		attrs,
	}: Props = $props();

	const final_width = $derived(width ?? size);
	const final_height = $derived(height ?? size);
</script>

<svg
	viewBox="0 0 100 100"
	{...attrs}
	aria-label={label}
	style:width={final_width}
	style:height={final_height}
	class={classes}
	class:inline
>
	<path
		{...path_attrs}
		style:fill
		d="M 17.649763,27.091907 92.652647,0.07053376 93.464619,72.197282 c 0.0732,6.502554 -1.033904,26.195178 -10.644213,24.298316 -7.390587,-3.01113 -12.412301,-8.362897 -15.415159,-15.610599 -1.399917,-3.394335 -2.714253,-7.01918 -2.443203,-10.740686 0.340155,-4.670337 3.306295,-10.054413 6.970064,-12.97067 5.830865,-4.641207 15.450507,3.781166 15.450507,3.781166 L 84.813136,20.044447 23.342705,37.878638 25.739331,81.968409 c 0.356336,6.555367 -1.690324,19.516051 -6.937964,17.89111 C 15.430616,98.815763 12.34752,96.863406 7.2108686,88.806175 5.5129407,86.142843 5.0055612,82.674429 5.1528405,79.556791 c 0.183839,-3.891543 2.8440779,-7.761614 6.0200145,-10.018009 3.189269,-2.265866 8.500011,1.905961 8.500011,1.905961 M 23.170251,33.362099 84.485514,14.48689 84.220567,8.2399358 23.002286,29.453122 Z m -3.704216,51.925549 c -9.350797,3.940785 2.203294,11.549107 1.505207,1.654032 0,0 -3.179118,-12.863785 -4.309086,-12.95784 C 15.368925,73.876196 3.7768457,77.971869 10.993109,88.256598 9.1050279,85.879896 6.796927,78.783531 16.871693,76.305669 m 68.182471,2.591495 c -11.923517,6.195109 3.283676,14.41667 1.96013,2.093665 0,0 -3.665948,-16.618177 -5.020704,-16.996094 -1.798588,-0.501728 -18.078576,4.37863 -8.198369,18.612282 C 71.38344,79.544295 68.77145,69.693545 82.044022,67.159294"
	/>
</svg>

<style>
	.inline {
		display: inline-block;
		vertical-align: middle;
		color: color-mix(in srgb, #6a40bf 50%, #a68cd9 50%);
	}
</style>

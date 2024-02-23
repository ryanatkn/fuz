<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Color_Swatch from '$routes/library/colors/Color_Swatch.svelte';

	const LIBRARY_ITEM_NAME = 'colors';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	// TODO BLOCK CSS grid
	// TODO maybe display the color hex and/or hsl values?
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<h3>Semantics</h3>
		<p>
			Fuz provides a palette of colors designed to support theming by both developers and end-users
			at runtime. Instead of "blue" and "red" they're named with letters like "a" and "b", so you
			can change "a" from blue to any color without getting weird.
		</p>
		<ul>
			<li><code>color_a</code> - primary</li>
			<li><code>color_b</code> - success/help</li>
			<li><code>color_c</code> - error/danger</li>
			<li><code>color_d</code> - secondary/accent</li>
			<li><code>color_e</code> - tertiary</li>
			<li><code>color_f</code> - quaternary</li>
			<li><code>color_g</code> - quinary</li>
		</ul>

		<h3>Caveats</h3>
		<p>
			For efficiency reasons, there are no color value variables like "blue", though this could
			change if Fuz decides to include a Vite plugin or other build tooling for optimization. Then
			we could have "color_blue" that's used by "color_a" by default with more reasonable costs.
		</p>
		<p>
			The base colors can be customized with <a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
				>the <code>color-mix</code> CSS function</a
			>, so Fuz does not have an extensive set of variants. The variants may be expanded when Fuz
			optimizes its outputs.
		</p>
	</section>

	<div class="prose">
		<h3>Examples</h3>
	</div>
	<ul class="palette">
		{#each color_names as color_name}
			<Color_Swatch {color_name} />
		{/each}
	</ul>
	<br />
</Tome_Detail>

<style>
	.palette {
		width: 100%;
	}
</style>

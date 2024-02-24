<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Color_Swatch from '$routes/library/colors/Color_Swatch.svelte';
	import Library_Vocab from '$lib/Library_Vocab.svelte';

	const LIBRARY_ITEM_NAME = 'colors';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	const computed_styles = getComputedStyle(document.documentElement);
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<h3>Color semantics</h3>
		<p>
			Fuz provides a palette of colors designed to support theming by both developers at buildtime
			and end-users at runtime. The colors are semantic, not plain values, which means they
			automatically adapt to dark mode and customizations, at the expense of having different values
			depending on color scheme and theme. Each color has a <Library_Vocab name="variable" />.
		</p>
		<h4>Adapting colors to dark mode</h4>
		<p>
			A color's subjective appearance depends on the context in which it's viewed, especially the
			surrounding colors and values. Each color is therefore distinct for light and dark modes, so
			each color has two values. The exceptions are the lightest (1) and darkest (9) variants,
			although this may change if it yields better results.
		</p>
		<h4>Custom themes</h4>
		<p>
			Instead of "blue" and "red", colors are named with letters like "a" and "b", so you can change
			"a" from blue to any color in a theme without breaking the name-to-color correspondence
			everywhere. The semantics of the builtin colors as as follows, and they can be extended for
			your own purposes (e.g. you can decide what "tertiary" means for your app):
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
			For efficiency reasons, Fuz does not currently have an extensive set of variants, like
			specialized states for elements and color values like "blue". Each builtin hue (a through g)
			has 9 color values, handling most cases, and the base colors can be customized with <a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
				>the <code>color-mix</code> CSS function</a
			> when needed.
		</p>
		<p>
			Variants may be expanded when Fuz includes a Vite plugin or other build tooling for
			optimization. A downside of removing unused styles is that they won't be available to your
			users at runtime.
		</p>
	</section>

	<div class="prose">
		<h3>Swatches</h3>
	</div>
	<ul class="palette">
		{#each color_names as color_name}
			<Color_Swatch {color_name} {computed_styles} />
		{/each}
	</ul>
	<br />
</Tome_Detail>

<style>
	.palette {
		width: 100%;
	}
</style>

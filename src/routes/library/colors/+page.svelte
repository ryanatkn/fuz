<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Hue_Swatch from '$routes/library/colors/Hue_Swatch.svelte';
	import Color_Swatch from '$routes/library/colors/Color_Swatch.svelte';
	import Library_Vocab from '$lib/Library_Vocab.svelte';

	const LIBRARY_ITEM_NAME = 'colors';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	const computed_styles = getComputedStyle(document.documentElement);

	// TODO BLOCK make each of these clickable like on the variables page
	// TODO BLOCK hue picker?
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<h3>Color semantics</h3>
		<p>
			Fuz provides a palette of colors designed to support theming by both developers at buildtime
			and end-users at runtime. The colors are semantic, not plain values, which means they
			automatically adapt to dark mode and customizations, at the expense of having different values
			depending on color scheme and theme. Each color has a <Library_Vocab name="variables"
				>variable</Library_Vocab
			>.
		</p>
		<h4>Adapting colors to dark mode</h4>
		<p>
			A color's subjective appearance depends on the context in which it's viewed, especially the
			surrounding colors and values. Fuz's semantic colors should just work without modifying code,
			so each Fuz color has two values, one for light and one for dark mode. The exceptions are the
			lightest (1) and darkest (9) variants, although this may change if it yields better results.
		</p>
		<h4>Custom themes</h4>
		<p>
			Instead of "blue" and "red", colors are named with letters like "a" and "b", so you can change
			"a" from blue to any color in a theme without breaking the name-to-color correspondence
			everywhere. The semantics of the builtin colors as as follows, and they can be extended for
			your own purposes (e.g. you can decide what "tertiary" means for your app):
		</p>
		<ul>
			<li><code>a</code> - primary</li>
			<li><code>b</code> - success/help</li>
			<li><code>c</code> - error/danger</li>
			<li><code>d</code> - secondary/accent</li>
			<li><code>e</code> - tertiary</li>
			<li><code>f</code> - quaternary</li>
			<li><code>g</code> - quinary</li>
		</ul>
		<p>
			A downside of this approach is that changing color "a" modifies the many cases it's used, but
			sometimes you may want to change the color of a specific element or state. In those cases, use
			plain CSS and optionally Fuz variables to get the desired result. Compared to most libraries,
			Fuz provides fewer handles for granular color customizations, but the benefits include
			consistency, efficiency, and ease of app-wide theming.
		</p>

		<h3>Caveats</h3>
		<p>
			For performance reasons, Fuz does not currently have an extensive set of variants, like
			specialized states for elements and color values like "blue". Each builtin hue (a through g)
			has 9 color values, handling most cases, and the base colors can be customized with <a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
				>the <code>color-mix</code> CSS function</a
			> when needed.
		</p>
		<p>
			Variants may be expanded when Fuz includes a Vite plugin or other build tooling for
			optimization. A downside of removing unused styles is that they won't be available to your
			end-users at runtime.
		</p>
	</section>

	<div class="prose spaced">
		<h3>Hue variables</h3>
		<p>
			Each color variable combines a hue variable with hardcoded saturation and lightness values.
			Hue variables are useful when you want to construct your own colors that the color variables
			don't cover.
		</p>
	</div>
	<ul class="palette">
		{#each color_names as color_name}
			<Hue_Swatch {color_name} {computed_styles} />
		{/each}
	</ul>
	<br />

	<div class="prose spaced">
		<h3>Color variables</h3>
		<p>
			The 5th variable of each color is used as the base for things like <Library_Vocab
				name="buttons"
			/>.
		</p>
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

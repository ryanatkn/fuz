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

	// TODO button to add an inline hue input for runtime modification of the theme

	const descriptions = [
		'primary',
		'success/help',
		'error/danger',
		'secondary/accent',
		'tertiary',
		'quaternary',
		'quinary',
	];
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<h3>Color semantics</h3>
		<p>
			Fuz provides a palette of colors designed to support theming by both developers at buildtime
			and end-users at runtime. The colors are semantic, not plain values, which means they
			automatically adapt to dark mode and custom themes, at the cost of having different values
			depending on color scheme and theme.
		</p>
		<h4>Adapting colors to dark mode</h4>
		<p>
			A color's subjective appearance depends on the context in which it's viewed, especially the
			surrounding colors and values. Fuz's semantic colors are designed to work across color
			schemes, so each Fuz color <Library_Vocab name="variables">variable</Library_Vocab> has two values,
			one for light and one for dark mode. The exceptions are the lightest (1) and darkest (9) variants,
			although this may change if it yields better results.
		</p>
		<h4>Custom themes</h4>
		<p>
			Instead of "blue" and "red", colors are named with letters like "a" and "b", so you can change
			the primary "a" from blue to any color in a theme without breaking the name-to-color
			correspondence everywhere. This also flexibly handles more colors and cases than using names
			like "primary", and although it takes some learning, it's a simple pattern to remember.
			("primary" and its ilk require learning too!)
		</p>
		<p>
			A downside of this approach is that changing a color like the primary "a" affects the many
			places it's used. Sometimes you may want to change the color of a specific element or state,
			not all the things. In those cases, use plain CSS and optionally Fuz variables. Compared to
			most libraries, Fuz provides fewer handles for granular color customizations, but the benefits
			include consistency, efficiency, DRY authoring, and ease of app-wide theming.
		</p>

		<h3>Caveats</h3>
		<p>
			For performance reasons, Fuz does not currently have an extensive set of variants, like
			specialized states for elements or color values like "blue". Each of the 7 hues has 9 color
			values, handling most cases, and the base colors can be customized with <a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
				>the <code>color-mix</code> CSS function</a
			> to handle many more cases.
		</p>
		<p>
			Variants may be expanded when/if Fuz includes a Vite plugin or other build tooling for
			optimization. A downside of removing unused styles is that they won't be available to your
			end-users at runtime.
		</p>
	</section>

	<div class="prose spaced">
		<h3>Hue variables</h3>
		<p>
			Hue variables contain a single <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hue"
				>hue</a
			> number. Each color variable combines a hue variable with hardcoded saturation and lightness values
			for light and dark mode.
		</p>
		<p>
			Hue variables therefore provide a single source of truth that's easy to theme, but to achieve
			pleasing results, setting the hue alone is not always sufficient. Custom colors will often
			require you to set per-variable saturation and lightness values.
		</p>
		<p>
			Hue variables are also useful to construct custom colors not covered by the color variables.
			For example, Fuz's base stylesheet uses <code>hue_a</code> for the semi-transparent
			<code>::selection</code>. (try selecting some text - same hue!)
		</p>
		<p>Unlike the color variables, the hue variables are the same in both light and dark mode.</p>
	</div>
	<ul class="palette">
		{#each color_names as color_name, i}
			<Hue_Swatch {color_name} {computed_styles} description={descriptions[i]} />
		{/each}
	</ul>
	<br />

	<div class="prose spaced">
		<h3>Color variables</h3>
		<p>
			There are 9 variables per color, numbered 1 to 9, lightest to darkest. The 5th variable of
			each color is used as the base for things like <Library_Vocab name="buttons" />.
		</p>
		<p>
			Note that these values differ between light and dark mode! See the discussion above for why.
		</p>
		<p>These colors were eyeballed by a programmer, and will change :]</p>
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

<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

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
			<ul class="swatch">
				{#each {length: 9} as _, i}
					{@const num = i + 1}
					<li class="color">
						<div class="example" style:background-color="var(--color_{color_name}_{num})"></div>
						<code>color_{color_name}_{num}</code>
					</li>
				{/each}
			</ul>
		{/each}
	</ul>
	<br />
</Tome_Detail>

<style>
	.palette {
		width: 100%;
	}
	.swatch {
		flex-direction: row;
		width: 100%;
	}
	.color {
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100px;
	}
	.example {
		flex: 1;
	}
</style>

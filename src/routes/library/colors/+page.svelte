<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'colors';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const color_names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

	// TODO BLOCK dark mode for side-by-side comparison
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<p>
			Fuz provides a selection of colors designed to support theming by both developers and
			end-users. Instead of "blue" and "red" they're named with letters like "a" and "b", allowing
			themes to change "a" from blue to any color.
		</p>
		<p>
			For efficiency reasons, there are no color value variables, though this could change if Fuz
			decides to include a Vite plugin or other build tooling to optimize itself for your apps.
		</p>
		<p>
			The base colors can be customized with <a
				href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix"
				>the <code>color-mix</code> CSS function</a
			>.
		</p>
	</section>

	<ul>
		<li>a - primary</li>
		<li>b - success/help</li>
		<li>c - error/danger</li>
		<li>d - secondary/accent</li>
		<li>e - tertiary</li>
		<li>f - quaternary</li>
		<li>g - quinary</li>
	</ul>

	<ul class="examples">
		{#each color_names as color_name}
			<li class="example">
				<div class="text">color_{color_name}</div>
				<div class="color" style:background-color="var(--color_{color_name})"></div>
				<div
					class="color"
					style:background-color="color-mix(in hsl, var(--color_{color_name}), transparent 50%)"
				></div>
			</li>
		{/each}
	</ul>
	<br />
</Tome_Detail>

<style>
	.color {
		flex: 1;
		height: 100px;
	}
	.examples {
		width: 100%;
	}
	.example {
		position: relative;
	}
	.text {
		color: var(--bg_10);
		font-size: var(--size_3);
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: var(--spacing_1);
	}
</style>

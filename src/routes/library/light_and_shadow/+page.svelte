<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'light and shadow';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<p>
				Fuz is designed around the idea of stacking light and shadow with highlights and shading.
				The goal is easy authoring with simple and consistent rules for various compositions and
				states.
			</p>
			<p>
				The details are not always simple inversions between light mode, which starts from plain
				white documents, and dark mode, which starts from a lightless void. It's more helpful to
				think in terms of additive light than opaque colors.
			</p>
			<p>
				Opacity is used to enable arbitrary stacking that visually inherits its context. Not all
				cases are properly handled yet, and some choices are made for performance reasons, like
				avoiding opacity on text.
			</p>
		</section>

		<section>
			<h3>Shades and highlights</h3>
			<h4><code>darken</code> and <code>lighten</code></h4>
			<div class="swatch">
				{#each {length: 9} as _, i}
					{@const name = 'darken_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
			<div class="swatch">
				{#each {length: 9} as _, i}
					{@const name = 'lighten_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h4><code>bg</code> and <code>fg</code></h4>
			<p>
				In light mode, <code>bg</code> is the same as <code>lighten</code> and <code>fg</code> is
				the same as <code>darken</code>. In dark mode, they're swapped.
			</p>
			<div class="swatch">
				{#each {length: 9} as _, i}
					{@const name = 'bg_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
			<div class="swatch">
				{#each {length: 9} as _, i}
					{@const name = 'fg_' + (i + 1)}
					<div>
						<div class="color" style:background-color="var(--{name})"></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
		</section>
		<section>
			<Color_Scheme_Input />
		</section>

		<section>
			<h3>Fading opacity</h3>
			<div class="swatch">
				{#each {length: 6} as _, i}
					{@const name = 'fade_' + (i + 1)}
					<div>
						<div
							class="color"
							style:background-color="var(--fg)"
							style:opacity="var(--{name})"
						></div>
						<small><Style_Variable_Button {name} /></small>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h3>Stacking opacity</h3>
			<Code
				content={`<div style:background-color="var(--fg_1)" class="padded_sm">
	<div style:background-color="var(--fg_1)" class="padded_sm">
		<div style:background-color="var(--fg_1)" class="padded_sm">
			<div style:background-color="var(--fg_1)" class="padded_sm">
				<div style:background-color="var(--bg_4)" class="padded_sm">
					...
				</div>
			</div>
		</div>
	</div>
</div>`}
			/>
			<div style:background-color="var(--fg_1)" class="padded_sm">
				<div style:background-color="var(--fg_1)" class="padded_sm">
					<div style:background-color="var(--fg_1)" class="padded_sm">
						<div style:background-color="var(--fg_1)" class="padded_sm">
							<div style:background-color="var(--bg_4)" class="padded_sm">
								these variables have opacity, but notice how contrast changes with depth, creating
								limitations
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<h3>Box shadows</h3>
			<div class="shadow" style:box-shadow="var(--shadow)">
				<Style_Variable_Button name="shadow" />
			</div>
			<div class="shadow" style:box-shadow="var(--shadow_lg)">
				<Style_Variable_Button name="shadow_lg" />
			</div>
			<div class="shadow" style:box-shadow="var(--shadow_inset)">
				<Style_Variable_Button name="shadow_inset" />
			</div>
			<div class="shadow" style:box-shadow="var(--shadow_inset_active)">
				<Style_Variable_Button name="shadow_inset_active" />
			</div>
		</section>
	</div>
</Tome_Detail>

<style>
	.swatch {
		font-family: var(--font_family_mono);
		margin-bottom: var(--space_md);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
		grid-auto-flow: row;
	}
	.color {
		height: var(--input_height_sm);
	}
	.shadow {
		margin-bottom: var(--space_xl5);
		padding: var(--space_md);
		font-family: var(--font_family_mono);
	}
	small {
		display: flex;
		justify-content: center;
	}
</style>

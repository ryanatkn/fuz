<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Font_Weight_Control from '$routes/Font_Weight_Control.svelte';
	import Font_Size_Control from '$routes/Font_Size_Control.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import {default_variables} from '$lib/variables.js';
	import {get_tome} from '$lib/tome.js';
	import Icon_Sizes from '$routes/library/typography/Icon_Sizes.svelte';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';
	import {font_size_names, font_size_names_set} from '$lib/variable_data.js';

	const LIBRARY_ITEM_NAME = 'typography';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO refactor
	const font_weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

	const font_sizes = default_variables.filter((p) => font_size_names_set.has(p.name));

	const computed_styles = window.getComputedStyle(document.documentElement);

	let selected_font_weight = 500;
	let selected_font_size = 3;
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<p>
			Fuz has app-like markup semantics by default, which does a hard CSS reset including removing
			all padding and margin. The following document-like markup style is opt-in with the <Tome_Link
				name="prose"
			/> class.
		</p>
		<h1 title="--size_xl3">h1</h1>
		<h2 title="--size_xl2">h2</h2>
		<h3 title="--size_xl">h3</h3>
		<h4 title="--size_lg">h4</h4>
		<h5 title="--size_md">h5</h5>
		<h6 title="--size_sm">h6</h6>
		<p>paragraphs</p>
		<p>paragraphs</p>
		<p>paragraphs</p>
		<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
		<small>small</small>
		<details>
			<summary>show code</summary>
			<Code
				content={`<section class="prose">
<p>
	Fuz has app-like markup semantics by default, which does a hard CSS reset including removing
	all padding and margin. The following document-like markup style is opt-in with the <Tome_Link
		name="prose"
	/> class.
</p>
<h1 title="--size_xl3">h1</h1>
<h2 title="--size_xl2">h2</h2>
<h3 title="--size_xl">h3</h3>
<h4 title="--size_lg">h4</h4>
<h5 title="--size_md">h5</h5>
<h6 title="--size_sm">h6</h6>
<p>paragraphs</p>
<p>paragraphs</p>
<p>paragraphs</p>
<p>p <sub>sub</sub> p <sup>sup</sup> p</p>
<small>small</small>
<details>
	<summary>show code</summary>
	{:recurse}`}
			/>
		</details>
		<hr />
		<form class="width_sm">
			<Font_Weight_Control bind:selected_font_weight></Font_Weight_Control>
		</form>
		{#each font_sizes as font_size (font_size.name)}
			<Style_Variable_Button title={font_size.light} name={font_size.name}
				><span style:font-size="var(--{font_size.name})" style:font-weight={selected_font_weight}
					>{font_size.name}</span
				></Style_Variable_Button
			>
		{/each}
		<!-- TODO add a slider for the font size here -->
		<hr />
		<h3>
			<Mdn_Link href="Web/CSS/font-weight">font-weight</Mdn_Link> has no variables
		</h3>
		<form>
			<Font_Size_Control bind:selected_font_size />
		</form>
		<div>
			{#each font_weights as font_weight}
				<div
					style:font-weight={font_weight}
					style:font-size="var(--{font_size_names[selected_font_size - 1]})"
				>
					{font_weight}
				</div>
			{/each}
		</div>
		<hr />
		<h3>text colors</h3>
		<aside>TODO needs work</aside>
		<div>
			{#each {length: 3} as _, i}
				{@const name = 'text_' + (i + 1)}
				<Style_Variable_Button {name}
					><span style:color="var(--{name})">
						{name}
					</span></Style_Variable_Button
				>
			{/each}
		</div>
	</section>
	<!-- <section> 'text_disabled' 'text_active'</section> -->
	<section class="prose">
		<h3>
			<Mdn_Link href="Web/CSS/line-height">line-height</Mdn_Link> variables
		</h3>
		<div>
			{#each {length: 7} as _, i}
				{@const name = 'line_height_' + (i + 1)}
				<p>
					<Style_Variable_Button {name}
						><div style:line-height="var(--{name})" class="button_contents">
							<div>
								{name} =
								<code class="font_family_mono">{computed_styles.getPropertyValue('--' + name)}</code
								>
							</div>
							<div>{name}</div>
							<div>{name}</div>
						</div></Style_Variable_Button
					>
				</p>
			{/each}
		</div>
	</section>
	<Icon_Sizes />
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl5);
	}
	.button_contents {
		font-weight: normal;
		text-align: left;
	}
</style>

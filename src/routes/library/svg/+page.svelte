<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Svg from '$lib/Svg.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import {fuz_logo, github_logo} from '$lib/logos.js';

	const LIBRARY_ITEM_NAME = 'Svg';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO add examples for colored buttons - visually they're broken because they look like selected buttons
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Svg from '@ryanatkn/fuz/Svg.svelte';`} lang="ts" />
		<Code content={`<Svg data={fuz_logo} />`} />
		<p>Fills available space by default:</p>
		<Svg data={fuz_logo} />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With custom size" />
		<p>
			Set <code>size</code>: (see the
			<a href="https://moss.ryanatkn.com/library/typography#font-sizes">Moss typography docs</a>)
		</p>
		<Code content={`<Svg data={fuz_logo} size="var(--icon_size_xl)" />`} />
		<p><Svg data={fuz_logo} size="var(--icon_size_xl)" /></p>
		<Code content={`<Svg data={fuz_logo} size="var(--icon_size_sm)" />`} />
		<p><Svg data={fuz_logo} size="var(--icon_size_sm)" /></p>
		<p>
			Set <code>--size</code> on the component or a parent:
		</p>
		<Code content={`<span style:--size="var(--icon_size_xl)"><Svg data={fuz_logo} /></span>`} />
		<p><span style:--size="var(--icon_size_xl)"><Svg data={fuz_logo} /></span></p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With custom color" />
		<p>
			Set <code>color</code>: (see the
			<a href="https://moss.ryanatkn.com/library/colors#color-variables">Moss colors docs</a>)
		</p>
		<Code content={`<Svg data={fuz_logo} fill="var(--color_d_5)" />`} />
		<p class="width_sm">
			<Svg data={fuz_logo} fill="var(--color_d_5)" />
		</p>
		<Code content={`<Svg data={fuz_logo} fill="var(--color_b_5)" />`} />
		<p class="width_sm">
			<Svg data={fuz_logo} fill="var(--color_b_5)" />
		</p>
		<p>
			Set <code>--text_color</code> on the component or a parent, for svgs that have no default fill:
		</p>
		<Code
			content={`<span style:--text_color="var(--color_i_5)"><Svg data={github_logo} /></span>`}
		/>
		<p class="width_sm">
			<span style:--text_color="var(--color_i_5)"><Svg data={github_logo} /></span>
		</p>
	</Tome_Section>

	<aside>
		⚠️ These docs are a work in progress, see the <a
			href="https://github.com/ryanatkn/fuz/blob/main/src/lib/Svg.svelte">source code</a
		> for now.
	</aside>
</Tome_Content>

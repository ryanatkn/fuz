<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Content from '$lib/Tome_Content.svelte';
	import Details from '$lib/Details.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'Details';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		<p>
			The <code>Details</code> component is an alternative to the <Mdn_Link
				path="Web/HTML/Element/details"
			/> element. By default it's lazy, and you can pass <code>eager</code> to render the children immediately
			like the base element.
		</p>
		<p>Benefits of lazy children:</p>
		<ul>
			<li>
				children are transitioned in/out with an animation (TODO this may be doable with eager
				children, if so it would probably be the better default, and then the prop should be swapped
				to <code>lazy</code>)
			</li>
			<li>improved performance, can significantly improve UX in some cases</li>
		</ul>
		<p>Tradeoffs:</p>
		<ul>
			<li><code>ctrl+f</code> does not work to find text and auto-open the details</li>
			<li>you may desire some behavior caused by mounting the children</li>
		</ul>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With lazy rendering by default" />
		<Code
			content={`<Details>
  {#snippet summary()}summary content{/snippet}
  lazy children content
</Details>`}
		/>
		<Details>
			{#snippet summary()}summary content{/snippet}
			lazy children content
		</Details>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With eager rendering" />
		<Code
			content={`<Details eager>
  {#snippet summary()}summary content{/snippet}
  eager children content
</Details>`}
		/>
		<Details eager>
			{#snippet summary()}summary content{/snippet}
			eager children content
		</Details>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With the base details element">
			With the base <Mdn_Link path="Web/HTML/Element/details" /> element
		</Tome_Section_Header>
		<Code
			content={`<details>
  <summary>a summary element instead of a snippet</summary>
  the plain details
</details>`}
		/>
		<details>
			<summary>a summary element instead of a snippet</summary>
			the plain details
		</details>
	</Tome_Section>
</Tome_Content>

<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Details from '$lib/Details.svelte';
	import {get_tome} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Details';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
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
	<section>
		<Tome_Subheading text="With lazy rendering by default" slug="lazy-rendering-by-default" />
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
	</section>
	<section>
		<Tome_Subheading text="With eager rendering" slug="eager-rendering" />
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
	</section>
	<section>
		<Tome_Subheading text="With the base details element" slug="base-details-element">
			With the base <Mdn_Link path="Web/HTML/Element/details" /> element
		</Tome_Subheading>
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
	</section>
</Tome_Detail>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import utility_classes_text from '$lib/utility_classes.css?raw';
	import variable_classes_text from '$lib/variable_classes.css?raw';
	import semantic_classes_text from '$lib/semantic_classes.css?raw';
	import Details from '$lib/Details.svelte';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			Fuz provides an arbitrary subset of utility classes for CSS, and defers to CSS in <a
				href="https://svelte.dev/docs/svelte-components#style">Svelte's <code>{'<'}style></code></a
			> for complex and uncommon patterns. This may change depending on build tool sophistication, like
			a compiler or Vite plugin to remove unused styles.
		</section>
		<section>
			<h3>Optional CSS classes</h3>
			<p>Fuz has three optional CSS files with classes. To use them:</p>
			<Code
				content={`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/fuz/style.css'; // required
	import '@ryanatkn/fuz/theme.css'; // or bring your own
	import '@ryanatkn/fuz/utility_classes.css';
	import '@ryanatkn/fuz/variable_classes.css';
	import '@ryanatkn/fuz/semantic_classes.css';
	// ...`}
			/>
			<p>
				Utility classes are helpers for base CSS. Variable classes are utility classes based on Fuz
				style variables. Semantic classes are useful groupings of styles that are like the CSS
				equivalent of Svelte components.
			</p>
		</section>
		<section>
			<h3>Utility classees</h3>
		</section>
		<section>
			<h3>Raw CSS</h3>
			<Details>
				<summary slot="summary">utility_classes.css</summary>
				<Code content={utility_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary">variable_classes.css</summary>
				<Code content={variable_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary">semantic_classes.css</summary>
				<Code content={semantic_classes_text} lang="css" />
			</Details>
		</section>
	</div>
</Tome_Detail>

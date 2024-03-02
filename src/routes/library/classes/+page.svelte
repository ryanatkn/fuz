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
			> for complex and uncommon patterns. More classes could be added with increased build tool sophistication,
			like a compiler or Vite plugin to remove unused styles.
		</section>
		<section>
			<h3>Raw CSS</h3>
			<Details>
				<summary slot="summary">utility classes</summary>
				<Code content={utility_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary">variable classes</summary>
				<Code content={variable_classes_text} lang="css" />
			</Details>
			<Details>
				<summary slot="summary">semantic classes</summary>
				<Code content={semantic_classes_text} lang="css" />
			</Details>
		</section>
	</div>
</Tome_Detail>
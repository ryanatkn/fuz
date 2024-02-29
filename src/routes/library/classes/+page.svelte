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
		<aside>
			Fuz provides an arbitrary subset of utility classes for CSS, and defers to CSS in <a
				href="https://svelte.dev/docs/svelte-components#style">Svelte's <code>{'<'}style></code></a
			> for complex and uncommon patterns. This may change depending on build tool sophistication.
		</aside>
		<Details>
			<summary>utility classes</summary>
			<Code
				content={`/* utility_classes.css */

${utility_classes_text}`}
				lang="css"
			/>
		</Details>
		<Details>
			<summary>variable classes</summary>
			<Code
				content={`/* variable_classes.css */

      ${variable_classes_text}`}
				lang="css"
			/>
		</Details>
		<Details>
			<summary>semantic classes</summary>
			<Code
				content={`/* semantic_classes.css */

      ${semantic_classes_text}`}
				lang="css"
			/>
		</Details>
	</div></Tome_Detail
>

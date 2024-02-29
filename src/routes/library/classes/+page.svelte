<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import utility_classes_text from '$lib/utility_classes.css?raw';
	import variable_classes_text from '$lib/variable_classes.css?raw';
	import semantic_classes_text from '$lib/semantic_classes.css?raw';

	const LIBRARY_ITEM_NAME = 'classes';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<aside>
			Fuz provides an arbitrary subset of CSS classes that defers to CSS in Svelte's <a
				href="https://svelte.dev/docs/svelte-components#style"><code>{'<'}style></code></a
			> for complex and uncommon patterns
		</aside>
		<details>
			<summary>utility classes</summary>
			<Code
				content={`/* utility_classes.css */

${utility_classes_text}`}
				lang="css"
			/>
		</details>
		<details>
			<summary>variable classes</summary>
			<Code
				content={`/* variable_classes.css */

      ${variable_classes_text}`}
				lang="css"
			/>
		</details>
		<details>
			<summary>semantic classes</summary>
			<Code
				content={`/* semantic_classes.css */

      ${semantic_classes_text}`}
				lang="css"
			/>
		</details>
	</div></Tome_Detail
>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<aside>
			styles for plain <Mdn_Link href="Web/HTML/Element">HTML elements</Mdn_Link>
			with app-like presentation, for document-like presentation see <Tome_Link name="typography" />
			and <Tome_Link name="prose" />
		</aside>

		<Code content={`/* utility_classes.css */`} />
		<Code content={`/* variable_classes.css */`} />
		<Code content={`/* semantic_classes.css */`} />
	</div></Tome_Detail
>

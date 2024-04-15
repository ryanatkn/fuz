<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'introduction';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<blockquote>
			⚠️ Docs are a work in progress. <a href="https://moss.ryanatkn.com/">Moss</a> was recently
			extracted from Fuz, and these docs are incomplete and misleading in some cases. For an
			overview see <a href="https://github.com/ryanatkn/fuz#readme">the readme</a>.
		</blockquote>
	</section>
</Tome_Detail>

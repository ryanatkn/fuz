<script lang="ts">
	import Github_Link from '$lib/Github_Link.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';

	const LIBRARY_ITEM_NAME = 'Docs';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		The <code>Docs</code> is the component behind these docs. Its docs are unfinished - for now see
		usage in
		<Github_Link path="ryanatkn/fuz/blob/main/src/routes/docs/%2Blayout.svelte">Fuz</Github_Link>
		or
		<Github_Link path="ryanatkn/moss/blob/main/src/routes/docs/%2Blayout.svelte">Moss</Github_Link>.
	</section>
</Tome_Content>

<script lang="ts">
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';

	const LIBRARY_ITEM_NAME = 'Docs';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		The <code>Docs</code> is the component behind these docs. Its docs are unfinished - for now see
		usage in
		<a href="https://github.com/ryanatkn/moss/blob/main/src/routes/docs/%2Blayout.svelte">Moss</a>.
	</section>
</Tome_Content>

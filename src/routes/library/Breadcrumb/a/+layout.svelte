<script lang="ts">
	import {get_tome} from '$lib/tome.js';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Breadcrumb';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<slot />
</Tome_Detail>

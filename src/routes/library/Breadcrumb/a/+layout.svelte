<script lang="ts">
	import type {Snippet} from 'svelte';

	import {get_tome} from '$lib/tome.js';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const LIBRARY_ITEM_NAME = 'Breadcrumb';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	{@render children()}
</Tome_Detail>

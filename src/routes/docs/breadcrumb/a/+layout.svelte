<script lang="ts">
	import type {Snippet} from 'svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import TomeContent from '$lib/TomeContent.svelte';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	const LIBRARY_ITEM_NAME = 'Breadcrumb';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<TomeContent {tome}>
	{@render children()}
</TomeContent>

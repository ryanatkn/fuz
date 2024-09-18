<script lang="ts">
	import type {Snippet} from 'svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const LIBRARY_ITEM_NAME = 'Breadcrumb';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	{@render children()}
</Tome_Content>

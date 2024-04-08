<script lang="ts">
	import type {Snippet} from 'svelte';

	import Library from '$lib/Library.svelte';
	import {tomes} from '$routes/library/tomes.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();
</script>

<Library {tomes}>
	{@render children()}
</Library>

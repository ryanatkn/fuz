<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@ryanatkn/belt/dom.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	const {pathname} = $derived($page.url);
	const root = $derived(pathname === '/');

	const iframed = is_iframed();
	const enabled = !iframed;
</script>

{#if enabled}
	<nav class:root>
		<Breadcrumb>
			{#if root}
				<span>fuz</span>
			{:else}
				<span class="icon">🧶</span>
			{/if}
		</Breadcrumb>
	</nav>
{/if}

<style>
	nav {
		font-size: var(--size_xl);
	}
	.root {
		--text_decoration_selected: none;
	}
	.icon {
		font-size: var(--size_md);
	}
</style>

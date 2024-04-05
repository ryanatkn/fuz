<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@ryanatkn/belt/dom.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	const {pathname} = $derived($page.url);
	const root = $derived(pathname === '/');

	const iframed = is_iframed();
	const enabled = !iframed;

	// TODO BLOCK what if `--bg|fg_N` were opaque? problem here requires two layered backgrounds, but maybe that's fine?
</script>

{#if enabled}
	<div class="library_nav shadow_sm">
		<div class="background" />
		<nav class:root>
			<Breadcrumb>
				{#if root}
					<span>fuz</span>
				{:else}
					<span class="icon">🧶 fuz</span>
				{/if}
			</Breadcrumb>
		</nav>
	</div>
{/if}

<style>
	.library_nav {
		--breadcrumb_padding_x: var(--space_lg);
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--bg);
		height: var(--library_primary_nav_height);
	}
	.background {
		position: absolute;
		z-index: 0;
		width: 100%;
		height: 100%;
		background-color: var(--fg_1);
	}
	nav {
		font-size: var(--size_xl);
		height: 100%;
		display: flex;
		padding-left: var(--space_md);
	}
	.root {
		--text_decoration_selected: none;
	}
	.icon {
		font-size: var(--size_xl);
	}
</style>

<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@ryanatkn/belt/dom.js';
	import type {Snippet} from 'svelte';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		children?: Snippet;
	}

	const {children}: Props = $props();

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	const {pathname} = $derived($page.url);
	const root = $derived(pathname === '/');

	const iframed = is_iframed();
	const enabled = !iframed;

	// TODO BLOCK what if `--bg|fg_N` were opaque? problem here requires two layered backgrounds, but maybe that's fine?

	// TODO BLOCK maybe when scrolled to the top, hide shadow, but show otherwise
</script>

{#if enabled}
	<div class="library_nav shadow_sm">
		<div class="background" />
		<div class="content">
			<nav class:root>
				<Breadcrumb>
					{#if root}
						<span>fuz</span>
					{:else}
						<span class="icon">🧶 fuz</span>
					{/if}
				</Breadcrumb>
			</nav>
			{#if children}{@render children()}{/if}
		</div>
	</div>
{/if}

<style>
	.library_nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--bg);
		height: var(--library_primary_nav_height);
	}

	.background {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-color: var(--fg_1);
	}

	.content {
		height: 100%;
		display: flex;
	}

	nav {
		--font_size: var(--size_xl);
		height: 100%;
		display: flex;
		flex: 1;
		padding-left: var(--space_md);
	}

	/* sync this breakpoint with `library/+layout` */
	@media (max-width: 800px) {
		nav {
			--font_size: var(--size_lg);
		}
	}
	@media (max-width: 550px) {
		nav {
			--font_size: var(--size_md);
		}
	}

	.root {
		--text_decoration_selected: none;
	}
</style>
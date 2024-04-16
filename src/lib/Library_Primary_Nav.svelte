<script lang="ts">
	import {page} from '$app/stores';
	import {is_iframed} from '@ryanatkn/belt/dom.js';
	import type {Snippet} from 'svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		pkg: Package_Meta;
		breadcrumb_children?: Snippet<[is_primary_nav: boolean]>;
		children?: Snippet;
	}

	const {pkg, breadcrumb_children, children}: Props = $props();

	// TODO this could be a prop passed by `Breadcrumb`, is commonly needed
	const {pathname} = $derived($page.url);
	const selected_root = $derived(pathname === '/');

	const iframed = is_iframed();
	const enabled = !iframed;

	// TODO BLOCK maybe when scrolled to the top, hide shadow, but show otherwise

	// TODO BLOCK make this customizable, using snippet not pkg?
</script>

{#if enabled}
	<div class="library_nav shadow_xs">
		<div class="background" />
		<div class="content">
			<nav class:selected_root>
				<Breadcrumb>
					{#if breadcrumb_children}
						{@render breadcrumb_children(true)}
					{:else}
						{pkg.package_json.icon ?? '🏠'}
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
		max-width: 1300px;
		height: 100%;
		margin: 0 auto;
		display: flex;
	}

	nav {
		--size: var(--size_xl);
		height: 100%;
		display: flex;
		flex: 1;
		padding-left: var(--space_md);
	}

	/* sync this breakpoint with `Library` */
	@media (max-width: 800px) {
		nav {
			--size: var(--size_lg);
		}
	}
	@media (max-width: 550px) {
		nav {
			--size: var(--size_md);
		}
	}

	.selected_root {
		--text_decoration_selected: none;
	}
</style>

<script lang="ts">
	import {is_iframed} from '@ryanatkn/belt/dom.js';
	import type {Snippet} from 'svelte';
	import {scrollY} from 'svelte/reactivity/window';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';

	interface Props {
		pkg: Package_Meta;
		breadcrumb_children?: Snippet<[is_primary_nav: boolean]>;
		children?: Snippet;
	}

	const {pkg, breadcrumb_children, children}: Props = $props();

	const iframed = is_iframed();
	const enabled = !iframed;

	const scrolled = $derived(scrollY.current && scrollY.current > 0);
</script>

{#if enabled}
	<div class="docs_primary_nav" class:scrolled>
		<div class="background" aria-hidden="true"></div>
		<div class="content">
			<nav aria-label="Primary">
				<Breadcrumb>
					{#if breadcrumb_children}
						{@render breadcrumb_children(true)}
					{:else}
						{pkg.package_json.glyph ?? '🏠'}
					{/if}
				</Breadcrumb>
			</nav>
			{@render children?.()}
		</div>
	</div>
{/if}

<style>
	.docs_primary_nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--bg);
		height: var(--docs_primary_nav_height);
		transition: box-shadow var(--duration_2);
		box-shadow: none;
	}

	.scrolled {
		box-shadow: var(--shadow_bottom_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
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
		--font_size: var(--font_size_xl);
		height: 100%;
		display: flex;
		flex: 1;
		padding-left: var(--space_md);
	}

	/* sync this breakpoint with `Docs` */
	@media (max-width: 800px) {
		nav {
			--font_size: var(--font_size_lg);
		}
	}
	@media (max-width: 550px) {
		nav {
			--font_size: var(--font_size_md);
		}
	}
</style>

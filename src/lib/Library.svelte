<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import {onNavigate} from '$app/navigation';
	import {innerWidth} from 'svelte/reactivity/window';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {Tome, tomes_context} from '$lib/tome.js';
	import Library_Primary_Nav from '$lib/Library_Primary_Nav.svelte';
	import Library_Secondary_Nav from '$lib/Library_Secondary_Nav.svelte';
	import Library_Tertiary_Nav from '$lib/Library_Tertiary_Nav.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {library_links_context} from '$lib/library_helpers.svelte.js';

	interface Props {
		tomes: Array<Tome>;
		pkg: Package_Meta;
		breadcrumb_children?: Snippet<[is_primary_nav: boolean]>;
		children: Snippet;
	}

	const {tomes, pkg, breadcrumb_children, children}: Props = $props();

	// TODO this API is messy, inconsistent usage of props/context
	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	tomes_context.set(tomes_by_name);

	// TODO @many dialog navs - this is messy to satisfy SSR with the current design that puts the secondary nav in a dialog
	const TERTIARY_NAV_BREAKPOINT = 1000;
	const SECONDARY_NAV_BREAKPOINT = 800;

	const library_menu_width = '180px';

	let show_secondary_nav_dialog = $state(false);
	const toggle_secondary_nav_dialog = (show?: boolean): void => {
		show_secondary_nav_dialog = show ?? !show_secondary_nav_dialog;
	};

	onNavigate(() => {
		show_secondary_nav_dialog = false;
	});

	library_links_context.set();
</script>

<svelte:window onhashchange={() => (show_secondary_nav_dialog = false)} />

<div class="library" style:--library_menu_width={library_menu_width}>
	<Library_Primary_Nav {pkg} {breadcrumb_children}>
		<div class="nav_dialog_toggle">
			<button class="plain" type="button" onclick={() => toggle_secondary_nav_dialog()}>menu</button
			>
		</div>
	</Library_Primary_Nav>
	<!-- TODO @many dialog navs -->
	{#if !innerWidth.current || innerWidth.current > SECONDARY_NAV_BREAKPOINT}
		<div class="secondary_nav_wrapper">
			<Library_Secondary_Nav {tomes} />
		</div>
	{/if}
	<main>
		{@render children()}
		<!-- TODO @many dialog navs -->
		{#if !innerWidth.current || innerWidth.current > TERTIARY_NAV_BREAKPOINT}
			<Library_Tertiary_Nav {tomes} {tomes_by_name} />
		{/if}
		<section class="box">
			<Library_Footer {pkg}>
				<div class="mb_xl5">
					<Breadcrumb>
						{#if breadcrumb_children}
							{@render breadcrumb_children(false)}
						{:else}
							{pkg.package_json.glyph ?? '🏠'}
						{/if}
					</Breadcrumb>
				</div>
			</Library_Footer>
		</section>
	</main>
</div>
<!-- TODO @many dialog navs - instead of a dialog, probably use a popover (new component) -->
<!-- TODO this is messy rendering `Library_Secondary_Nav` twice to handle responsive states with SSR correctly -->
{#if show_secondary_nav_dialog && innerWidth.current && innerWidth.current <= TERTIARY_NAV_BREAKPOINT}
	<Dialog onclose={() => (show_secondary_nav_dialog = false)}>
		<div class="pane" style:--library_menu_width={library_menu_width}>
			<div class="p_xl pb_0">
				<Breadcrumb>
					{#if breadcrumb_children}
						{@render breadcrumb_children(false)}
					{:else}
						{pkg.package_json.glyph ?? '🏠'}
					{/if}
				</Breadcrumb>
			</div>
			<div class="px_lg pb_xl">
				<Library_Secondary_Nav {tomes} sidebar={false} />
				<Library_Tertiary_Nav {tomes} {tomes_by_name} sidebar={false} />
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.library {
		--library_primary_nav_height: 60px;
		--library_secondary_nav_padding: var(--space_md); /* also used by the tertiary nav */
		--library_content_padding: var(--space_xl5);
		--library_content_max_width: calc(var(--width_md) + var(--library_content_padding) * 2);
		/* the `+ 1px` solves some issue when scaling */
		--library_sidebar_width: max(
			calc(var(--library_menu_width) + 1px + var(--library_secondary_nav_padding) * 2),
			calc((100% - var(--library_content_max_width)) / 2)
		);
		display: contents;
	}

	main {
		position: relative;
		min-height: calc(100vh - var(--library_primary_nav_height));
		width: calc(100% - var(--library_sidebar_width) * 2);
		max-width: var(--library_content_max_width);
		padding: var(--library_content_padding);
		padding-top: 0;
		margin: 0 auto;
		overflow: hidden; /* TODO maybe heavy handed */
	}

	.secondary_nav_wrapper {
		display: contents;
	}

	.nav_dialog_toggle {
		display: none;
	}
	.nav_dialog_toggle button {
		padding-left: var(--space_xl3);
		padding-right: var(--space_xl3);
		border-radius: 0;
	}

	/* sync this breakpoint with `Library_Tertiary_Nav` and `Tome_Section_Header` */
	@media (max-width: 1000px) {
		main {
			--library_content_padding: var(--space_xl);
			/* handle the moved `Library_Tertiary_Nav` */
			width: calc(100% - var(--library_sidebar_width));
			margin-right: 0;
		}

		.nav_dialog_toggle {
			display: contents;
		}
	}

	/* sync this breakpoint with `Library_Primary_Nav`, `Library_Secondary_Nav`, and `Tome_Section_Header` */
	@media (max-width: 800px) {
		main {
			/* handle the moved `Library_Secondary_Nav` */
			width: 100%;
			margin-left: 0;
		}

		.secondary_nav_wrapper {
			display: none;
		}
	}

	section {
		padding: var(--space_xl2);
	}
</style>

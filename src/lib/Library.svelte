<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import {onNavigate} from '$app/navigation';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {Tome, set_tomes} from '$lib/tome.js';
	import Library_Primary_Nav from '$lib/Library_Primary_Nav.svelte';
	import Library_Secondary_Nav from '$lib/Library_Secondary_Nav.svelte';
	import Library_Tertiary_Nav from '$lib/Library_Tertiary_Nav.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {set_library_links} from '$lib/library.svelte.js';

	interface Props {
		tomes: Tome[];
		pkg: Package_Meta;
		children: Snippet;
	}

	const {tomes, pkg, children}: Props = $props();

	// TODO BLOCK menus get cut off at lower widths

	// TODO BLOCK this API is messy, inconsistent usage of props/context
	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	// TODO @multiple dialog navs - this is messy to satisfy SSR with the current design that puts the secondary nav in a dialog
	const SECONDARY_NAV_BREAKPOINT = 800;

	let innerWidth: number | undefined = $state();

	// TODO BLOCK put related styles/components in the secondary sidebar along with "on this page"

	let show_secondary_nav_dialog = $state(false);
	const toggle_secondary_nav_dialog = (show?: boolean): void => {
		show_secondary_nav_dialog = show ?? !show_secondary_nav_dialog;
	};

	onNavigate(() => {
		show_secondary_nav_dialog = false;
	});

	set_library_links();
</script>

<svelte:window bind:innerWidth on:hashchange={() => (show_secondary_nav_dialog = false)} />

<div class="layout">
	<Library_Primary_Nav>
		<div class="toggle_secondary_nav_button_wrapper">
			<button class="plain" type="button" onclick={() => toggle_secondary_nav_dialog()}>menu</button
			>
		</div>
	</Library_Primary_Nav>
	<!-- TODO @multiple dialog navs -->
	{#if !innerWidth || innerWidth > SECONDARY_NAV_BREAKPOINT}
		<div class="secondary_nav_wrapper">
			<Library_Secondary_Nav {tomes} />
		</div>
	{/if}
	<main>
		<div class="content">
			{@render children()}
			<!-- TODO @multiple dialog navs -->
			{#if !innerWidth || innerWidth > SECONDARY_NAV_BREAKPOINT}
				<Library_Tertiary_Nav {tomes} {tomes_by_name} />
			{/if}
			<section class="box">
				<Library_Footer {pkg}>
					<div class="mb_xl5">
						<Breadcrumb>🧶</Breadcrumb>
					</div>
				</Library_Footer>
			</section>
		</div>
	</main>
</div>
<!-- TODO @multiple dialog navs - instead of a dialog, probably use a popover (new component) -->
<!-- TODO this is messy rendering `Library_Secondary_Nav` twice to handle responsive states with SSR correctly -->
{#if show_secondary_nav_dialog && innerWidth && innerWidth <= SECONDARY_NAV_BREAKPOINT}
	<Dialog onclose={() => (show_secondary_nav_dialog = false)}>
		<div class="pane">
			<div class="p_xl"><Breadcrumb>🧶</Breadcrumb></div>
			<div class="px_lg py_xl4">
				<Library_Secondary_Nav {tomes} />
				<Library_Tertiary_Nav {tomes} {tomes_by_name} />
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.layout {
		--library_primary_nav_height: 60px;
		--library_secondary_nav_padding: var(--space_md); /* also used by the tertiary nav */
		--library_menu_width: 180px;
		--library_content_padding: var(--space_xl5);
		--library_content_max_width: calc(var(--width_md) + var(--library_content_padding) * 2);
		--library_sidebar_width: max(
			calc(var(--library_menu_width) + var(--library_secondary_nav_padding) * 2),
			calc((100% - var(--library_content_max_width)) / 2)
		);
		display: contents;
	}

	.content {
		position: relative;
		width: calc(100% - var(--library_sidebar_width) * 2);
		max-width: var(--library_content_max_width);
		padding: var(--library_content_padding);
		margin: 0 auto;
		overflow: hidden; /* maybe heavy-handed */
	}

	.secondary_nav_wrapper {
		display: contents;
	}

	.toggle_secondary_nav_button_wrapper {
		display: none;
	}
	.toggle_secondary_nav_button_wrapper button {
		padding-left: var(--space_xl3);
		padding-right: var(--space_xl3);
		border-radius: 0;
	}

	@media (max-width: 1200px) {
		/* main {
			flex-direction: column;
		} */
	}

	/* sync this breakpoint with `Library_Tertiary_Nav` and `Tome_Subheading` */
	@media (max-width: 1000px) {
		/* main { */
		/* --library_content_max_width: calc(var(--width_md) + var(--library_content_padding)); */
		/* } */
		.content {
			--library_content_padding: var(--space_xl);
			/* handle the moved `Library_Tertiary_Nav` */
			width: calc(100% - var(--library_sidebar_width));
			margin-right: 0;
		}
	}

	/* sync this breakpoint with `Library_Primary_Nav`, `Library_Secondary_Nav`, and `Tome_Subheading` */
	@media (max-width: 800px) {
		.content {
			/* handle the moved `Library_Secondary_Nav` */
			width: 100%;
			margin-left: 0;
		}

		.secondary_nav_wrapper {
			display: none;
		}

		.toggle_secondary_nav_button_wrapper {
			display: contents;
		}
	}

	section {
		padding: var(--space_xl2);
	}
</style>

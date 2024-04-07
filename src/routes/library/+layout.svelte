<script lang="ts">
	import type {Snippet} from 'svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {set_tomes} from '$lib/tome.js';
	import Library_Primary_Nav from '$lib/Library_Primary_Nav.svelte';
	import Library_Secondary_Nav from '$lib/Library_Secondary_Nav.svelte';
	import Library_Tertiary_Nav from '$lib/Library_Tertiary_Nav.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.js';
	import Dialog from '$lib/Dialog.svelte';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import {package_json, src_json} from '$routes/package.js';
	import {onNavigate} from '$app/navigation';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// TODO BLOCK this API is messy, inconsistent usage of props/context
	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	const selected_variable = set_selected_variable();

	// TODO BLOCK put related styles/components in the secondary sidebar along with "on this page"

	// TODO BLOCK use an .unstyled aside for the sidebars

	// TODO BLOCK sub 1000 move the secondary sidebar, sub 800 move the primary sidebar

	// TODO BLOCK maybe extract `<Library {tomes} />`?

	// TODO BLOCK doesn't use Library_Footer here, hm

	// TODO BLOCK maybe add an hr or put the bg_1 on the footer area

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	let show_secondary_nav_dialog = $state(false);
	const toggle_secondary_nav_dialog = (show?: boolean): void => {
		show_secondary_nav_dialog = show ?? !show_secondary_nav_dialog;
	};

	onNavigate(() => {
		show_secondary_nav_dialog = false;
	});
</script>

<div class="layout">
	<Library_Primary_Nav>
		<div class="toggle_secondary_nav_button_wrapper">
			<button class="plain" type="button" onclick={() => toggle_secondary_nav_dialog()}>menu</button
			>
		</div>
	</Library_Primary_Nav>
	<div class="secondary_nav_wrapper">
		<Library_Secondary_Nav {tomes} />
	</div>
	<main>
		<div class="content">
			{@render children()}
			<Library_Tertiary_Nav {tomes} {tomes_by_name} />
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
{#if $selected_variable}
	<Dialog onclose={() => ($selected_variable = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={$selected_variable} />
					<aside>this is unfinished</aside>
					<button onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}
<!-- TODO instead of a dialog, probably use a popover (new component) -->
<!-- TODO this is messy rendering `Library_Secondary_Nav` twice to handle responsive states with SSR correctly -->
{#if show_secondary_nav_dialog}
	<Dialog onclose={() => (show_secondary_nav_dialog = false)}>
		<div class="pane">
			<div class="p_xl"><Breadcrumb>🧶</Breadcrumb></div>
			<Library_Secondary_Nav {tomes} />
		</div>
	</Dialog>
{/if}

<style>
	.layout {
		--library_primary_nav_height: 60px;
		--library_content_padding: var(--space_xl5);
		--library_content_max_width: calc(var(--width_md) + var(--library_content_padding) * 2);
		--library_sidebar_width: max(200px, calc((100% - var(--library_content_max_width)) / 2));
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

	/* sync this breakpoint with `Library_Tertiary_Nav` */
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

	/* sync this breakpoint with `Library_Primary_Nav` and `Library_Secondary_Nav` */
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

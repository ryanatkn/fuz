<script lang="ts">
	import {page} from '$app/stores';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import Library_Menu from '$lib/Library_Menu.svelte';
	import Library_Panel from '$lib/Library_Panel.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {set_tomes} from '$lib/tome.js';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import Library_Nav from '$lib/Library_Nav.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {package_json, src_json} from '$routes/package.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.js';
	import Dialog from '$lib/Dialog.svelte';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	const selected_item = $derived(tomes.find((c) => c.pathname === $page.url.pathname));
	const tomes_related_to_selected = $derived(
		selected_item?.related?.map((r) => tomes_by_name.get(r)!),
	);

	const selected_variable = set_selected_variable();

	// TODO BLOCK put related styles/components in the secondary sidebar along with "on this page"

	// TODO BLOCK put the `Package_Summary` at the library root only

	// TODO BLOCK primary/secondary is a little off because of the top nav,
	// nav instead of sidebar sounds better too -
	// maybe extract components?

	// TODO maybe extract a `Library_Layout`?

	const library_nav_height = '60px';
</script>

<Library_Nav --library_nav_height={library_nav_height} />
<main>
	<div class="primary_sidebar">
		<nav>
			<Library_Menu {tomes} />
			{#if tomes_related_to_selected}
				<Library_Menu tomes={tomes_related_to_selected}>
					{#snippet children(category)}<h6>related {category}</h6>{/snippet}
				</Library_Menu>
			{/if}
		</nav>
	</div>
	<div class="content">
		<Library_Panel>
			<div class="box">
				<h1 class="m_0">fuz</h1>
			</div>
			<div class="box w_100">
				<Package_Summary {pkg} />
			</div>
		</Library_Panel>
		{@render children()}
		<section class="box">
			<Library_Footer {pkg} />
		</section>
		<section class="box">
			<Breadcrumb>🧶</Breadcrumb>
		</section>
	</div>
	<div class="secondary_sidebar"></div>
</main>
{#if $selected_variable}
	<Dialog onclose={() => ($selected_variable = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={$selected_variable} />
					<aside>this is unfinished</aside>
					<button on:click={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}

<style>
	main {
		--library_nav_height: 60px;
	}
	.content {
		--padding: var(--space_xl5);
		position: relative;
		/* TODO feels hacky */
		width: 100%;
		max-width: calc(var(--width_md) + var(--padding) * 2);
		padding: var(--padding);
		margin: 0 auto;
	}
	.primary_sidebar,
	.secondary_sidebar {
		position: fixed;
		left: 0;
		top: var(--library_nav_height);
		z-index: 1;
		width: 200px;
		height: calc(100% - var(--library_nav_height));
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		overflow: auto;
		background-color: var(--fg_1);
	}
	.secondary_sidebar {
		right: 0;
		left: unset;
		align-items: flex-start;
	}
	@media (max-width: 1200px) {
		/* main {
			flex-direction: column;
		} */
	}
	@media (max-width: 600px) {
		.content {
			--padding: var(--space_xl);
		}
	}
	section {
		padding: var(--space_xl2);
	}
</style>

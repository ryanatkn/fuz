<script lang="ts">
	import {page} from '$app/stores';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import Library_Menu from '$lib/Library_Menu.svelte';
	import Library_Panel from '$lib/Library_Panel.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import {set_tomes} from '$lib/tome.js';
	import Library_Footer from '$lib/Library_Footer.svelte';
	import Package_Summary from '$lib/Package_Summary.svelte';
	import Library_Nav from '$lib/Library_Nav.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {package_json, src_json} from '$routes/package.js';
	import {set_selected_variable} from '$routes/library/helpers.js';
	import Dialog from '$lib/Dialog.svelte';
	import Theme_Variable_Detail from '$routes/Theme_Variable_Detail.svelte';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	const tomes_by_name = new Map(tomes.map((t) => [t.name, t]));
	set_tomes(tomes_by_name);

	$: selected_item = tomes.find((c) => c.pathname === $page.url.pathname);
	$: tomes_related_to_selected = selected_item?.related?.map((r) => tomes_by_name.get(r)!);

	const selected_variable = set_selected_variable();
</script>

<main class="box width_full">
	<Library_Nav />
	<div class="layout width_md">
		<div class="menu_wrapper">
			<div class="menu width_sm">
				<Library_Menu {tomes} />
				{#if tomes_related_to_selected}
					<Library_Menu tomes={tomes_related_to_selected} let:category>
						<h6>related {category}</h6>
					</Library_Menu>
				{/if}
			</div>
		</div>
		<Library_Panel>
			<div class="box width_full">
				<Package_Summary {pkg} />
			</div>
		</Library_Panel>
		<slot />
		<section class="box">
			<Library_Footer {pkg} />
		</section>
		<section class="box">
			<Breadcrumb>🧶</Breadcrumb>
		</section>
	</div>
	{#if $selected_variable}
		<Dialog on:close={() => ($selected_variable = null)} let:close>
			<div class="pane">
				<div class="panel padded_lg box">
					<Theme_Variable_Detail variable={$selected_variable} />
					<br />
					<aside>this is unfinished</aside>
					<br />
					<button on:click={close}>ok</button>
				</div>
			</div>
		</Dialog>
	{/if}
</main>

<style>
	.layout {
		position: relative;
		padding-bottom: var(--spacing_5);
	}
	.menu_wrapper {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		transform: translate3d(calc(-100% - var(--spacing_sm)), 0, 0);
	}
	.menu {
		position: sticky;
		top: 0;
	}
	@media (max-width: 1200px) {
		.menu_wrapper {
			position: relative;
			transform: none;
			margin-bottom: var(--spacing_3);
		}
	}
	section {
		padding: var(--spacing_2);
	}
	h6 {
		margin-bottom: var(--spacing_md);
		margin-top: var(--spacing_3);
	}
	h6:first-child {
		margin-top: 0;
	}
</style>

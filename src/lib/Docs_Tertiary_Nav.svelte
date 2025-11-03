<script lang="ts">
	import {page} from '$app/state';

	import Docs_Menu from '$lib/Docs_Menu.svelte';
	import Docs_Page_Links from '$lib/Docs_Page_Links.svelte';
	import {to_tome_pathname, Tome} from '$lib/tome.js';
	import {docs_links_context, DOCS_API_PATH} from '$lib/docs_helpers.svelte.js';
	import {pkg_context} from '$lib/pkg.svelte.js';

	interface Props {
		tomes: Array<Tome>;
		tomes_by_name: Map<string, Tome>;
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
	}

	const {tomes, tomes_by_name, sidebar = true}: Props = $props();

	const selected_item = $derived(tomes.find((t) => to_tome_pathname(t) === page.url.pathname));

	const tomes_related_to_selected = $derived(
		selected_item?.related.map((r) => tomes_by_name.get(r)!),
	);

	const docs_links = docs_links_context.get();

	const should_show_page_links = $derived.by(() => {
		const length = docs_links.docs_links.length;
		const should_show = length > 1;
		console.log('[Docs_Tertiary_Nav] conditional check:', {length, should_show}); // eslint-disable-line no-console
		return should_show;
	});

	// detect if we're on a module page
	const pkg = pkg_context.get();
	const is_module_page = $derived(
		page.url.pathname.startsWith(DOCS_API_PATH + '/') && page.url.pathname !== DOCS_API_PATH,
	);
</script>

<!-- TODO probably add a `nav` wrapper? around which? -->
<aside class="docs_tertiary_nav unstyled">
	{#if tomes_related_to_selected?.length}
		<Docs_Menu tomes={tomes_related_to_selected}>
			{#snippet children(category)}<h4 class="mb_sm">related {category}</h4>{/snippet}
		</Docs_Menu>
	{/if}
	{#if should_show_page_links}
		<Docs_Page_Links {sidebar} />
	{/if}
	{#if is_module_page}
		<div class="modules_list">
			<h4 class="mb_sm">modules</h4>
			<ul class="unstyled">
				{#each pkg.modules_sorted as module (module.path)}
					<li>
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							class="menu_item ellipsis line_height_sm"
							href={module.path_docs}
							class:selected={module.path_docs === page.url.pathname}
						>
							{module.path}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</aside>

<style>
	.docs_tertiary_nav {
		/* TODO @many lots of duplicate code between `Docs_Secondary_Nav` and `Docs_Tertiary_Nav` */
		position: fixed;
		right: 0;
		top: var(--docs_primary_nav_height);
		z-index: 1;
		width: var(--docs_sidebar_width);
		height: calc(100% - var(--docs_primary_nav_height));
		padding: var(
			--docs_secondary_nav_padding
		); /* needed with `overflow: auto` to avoid cutting off outline */
		overflow: auto;
		scrollbar-width: thin;
		background-color: var(--fg_1);
	}

	/* sync this breakpoint with `/docs/+layout` */
	@media (max-width: 1000px) {
		.docs_tertiary_nav {
			position: static;
			background-color: initial;
			overflow: initial;
		}
	}

	/* TODO @many repeated pattern, also I think we want to support this growing? */
	.modules_list {
		margin: var(--space_xl6) 0;
		width: var(--docs_menu_width);
		min-width: var(--docs_menu_width);
	}

	/* TODO @many should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	.modules_list a:hover {
		background-color: var(--bg_5);
	}
	.modules_list a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

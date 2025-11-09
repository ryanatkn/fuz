<script lang="ts">
	import Docs_Menu from '$lib/Docs_Menu.svelte';
	import {Tome} from '$lib/tome.js';

	interface Props {
		tomes: Array<Tome>;
		sidebar?: boolean; // TODO @many dialog navs (this shouldn't exist)
	}

	const {tomes, sidebar = true}: Props = $props();

	const expand_width = $derived(!sidebar);
</script>

<aside class="docs_secondary_nav unstyled" class:sidebar>
	<nav aria-label="Secondary nav">
		<Docs_Menu {tomes} {expand_width} />
	</nav>
</aside>

<style>
	.docs_secondary_nav {
		/* TODO @many lots of duplicate code between `Docs_Secondary_Nav` and `Docs_Tertiary_Nav` */
		position: fixed;
		left: 0;
		top: var(--docs_primary_nav_height);
		z-index: 1;
		width: var(--docs_sidebar_width);
		height: calc(100% - var(--docs_primary_nav_height));
		padding: var(
			--docs_secondary_nav_padding
		); /* needed with `overflow: auto` to avoid cutting off outline */
		margin-bottom: 0;
		overflow: auto;
		scrollbar-width: thin;
		background-color: var(--fg_1);
	}

	.sidebar nav {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	/* sync this breakpoint with `Docs` */
	@media (max-width: 800px) {
		.docs_secondary_nav {
			position: static;
			background-color: initial;
			align-items: initial;
			overflow: initial;
		}
	}
	/* TODO @many dialog navs  */
	.docs_secondary_nav:not(.sidebar) {
		position: static;
		background-color: initial;
		align-items: initial;
		overflow: initial;
		display: block; /* collapse margin */
	}
</style>

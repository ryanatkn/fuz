<script lang="ts">
	import Library_Menu from '$lib/Library_Menu.svelte';
	import {Tome} from '$lib/tome.js';

	interface Props {
		tomes: Tome[];
	}

	const {tomes}: Props = $props();
</script>

<aside class="library_secondary_nav unstyled">
	<nav>
		<Library_Menu {tomes} />
	</nav>
</aside>

<style>
	.library_secondary_nav {
		position: fixed;
		left: 0;
		top: var(--library_primary_nav_height);
		z-index: 1;
		width: var(--library_sidebar_width);
		height: calc(100% - var(--library_primary_nav_height));
		padding: var(
			--library_nav_padding
		); /* needed with `overflow: auto` to avoid cutting off outline */
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		overflow: auto;
		background-color: var(--fg_1);
	}

	/* sync this breakpoint with `library/+layout` and `Library_Primary_Nav` */
	@media (max-width: 800px) {
		.library_secondary_nav {
			position: static;
			background-color: initial;
			align-items: initial;
			padding: 0 var(--space_md);
		}
	}
</style>

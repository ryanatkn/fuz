<script lang="ts">
	import {parse_path_pieces} from '@ryanatkn/belt/path.js';
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	export let path: string | undefined = undefined;
	export let selected_path: string | null | undefined = undefined; // `null` means none
	export let base_path: string | undefined = undefined;

	$: final_path = path ?? $page.url.pathname;
	$: final_selected_path =
		selected_path === null ? null : selected_path === undefined ? final_path : selected_path;
	$: final_base_path = base_path ?? base;

	$: path_pieces = parse_path_pieces(final_path);

	$: root_path = final_base_path || '/';
</script>

<div class="breadcrumb">
	<!-- The default/only slot is the content for the root "/" link. -->
	<a href={root_path} class:selected={root_path === final_selected_path}><slot>•</slot></a
	>{#each path_pieces as pathPiece}{#if pathPiece.type === 'piece'}<a
				href={final_base_path + pathPiece.path}
				class:selected={pathPiece.path === final_selected_path}>{pathPiece.name}</a
			>{:else}<span class="separator"><slot name="separator">/</slot></span>{/if}{/each}
</div>

<style>
	.breadcrumb {
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		padding: var(--spacing_md) 0;
	}
	a {
		position: relative;
		z-index: 1;
		padding: 0 var(--spacing_sm);
		display: flex;
		align-items: center;
	}
	.separator {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
	}
</style>

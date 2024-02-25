<script lang="ts">
	import {page} from '$app/stores';

	import type {Tome} from '$lib/tome.js';
	import {to_library_path_info} from '$lib/helpers.js';

	export let tome: Tome;

	$: ({path, path_is_selected} = to_library_path_info(tome.slug, $page.url.pathname));
</script>

<h2 id={tome.name}>
	{#if path_is_selected}{tome.name}{:else}<a href={path}>{tome.name}</a>{/if}
</h2>

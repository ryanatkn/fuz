<script lang="ts">
	import {page} from '$app/state';

	import Docs_List from '$lib/Docs_List.svelte';
	import {pkg_context} from '$lib/pkg.svelte.js';

	const {
		expand_width = false,
	}: {
		expand_width?: boolean;
	} = $props();

	const pkg = pkg_context.get();
</script>

<Docs_List {expand_width} class="modules_list">
	<h4 class="mb_sm">modules</h4>
	<ul class="unstyled">
		{#each pkg.modules_sorted as module (module.path)}
			<li>
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					class="menu_item"
					href={module.path_docs}
					class:selected={module.path_docs === page.url.pathname}
				>
					<div class="ellipsis">{module.path}</div>
				</a>
			</li>
		{/each}
	</ul>
</Docs_List>

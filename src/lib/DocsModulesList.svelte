<script lang="ts">
	import {page} from '$app/state';

	import DocsList from './DocsList.svelte';
	import {library_context} from './library.svelte.js';

	const {
		expand_width = false,
	}: {
		expand_width?: boolean;
	} = $props();

	const library = library_context.get();
</script>

<DocsList {expand_width} class="modules_list">
	<h4 class="mb_sm">modules</h4>
	<ul class="unstyled">
		{#each library.modules_sorted as module (module.path)}
			<li>
				<!-- eslint-disable svelte/no-navigation-without-resolve -->
				<a
					class="menu_item"
					href={module.url_api}
					class:selected={module.url_api === page.url.pathname}
				>
					<div class="ellipsis">{module.path}</div>
				</a>
			</li>
		{/each}
	</ul>
</DocsList>

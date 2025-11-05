<script lang="ts">
	import {page} from '$app/state';

	import {pkg_context} from '$lib/pkg.svelte.js';

	interface Props {
		expand_width?: boolean;
	}

	const {expand_width = false}: Props = $props();

	const pkg = pkg_context.get();
</script>

<div class="modules_list" class:expand_width>
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
</div>

<style>
	/* TODO @many repeated pattern, also I think we want to support this growing? */
	.modules_list {
		margin: var(--space_xl6) 0;
		width: var(--docs_menu_width);
		min-width: var(--docs_menu_width);
	}
	.modules_list.expand_width {
		width: 100%;
	}

	/* TODO @many should be a CSS class or variable, maybe should be the default?
	problem is it doesn't work on .bg, maybe needs a variant/modifier in the name? */
	a:hover {
		background-color: var(--bg_5);
	}
	a:is(:active, .selected) {
		background-color: var(--bg_7);
	}
</style>

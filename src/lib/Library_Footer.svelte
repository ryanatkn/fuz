<script lang="ts">
	import type {Url} from '@ryanatkn/gro/paths.js';
	import {format_host, type Package_Meta} from '@ryanatkn/gro/package_meta.js';

	import Github_Logo from '$lib/Github_Logo.svelte';

	interface Props {
		pkg: Package_Meta;
		root_url?: Url | null;
	}

	const {pkg, root_url = null} = $props<Props>();

	const {repo_url} = $derived(pkg);
</script>

<footer class="panel p_lg">
	<slot />
	<div class="logo">
		<a href={repo_url} rel="me"><slot name="logo"><Github_Logo /></slot></a>
	</div>
	{#if root_url}
		<div class="root_url">
			<a href={root_url} rel="me">{format_host(root_url)}</a>
		</div>
	{/if}
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.logo {
		display: flex;
	}
	.logo a {
		--border_width: var(--border_width_4);
		--border_color: transparent;
		text-decoration: none;
		display: flex;
		border-radius: 50%;
		border: var(--border_width) double var(--border_color);
	}
	.logo a:hover {
		--border_color: var(--color_a_5);
	}
	.root_url {
		/* TODO messy */
		margin-top: var(--space_md);
	}
</style>

<script lang="ts">
	import type {Url} from '@ryanatkn/gro/package_json.js';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import {format_url} from '@ryanatkn/belt/url.js';
	import type {Snippet} from 'svelte';

	import Svg from '$lib/Svg.svelte';
	import {github_logo} from '$lib/logos.js';

	interface Props {
		pkg: Package_Meta;
		root_url?: Url | null;
		logo?: Snippet;
		logo_header?: Snippet;
		logo_footer?: Snippet;
		children?: Snippet;
	}

	const {pkg, root_url = null, logo, logo_header, logo_footer, children}: Props = $props();
</script>

<footer class="box">
	{@render children?.()}
	<div class="logo box panel p_lg shadow_inset_xs">
		{@render logo_header?.()}
		<a href={pkg.repo_url} rel="me" title="source code on GitHub"
			>{#if logo}{@render logo()}{:else}<Svg
					data={github_logo}
					size="var(--icon_size_lg)"
				/>{/if}</a
		>
		{@render logo_footer?.()}
	</div>
	{#if root_url}
		<div class="root_url">
			<a href={root_url}>{format_url(root_url)}</a>
		</div>
	{/if}
</footer>

<style>
	/* TODO probably extract */
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

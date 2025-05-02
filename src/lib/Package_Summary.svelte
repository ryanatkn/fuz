<script lang="ts">
	import {page} from '$app/state';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';
	import {format_url} from '@ryanatkn/belt/url.js';

	import Img_Or_Svg from '$lib/Img_Or_Svg.svelte';

	interface Props {
		pkg: Package_Meta; // TODO normalized version with cached primitives?
		repo_name?: Snippet<[repo_name: string]>;
		logo?: Snippet<[logo_url: string, logo_alt: string]>;
		motto?: Snippet<[motto: string, glyph?: string]>;
		description?: Snippet<[description: string, glyph?: string]>;
		npm_url?: Snippet<[npm_url: string]>;
		homepage_url?: Snippet<[homepage_url: string]>;
		children?: Snippet;
	}

	const {pkg, repo_name, logo, motto, description, npm_url, homepage_url, children}: Props =
		$props();

	const {package_json} = $derived(pkg);
</script>

<div class="package_summary">
	<!-- TODO maybe continue this snippet pattern, or maybe simplify? -->
	<header class="box">
		{#if repo_name}
			{@render repo_name(pkg.repo_name)}
		{:else}
			<div class="repo_name">{pkg.repo_name}</div>
		{/if}
		<!-- TODO maybe add `icon_alt` to package.json -->
		<!-- TODO what about svg logos? maybe a package.json logo url that defaults to favicon? -->
		{#if pkg.logo_url}
			{#if logo}
				{@render logo(pkg.logo_url, pkg.logo_alt)}
			{:else}
				<Img_Or_Svg
					src={pkg.logo_url}
					label={pkg.logo_alt}
					size="var(--size, var(--icon_size_xl2))"
				/>
			{/if}
		{/if}
	</header>
	{#if package_json.motto}
		{#if motto}
			{@render motto(package_json.motto, package_json.glyph)}
		{:else}
			<blockquote class="px_xl">
				{package_json.motto}
				{package_json.glyph}
			</blockquote>
		{/if}
	{/if}
	{#if package_json.description}
		{#if description}
			{@render description(package_json.description, package_json.glyph)}
		{:else}
			<p class="text_align_center">
				{package_json.description}
				{#if !package_json.motto}
					{package_json.glyph}
				{/if}
			</p>
		{/if}
	{/if}
	{@render children?.()}
	{#if pkg.homepage_url}
		{#if homepage_url}
			{@render homepage_url(pkg.homepage_url)}
		{:else}
			<div class="homepage_url">
				<a class="chip" class:selected={pkg.homepage_url === page.url.href} href={pkg.homepage_url}
					>{format_url(pkg.homepage_url)}</a
				>
			</div>
		{/if}
	{/if}
	<div class="links">
		{#if pkg.repo_url}
			<a class="chip" href={pkg.repo_url}>repo</a>
		{/if}
		{#if pkg.changelog_url}
			<a class="chip" title="version" href={pkg.changelog_url}>{package_json.version}</a>
		{/if}
		{#if pkg.npm_url}
			<a class="chip" href={pkg.npm_url}>npm</a>
		{/if}
	</div>
	{#if pkg.npm_url}
		{#if npm_url}
			{@render npm_url(pkg.npm_url)}
		{:else}
			<blockquote class="npm_url">npm i -D {package_json.name}</blockquote>
		{/if}
	{/if}
	<!-- TODO more details behind a `<details>`, including author -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_summary {
		padding: var(--space_lg);
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--max_width, var(--distance_sm));
	}
	header {
		margin-bottom: var(--space_lg);
	}
	.links {
		display: flex;
		margin-bottom: var(--space_lg);
	}
	.homepage_url {
		margin-bottom: var(--space_lg);
	}
	.repo_name {
		font-family: var(--font_serif);
		font-size: var(--size_xl2);
		font-weight: 400;
		text-align: center;
		margin-bottom: var(--space_lg);
	}
	.npm_url {
		font-family: var(--font_mono);
		text-align: center;
	}
	.chip {
		margin-left: var(--space_xs2);
		margin-right: var(--space_xs2);
	}
</style>

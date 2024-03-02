<script lang="ts">
	import {page} from '$app/stores';
	import {format_host, type Package_Meta} from '@ryanatkn/gro/package_meta.js';

	interface Props {
		pkg: Package_Meta; // TODO normalized version with cached primitives?
	}

	const {pkg} = $props<Props>();

	const {package_json, npm_url, repo_name, repo_url, changelog_url, homepage_url} = $derived(pkg);
	const {name, version, description} = $derived(package_json);
</script>

<div class="package_summary">
	<!-- TODO maybe continue this slot pattern, or maybe simplify? -->
	<header class="mb_lg">
		<slot name="repo_name" {repo_name}><div class="repo_name">{repo_name}</div></slot>
	</header>
	{#if description}
		<slot name="description" {description}
			><blockquote class="mb_lg text_align_center">{description}</blockquote></slot
		>
	{/if}
	{#if homepage_url}
		<slot name="homepage_url" {homepage_url}
			><div class="mb_lg">
				<a class="chip" class:selected={homepage_url === $page.url.href} href={homepage_url}
					>{format_host(homepage_url)}</a
				>
			</div></slot
		>
	{/if}
	<div class="box row mb_lg">
		{#if repo_url}
			<a class="chip" href={repo_url}>repo</a>
		{/if}
		{#if changelog_url}
			<a class="chip" title="version" href={changelog_url}>{version}</a>
		{/if}
		{#if npm_url}
			<a class="chip" href={npm_url}>npm</a>
		{/if}
	</div>
	{#if npm_url}
		<slot name="npm_url" {npm_url}><blockquote class="npm_url">npm i -D {name}</blockquote></slot>
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
		max-width: var(--max_width, var(--width_sm));
	}
	.repo_name {
		font-size: var(--size_xl2);
		font-weight: 400;
		text-align: center;
	}
	.npm_url {
		font-family: var(--font_family_mono);
		text-align: center;
	}
	.chip {
		margin-left: var(--space_xs2);
		margin-right: var(--space_xs2);
	}
</style>

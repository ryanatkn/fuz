<script lang="ts">
	import {page} from '$app/state';
	import {format_url} from '@ryanatkn/belt/url.js';
	import type {Snippet} from 'svelte';

	import type {Pkg} from '$lib/pkg.svelte.js';
	import Details from '$lib/Details.svelte';
	import Img_Or_Svg from '$lib/Img_Or_Svg.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import {github_file_url, repo_url_parse, well_known_url} from '$lib/package_helpers.js';
	import {
		module_is_typescript,
		module_is_svelte,
		module_is_css,
		module_is_json,
	} from '$lib/module_helpers.js';

	interface Props {
		pkg: Pkg; // TODO normalized version with cached primitives?
		repo_name?: Snippet<[repo_name: string]>;
		description?: Snippet<[description: string]>;
		motto?: Snippet<[description: string]>;
		npm_url?: Snippet<[npm_url: string]>;
		homepage_url?: Snippet<[homepage_url: string]>;
		children?: Snippet<[pkg: Pkg]>;
	}

	const {pkg, repo_name, description, motto, npm_url, homepage_url, children}: Props = $props();

	// TODO show other data (lines of code)

	const {package_json} = $derived(pkg);

	const repository_url = $derived(repo_url_parse(package_json.repository));
	const license_url = $derived(
		package_json.license && repository_url ? github_file_url(repository_url, 'LICENSE') : null,
	);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

<div class="package_detail">
	<!-- TODO maybe continue this snippet pattern, or maybe simplify? -->
	<div class="info">
		<div class="display_flex flex_1">
			<!-- add yet another wrapper so it flows like we want -->
			<div>
				<header>
					{#if repo_name}
						{@render repo_name(pkg.repo_name)}
					{:else}
						<div class="repo_name">
							{pkg.repo_name}{#if package_json.glyph}&nbsp;{package_json.glyph}{/if}
						</div>
					{/if}
				</header>
				{@render children?.(pkg)}
				{#if package_json.description}
					{#if description}
						{@render description(package_json.description)}
					{:else}
						<div class="description">{package_json.description}</div>
					{/if}
				{/if}
				{#if package_json.motto}
					{#if motto}
						{@render motto(package_json.motto)}
					{:else}
						<div class="motto">{package_json.motto}</div>
					{/if}
				{/if}
				{#if pkg.npm_url}
					{#if npm_url}
						{@render npm_url(pkg.npm_url)}
					{:else}
						<blockquote class="npm_url">npm i -D {package_json.name}</blockquote>
					{/if}
				{/if}
				<!-- TODO accessible HTML -->
				<section class="properties">
					{#if pkg.homepage_url}
						{#if homepage_url}
							{@render homepage_url(pkg.homepage_url)}
						{:else}
							<span class="title">homepage</span>
							<div class="content">
								<a
									class="chip"
									class:selected={pkg.homepage_url === page.url.href}
									href={pkg.homepage_url}
								>
									{#if pkg.logo_url}
										<Img_Or_Svg
											src={pkg.logo_url}
											label={pkg.logo_alt}
											size="16px"
											attrs={{class: 'mr_xs'}}
										/>
									{/if}
									{format_url(pkg.homepage_url)}
								</a>
							</div>
						{/if}
					{/if}
					{#if pkg.repo_url}
						<span class="title">repo</span>
						<div class="content">
							<a class="chip" title="repo" href={pkg.repo_url}>{pkg.owner_name}/{pkg.repo_name}</a>
						</div>
					{/if}
					{#if pkg.npm_url}
						<span class="title">npm</span>
						<div class="content">
							<a class="chip" title="npm" href={pkg.npm_url}>{package_json.name}</a>
						</div>
					{/if}
					{#if pkg.changelog_url}
						<span class="title">version</span>
						<div class="content">
							<a class="chip" title="version" href={pkg.changelog_url}>{package_json.version}</a>
						</div>
					{/if}
					{#if license_url}
						<span class="title">license</span>
						<div class="content">
							<a class="chip" title="license" href={license_url}>{package_json.license}</a>
						</div>
					{/if}
					{#if pkg.homepage_url}
						<span class="title">data</span>
						<div class="content">
							<a class="chip" title="data" href={well_known_url(pkg.homepage_url, 'package.json')}
								>package.json</a
							>
							<a class="chip" title="data" href={well_known_url(pkg.homepage_url, 'src.json')}
								>src.json</a
							>
						</div>
					{/if}
				</section>
			</div>
		</div>
		{#if pkg.logo_url}
			<div class="logo">
				<Img_Or_Svg
					src={pkg.logo_url}
					label={pkg.logo_alt}
					size="var(--font_size, var(--icon_size_xl2))"
				/>
			</div>
		{/if}
	</div>
	{#if pkg.modules.length > 0 && pkg.repo_url}
		<section>
			<menu class="unstyled">
				{#each pkg.modules as module (module.path)}
					<!-- TODO improve rendering and enrich data - start with the type (not just extension - mime?) -->
					<li
						class="module"
						class:ts={module_is_typescript(module.path)}
						class:svelte={module_is_svelte(module.path)}
						class:css={module_is_css(module.path)}
						class:json={module_is_json(module.path)}
					>
						<div class="module_content">
							<Module_Link module_path={module.path}>
								{module.path}
							</Module_Link>
							{#if module.identifiers.length > 0}
								<ul class="identifiers unstyled">
									{#each module.identifiers as identifier (identifier.name)}
										<li>
											<Identifier_Link name={identifier.name} />
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</li>
				{/each}
			</menu>
		</section>
	{/if}

	<section>
		<Details>
			{#snippet summary()}raw package metadata{/snippet}
			<pre><code>{JSON.stringify(pkg, null, '\t')}</code></pre>
		</Details>
	</section>

	<!-- TODO more details behind a `<details>`, including author -->
	<!-- TODO render exports, then link to source, then tomes -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_detail {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: var(--max_width, var(--distance_md));
	}

	.info {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.logo {
		flex-shrink: 0;
		padding: 0 var(--space_xl);
	}

	header {
		margin-bottom: var(--space_lg);
	}

	section {
		width: 100%;
		margin-bottom: var(--space_lg);
	}
	.repo_name {
		font-family: var(--font_family_serif);
		font-size: var(--font_size_xl2);
		font-weight: 400;
	}
	.npm_url {
		font-family: var(--font_family_mono);
		text-align: center;
		margin-bottom: var(--space_lg);
	}
	.description {
		margin-bottom: var(--space_lg);
	}
	.motto {
		margin-bottom: var(--space_lg);
	}
	.properties {
		display: grid;
		grid-template-columns: 80px 1fr;
		gap: var(--space_xs2);
		margin-bottom: var(--space_lg);
	}
	.title {
		text-align: right;
	}
	.content {
		display: flex;
	}
	.content a {
		display: flex;
		align-items: center;
		margin-left: var(--space_xs);
	}
	.module {
		margin-bottom: var(--space_xs);
		--link_color: var(--text_color_3);
	}
	.module_content {
		background-color: var(--bg_3);
		border-radius: var(--border_radius_sm);
		padding: var(--space_xs);
	}
	.ts {
		--link_color: var(--color_a_5);
	}
	.svelte {
		--link_color: var(--color_e_5);
	}
	.css {
		--link_color: var(--color_b_5);
	}
	.json {
		--link_color: var(--color_f_5);
	}
	/* TODO extract */
	.identifiers {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--space_xs) 0;
		padding-top: var(--space_xs);
	}
</style>

<script lang="ts">
	import {page} from '$app/state';
	import {ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import {format_url} from '@ryanatkn/belt/url.js';
	import type {Snippet} from 'svelte';

	import type {Pkg} from '$lib/pkg.js';
	import Details from '$lib/Details.svelte';
	import Img_Or_Svg from '$lib/Img_Or_Svg.svelte';
	import Declaration_Link from '$lib/Declaration_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';

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

	const {package_json, src_json} = $derived(pkg);
	const {modules: pkg_modules} = $derived(src_json);

	// TODO helper (zod parser?)
	const repository_url = $derived(
		package_json.repository
			? strip_start(
					strip_end(
						strip_end(
							typeof package_json.repository === 'string'
								? package_json.repository
								: package_json.repository.url,
							'.git',
						),
						'/',
					),
					'git+',
				)
			: null,
	);
	const license_url = $derived(
		package_json.license && repository_url ? repository_url + '/blob/main/LICENSE' : null,
	);

	const pkg_exports_keys = $derived(src_json.modules && Object.keys(src_json.modules)); // TODO hacky, see usage

	// TODO helper, look at existing code
	const modules = $derived(
		src_json.modules
			? Object.keys(src_json.modules).map((k) => {
					const v = strip_start(k, './');
					return v === '.' ? 'index.js' : v;
				})
			: null,
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
							<a
								class="chip"
								title="data"
								href="{ensure_end(pkg.homepage_url, '/')}.well-known/package.json">package.json</a
							>
							<a
								class="chip"
								title="data"
								href="{ensure_end(pkg.homepage_url, '/')}.well-known/src.json">src.json</a
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
	{#if modules && pkg.repo_url}
		<section>
			<menu class="unstyled">
				{#each modules as module_name, i (module_name)}
					<!-- TODO improve rendering and enrich data - start with the type (not just extension - mime?) -->
					{@const exports_key = pkg_exports_keys?.[i]}
					{@const pkg_module = exports_key ? pkg_modules?.[exports_key] : undefined}
					{@const declarations = pkg_module?.declarations?.filter((d) => d.name !== 'default')}
					<li
						class="module"
						class:ts={module_name.endsWith('.js')}
						class:svelte={module_name.endsWith('.svelte')}
						class:css={module_name.endsWith('.css')}
						class:json={module_name.endsWith('.json')}
					>
						<div class="module_content">
							<Module_Link
								module_path={exports_key || `./${module_name}`}
								src_module={pkg_module}
								pkg_name={package_json.name}
								repo_url={pkg.repo_url}
								homepage_url={pkg.homepage_url ?? undefined}
							>
								{module_name}
							</Module_Link>
							{#if declarations?.length}
								<ul class="declarations unstyled">
									{#each declarations as decl (decl.name)}
										<li>
											<Declaration_Link
												{decl}
												module_path={exports_key || `./${module_name}`}
												pkg_name={package_json.name}
												repo_url={pkg.repo_url}
												homepage_url={pkg.homepage_url ?? undefined}
											/>
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
	.declarations {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--space_xs) 0;
		padding-top: var(--space_xs);
	}
</style>

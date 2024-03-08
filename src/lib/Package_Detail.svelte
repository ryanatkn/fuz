<script lang="ts">
	import {page} from '$app/stores';
	import {ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import {format_host, type Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	interface Props {
		pkg: Package_Meta; // TODO normalized version with cached primitives?
		repo_name?: Snippet<[repo_name: string, pkg: Package_Meta]>;
		description?: Snippet<[description: string, pkg: Package_Meta]>;
		npm_url?: Snippet<[npm_url: string, pkg: Package_Meta]>;
		homepage_url?: Snippet<[homepage_url: string, pkg: Package_Meta]>;
		children?: Snippet<[pkg: Package_Meta]>;
	}

	const {pkg, repo_name, description, npm_url, homepage_url, children} = $props<Props>();

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

	// TODO refactor
	const to_source_url = (repo_url: string, module_name: string): string =>
		repo_url +
		'/blob/main/src/lib/' +
		(module_name.endsWith('.js') ? module_name.slice(0, -3) + '.ts' : module_name);

	const pkg_exports_keys = $derived(package_json.exports && Object.keys(package_json.exports)); // TODO hacky, see usage

	// TODO helper, look at existing code
	const modules = $derived(
		package_json.exports
			? Object.keys(package_json.exports).map((k) => {
					const v = strip_start(k, './');
					return v === '.' ? 'index.js' : v;
				})
			: null,
	);
</script>

<div class="package_detail">
	<!-- TODO maybe continue this slot pattern, or maybe simplify? -->
	<header class="mb_lg">
		{#if repo_name}
			{@render repo_name(pkg.repo_name, pkg)}
		{:else}
			<div class="repo_name">
				{pkg.repo_name}{#if package_json.icon}{' '}{package_json.icon}{/if}
			</div>
		{/if}
	</header>
	{#if children}{@render children(pkg)}{/if}
	{#if package_json.description}
		{#if description}
			{@render description(package_json.description, pkg)}
		{:else}
			<div class="mb_lg">{package_json.description}</div>
		{/if}
	{/if}
	{#if pkg.npm_url}
		{#if npm_url}
			{@render npm_url(pkg.npm_url, pkg)}
		{:else}
			<blockquote class="npm_url mb_lg">npm i -D {package_json.name}</blockquote>
		{/if}
	{/if}
	<section class="properties w_100 mb_lg">
		<div class="grid mb_lg">
			{#if pkg.homepage_url}
				{#if homepage_url}
					{@render homepage_url(pkg.homepage_url, pkg)}
				{:else}
					<span class="text_align_right">homepage</span>
					<div class="row">
						<a
							class="chip row ml_xs"
							class:selected={pkg.homepage_url === $page.url.href}
							href={pkg.homepage_url}
						>
							<img
								src="{ensure_end(pkg.homepage_url, '/')}favicon.png"
								alt="favicon to homepage at {pkg.homepage_url}"
								style:width="16px"
								style:height="16px"
								style:margin-right="var(--space_xs)"
							/>
							{format_host(pkg.homepage_url)}
						</a>
					</div>
				{/if}
			{/if}
			{#if pkg.repo_url}
				<span class="text_align_right">repo</span>
				<div class="row">
					<a class="chip ml_xs" title="repo" href={pkg.repo_url}>{repo_name}</a>
				</div>
			{/if}
			{#if pkg.npm_url}
				<span class="text_align_right">npm</span>
				<div class="row">
					<a class="chip ml_xs" title="npm" href={pkg.npm_url}>{package_json.name}</a>
				</div>
			{/if}
			{#if pkg.changelog_url}
				<span class="text_align_right">version</span>
				<div class="row">
					<a class="chip ml_xs" title="version" href={pkg.changelog_url}>{package_json.version}</a>
				</div>
			{/if}
			{#if license_url}
				<span class="text_align_right">license</span>
				<div class="row">
					<a class="chip ml_xs" title="license" href={license_url}>{package_json.license}</a>
				</div>
			{/if}
			{#if pkg.homepage_url}
				<span class="text_align_right">data</span>
				<div class="row">
					<a
						class="chip ml_xs"
						title="data"
						href="{ensure_end(pkg.homepage_url, '/')}.well-known/package.json">package.json</a
					>
					<a
						class="chip ml_xs"
						title="data"
						href="{ensure_end(pkg.homepage_url, '/')}.well-known/src.json">src.json</a
					>
				</div>
			{/if}
		</div>
	</section>
	{#if modules && pkg.repo_url}
		<section class="w_100 mb_lg">
			<menu>
				{#each modules as module_name, i (module_name)}
					{@const source_url = to_source_url(pkg.repo_url, module_name)}
					{@const exports_key = pkg_exports_keys?.[i]}
					{@const pkg_module = exports_key && pkg_modules?.[exports_key]}
					<li
						class="module"
						class:ts={module_name.endsWith('.js')}
						class:svelte={module_name.endsWith('.svelte')}
						class:css={module_name.endsWith('.css')}
						class:json={module_name.endsWith('.json')}
					>
						<div class="bg_3 radius_sm p_xs">
							<a class="chip" href={source_url}>{module_name}</a>
							{#if pkg_module?.declarations.length}
								<ul class="declarations pt_xs">
									{#each pkg_module.declarations as { name, kind }}
										<li class="declaration chip {kind}_declaration">
											{name}
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

	<section class="w_100 mb_lg">
		<details>
			<summary>raw data for <code>pkg: Package_Meta</code></summary>
			<pre><code>{JSON.stringify(pkg, null, '\t')}</code></pre>
		</details>
	</section>

	<!-- TODO more details behind a `<details>`, including author -->
	<!-- TODO render exports, then link to source, then tomes -->
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.package_detail {
		padding: var(--space_lg);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: var(--max_width, var(--width_md));
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
	.grid {
		grid-template-columns: 80px 1fr;
		gap: var(--space_xs2);
	}
	pre {
		display: flex;
		overflow: auto;
		width: 100%;
	}
	.module {
		margin-bottom: var(--space_xs);
		--link_color: var(--text_2);
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
	}
	.declaration {
		font-family: var(--font_family_mono);
		font-size: var(--size_sm);
		margin-left: var(--space_xs2);
		margin-right: var(--space_xs2);
	}
	.variable_declaration {
		color: var(--color_d_5);
	}
	.function_declaration {
		color: var(--color_c_5);
	}
	.type_declaration {
		color: var(--color_g_5);
	}
	.class_declaration {
		color: var(--color_f_5);
	}
</style>

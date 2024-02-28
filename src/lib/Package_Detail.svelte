<script lang="ts">
	import {page} from '$app/stores';
	import {ensure_end, strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import {format_host, type Package_Meta} from '@ryanatkn/gro/package_meta.js';

	export let pkg: Package_Meta; // TODO normalized version with cached primitives?

	// TODO show other data (lines of code)

	$: ({package_json, src_json, npm_url, repo_name, repo_url, changelog_url, homepage_url} = pkg);
	$: ({name, version, description, icon, license, repository, exports: pkg_exports} = package_json);
	$: ({modules: pkg_modules} = src_json);

	// TODO helper (zod parser?)
	$: repository_url = repository
		? strip_start(
				strip_end(
					strip_end(typeof repository === 'string' ? repository : repository.url, '.git'),
					'/',
				),
				'git+',
			)
		: null;
	$: license_url = license && repository_url ? repository_url + '/blob/main/LICENSE' : null;

	// TODO refactor
	const to_source_url = (repo_url: string, module_name: string): string =>
		repo_url +
		'/blob/main/src/lib/' +
		(module_name.endsWith('.js') ? module_name.slice(0, -3) + '.ts' : module_name);

	$: pkg_exports_keys = pkg_exports && Object.keys(pkg_exports); // TODO hacky, see usage

	// TODO helper, look at existing code
	$: modules = pkg_exports
		? Object.keys(pkg_exports).map((k) => {
				const v = strip_start(k, './');
				return v === '.' ? 'index.js' : v;
			})
		: null;
</script>

<div class="package_detail">
	<!-- TODO maybe continue this slot pattern, or maybe simplify? -->
	<header class="spaced">
		<slot name="repo_name" {repo_name}
			><div class="repo_name">
				{repo_name}{#if icon}{' '}{icon}{/if}
			</div></slot
		>
	</header>
	<slot />
	{#if description}
		<slot name="description" {description}><div class="spaced">{description}</div></slot>
	{/if}
	{#if npm_url}
		<slot name="npm_url" {npm_url}
			><blockquote class="npm_url spaced">npm i -D {name}</blockquote></slot
		>
	{/if}
	<section class="properties width_full spaced">
		{#if homepage_url}
			<slot name="homepage_url" {homepage_url}>
				<div class="row">
					homepage:
					<a class="chip row" class:selected={homepage_url === $page.url.href} href={homepage_url}>
						<img
							src="{ensure_end(homepage_url, '/')}favicon.png"
							alt="favicon to homepage at {homepage_url}"
							style:width="16px"
							style:height="16px"
							style:margin-right="var(--space_xs)"
						/>
						{format_host(homepage_url)}
					</a>
				</div>
			</slot>
		{/if}
		{#if repo_url}
			<div class="row">
				repo: <a class="chip" title="repo" href={repo_url}>{repo_name}</a>
			</div>
		{/if}
		{#if npm_url}
			<div class="row">npm: <a class="chip" title="npm" href={npm_url}>{name}</a></div>
		{/if}
		{#if changelog_url}
			<div class="row">
				version: <a class="chip" title="version" href={changelog_url}>{version}</a>
			</div>
		{/if}
		{#if license_url}
			<div class="row">
				license: <a class="chip" title="license" href={license_url}>{license}</a>
			</div>
		{/if}
		{#if homepage_url}
			<section class="row spaced">
				data:
				<a class="chip" title="data" href="{ensure_end(homepage_url, '/')}.well-known/package.json"
					>package.json</a
				>
				<a class="chip" title="data" href="{ensure_end(homepage_url, '/')}.well-known/src.json"
					>src.json</a
				>
			</section>
		{/if}
	</section>
	{#if modules && repo_url}
		<section class="width_full spaced">
			<menu>
				{#each modules as module_name, i (module_name)}
					{@const source_url = to_source_url(repo_url, module_name)}
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

	<section class="width_full spaced">
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
	pre {
		display: flex;
		overflow: auto;
		width: 100%;
	}
	.properties .row {
		margin-bottom: var(--space_xs);
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

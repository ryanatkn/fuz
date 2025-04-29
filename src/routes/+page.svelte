<script lang="ts">
	import {base} from '$app/paths';

	import Docs_Footer from '$lib/Docs_Footer.svelte';
	import Card from '$lib/Card.svelte';
	import {pkg_context} from '$routes/pkg.js';
	import Svg, {type Svg_Data} from '$lib/Svg.svelte';
	import {
		fuz_logo,
		fuz_code_logo,
		fuz_blog_logo,
		fuz_mastodon_logo,
		fuz_gitops_logo,
		fuz_template_logo,
		gro_logo,
		moss_logo,
	} from '$lib/logos.js';
	import Hidden_Personal_Links from '$lib/Hidden_Personal_Links.svelte';

	const pkg = pkg_context.get();

	interface Project_Item {
		name: string;
		url: string;
		logo: Svg_Data;
		description: string;
		glyph: string;
	}

	// prettier-ignore
	const project_items: Array<Project_Item> = [ 
		{name: 'moss', url: 'https://moss.ryanatkn.com/', logo: moss_logo, description: 'CSS framework and design system', glyph: '🌿'},
		{name: 'gro', url: 'https://gro.ryanatkn.com/', logo: gro_logo, description: 'task runner and toolkit extending SvelteKit', glyph: '🌰'},
		{name: 'fuz_template', url: 'https://template.fuz.dev/', logo: fuz_template_logo, description: 'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro', glyph: '❄'},
		{name: 'fuz_blog', url: 'https://blog.fuz.dev/', logo: fuz_blog_logo, description: 'blog software from scratch with SvelteKit', glyph: '🖊️'},
		{name: 'fuz_mastodon', url: 'https://mastodon.fuz.dev/', logo: fuz_mastodon_logo, description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz', glyph: '🦣'},
		{name: 'fuz_code', url: 'https://code.fuz.dev/', logo: fuz_code_logo, description: 'syntax styling utilities and components for TypeScript, Svelte, SvelteKit', glyph: '🎨'},
		{name: 'fuz_gitops', url: 'https://gitops.fuz.dev/', logo: fuz_gitops_logo, description: 'a tool for managing many repos', glyph: '🪄'},
	];
</script>

<main class="box w_100">
	<div class="box width_md mb_xl9">
		<section class="box">
			<h1 class="mt_xl4 mb_lg">fuz</h1>
			<div class="box mb_xl"><Svg data={fuz_logo} size="var(--icon_size_xl2)" /></div>
			<blockquote class="shadow_bottom_sm px_xl bg">friendly user zystem 🧶</blockquote>
			<div class="mb_lg p_xs2 shadow_md radius_sm">
				<div class="width_sm panel p_lg shadow_inset_xs bg">
					<p>
						Fuz is a Svelte UI library with components and helpers for making modern websites. It
						builds on my CSS framework <a href="https://moss.ryanatkn.com/">Moss</a>, which is based
						on CSS custom properties, and Fuz continues those patterns. It's in early alpha and will
						have many breaking changes.
					</p>
					<p>
						Fuz is being made to support <a href="https://www.zzz.software/">Zzz</a> and
						<a href="https://www.ryanatkn.com/table">my other projects</a>
						that focus on end-users. Fuz emphasizes capability and efficiency and tries to be simple
						for those goals. Compared to most UI libraries, Fuz has fewer features and more opinions,
						but the eventual goal is to be fully-featured with high flexibility.
					</p>
					<p>
						To learn more see <a href="{base}/docs">the docs</a>
						and <a href="https://github.com/ryanatkn/fuz#readme">readme</a>. Feel free to take the
						ideas and <a href="https://github.com/ryanatkn/fuz">code</a> for your own purposes.
					</p>
				</div>
			</div>
		</section>
		<section>
			<!-- TODO add color variants -->
			<Card href="{base}/docs">docs{#snippet icon()}🧶{/snippet}</Card>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<!-- TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy -->
			<h2 class="mt_0 mb_xl2 px_md">other packages</h2>
			<menu class="unstyled size_lg">
				{#each project_items as project_item (project_item.name)}
					{@render package_thumbnail(project_item)}
				{/each}
			</menu>
		</section>
		<section>
			<Docs_Footer {pkg}>
				{#snippet logo_header()}
					<a href="{base}/about" class="mb_xs">about</a>
				{/snippet}
				<Hidden_Personal_Links />
			</Docs_Footer>
		</section>
	</div>
</main>

{#snippet package_thumbnail(project_item: Project_Item)}
	<a class="thumbnail row bg px_md py_xs radius_sm mb_lg" href={project_item.url}
		><Svg shrink={false} data={project_item.logo} size="var(--icon_size_lg)" />
		<div class="pl_lg width_sm">
			<div class="thumbnail_name">{project_item.name}</div>
			<div class="thumbnail_description size_md text_color_3 font_weight_500">
				{project_item.description}
				{project_item.glyph}
			</div>
		</div></a
	>
{/snippet}

<style>
	.thumbnail {
		box-shadow: var(--shadow_bottom_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
	}
	.thumbnail:hover {
		box-shadow: var(--shadow_bottom_sm)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);

		/* show the underline only on the name, not the description */
		text-decoration: none;
		.thumbnail_name {
			text-decoration: underline;
		}
		.thumbnail_description {
			text-decoration: none;
		}
	}
	.thumbnail:active {
		box-shadow: var(--shadow_top_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
	}
</style>

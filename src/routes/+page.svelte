<script lang="ts">
	import {base} from '$app/paths';

	import Library_Footer from '$lib/Library_Footer.svelte';
	import Card from '$lib/Card.svelte';
	import {get_pkg} from '$routes/pkg.js';
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';
	import Fuzling from '$lib/Fuzling.svelte';
	import Hidden_Personal_Links from '$lib/Hidden_Personal_Links.svelte';

	const pkg = get_pkg();
</script>

<main class="box w_100">
	<div class="box width_md">
		<section class="box">
			<h1 class="mt_xl4 mb_lg">fuz</h1>
			<div class="box mb_xl"><Fuz_Logo size="var(--icon_size_xl2)" /></div>
			<blockquote class="shadow_inset_xs px_xl bg">friendly user zystem 🧶</blockquote>
			<div class="width_sm panel p_lg shadow_inset_xs bg">
				<p>
					Fuz is a Svelte UI library with components and helpers for making friendly and helpful
					websites. It builds on my CSS framework <a href="https://moss.ryanatkn.com/">Moss</a>,
					which is based on CSS custom properties, and Fuz continues those patterns. It's in early
					alpha and will have many breaking changes.
				</p>
				<p>
					Fuz is being made to support <a href="https://zzz.ryanatkn.com/">Zzz</a> and
					<a href="https://www.ryanatkn.com/table">my other projects</a>
					that focus on end-users. Fuz emphasizes capability and efficiency and tries to be simple for
					those goals. Compared to most UI libraries, Fuz has fewer features and more opinions, but the
					eventual goal is to be fully-featured with high flexibility.
				</p>
				<p>
					To learn more see <a href="{base}/library">the docs</a>
					and <a href="https://github.com/ryanatkn/fuz#readme">readme</a>. Feel free to take the
					ideas and <a href="https://github.com/ryanatkn/fuz">code</a> for your own purposes.
				</p>
			</div>
		</section>
		<section>
			<!-- TODO add color variants -->
			<Card href="{base}/library">library{#snippet icon()}🧶{/snippet}</Card>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<!-- TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy -->
			<h2 class="mt_0 mb_xl2 px_md">other packages</h2>
			<menu class="unstyled size_lg">
				<a
					class="row chip bg shadow_outset_xs px_md py_xs radius_sm mb_lg"
					href="https://template.fuz.dev/"
					><Fuzling size="var(--icon_size_lg)" /> <span class="ml_lg">fuz_template</span></a
				>
				<a
					class="row chip bg shadow_outset_xs px_md py_xs radius_sm mb_lg"
					href="https://blog.fuz.dev/"
					><Fuz_Logo project="fuz_blog" size="var(--icon_size_lg)" />
					<span class="ml_lg">fuz_blog</span></a
				>
				<a
					class="row chip bg shadow_outset_xs px_md py_xs radius_sm mb_lg"
					href="https://mastodon.fuz.dev/"
					><Fuz_Logo project="fuz_mastodon" size="var(--icon_size_lg)" />
					<span class="ml_lg">fuz_mastodon</span></a
				>
				<a
					class="row chip bg shadow_outset_xs px_md py_xs radius_sm mb_lg"
					href="https://code.fuz.dev/"
					><Fuz_Logo project="fuz_code" size="var(--icon_size_lg)" />
					<span class="ml_lg">fuz_code</span></a
				>
				<a class="row chip bg shadow_outset_xs px_md py_xs radius_sm" href="https://gitops.fuz.dev/"
					><Fuz_Logo project="fuz_gitops" size="var(--icon_size_lg)" />
					<span class="ml_lg">fuz_gitops</span></a
				>
			</menu>
		</section>
		<section>
			<Library_Footer {pkg}>
				{#snippet logo_header()}
					<a href="{base}/about" class="mb_xs">about</a>
				{/snippet}
				<Hidden_Personal_Links />
			</Library_Footer>
		</section>
	</div>
</main>

<style>
	a.chip:active {
		box-shadow: var(--shadow_inset_xs) var(--shadow_color_xs);
	}
</style>

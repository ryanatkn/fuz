<script lang="ts">
	import {base} from '$app/paths';

	import Library_Footer from '$lib/Library_Footer.svelte';
	import Card from '$lib/Card.svelte';
	import {get_pkg} from '$routes/pkg.js';
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';

	const pkg = get_pkg();
</script>

<main class="box w_100">
	<div class="box width_md">
		<section class="box">
			<h1 class="mt_xl4 mb_lg">fuz</h1>
			<div class="box mb_xl"><Fuz_Logo size="120px" /></div>
			<blockquote class="shadow_inset_sm px_xl">friendly user zystem</blockquote>
			<div class="width_sm panel p_xs shadow_inset_sm bg">
				<div class="panel p_lg shadow_inset_sm bg">
					<p>
						Fuz is a Svelte UI library with components and helpers for making excellent websites.
						It's in early alpha and it will go through many breaking changes.
					</p>
					<p>
						Fuz is being made to support <a href="https://www.ryanatkn.com/table"
							>my other projects</a
						>
						that focus on end-users. Fuz emphasizes capability and efficiency and tries to be simple
						for those goals. Compared to most UI libraries, Fuz has fewer features and more opinions.
					</p>
					<p>
						To learn more see <a href="{base}/library">the docs</a>
						and <a href="https://github.com/ryanatkn/fuz#readme">readme</a>. Feel free to take the
						ideas and <a href="https://github.com/ryanatkn/fuz">code</a> for your own purposes.
					</p>
				</div>
			</div>
		</section>
		<section>
			<Card href="{base}/library">library{#snippet icon()}🧶{/snippet}</Card>
		</section>
		<section class="panel p_xs shadow_inset_xs bg">
			<div class="panel p_lg shadow_inset_sm bg">
				<!-- TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy -->
				<h2 class="mt_0 mb_xl2 px_md">other packages</h2>
				<menu class="unstyled">
					<a
						class="chip bg shadow_outset_xs px_md py_xs2 radius_sm"
						href="https://template.fuz.dev/">fuz_template</a
					>
					<a class="chip bg shadow_outset_xs px_md py_xs2 radius_sm" href="https://gitops.fuz.dev/"
						>fuz_gitops</a
					>
					<a class="chip bg shadow_outset_xs px_md py_xs2 radius_sm" href="https://code.fuz.dev/"
						>fuz_code</a
					>
					<a
						class="chip bg shadow_outset_xs px_md py_xs2 radius_sm"
						href="https://mastodon.fuz.dev/">fuz_mastodon</a
					>
				</menu>
			</div>
		</section>
		<section>
			<Library_Footer {pkg}>
				{#snippet logo_header()}
					<a href="{base}/about" class="mb_xs">about</a>
				{/snippet}
				<div hidden>
					@ryanatkn@hci.social on <a rel="me" href="https://hci.social/@ryanatkn">Mastodon</a>
				</div>
				<div hidden>
					@webdevladder@mastodon.social on <a rel="me" href="https://mastodon.social/@webdevladder"
						>Mastodon</a
					>
				</div></Library_Footer
			>
		</section>
	</div>
</main>

<style>
	menu {
		width: 100%;
		display: flex;
		gap: var(--space_lg);
		flex-direction: column;
		align-items: flex-start;
		font-size: var(--size_lg);
	}
	a.chip:active {
		box-shadow: var(--shadow_inset_sm);
	}
</style>

<script lang="ts">
	import {base} from '$app/paths';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import Library_Footer from '$lib/Library_Footer.svelte';
	import Card from '$lib/Card.svelte';
	import {package_json, src_json} from '$routes/package.js';

	// TODO set in context
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main class="box width_full">
	<div class="box width_md">
		<section class="prose box">
			<h1>fuz</h1>
			<blockquote>friendly user zystem</blockquote>
			<div class="width_sm panel padded_md">
				<p>
					Fuz is a Svelte UI library and CSS design system. It's in early alpha and there will be
					many breaking changes.
				</p>
				<p>
					Fuz is being made to support <a href="https://www.ryanatkn.com/table">my other projects</a
					>
					that focus on end-users. Fuz emphasizes capability and efficiency and tries to be simple for
					those goals. Compared to most UI libraries, Fuz has fewer features and more opinions, and it
					has some unusual features like
					<a href="https://www.fuz.dev/library/Contextmenu">the contextmenu</a>.
				</p>
				<p>
					To learn more see <a href="https://www.fuz.dev/library">the docs</a>
					and <a href="https://github.com/ryanatkn/fuz#readme">readme</a>. Feel free to take the
					ideas and <a href="https://github.com/ryanatkn/fuz">code</a> for your own purposes.
				</p>
			</div>
		</section>
		<section>
			<Card href="{base}/library">library<svelte:fragment slot="icon">🧶</svelte:fragment></Card>
		</section>
		<section class="panel padded_lg">
			<!-- TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy -->
			<h2 class="spaced">other packages</h2>
			<menu>
				<a class="chip" href="https://template.fuz.dev/">fuz_template</a>
				<a class="chip" href="https://gitops.fuz.dev/">fuz_gitops</a>
				<a class="chip" href="https://code.fuz.dev/">fuz_code</a>
				<a class="chip" href="https://mastodon.fuz.dev/">fuz_mastodon</a>
			</menu>
		</section>
		<section>
			<Library_Footer {pkg} />
		</section>
	</div>
</main>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing_5);
	}
	menu {
		width: 100%;
		display: flex;
		gap: var(--spacing_lg);
		flex-direction: column;
		align-items: center;
		font-size: var(--size_lg);
	}
</style>

<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Svg from '$lib/Svg.svelte';
	import {
		zzz_logo,
		gro_logo,
		fuz_logo,
		moss_logo,
		fuz_code_logo,
		fuz_blog_logo,
		fuz_mastodon_logo,
		fuz_gitops_logo,
		webdevladder_logo,
		earbetter_logo,
		spiderspace_logo,
		github_logo,
		mdn_logo,
		fuz_template_logo,
		belt_logo,
	} from '$lib/logos.js';

	const LIBRARY_ITEM_NAME = 'logos';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		<ul class="box text_align_center unstyled">
			<li>
				<Code content={`<Svg data={zzz_logo} />`} />
				<a href="https://zzz.ryanatkn.com/"><Svg data={zzz_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={moss_logo} />`} />
				<a href="https://moss.ryanatkn.com/"><Svg data={moss_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={belt_logo} />`} />
				<a href="https://belt.ryanatkn.com/"><Svg data={belt_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={gro_logo} />`} />
				<a href="https://gro.ryanatkn.com/"><Svg data={gro_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={fuz_logo} />`} />
				<a href="https://www.fuz.dev/"><Svg data={fuz_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={webdevladder_logo} />`} />
				<a href="https://www.webdevladder.net/"
					><Svg data={webdevladder_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={fuz_blog_logo} />`} />
				<a href="https://blog.fuz.dev/"><Svg data={fuz_blog_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={fuz_mastodon_logo} />`} />
				<a href="https://mastodon.fuz.dev/"
					><Svg data={fuz_mastodon_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={fuz_code_logo} />`} />
				<a href="https://code.fuz.dev/"><Svg data={fuz_code_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={fuz_gitops_logo} />`} />
				<a href="https://gitops.fuz.dev/"
					><Svg data={fuz_gitops_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={fuz_template_logo} />`} />
				<a href="https://template.fuz.dev/"
					><Svg data={fuz_template_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={earbetter_logo} />`} />
				<a href="https://earbetter.ryanatkn.com/"
					><Svg data={earbetter_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={spiderspace_logo} />`} />
				<a href="https://www.spiderspace.org/"
					><Svg data={spiderspace_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={github_logo} />`} />
				<a href="https://github.com/"
					><Svg data={github_logo} fill="var(--text_color_2)" size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Svg data={mdn_logo} />`} />
				<a href="https://developer.mozilla.org/"
					><Svg data={mdn_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
		</ul>
	</section>
</Tome_Content>

<style>
	li {
		margin-bottom: var(--space_xl5);
	}
</style>

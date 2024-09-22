<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';
	import Mdn_Logo from '$lib/Mdn_Logo.svelte';
	import Moss_Logo from '$lib/Moss_Logo.svelte';
	import Svg from '$lib/Svg.svelte';
	import {
		zzz_logo,
		gro_logo,
		webdevladder_logo,
		earbetter_logo,
		spiderspace_logo,
		github_logo,
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
				<Code content={`<Moss_Logo />`} />
				<a href="https://moss.ryanatkn.com/"><Moss_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={gro_logo} />`} />
				<a href="https://gro.ryanatkn.com/"><Svg data={gro_logo} size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Fuz_Logo />`} />
				<a href="https://www.fuz.dev/"><Fuz_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Svg data={webdevladder_logo} />`} />
				<a href="https://www.webdevladder.net/"
					><Svg data={webdevladder_logo} size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Fuz_Logo project="fuz_code" />`} />
				<a href="https://code.fuz.dev/"
					><Fuz_Logo project="fuz_code" size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Fuz_Logo project="fuz_blog" />`} />
				<a href="https://blog.fuz.dev/"
					><Fuz_Logo project="fuz_blog" size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Fuz_Logo project="fuz_mastodon" />`} />
				<a href="https://mastodon.fuz.dev/"
					><Fuz_Logo project="fuz_mastodon" size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Fuz_Logo project="fuz_gitops" />`} />
				<a href="https://gitops.fuz.dev/"
					><Fuz_Logo project="fuz_gitops" size="var(--icon_size_xl3)" /></a
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
				<Code content={`<Mdn_Logo />`} />
				<a href="https://developer.mozilla.org/"><Mdn_Logo size="var(--icon_size_xl3)" /></a>
			</li>
		</ul>
	</section>
</Tome_Content>

<style>
	li {
		margin-bottom: var(--space_xl5);
	}
</style>

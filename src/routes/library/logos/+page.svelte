<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {get_tome} from '$lib/tome.js';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';
	import Github_Logo from '$lib/Github_Logo.svelte';
	import Mdn_Logo from '$lib/Mdn_Logo.svelte';
	import Zzz_Logo from '$lib/Zzz_Logo.svelte';
	import Webdevladder_Logo from '$lib/Webdevladder_Logo.svelte';
	import Moss_Logo from '$lib/Moss_Logo.svelte';
	import Gro_Logo from '$lib/Gro_Logo.svelte';
	import Spiderspace_Logo from '$lib/Spiderspace_Logo.svelte';

	const LIBRARY_ITEM_NAME = 'logos';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<ul class="box text_align_center unstyled">
			<li>
				<Code content={`<Moss_Logo />`} />
				<a href="https://moss.ryanatkn.com/"><Moss_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Gro_Logo />`} />
				<a href="https://gro.ryanatkn.com/"><Gro_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Fuz_Logo />`} />
				<a href="https://www.fuz.dev/"><Fuz_Logo size="var(--icon_size_xl3)" /></a>
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
				<Code content={`<Zzz_Logo />`} />
				<a href="https://zzz.ryanatkn.com/"><Zzz_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Webdevladder_Logo />`} />
				<a href="https://www.webdevladder.net/"><Webdevladder_Logo size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Spiderspace_Logo />`} />
				<a href="https://www.spiderspace.org/"><Spiderspace_Logo size="var(--icon_size_xl3)" /></a>
			</li>
			<li>
				<Code content={`<Github_Logo />`} />
				<a href="https://github.com/"
					><Github_Logo fill="var(--text_1)" size="var(--icon_size_xl3)" /></a
				>
			</li>
			<li>
				<Code content={`<Mdn_Logo />`} />
				<a href="https://developer.mozilla.org/"><Mdn_Logo size="var(--icon_size_xl3)" /></a>
			</li>
		</ul>
	</section>
</Tome_Detail>

<style>
	li {
		margin-bottom: var(--space_xl5);
	}
</style>

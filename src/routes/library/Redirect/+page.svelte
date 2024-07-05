<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Redirect from '$lib/Redirect.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Redirect';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Adds a redirect for a page using <Mdn_Link path="Web/HTTP/Redirections#html_redirections"
				>a meta tag</Mdn_Link
			>
			with
			<Mdn_Link path="Web/HTML/Element/meta#http-equiv"
				>the <span class="font_mono">refresh</span> header</Mdn_Link
			>. Includes a rendered link and JS navigation fallback.
		</p>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Redirect from '@ryanatkn/fuz/Redirect.svelte';`} lang="ts" />
		<aside>
			Note that <code>auto={'{'}false}</code> is only used here to prevent the page from
			redirecting! Typical usage lets it default to <code>true</code>.
		</aside>
		<Code content={`<Redirect auto={false} />`} />
		<Redirect auto={false} />
	</section>
	<section>
		<Code
			content={`<Redirect
	host="https://www.felt.dev"
	path="/library"
	let:url
	auto={false}
>
	the redirect url is {url}
</Redirect>`}
		/>
		<Redirect host="https://www.felt.dev" path="/library" auto={false}>
			{#snippet children(url)}
				the redirect url is {url}
			{/snippet}
		</Redirect>
	</section>
</Tome_Detail>

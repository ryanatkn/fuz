<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Redirect from '$lib/Redirect.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Redirect';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<p>
			Adds a redirect for a page using <Mdn_Link href="Web/HTTP/Redirections#html_redirections"
				>a meta tag</Mdn_Link
			>
			with
			<Mdn_Link href="Web/HTML/Element/meta#http-equiv">the <code>refresh</code> header</Mdn_Link>.
			Includes a rendered link and JS navigation fallback.
		</p>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Redirect from '@ryanatkn/fuz/Redirect.svelte';`} lang="ts" />
		<aside>
			Please note: <code>auto={'{'}false}</code> is only used here to prevent the page from redirecting!
			Normally you wouldn't include it as a prop.
		</aside>
		<section>
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
			<Redirect host="https://www.felt.dev" path="/library" let:url auto={false}>
				the redirect url is {url}
			</Redirect>
		</section>
	</div>
</Tome_Detail>

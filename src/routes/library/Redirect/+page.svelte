<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Redirect from '$lib/Redirect.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Redirect';
	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="box prose">
		<p class="width_sm">
			Adds a redirect for a page using <a
				href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections#html_redirections"
				>a meta tag</a
			>
			with
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#http-equiv"
				>the <code>refresh</code> header</a
			>. Includes a rendered link and JS navigation fallback.
		</p>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Redirect from\n\t'@fuz.dev/fuz_library/Redirect.svelte';`} lang="ts" />
		<aside class="width_sm">
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

<style>
	section {
		/* TODO make standard across library pages */
		padding: var(--spacing_2);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';

	import Mdn_Logo from '$lib/Mdn_Logo.svelte';

	export let href: string; // Web/HTML/Element

	$: final_href = href.startsWith('https://')
		? href
		: `https://developer.mozilla.org/en-US/docs/${strip_start(href, '/')}`;
</script>

<a {...$$restProps} href={final_href}
	><span class="content"><span class="logo_wrapper"><Mdn_Logo /></span><slot /></span></a
>

<style>
	.content {
		display: inline-block;
	}

	.logo_wrapper {
		display: inline-block;
		margin-right: var(--space_xs2);
		vertical-align: middle;
	}
</style>

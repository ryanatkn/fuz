<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';

	import Mdn_Logo from '$lib/Mdn_Logo.svelte';

	export let href: string; // Web/HTML/Element

	$: final_href = href.startsWith('https://')
		? href
		: `https://developer.mozilla.org/en-US/docs/${strip_start(href, '/')}`;
</script>

<a {...$$restProps} href={final_href} class="chip nowrap"
	><span class="logo_wrapper"><Mdn_Logo /></span><slot /></a
>

<style>
	.logo_wrapper {
		display: inline-block;
		margin-right: var(--space_sm);
		vertical-align: middle;
	}
</style>

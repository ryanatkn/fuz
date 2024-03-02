<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';
	import type {HTMLAnchorAttributes} from 'svelte/elements';

	import Mdn_Logo from '$lib/Mdn_Logo.svelte';

	interface Props {
		/**
		 * @example Web/HTML/Element
		 */
		href: string;
		attrs?: HTMLAnchorAttributes;
	}

	const {href, attrs} = $props<Props>();

	const final_href = $derived(
		href.startsWith('https://')
			? href
			: `https://developer.mozilla.org/en-US/docs/${strip_start(href, '/')}`,
	);
</script>

<a {...attrs} href={final_href} class="chip nowrap"
	><span class="logo_wrapper"><Mdn_Logo /></span><slot /></a
>

<style>
	.logo_wrapper {
		display: inline-block;
		margin-right: var(--space_sm);
		vertical-align: middle;
	}
</style>

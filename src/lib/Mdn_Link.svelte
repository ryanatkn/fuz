<script lang="ts">
	import {strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import Mdn_Logo from '$lib/Mdn_Logo.svelte';

	interface Props {
		/**
		 * @example Web/HTML/Element
		 */
		href: string;
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {href, attrs, children}: Props = $props();

	const final_href = $derived(
		href.startsWith('https://')
			? href
			: `https://developer.mozilla.org/en-US/docs/${strip_start(href, '/')}`,
	);

	const final_children = $derived(children ?? strip_end(href, '/').split('/').at(-1)!);
</script>

<a {...attrs} href={final_href} class="chip nowrap">
	<Mdn_Logo
		classes="inline_block mr_sm vertical_align_middle"
	/>{#if typeof final_children === 'string'}
		<span class="font_mono">{final_children}</span>
	{:else}
		{@render final_children()}
	{/if}
</a>

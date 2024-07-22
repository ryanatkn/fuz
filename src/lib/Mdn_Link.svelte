<script lang="ts">
	import {strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import Mdn_Logo from '$lib/Mdn_Logo.svelte';

	interface Props {
		/**
		 * @example Web/HTML/Element
		 */
		path: string;
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {path, attrs, children}: Props = $props();

	const href = $derived(
		path.startsWith('https://')
			? path
			: `https://developer.mozilla.org/en-US/docs/${strip_start(path, '/')}`,
	);

	const final_children = $derived(children ?? strip_end(path, '/').split('/').at(-1)!);
</script>

<a {...attrs} {href} class="chip white_space_nowrap"
	>{#if typeof final_children === 'string'}
		<span class="font_mono">{final_children}</span>
	{:else}
		{@render final_children()}
	{/if}
	<Mdn_Logo inline classes="mx_xs3" /></a
>

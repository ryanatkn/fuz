<script lang="ts">
	import {strip_end, strip_start} from '@ryanatkn/belt/string.js';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Snippet} from 'svelte';

	import Svg from '$lib/Svg.svelte';
	import {mdn_logo} from '$lib/logos.js';

	const {
		path,
		children,
		class: class_prop,
		...rest
	}: SvelteHTMLElements['a'] & {
		/**
		 * @example Web/HTML/Element
		 */
		path: string;
		children?: Snippet;
	} = $props();

	const href = $derived(
		path.startsWith('https://')
			? path
			: `https://developer.mozilla.org/en-US/docs/${strip_start(path, '/')}`,
	);

	const final_children = $derived(children ?? strip_end(path, '/').split('/').at(-1)!);
</script>

<!-- TODO -next-line doesnt work? -->
<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {...rest} {href} class="chip white_space_nowrap {class_prop}"
	><Svg
		data={mdn_logo}
		inline
		size="var(--icon_size_xs)"
		attrs={{class: 'mx_xs3 vertical_align_middle'}}
	/>
	{#if typeof final_children === 'string'}
		<span class="font_family_mono">{final_children}</span>
	{:else}
		{@render final_children()}
	{/if}</a
>

<script lang="ts">
	import {resolve} from '$app/paths';
	import {slugify} from '@ryanatkn/belt/path.js';
	import type {Snippet} from 'svelte';
	import {DEV} from 'esm-env';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {get_tome_by_name} from '$lib/tome.js';
	import {DEFAULT_LIBRARY_PATH} from '$lib/docs_helpers.svelte.js';

	const {
		name,
		docs_path = DEFAULT_LIBRARY_PATH,
		hash,
		chip = true,
		children,
		...rest
	}: SvelteHTMLElements['a'] & {
		name: string; // TODO type, generate from `tomes`?
		docs_path?: string;
		hash?: string;
		chip?: boolean;
		children?: Snippet;
	} = $props();

	if (DEV) get_tome_by_name(name); // throws if not found

	// TODO add contextmenu behavior
</script>

<a
	{...rest}
	class:chip
	href={resolve(`${docs_path}/${slugify(name)}${hash ? `#${hash}` : ''}` as any)}
	>{#if children}{@render children()}{:else}{name}{/if}</a
>

<style>
	a {
		font-family: var(--font_family_mono);
	}
</style>

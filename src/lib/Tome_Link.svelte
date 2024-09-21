<script lang="ts">
	import {base} from '$app/paths';
	import {slugify} from '@ryanatkn/belt/path.js';
	import type {Snippet} from 'svelte';
	import {DEV} from 'esm-env';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {get_tome_by_name} from '$lib/tome.js';
	import {DEFAULT_LIBRARY_PATH} from '$lib/library_helpers.svelte.js';

	interface Props {
		name: string; // TODO type, generate from `tomes`?
		library_path?: string;
		hash?: string;
		chip?: boolean;
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {
		name,
		library_path = DEFAULT_LIBRARY_PATH,
		hash,
		chip = true,
		attrs,
		children,
	}: Props = $props();

	if (DEV) get_tome_by_name(name); // throws if not found

	// TODO add contextmenu behavior
</script>

<a {...attrs} class:chip href="{base}{library_path}/{slugify(name)}{hash ? `#${hash}` : ''}"
	>{#if children}{@render children()}{:else}{name}{/if}</a
>

<style>
	a {
		font-family: var(--font_mono);
	}
</style>

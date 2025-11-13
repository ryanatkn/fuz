<script lang="ts">
	import {resolve} from '$app/paths';
	import {DEV} from 'esm-env';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {slugify} from '@ryanatkn/belt/path.js';

	import {get_tome_by_name} from '$lib/tome.js';
	import {DOCS_PATH_DEFAULT} from '$lib/docs_helpers.svelte.js';

	const {
		name,
		docs_path = DOCS_PATH_DEFAULT,
		hash,
		children,
		class: class_prop = 'chip',
		...rest
	}: SvelteHTMLElements['a'] & {
		name: string; // TODO type, generate from `tomes`?
		docs_path?: string;
		hash?: string;
	} = $props();

	if (DEV) get_tome_by_name(name); // throws if not found

	// TODO add contextmenu behavior
</script>

<a
	{...rest}
	class="tome_link {class_prop}"
	href={resolve(`${docs_path}/${slugify(name)}${hash ? `#${hash}` : ''}` as any)}
	>{#if children}{@render children()}{:else}{name}{/if}</a
>

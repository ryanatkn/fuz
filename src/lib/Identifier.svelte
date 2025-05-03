<script lang="ts">
	import {DEV} from 'esm-env';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		name: string;
		code_attrs?: SvelteHTMLElements['code_attrs'];
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {name, code_attrs, attrs, children}: Props = $props();

	if (DEV && code_attrs && children) {
		// eslint-disable-next-line no-console
		console.error(
			'Identifier: code_attrs and children cannot be used together. Use one or the other.',
		);
	}
</script>

<a {...attrs}
	>{#if children}
		{@render children()}
	{:else}
		<code {...code_attrs}>{name}</code>
	{/if}</a
>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	// TODO @many should this have the Button suffix?

	const {
		onpaste,
		onerror,
		children,
		...rest
	}: SvelteHTMLElements['button'] & {
		onpaste: (text: string) => void;
		onerror?: (error: Error) => void;
		children?: Snippet;
	} = $props();

	// TODO add docs entry, see also Copy_To_Clipboard.svelte
</script>

<button
	type="button"
	title="paste from clipboard"
	{...rest}
	onclick={async () => {
		try {
			const text = await navigator.clipboard.readText();
			onpaste(text);
		} catch (err) {
			onerror?.(err);
		}
	}}
>
	{#if children}{@render children()}{:else}paste{/if}
</button>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	// TODO @many should this have the Button suffix?

	interface Props {
		onpaste: (text: string) => void;
		onerror?: (error: Error) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet;
	}
	const {onpaste, onerror, attrs, children}: Props = $props();

	// TODO add library entry, see also Copy_To_Clipboard.svelte
</script>

<button
	type="button"
	{...attrs}
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

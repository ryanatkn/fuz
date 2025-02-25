<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		onpaste: (text: string) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet;
	}
	const {onpaste, attrs, children}: Props = $props();

	// TODO add library entry, see also Copy_To_Clipboard.svelte
</script>

<button
	type="button"
	{...attrs}
	onclick={async () => {
		const text = await navigator.clipboard.readText();
		onpaste(text);
	}}
>
	{#if children}{@render children()}{:else}paste{/if}
</button>

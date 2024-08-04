<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string;
		classes?: string;
		button_classes?: string;
		button_attrs?: SvelteHTMLElements['button'];
		attrs?: SvelteHTMLElements['div'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	// TODO add library entry

	const {
		text,
		classes = '',
		button_classes = 'icon_button',
		button_attrs,
		attrs,
		children,
	}: Props = $props();

	let copied = $state(false);
	let failed = $state(false);

	const copy = async () => {
		copied = false;
		failed = false;
		try {
			await navigator.clipboard.writeText(text);
		} catch (_err) {
			failed = true;
			return;
		}
		copied = true;
	};
</script>

<div {...attrs} class="copy_to_clipboard {classes}">
	<button
		{...button_attrs}
		type="button"
		class={button_classes}
		style:font-size="var(--size_lg)"
		onclick={copy}
		>{#if children}{@render children(copied, failed)}{:else}📋{/if}</button
	>
	{#if copied}<small class="color_b_5">copied!</small>{/if}
	{#if failed}<small class="color_c_5">failed</small>{/if}
</div>

<style>
	.copy_to_clipboard {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	small {
		font-weight: 700;
		margin-top: var(--space_xs);
		opacity: 0;
		animation: fade-in 1.5s ease-in reverse;
	}
</style>

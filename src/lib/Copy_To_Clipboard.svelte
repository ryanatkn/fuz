<script lang="ts">
	import type {Async_Status} from '@ryanatkn/belt/async.js';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string | null;
		onclick?: (text: string | null, e: MouseEvent) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[status: Async_Status]>;
	}

	// TODO add library entry

	const {text, onclick, attrs, children}: Props = $props();

	let status: Async_Status = $state('initial');

	let set_copied_timeout: NodeJS.Timeout | undefined;
	let reset_copied_timeout: NodeJS.Timeout | undefined;

	const copy = async (e: MouseEvent) => {
		clearTimeout(set_copied_timeout);
		clearTimeout(reset_copied_timeout);
		if (text === null) return;
		status = 'pending';
		try {
			await navigator.clipboard.writeText(text);
			status = 'success';
		} catch (_err) {
			status = 'failure';
			onclick?.(null, e);
			return;
		}
		onclick?.(text, e);
	};

	const disabled = $derived(attrs?.disabled ?? text === null);
</script>

<button
	type="button"
	title="copy to clipboard"
	{...attrs}
	class={attrs?.class ?? (children ? undefined : 'icon_button size_lg')}
	onclick={copy}
	{disabled}
	>{#if children}{@render children(status)}{:else}<div class="item_a"></div>
		<div class="item_b"></div>{/if}</button
>

<style>
	button {
		position: relative;
	}

	.item_a,
	.item_b {
		width: 14px;
		height: 16px;
		background-color: var(--bg);
		border: 1px solid var(--border_color_5);
		border-radius: 3px;
		transform-origin: center;
	}

	.item_a {
		position: relative;
		z-index: 1;
		top: 3px;
		left: -3px;
	}

	.item_b {
		position: absolute;
		z-index: 0;
		top: calc(50% - 10px);
		left: calc(50% - 5px);
	}

	button:hover:not(:disabled) {
		.item_a {
			transform: translate(1px, 1px);
		}

		.item_b {
			transform: translate(1px, 0px);
		}
	}
	button:active:not(:disabled) {
		.item_a {
			transform: translate(2px, 1px) scale(1.29);
		}

		.item_b {
			transform: translate(3px, -1px) scale(0.85);
		}
	}
</style>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string | null;
		onclick?: (text: string | null, e: MouseEvent) => void;
		classes?: string;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	// TODO add library entry

	const {text, onclick, classes, attrs, children}: Props = $props();

	let copied = $state(false);
	let failed = $state(false);

	let set_copied_timeout: NodeJS.Timeout | undefined;
	let reset_copied_timeout: NodeJS.Timeout | undefined;

	const copy = async (e: MouseEvent) => {
		clearTimeout(set_copied_timeout);
		clearTimeout(reset_copied_timeout);
		if (text === null) return;
		const was_copied = copied;
		copied = false;
		failed = false;
		try {
			await navigator.clipboard.writeText(text);
		} catch (_err) {
			failed = true;
			onclick?.(null, e);
			return;
		}
		if (was_copied) {
			// ensures it always visually changes
			set_copied_timeout = setTimeout(() => {
				copied = true;
			}, 200);
		} else {
			copied = true;
		}
		reset_copied_timeout = setTimeout(() => {
			copied = false;
		}, 750);
		onclick?.(text, e);
	};
</script>

<button
	type="button"
	title="copy"
	{...attrs}
	class={classes ?? (children ? undefined : 'icon_button size_lg')}
	class:copied
	class:failed
	onclick={copy}
	disabled={attrs?.disabled ?? text === null}
	>{#if children}{@render children(copied, failed)}{:else}<div class="item_a"></div>
		<div class="item_b"></div>{/if}</button
>

<style>
	button {
		position: relative;
	}
	button:hover {
		.item_a {
			transform: translate(1px, 1px);
		}

		.item_b {
			transform: translate(1px, 0px);
		}
	}
	button:active {
		.item_a {
			transform: translate(2px, 1px);
		}

		.item_b {
			transform: translate(3px, -1px);
		}
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

	button.copied .item_a {
		transform: translate(2px, 1px) scale(1.3);
	}

	button.copied .item_b {
		transform: translate(3px, -1px) scale(0.85);
	}
</style>

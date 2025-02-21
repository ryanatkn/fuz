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

	let reset_copied_timeout: NodeJS.Timeout | undefined;

	const copy = async (e: MouseEvent) => {
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
			setTimeout(() => {
				copied = true;
			}, 200);
		} else {
			copied = true;
		}
		reset_copied_timeout = setTimeout(() => {
			copied = false;
		}, 1000);
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

	.item_a,
	.item_b {
		width: 14px;
		height: 16px;
		background-color: var(--bg);
		border: 1px solid var(--border_color_4);
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
</style>

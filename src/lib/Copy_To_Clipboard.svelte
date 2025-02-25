<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string | null;
		oncopy?: (text: string | null, e: MouseEvent) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	// Visual feedback duration
	const COPIED_DISPLAY_DURATION = 1000;

	const {text, oncopy, attrs, children}: Props = $props();

	let copied = $state(false);
	let failed = $state(false);
	let copy_timeout: NodeJS.Timeout | undefined;

	const clear_timeout = () => {
		clearTimeout(copy_timeout);
	};

	const copy = async (e: MouseEvent) => {
		clear_timeout();
		if (text === null) return;

		copied = false;
		failed = false;

		try {
			await navigator.clipboard.writeText(text);
			copied = true;
		} catch (_err) {
			failed = true;
			return;
		}

		// Reset after display duration
		copy_timeout = setTimeout(() => {
			copied = false;
		}, COPIED_DISPLAY_DURATION);

		oncopy?.(text, e);
	};
</script>

<button
	type="button"
	title="copy to clipboard"
	{...attrs}
	class={attrs?.class}
	class:icon_button={!children}
	class:copied
	class:failed
	class:color_c={failed}
	onclick={copy}
	disabled={attrs?.disabled ?? text === null}
>
	{#if children}
		{@render children(copied, failed)}
	{:else}
		<div class="icon">
			{#if copied}✓{:else}⧉{/if}
		</div>
	{/if}
</button>

<style>
	.icon {
		transform-origin: center;
		transform: scale(1);
	}

	button:hover:not(:disabled) .icon {
		transform: scale(1.1);
		transition: none;
	}

	button:active:not(:disabled) .icon {
		transform: scale(0.95);
		transition: transform var(--duration_1) cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}

	button.copied:not(:disabled) .icon {
		transform: scale(1.4);
		transition: transform var(--duration_1) cubic-bezier(0.12, 2, 0.2, 1.5);
	}
</style>

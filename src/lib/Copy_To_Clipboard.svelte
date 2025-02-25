<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string | null;
		oncopy?: (text: string | null, e: MouseEvent) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	// TODO add library entry

	const {text, oncopy, attrs, children}: Props = $props();

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
			return;
		}
		if (was_copied) {
			// ensures it always visually changes
			set_copied_timeout = setTimeout(() => {
				copied = true;
			}, 200); // TODO is `duration_2`, add to Moss' `variable_data.ts`
		} else {
			copied = true;
		}
		reset_copied_timeout = setTimeout(() => {
			copied = false;
		}, 750);
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
	}

	button:hover:not(:disabled) .icon {
		transform: scale(1.1);
	}

	button:active:not(:disabled) .icon {
		transform: scale(0.95);
	}

	button.copied:not(:disabled) .icon {
		animation: check-mark-scale var(--duration_1) forwards;
	}

	/* When transitioning back from copied state */
	button:not(.copied) .icon {
		animation: check-mark-scale-down var(--duration_5) forwards;
	}

	@keyframes check-mark-scale {
		0% {
			transform: scale(0.1);
		}
		100% {
			transform: scale(1.4);
		}
	}

	@keyframes check-mark-scale-down {
		0% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
</style>

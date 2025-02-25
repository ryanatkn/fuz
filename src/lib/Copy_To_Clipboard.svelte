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
		transform: scale(1);
		/* Slow transition when returning to normal state */
		transition: transform var(--duration_5) ease-out;
	}

	button:hover:not(:disabled) .icon {
		transform: scale(1.1);
		transition: transform var(--duration_1) cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	button:active:not(:disabled) .icon {
		transform: scale(0.95);
		/* Quick compression effect when clicked */
		transition: transform var(--duration_1) cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}

	button.copied:not(:disabled) .icon {
		/* Dramatic growth for the checkmark */
		transform: scale(1.4);
		/* Dramatic, very fast growth with extreme bounce for the checkmark */
		transition: transform var(--duration_1) cubic-bezier(0.12, 2, 0.2, 1.5);
	}
</style>

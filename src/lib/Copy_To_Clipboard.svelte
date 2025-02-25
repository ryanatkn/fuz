<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		text: string | null;
		oncopy?: (text: string | null, e: MouseEvent) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	// TODO source from Moss
	const DURATION_2 = 200;
	const DURATION_3 = 500;

	// Visual feedback duration
	const COPIED_DISPLAY_DURATION = 750;
	const COOLING_DOWN_DURATION = DURATION_3;

	const {text, oncopy, attrs, children}: Props = $props();

	let copied = $state(false);
	let copied_start = $state(false); // New state for initial tiny checkmark
	let just_copied = $state(false); // Intermediate state for scale 1.2
	let failed = $state(false);
	let cooling_down = $state(false);

	let set_copied_timeout: NodeJS.Timeout | undefined;
	let reset_copied_timeout: NodeJS.Timeout | undefined;
	let cooling_down_timeout: NodeJS.Timeout | undefined;
	let just_copied_timeout: NodeJS.Timeout | undefined;
	let copied_start_timeout: NodeJS.Timeout | undefined;

	const clear_all_timeouts = () => {
		clearTimeout(set_copied_timeout);
		clearTimeout(reset_copied_timeout);
		clearTimeout(cooling_down_timeout);
		clearTimeout(just_copied_timeout);
		clearTimeout(copied_start_timeout);
	};

	const copy = async (e: MouseEvent) => {
		clear_all_timeouts();
		if (text === null) return;

		const was_copied = copied;
		copied = false;
		copied_start = false;
		just_copied = false;
		cooling_down = false;
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
				copied_start = true; // Start with small checkmark

				// Quickly transition to full size
				copied_start_timeout = setTimeout(() => {
					copied_start = false;
					copied = true;
				}, 17);
			}, DURATION_2);
		} else {
			copied_start = true; // Start with small checkmark

			// Quickly transition to full size
			copied_start_timeout = setTimeout(() => {
				copied_start = false;
				copied = true;
			}, 17);
		}

		reset_copied_timeout = setTimeout(() => {
			copied = false;
			copied_start = false;
			just_copied = true; // Enter intermediate state at scale 1.2

			// Almost immediately transition to cooling down
			just_copied_timeout = setTimeout(() => {
				just_copied = false;
				cooling_down = true;

				cooling_down_timeout = setTimeout(() => {
					cooling_down = false;
				}, COOLING_DOWN_DURATION);
			}, 17); // Very short duration for the transition
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
	class:copied_start
	class:just_copied
	class:cooling_down
	class:failed
	class:color_c={failed}
	onclick={copy}
	disabled={attrs?.disabled ?? text === null}
>
	{#if children}
		{@render children(copied, failed)}
	{:else}
		<div class="icon">
			{#if copied || copied_start}✓{:else}⧉{/if}
		</div>
	{/if}
</button>

<style>
	.icon {
		transform-origin: center;
		transform: scale(1);
	}

	button:not(.cooling_down):not(.just_copied):not(.copied):not(.copied_start) .icon {
		transition: transform var(--duration_2) ease-out;
	}

	button:hover:not(:disabled) .icon {
		transform: scale(1.1);
		transition: none;
	}

	button:active:not(:disabled) .icon {
		transform: scale(0.95);
		transition: transform var(--duration_1) cubic-bezier(0.6, -0.28, 0.735, 0.045);
	}

	button.copied_start:not(:disabled) .icon {
		transform: scale(0.4);
		transition: none;
	}

	button.copied:not(:disabled) .icon {
		transform: scale(1.4);
		transition: transform var(--duration_1) cubic-bezier(0.12, 2, 0.2, 1.5);
	}

	button.just_copied:not(:disabled) .icon {
		transform: scale(1.2);
		transition: none;
	}

	button.cooling_down:not(:disabled) .icon {
		transform: scale(1);
		transition: transform var(--duration_5) cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>

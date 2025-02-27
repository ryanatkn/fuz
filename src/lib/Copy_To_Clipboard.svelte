<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {scale, slide} from 'svelte/transition';

	// TODO @many should this have the Button suffix?

	// TODO add library entry, see also Paste_From_Clipboard.svelte

	interface Props {
		text: string | null;
		copied_display_duration?: number;
		allow_copying_empty_string?: boolean;
		/**
		 * Defaults to `true`, ignored if `children` is provided.
		 */
		icon_button?: boolean;
		oncopy?: (text: string | null, e: MouseEvent) => void;
		attrs?: SvelteHTMLElements['button'];
		children?: Snippet<[copied: boolean, failed: boolean]>;
	}

	const {
		text,
		copied_display_duration = 1000,
		allow_copying_empty_string,
		icon_button = true,
		oncopy,
		attrs,
		children,
	}: Props = $props();

	// These are for visual feedback
	let copied = $state(false);
	let failed = $state(false);
	let copy_timeout: NodeJS.Timeout | undefined;

	const copy = async (e: MouseEvent) => {
		clearTimeout(copy_timeout);
		if (text === null) return; // allows copying ''

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
		}, copied_display_duration);

		oncopy?.(text, e);
	};
</script>

<button
	type="button"
	title="copy to clipboard"
	{...attrs}
	class={attrs?.class}
	class:icon_button={children ? false : icon_button}
	class:copied
	class:failed
	class:color_c={failed}
	onclick={copy}
	disabled={attrs?.disabled ?? (allow_copying_empty_string ? text === null : !text)}
>
	{#if children}
		{@render children(copied, failed)}
	{:else}
		<div class="icon">
			{#if copied}
				<!-- ✓ -->
				<div in:scale={{duration: 200}}>✓</div>
			{:else}
				<div in:slide>⧉</div>
			{/if}
		</div>
	{/if}
</button>

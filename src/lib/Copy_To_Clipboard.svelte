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

	const copy = async (e: MouseEvent) => {
		if (text === null) return;
		copied = false;
		failed = false;
		try {
			await navigator.clipboard.writeText(text);
		} catch (_err) {
			failed = true;
			onclick?.(null, e);
			return;
		}
		copied = true;
		onclick?.(text, e);
	};
</script>

<button
	{...attrs}
	type="button"
	class={classes ?? (children ? undefined : 'icon_button size_lg')}
	onclick={copy}
	disabled={attrs?.disabled ?? text === null}
	>{#if children}{@render children(copied, failed)}{:else}📋{/if}{#if copied}<small
			class="indicator color_b_5">copied!</small
		>{/if}{#if failed}<small class="indicator color_c_5">failed</small>{/if}</button
>

<style>
	button {
		position: relative;
	}

	small {
		font-weight: 700;
		margin-top: var(--space_xs);
		opacity: 0;
		animation: fade-in 1.5s ease-in reverse;
	}

	.indicator {
		position: absolute;
		bottom: -2.5rem;
		margin-left: auto;
		margin-right: auto;
	}

	/* TODO upstream to Moss? need to extract animation names */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Dialog_Params} from '$lib/dialog.js';
	import Dialog from '$lib/Dialog.svelte';

	// TODO this is experimental

	interface Props {
		dialogs: Array<Dialog_Params>;
		onclose?: () => void;
		children?: Snippet<[dialog: Dialog_Params]>;
	}

	const {dialogs, onclose, children}: Props = $props();
</script>

{#each dialogs as dialog, index (dialog)}<Dialog
		{onclose}
		{...dialog.dialog_props}
		{index}
		active={index === dialogs.length - 1}
		>{#if children}{@render children(dialog)}{:else}<dialog.Component
				{...dialog.props}
			/>{/if}</Dialog
	>{/each}

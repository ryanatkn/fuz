<script lang="ts">
	import type {Readable} from 'svelte/store';

	import type {Dialog_Params} from '$lib/dialog.js';
	import Dialog from '$lib/Dialog.svelte';

	// TODO this is experimental

	export let dialogs: Readable<Dialog_Params[]>;
</script>

{#each $dialogs as dialog, index (dialog)}
	<Dialog on:close {...dialog.dialog_props} {index} active={index === $dialogs.length - 1}>
		<slot {dialog}>
			<svelte:component this={dialog.Component} {...dialog.props} />
		</slot>
	</Dialog>
{/each}

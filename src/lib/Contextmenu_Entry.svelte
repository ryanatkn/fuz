<script lang="ts">
	import type {Snippet} from 'svelte';
	import {swallow} from '@ryanatkn/belt/dom.js';

	import Pending_Animation from '$lib/Pending_Animation.svelte';
	import {contextmenu_context, type Contextmenu_Run} from '$lib/contextmenu_state.svelte.js';

	interface Props {
		run: Contextmenu_Run;
		icon?: string | Snippet;
		children: Snippet;
	}

	const {run, icon, children}: Props = $props();

	const contextmenu = contextmenu_context.get();

	const entry = contextmenu.add_entry(() => run);

	const {selected, pending, error_message} = $derived(entry);
</script>

<!-- disabling the a11y warning because a parent element handles keyboard events -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<li
	class="menu_item plain selectable deselectable"
	class:selected
	role="menuitem"
	aria-label="contextmenu entry"
	tabindex="-1"
	title={error_message ? `Error: ${error_message}` : undefined}
	onclick={() => {
		// This timeout lets event handlers react to the current DOM
		// before the item's changes are applied.
		setTimeout(() => contextmenu.activate(entry));
	}}
	onmouseenter={(e) => {
		swallow(e);
		contextmenu.select(entry);
	}}
>
	<div class="content">
		<div class="icon">
			{#if typeof icon === 'string'}
				{icon}
			{:else if icon}
				{@render icon()}
			{/if}
		</div>
		<div class="title">{@render children()}</div>
		{#if pending}<Pending_Animation />{:else if error_message}⚠️{/if}
	</div>
</li>

<style>
	/* TODO hacky, needed because the base `.menu_item` added z-index */
	.menu_item {
		z-index: unset;
	}
</style>

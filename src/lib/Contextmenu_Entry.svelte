<script lang="ts">
	import type {Snippet} from 'svelte';

	import Pending_Animation from '$lib/Pending_Animation.svelte';
	import {get_contextmenu, type Contextmenu_Run} from '$lib/contextmenu.svelte.js';

	interface Props {
		run: Contextmenu_Run;
		icon?: Snippet; // TODO @multiple think about this API, maybe make a snippet or string? maybe just a snippet after changing from actions to nested components
		children: Snippet; // TODO @multiple think about this API, maybe make a snippet or string? maybe just a snippet after changing from actions to nested components
	}

	const {run, icon, children} = $props<Props>();

	const contextmenu = get_contextmenu();

	const entry = contextmenu.add_entry(run);

	// TODO BLOCK test that this still works, maybe refactor
	// This store makes `run` reactive
	// because it's a param to `contextmenu.add_entry` which @initializes.
	$effect(() => {
		entry.run = run;
	});

	const click = (_e: MouseEvent) => {
		// This timeout lets event handlers react to the current DOM
		// before the item's changes are applied.
		setTimeout(() => contextmenu.activate(entry));
	};
	const mouseenter = (e: MouseEvent) => {
		e.stopImmediatePropagation();
		contextmenu.select(entry);
	};

	const {selected, pending, error_message} = $derived(entry);
</script>

<!-- disabling the a11y warning because a parent element handles keyboard events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<li
	class="menu_item plain selectable deselectable"
	class:selected
	role="menuitem"
	aria-label="contextmenu entry"
	tabindex="-1"
	title={error_message ? `Error: ${error_message}` : undefined}
	on:click={click}
	on:mouseenter={mouseenter}
>
	<div class="content">
		<div class="icon">
			{#if icon}{@render icon()}{/if}
		</div>
		<div class="title">{@render children()}</div>
		{#if pending}<Pending_Animation />{:else if error_message}⚠️{/if}
	</div>
</li>

<style>
	/* TODO hacky, needed because the base `.menu_item` added z-index */
	.menu_item {
		z-index: unset;
		display: flex; /* TODO @multiple allows nesting in `.prose`, use `.unprose` if/when it's added */
	}
</style>

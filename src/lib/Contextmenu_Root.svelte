<script lang="ts">
	/**
	 * This is the default contextmenu root component.
	 * It relies on the standard browser `contextmenu` event
	 * which means it does not work on iOS Safari,
	 * which doesn't fire the `contextmenu` event as of October 2025 --
	 * see https://bugs.webkit.org/show_bug.cgi?id=213953.
	 *
	 * This is the recommended default because
	 * it supports haptic feedback with `navigator.vibrate()` --
	 * longpress cannot work with `navigator.vibrate()` on Android devices
	 * because it's not triggered from a direct user event.
	 *
	 * If you need iOS Safari support, use `Contextmenu_Root_For_Safari_Compatibility.svelte`
	 * instead. That version implements custom touch handlers and longpress detection at the
	 * cost of significantly more complexity.
	 */
	import {is_editable, swallow, inside_editable} from '@ryanatkn/belt/dom.js';
	import type {ComponentProps, Snippet} from 'svelte';

	import {
		contextmenu_context,
		contextmenu_dimensions_context,
		Contextmenu_State,
		open_contextmenu,
	} from '$lib/contextmenu_state.svelte.js';
	import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
	import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';

	const DEFAULT_OPEN_OFFSET_X = -2;
	const DEFAULT_OPEN_OFFSET_Y = -2;

	const {
		contextmenu = new Contextmenu_State(),
		open_offset_x = DEFAULT_OPEN_OFFSET_X,
		open_offset_y = DEFAULT_OPEN_OFFSET_Y,
		scoped = false,
		children,
	}: {
		/**
		 * The `contextmenu` prop is not reactive because that's a rare corner case and
		 * it's easier to put the `contextmenu` directly in the context
		 * rather than wrapping with a store or other reactivity.
		 * If you need to change the contextmenu prop for some reason, use a `{#key contextmenu}` block:
		 * https://svelte.dev/docs#template-syntax-key
		 * @nonreactive
		 */
		contextmenu?: Contextmenu_State;
		/**
		 * The number of pixels to offset from the pointer X position when opened.
		 * Useful to ensure the first menu item is immediately under the pointer.
		 */
		open_offset_x?: number;
		/**
		 * The number of pixels to offset from the pointer Y position when opened.
		 * Useful to ensure the first menu item is immediately under the pointer.
		 */
		open_offset_y?: number;
		/**
		 * If `true`, wraps `children` with a div and listens to events on it instead of the window.
		 */
		scoped?: boolean;
		children: Snippet;
	} = $props();

	contextmenu_context.set(contextmenu);

	let el: HTMLElement | undefined = $state();

	const {layout, initial_layout} = $derived(contextmenu);

	// Update the layout unless it's custom.
	// Custom layouts are when `contextmenu.initial_layout` is the same as `contextmenu.layout`.
	const custom_layout = $derived(layout === initial_layout);
	let clientWidth: number | undefined = $state();
	let clientHeight: number | undefined = $state();
	$effect(() => {
		if (!custom_layout && clientWidth !== undefined) {
			layout.width = clientWidth;
		}
	});
	$effect(() => {
		if (!custom_layout && clientHeight !== undefined) {
			layout.height = clientHeight;
		}
	});

	const dimensions = contextmenu_dimensions_context.set();
	$effect(() => {
		if (el) {
			const rect = el.getBoundingClientRect();
			dimensions.width = rect.width;
			dimensions.height = rect.height;
		}
	});
	const x = $derived(
		contextmenu.x + Math.min(0, layout.width - (contextmenu.x + dimensions.width)),
	);
	const y = $derived(
		contextmenu.y + Math.min(0, layout.height - (contextmenu.y + dimensions.height)),
	);

	const on_window_contextmenu = (e: MouseEvent) => {
		const {target} = e;
		if (
			e.shiftKey ||
			!(target instanceof HTMLElement || target instanceof SVGElement) ||
			el?.contains(target) ||
			is_editable(target) ||
			inside_editable(target)
		) {
			return;
		}
		if (
			open_contextmenu(target, e.clientX + open_offset_x, e.clientY + open_offset_y, contextmenu)
		) {
			swallow(e);
		}
	};

	// Passive listener that runs during the event's `capture` phase
	// so that things like the Dialog don't eat the events and prevent the contextmenu from closing.
	const mousedown = (e: MouseEvent) => {
		if (el && !el.contains(e.target as any)) {
			contextmenu.close();
		}
	};

	const keyboard_handlers: Map<string, () => void> = new Map([
		['Escape', () => contextmenu.close()],
		['ArrowLeft', () => contextmenu.collapse_selected()],
		['ArrowRight', () => contextmenu.expand_selected()],
		['ArrowDown', () => contextmenu.select_next()],
		['PageDown', () => contextmenu.select_next()],
		['ArrowUp', () => contextmenu.select_previous()],
		['PageUp', () => contextmenu.select_previous()],
		['Home', () => contextmenu.select_first()],
		['End', () => contextmenu.select_last()],
		[' ', () => contextmenu.activate_selected()],
		['Enter', () => contextmenu.activate_selected()],
	]);
	const keydown = (e: KeyboardEvent): void => {
		const handler = keyboard_handlers.get(e.key);
		if (!handler || is_editable(e.target)) return;
		swallow(e);
		handler();
	};
</script>

<svelte:window
	oncontextmenu={scoped ? undefined : on_window_contextmenu}
	onmousedown={contextmenu.opened ? mousedown : undefined}
	onkeydown={contextmenu.opened ? keydown : undefined}
/>

{#if scoped}
	<div class="contextmenu_root" role="region" oncontextmenu={on_window_contextmenu}>
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}

{#if !custom_layout}
	<div class="contextmenu_layout" bind:clientHeight bind:clientWidth aria-hidden="true"></div>
{/if}
<!-- TODO animate the contextmenu as it appears somehow -->
{#if contextmenu.opened}
	<ul
		class="contextmenu unstyled pane"
		role="menu"
		aria-label="context menu"
		tabindex="-1"
		bind:this={el}
		style:transform="translate3d({x}px, {y}px, 0)"
	>
		<!-- TODO maybe this should be generic? -->
		{#each contextmenu.params as p (p)}
			{#if typeof p === 'function'}
				{@render p()}
			{:else if p.snippet === 'link'}
				{@render link_entry(p.props)}
			{:else if p.snippet === 'text'}
				{@render text_entry(p.props)}
			{/if}
		{/each}
	</ul>
{/if}

{#snippet link_entry(props: ComponentProps<typeof Contextmenu_Link_Entry>)}
	<Contextmenu_Link_Entry {...props} />
{/snippet}

{#snippet text_entry(props: ComponentProps<typeof Contextmenu_Text_Entry>)}
	<Contextmenu_Text_Entry {...props} />
{/snippet}

<style>
	.contextmenu_root {
		display: contents;
	}
	.contextmenu {
		--icon_size: var(--icon_size_xs);
		--contextmenu_width: 320px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: var(--contextmenu_z_index, 200);
		max-width: var(--contextmenu_width);
		width: 100%;
		user-select: none;
	}
	.contextmenu,
	.contextmenu :global(menu.pane) {
		border: var(--contextmenu_border_width, var(--border_width))
			var(--contextmenu_border_style, var(--border_style))
			var(--contextmenu_border_color, var(--border_color));
		border-radius: var(--contextmenu_border_radius, var(--border_radius_xs));
	}

	.contextmenu_layout {
		z-index: -200;
		position: fixed;
		inset: 0;
	}
</style>

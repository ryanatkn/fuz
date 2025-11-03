<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';
	import {swallow} from '@ryanatkn/belt/dom.js';
	import type {Snippet} from 'svelte';

	import {contextmenu_context} from '$lib/contextmenu_state.svelte.js';

	const DEFAULT_LINK_ICON = '🔗';

	interface Props {
		href: string;
		icon?: string | Snippet<[icon: string]>; // TODO @many rethink this API
		children?: Snippet; // TODO @many rethink this API
		disabled?: boolean;
	}

	const {
		href,
		icon = DEFAULT_LINK_ICON,
		children,
		disabled: disabled_prop = false,
	}: Props = $props();

	const contextmenu = contextmenu_context.get();

	let anchor_el: HTMLAnchorElement | undefined = $state();

	// Register with state management for keyboard navigation
	// When activated via keyboard, programmatically click the anchor to trigger navigation
	const entry = contextmenu.add_entry(
		() => () => {
			if (anchor_el) anchor_el.click();
		},
		() => disabled_prop,
	);

	const {selected} = $derived(entry);
	const disabled = $derived(entry.disabled());

	// TODO move or upstream? rename? `print_url`?
	const format_url = (url: string, host: string = location.host): string => {
		const formatted = strip_start(strip_start(url, 'https://'), 'http://');
		return formatted.startsWith(host + '/') ? strip_start(formatted, host) : formatted;
	};

	const text = $derived(format_url(href));
	const external = $derived(!(text[0] === '.' || (text[0] === '/' && text[1] !== '/')));
	const rel = $derived(external ? 'noreferrer' : undefined);
</script>

<li role="none">
	<!-- TODO -next-line doesnt work? -->
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		bind:this={anchor_el}
		class="menu_item plain"
		class:selected
		class:disabled
		role="menuitem"
		aria-disabled={disabled}
		tabindex="-1"
		{href}
		{rel}
		onclick={disabled ? undefined : () => contextmenu.close()}
		oncontextmenu={(e) => {
			// Stop propagation to prevent the window handler from opening another Fuz contextmenu.
			// Without this, the event would bubble to the window handler, which calls
			// `query_contextmenu_params` (contextmenu_state.svelte.ts:410), which auto-detects
			// `<a>` tags and reopens the Fuz contextmenu instead of showing the browser's native menu.
			// Allow default behavior to show the browser's native contextmenu for the link.
			e.stopPropagation();
		}}
		onmouseenter={disabled
			? undefined
			: (e) => {
					swallow(e);
					contextmenu.select(entry);
				}}
	>
		<div class="content">
			<div class="icon">
				{#if typeof icon === 'string'}
					{icon}
				{:else}
					{@render icon(DEFAULT_LINK_ICON)}
				{/if}
			</div>
			<div class="title">
				<span class="text"
					>{#if children}{@render children()}{:else}{text}{/if}</span
				>
			</div>
		</div>
	</a>
</li>

<style>
	li {
		display: flex;
	}
	/* Underline only the link text, not the icon. */
	a:hover {
		text-decoration: none;
	}
	a:hover .text {
		text-decoration: underline;
	}
	/* TODO hacky, needed because the base `.menu_item` added z-index */
	.menu_item {
		z-index: unset;
	}
</style>

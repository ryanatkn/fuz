<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';
	import type {Snippet} from 'svelte';

	import {contextmenu_context} from '$lib/contextmenu_state.svelte.js';

	const DEFAULT_LINK_ICON = '🔗';

	interface Props {
		href: string;
		icon?: string | Snippet<[icon: string]>; // TODO @many rethink this API
		children?: Snippet; // TODO @many rethink this API
	}

	const {href, icon = DEFAULT_LINK_ICON, children}: Props = $props();

	const contextmenu = contextmenu_context.get();

	// TODO move or upstream? rename? `print_url`?
	const format_url = (url: string, host: string = location.host): string => {
		const formatted = strip_start(strip_start(url, 'https://'), 'http://');
		return formatted.startsWith(host + '/') ? strip_start(formatted, host) : formatted;
	};

	const text = $derived(format_url(href));
	const external = $derived(!(text[0] === '.' || (text[0] === '/' && text[1] !== '/')));
	const rel = $derived(external ? 'noreferrer' : undefined);
</script>

<!-- TODO this doesn't work with the keyboard controls, need to use `menuitem` -->
<!-- TODO could do more if we had the original `target` element (but it might go stale on $contextmenu?) -->
<li role="none">
	<a class="menu_item plain" role="menuitem" {href} {rel} onclick={() => contextmenu.close()}>
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

<script lang="ts">
	import {strip_start} from '@ryanatkn/belt/string.js';
	import type {Snippet} from 'svelte';

	import {get_contextmenu} from '$lib/contextmenu.svelte.js';

	interface Props {
		href: string;
		// TODO BLOCK refactor with `Contextmenu_Text_Entry`
		icon?: Snippet<[icon: string]>;
		children?: Snippet;
	}

	const {href, icon, children}: Props = $props();

	const contextmenu = get_contextmenu();

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
				{#if icon}{@render icon('🔗')}{:else}🔗{/if}
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

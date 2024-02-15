<script lang="ts">
	import {strip_start} from '@grogarden/util/string.js';

	import {get_contextmenu} from '$lib/contextmenu.js';

	export let href: string;

	const contextmenu = get_contextmenu();

	// TODO move or upstream? rename? `print_url`?
	const format_url = (url: string, host: string = location.host): string => {
		const formatted = strip_start(strip_start(url, 'https://'), 'http://');
		return formatted.startsWith(host + '/') ? strip_start(formatted, host) : formatted;
	};

	$: text = format_url(href);
	$: external = !(text[0] === '.' || (text[0] === '/' && text[1] !== '/'));
	$: rel = external ? 'noreferrer' : undefined;
</script>

<!-- TODO this doesn't work with the keyboard controls, need to use `menuitem` -->
<!-- TODO could do more if we had the original `target` element (but it might go stale on $contextmenu?) -->
<li role="none">
	<a class="menu_item plain" role="menuitem" {href} {rel} on:click={() => contextmenu.close()}>
		<div class="content">
			<div class="icon">🔗</div>
			<div class="title">
				<span class="text">{text}</span>
			</div>
		</div>
	</a>
</li>

<style>
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

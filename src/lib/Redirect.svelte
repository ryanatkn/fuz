<script lang="ts">
	import {page} from '$app/state';
	import {strip_start} from '@ryanatkn/belt/string.js';
	import {goto} from '$app/navigation';
	import type {Snippet} from 'svelte';
	import {BROWSER} from 'esm-env';

	interface Props {
		/**
		 * The target host to redirect to. Defaults to the current `location.host`.
		 * @nonreactive
		 */
		host?: string;
		/**
		 * The target path to redirect to. Defaults to the current `location.pathname`.
		 * @nonreactive
		 */
		path?: string;
		/**
		 * Should the redirect happen automatically without user input? Defaults to `true`.
		 * @nonreactive
		 */
		auto?: boolean;
		children?: Snippet<[url: string]>;
	}

	const {host = '', path = page.url.pathname, auto = true, children}: Props = $props();

	const url = host + path;

	if (auto && BROWSER) void goto(url, {replaceState: true});
</script>

<svelte:head>
	{#if auto}<meta http-equiv="refresh" content="0; URL={url}" />{/if}
</svelte:head>

{#if children}{@render children(url)}{:else}<p>
		redirect to <a href={url}>{strip_start(url, 'https://')}</a>
	</p>{/if}

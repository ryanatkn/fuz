<script lang="ts">
	import {browser} from '$app/environment';
	import {page} from '$app/stores';
	import {strip_start} from '@ryanatkn/belt/string.js';
	import {goto} from '$app/navigation';

	/**
	 * The target host to redirect to. Defaults to the current `location.host`.
	 * @nonreactive
	 */
	export let host = '';

	/**
	 * The target path to redirect to. Defaults to the current `location.pathname`.
	 * @nonreactive
	 */
	export let path = $page.url.pathname;

	/**
	 * Should the redirect happen automatically without user input? Defaults to `true`.
	 * @nonreactive
	 */
	export let auto = true;

	const url = host + path;

	if (auto && browser) void goto(url, {replaceState: true});
</script>

<svelte:head>
	{#if auto}<meta http-equiv="refresh" content="0; URL={url}" />{/if}
</svelte:head>

<slot {url}>
	<main class="row box prose">
		<p>redirect to <a href={url}>{strip_start(url, 'https://')}</a></p>
	</main>
</slot>

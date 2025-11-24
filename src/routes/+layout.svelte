<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/theme.css';
	import '$routes/moss.css';

	import type {Snippet} from 'svelte';

	import Themed from '$lib/Themed.svelte';
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import {pkg_context, Pkg} from '$lib/pkg.svelte.js';
	import {package_json, src_json} from '$lib/package.js';
	import Spiders from '$lib/Spiders.svelte';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	pkg_context.set(new Pkg(package_json, src_json));
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<Themed>
	<Contextmenu_Root>
		{@render children()}
		<Spiders />
	</Contextmenu_Root>
</Themed>

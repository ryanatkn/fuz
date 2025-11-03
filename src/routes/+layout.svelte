<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/theme.css';
	import '$routes/moss.css';

	import type {Snippet} from 'svelte';

	import Themed from '$lib/Themed.svelte';
	import {pkg_context, parse_pkg} from '$lib/pkg.svelte.js';
	import {package_json, src_json} from '$lib/package.js';
	import Spiders from '$lib/Spiders.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	pkg_context.set(parse_pkg(package_json, src_json));
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<Themed>
	{@render children()}
	<Spiders />
</Themed>

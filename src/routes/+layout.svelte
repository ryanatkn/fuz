<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '@ryanatkn/fuz_code/prism.css';

	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import Themed from '$lib/Themed.svelte';
	import {set_pkg} from '$routes/pkg.js';
	import {package_json, src_json} from '$routes/package.js';
	import Spiders from '$routes/Spiders.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	set_pkg(parse_package_meta(package_json.homepage, package_json, src_json));
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<Themed>
	{@render children()}
	<Spiders />
</Themed>

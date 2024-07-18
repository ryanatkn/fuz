<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';

	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

{@render children()}

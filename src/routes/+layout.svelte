<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '@ryanatkn/fuz_code/prism.css';

	import Themed from '$lib/Themed.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();
</script>

<Themed>
	{@render children()}
</Themed>

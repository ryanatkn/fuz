<script lang="ts">
	import {base} from '$app/paths';

	import Fuz_Logo from '$lib/Fuz_Logo.svelte';

	// TODO think about this API
	interface Props {
		image?: boolean;
		src?: string;
		alt?: string;
	}

	const {
		image = false,
		src = `${base}/favicon.png`,
		alt = 'the Fuz logo, a little brown spider',
	}: Props = $props();

	// color:
	// #6b401c
	// hsl(27, 60%, 26%)
	// rgb(107, 64, 28)
	// hwb(27 11% 58%)
</script>

{#if image}
	<img {src} {alt} />
{:else}
	<div style:--color="var(--color_f_5)"><Fuz_Logo /></div>
{/if}

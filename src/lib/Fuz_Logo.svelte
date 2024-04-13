<script lang="ts">
	import {base} from '$app/paths';

	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		image?: boolean;
		src?: string;
		alt?: string;
	}

	const {size, image = false, src, alt = 'the Fuz logo, a little brown spider'}: Props = $props();

	// color:
	// #6a3e1b
	// hsl(27, 60%, 26%)
	// rgb(106, 62, 27)
</script>

{#if image}<img src={src ?? `${base}/favicon.png`} {alt} width={size} height={size} />{:else}<span
		aria-label={alt}
		style:--color="var(--color_f_5)"
		class="inline_block"
		style:width={size}
		style:height={size}><Spider /></span
	>{/if}

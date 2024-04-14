<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		alt?: string;
	}

	const {size, alt = 'the Spiderspace logo, a little yellow spider'}: Props = $props();

	// color:
	// #b19a25
	// hsl(50, 65%, 42%)
	// rgb(177, 154, 37)
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span
	aria-label={alt}
	style:--color="var(--color_e_5)"
	class="inline_block"
	style:width={size}
	style:height={size}><Spider /></span
>

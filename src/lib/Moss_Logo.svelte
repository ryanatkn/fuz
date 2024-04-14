<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		alt?: string;
	}

	const {size, alt = 'the Moss logo, a little green tuft of moss'}: Props = $props();

	// color:
	// #298e29
	// hsl(120, 55%, 36%)
	// rgb(41, 142, 41)
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span
	aria-label={alt}
	style:--color="var(--color_e_5)"
	class="inline_block"
	style:width={size}
	style:height={size}><Spider /></span
>

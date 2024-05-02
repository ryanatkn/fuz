<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		label?: string;
	}

	const {size, label = 'the Spiderspace logo, a little yellow spider'}: Props = $props();

	// color:
	// #b19a25
	// hsl(50, 65%, 42%)
	// rgb(177, 154, 37)
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span
	style:--text_color="var(--color_e_5)"
	class="inline_block"
	style:width={size}
	style:height={size}><Spider {label} /></span
>

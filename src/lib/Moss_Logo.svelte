<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		label?: string;
	}

	const {size, label = 'the Moss logo, a fuzzy tuft of green moss'}: Props = $props();

	// TODO publish a plain SVG probably

	// color:
	// #298e29
	// hsl(120, 55%, 36%)
	// rgb(41, 142, 41)
</script>

<span
	style:--text_color="var(--color_b_5)"
	class="inline_block"
	style:width={size}
	style:height={size}><Spider {label} /></span
>

<style>
	span {
		transform: scaleX(-1) rotate(180deg);
	}
</style>

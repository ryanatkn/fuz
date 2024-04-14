<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		label?: string;
	}

	const {size, label = 'the fuz_template logo, a little purple spider'}: Props = $props();

	// color:
	// #6a40bf
	// hsl(260, 50%, 50%)
	// rgb(106, 64, 191)
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span style:--color="var(--color_d_5)" class="inline_block" style:width={size} style:height={size}
	><Spider {label} /></span
>

<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		label?: string;
	}

	const {size, label = 'the Fuz logo, a little brown spider'}: Props = $props();

	// color:
	// #6a3e1b
	// hsl(27, 60%, 26%)
	// rgb(106, 62, 27)
</script>

<span style:--color="var(--color_f_5)" class="inline_block" style:width={size} style:height={size}
	><Spider {label} /></span
>

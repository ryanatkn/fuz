<script lang="ts">
	import Spider from '$lib/Spider.svelte';

	// TODO think about this API
	interface Props {
		size?: string;
		alt?: string;
	}

	const {size, alt = 'the Zzz logo, a little pink spider'}: Props = $props();

	// color:
	// #e03e81
	// hsl(335, 72%, 56%)
	// rgb(224, 62, 129)
</script>

<!-- TODO could potentially support the `image` option like `Fuz_Logo` -->
<span
	aria-label={alt}
	style:--color="var(--color_g_5)"
	class="inline_block"
	style:width={size}
	style:height={size}><Spider /></span
>

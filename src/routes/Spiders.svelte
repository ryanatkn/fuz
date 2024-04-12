<script lang="ts">
	import Fuz_Logo from '$lib/Fuz_Logo.svelte';

	interface Props {
		spiders?: string[]; // for now, just colors
	}

	const {
		spiders = [
			'var(--color_a_5)',
			'var(--color_b_5)',
			'var(--color_c_5)',
			'var(--color_d_5)',
			'var(--color_e_5)',
			'var(--color_f_5)',
			'var(--color_g_5)',
		],
	}: Props = $props();
</script>

<!-- TODO animate each in randomly -->
<!-- TODO show when intersected in viewport, maybe inline `svelte-intersect` in Fuz? -->
<div class="row mt_xl9">
	{#each spiders as color (color)}
		<div style:--color={color} class="col_2">
			<Fuz_Logo />
		</div>
	{/each}
</div>

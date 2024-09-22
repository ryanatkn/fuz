<script module lang="ts">
	/**
	 * Returns the minute of the current day.
	 */
	const minute_of_day = (): number => {
		const now = new Date();
		return now.getHours() * 60 + now.getMinutes();
	};
</script>

<script lang="ts">
	import {random_int, shuffle} from '@ryanatkn/belt/random.js';
	import {create_random_alea} from '@ryanatkn/belt/random_alea.js';

	import Svg from '$lib/Svg.svelte';
	import {fuz_logo} from '$lib/logos.js';

	interface Props {
		spiders?: string[]; // for now, just colors
		seed?: unknown;
		random?: typeof Math.random;
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
			'var(--color_h_5)',
			'var(--color_i_5)',
		],
		seed = minute_of_day(),
		random = create_random_alea(seed),
	}: Props = $props();

	const shuffled = $derived(shuffle(spiders.slice(), (min, max) => random_int(min, max, random)));
	const rotations = $derived(shuffled.map(() => random_int(0, 359, random)));
</script>

<!-- TODO animate each in randomly -->
<!-- TODO show when intersected in viewport, maybe inline `svelte-intersect` in Fuz? -->
<div class="spiders" style:--spider_count={spiders.length}>
	{#each shuffled as color, i (color)}
		<Svg data={fuz_logo} fill={color} attrs={{style: `transform: rotate(${rotations[i]}deg)`}} />
	{/each}
</div>

<style>
	.spiders {
		--width: calc(100% / var(--spider_count));
		position: relative;
		z-index: -1;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(var(--spider_count), 1fr);
	}
</style>

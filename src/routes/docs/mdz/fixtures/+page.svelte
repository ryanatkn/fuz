<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {resolve} from '$app/paths';

	import Mdz from '$lib/Mdz.svelte';
	import Details from '$lib/Details.svelte';

	const {data} = $props();

	const format_json = (obj: unknown): string => JSON.stringify(obj, null, 2);
</script>

<main class="p_xl mx_auto width_upto_md">
	<h1 class="mt_xl5">mdz fixtures debug</h1>
	<p>
		This page renders all of the test fixtures. See also the mdz <a href={resolve('/docs/mdz')}
			>docs page</a
		>.
	</p>
	<h2>{data.fixtures.length} fixtures</h2>

	{#each data.fixtures as fixture (fixture.name)}
		<section class="mb_xl">
			<h3>{fixture.name}</h3>

			<div class="mb_xl2">
				<Code content={fixture.input} lang="md" />
			</div>

			<Mdz content={fixture.input} class="mb_lg" />

			<Details summary="JSON" open={false}>
				<Code lang="json" content={format_json(fixture.expected)} />
			</Details>
		</section>
	{/each}
</main>

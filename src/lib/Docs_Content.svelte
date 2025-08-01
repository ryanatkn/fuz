<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {Pkg} from '@ryanatkn/belt/pkg.js';

	import type {Tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';

	interface Props {
		tomes: Array<Tome>;
		pkg: Pkg;
		repo_name?: Snippet<[repo_name: string]>;
		content?: Snippet;
		header?: Snippet;
	}

	const {tomes, pkg, repo_name, content, header}: Props = $props();
</script>

<div class="width_md">
	{#if header}
		{@render header()}
	{:else}
		<div class="box mb_xl5">
			<Package_Summary {pkg} {repo_name} />
		</div>
	{/if}
	<div>
		{#if content}
			{@render content()}
		{:else}
			{#each tomes as tome (tome)}
				<tome.component />
			{/each}
		{/if}
	</div>
</div>

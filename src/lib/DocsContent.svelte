<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Pkg} from './pkg.svelte.js';
	import type {Tome} from './tome.js';
	import PackageSummary from './PackageSummary.svelte';

	const {
		tomes,
		pkg,
		repo_name,
		content,
		header,
	}: {
		tomes: Array<Tome>;
		pkg: Pkg;
		repo_name?: Snippet<[repo_name: string]>;
		content?: Snippet;
		header?: Snippet;
	} = $props();
</script>

<div class="width_upto_md">
	{#if header}
		{@render header()}
	{:else}
		<div class="box mb_xl5">
			<PackageSummary {pkg} {repo_name} />
		</div>
	{/if}
	<div>
		{#if content}
			{@render content()}
		{:else}
			{#each tomes as tome (tome)}
				<tome.Component />
			{/each}
		{/if}
	</div>
</div>

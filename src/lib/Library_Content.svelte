<script lang="ts">
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';
	import type {Snippet} from 'svelte';

	import type {Tome} from '$lib/tome.js';
	import Package_Summary from '$lib/Package_Summary.svelte';

	interface Props {
		root_path?: string;
		tomes: Tome[];
		pkg: Package_Meta;
		repo_name?: Snippet<[repo_name: string]>;
		content?: Snippet;
		header?: Snippet;
	}

	const {tomes, pkg, repo_name, content, header}: Props = $props();
</script>

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

<script lang="ts">
	import type {Snippet} from 'svelte';

	const {
		module_path,
		repo_url,
		children,
	}: {
		module_path: string;
		repo_url?: string;
		children?: Snippet;
	} = $props();

	// Generate GitHub source URL
	const source_url = $derived(
		repo_url
			? `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '').replace(/\.js$/, '.ts')}`
			: undefined,
	);
</script>

{#if source_url}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a class="chip" href={source_url} target="_blank" rel="noopener">
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
		{#if children}
			{@render children()}
		{:else}
			{module_path.replace(/^\.\//, '')}
		{/if}
	</a>
{:else if children}
	{@render children()}
{:else}
	{module_path.replace(/^\.\//, '')}
{/if}

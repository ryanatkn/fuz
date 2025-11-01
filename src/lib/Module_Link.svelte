<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Src_Module} from '$lib/src_json.js';
	import Declaration_Link from '$lib/Declaration_Link.svelte';

	const {
		module_path,
		src_module: module,
		pkg_name,
		repo_url,
		homepage_url,
		children,
	}: {
		module_path: string;
		src_module?: Src_Module;
		pkg_name: string;
		repo_url?: string;
		homepage_url?: string | null;
		children?: Snippet;
	} = $props();

	// Generate GitHub source URL
	const source_url = $derived(
		repo_url
			? `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '').replace(/\.js$/, '.ts')}`
			: undefined,
	);

	// Filter out default exports
	const declarations = $derived(module?.declarations?.filter((d) => d.name !== 'default'));
</script>

{#if source_url}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<a
		class="chip"
		href={source_url}
		target="_blank"
		rel="noopener"
	>
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

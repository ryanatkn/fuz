<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Src_Module} from '$lib/src_json.js';
	import {tooltip_context} from '$lib/tooltip_state.svelte.js';
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

	const tooltip = tooltip_context.maybe_get();

	let link_el: HTMLAnchorElement | undefined = $state();

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
		bind:this={link_el}
		class="chip"
		href={source_url}
		target="_blank"
		rel="noopener"
		aria-describedby={tooltip?.opened ? tooltip.id : undefined}
		onmouseenter={(e) => tooltip?.show_delayed(e.clientX, e.clientY, tooltip_content)}
		onmouseleave={() => tooltip?.hide_delayed()}
		onfocus={() => {
			if (!tooltip || !link_el) return;
			const rect = link_el.getBoundingClientRect();
			tooltip.show(rect.left + rect.width / 2, rect.bottom, tooltip_content);
		}}
		onblur={() => tooltip?.hide()}
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

{#snippet tooltip_content()}
	<div>
		<p><code>{module_path.replace(/^\.\//, '')}</code></p>
		{#if declarations?.length}
			<p>Exports:</p>
			<ul class="unstyled">
				{#each declarations as decl (decl.name)}
					<li>
						<Declaration_Link
							{decl}
							{module_path}
							{pkg_name}
							{repo_url}
							homepage_url={homepage_url ?? undefined}
						/>
					</li>
				{/each}
			</ul>
		{/if}
		{#if source_url}
			<p>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="chip" href={source_url} target="_blank" rel="noopener"> view source </a>
			</p>
		{/if}
	</div>
{/snippet}

<script lang="ts">
	import {tome_context, tomes_context} from '$lib/tome.js';
	import {pkg_context} from '$lib/pkg.svelte.js';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';

	const tome = tome_context.get();
	const tomes = tomes_context.get();
	const pkg = pkg_context.get();

	const related_tomes = $derived(
		tome.related_tomes.map((name) => tomes.get(name)).filter((t) => t !== undefined),
	);

	const related_modules = $derived(
		tome.related_modules.map((path) => pkg.lookup_module(path)).filter((m) => m !== undefined),
	);

	const related_identifiers = $derived(
		tome.related_identifiers
			.map((name) => pkg.lookup_identifier(name))
			.filter((i) => i !== undefined),
	);

	const has_related = $derived(
		related_tomes.length > 0 || related_modules.length > 0 || related_identifiers.length > 0,
	);
</script>

{#if has_related}
	<aside class="tome_related mb_xl3">
		<h3 class="mb_lg">Related</h3>
		<div class="related_sections">
			{#if related_tomes.length}
				<section class="related_section">
					<h4 class="mb_sm">Tomes</h4>
					<ul class="unstyled">
						{#each related_tomes as related_tome (related_tome.name)}
							<li><Tome_Link name={related_tome.name} /></li>
						{/each}
					</ul>
				</section>
			{/if}
			{#if related_modules.length}
				<section class="related_section">
					<h4 class="mb_sm">Modules</h4>
					<ul class="unstyled">
						{#each related_modules as module (module.path)}
							<li><Module_Link module_path={module.path} /></li>
						{/each}
					</ul>
				</section>
			{/if}
			{#if related_identifiers.length}
				<section class="related_section">
					<h4 class="mb_sm">Identifiers</h4>
					<ul class="unstyled">
						{#each related_identifiers as identifier (identifier.name)}
							<li><Identifier_Link name={identifier.name} /></li>
						{/each}
					</ul>
				</section>
			{/if}
		</div>
	</aside>
{/if}

<style>
	.tome_related {
		padding: var(--spacing_lg);
		background-color: var(--fg_1);
		border-radius: var(--radius_xs);
	}

	.related_sections {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing_xl);
	}

	.related_section {
		flex: 1;
		min-width: 200px;
	}

	h3 {
		font-size: var(--font_size_lg);
		font-weight: 600;
	}

	h4 {
		font-size: var(--font_size_md);
		font-weight: 500;
		color: var(--text_2);
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: var(--spacing_xs);
	}
</style>

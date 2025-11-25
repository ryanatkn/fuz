<script lang="ts">
	import DocsContent from '$lib/DocsContent.svelte';
	import {tomes_context} from '$lib/tome.js';
	import {pkg_context} from '$lib/pkg.svelte.js';

	const tomes_by_name = tomes_context.get();

	const tomes = Array.from(tomes_by_name.values());

	const pkg = pkg_context.get();
</script>

<DocsContent {tomes} {pkg}>
	{#snippet repo_name()}
		<h1 class="mb_sm">fuz</h1>
	{/snippet}
</DocsContent>

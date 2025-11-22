<script lang="ts">
	import type {Snippet} from 'svelte';

	import Module_Link from './Module_Link.svelte';
	import Identifier_Link from './Identifier_Link.svelte';
	import {pkg_context} from './pkg.svelte.js';
	import type {Identifier} from './identifier.svelte.js';
	import type {Module} from './module.svelte.js';

	const {
		reference,
		display_text,
		children: children_prop,
	}: {
		reference: string;
		display_text?: string | null;
		children?: Snippet<[Identifier | undefined, Module | undefined]>;
	} = $props();
	const pkg = pkg_context.get();

	// Try to find as identifier first, then module
	const identifier = $derived(pkg.lookup_identifier(reference));
	const module = $derived(identifier ? identifier.module : pkg.lookup_module(reference));
</script>

{#if identifier}
	<Identifier_Link name={reference}>
		{@render children()}
	</Identifier_Link>
{:else if module}
	<Module_Link module_path={module.path}>
		{@render children()}
	</Module_Link>
{:else}
	<code>{@render children()}</code>
{/if}

{#snippet children()}{#if children_prop}{@render children_prop(
			identifier,
			module,
		)}{:else}{display_text ?? reference}{/if}{/snippet}

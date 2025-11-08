<script lang="ts">
	import type {Mdz_Node} from '$lib/mdz.js';
	import Docs_Link from '$lib/Docs_Link.svelte';
	import Mdz_Node_View from '$lib/Mdz_Node_View.svelte';
	import {mdz_components_context} from '$lib/mdz_components.js';

	const {
		node,
	}: {
		node: Mdz_Node;
	} = $props();

	const components = mdz_components_context.get();
</script>

{#if node.type === 'Component'}
	{@const Component = components[node.name]}
	{#if Component}
		<Component>
			{#if node.children}
				{#each node.children as child (child)}<Mdz_Node_View node={child} />{/each}
			{/if}
		</Component>
	{:else}
		<code class="color_c_5">&lt;{node.name} /&gt;</code>
	{/if}
{:else if node.type === 'Text'}
	{node.content}
{:else if node.type === 'Code'}
	<Docs_Link reference={node.reference} />
{:else if node.type === 'Bold'}
	<strong
		>{#each node.children as child (child)}<Mdz_Node_View node={child} />{/each}</strong
	>
{:else if node.type === 'Italic'}
	<em
		>{#each node.children as child (child)}<Mdz_Node_View node={child} />{/each}</em
	>
{:else if node.type === 'Strikethrough'}
	<s
		>{#each node.children as child (child)}<Mdz_Node_View node={child} />{/each}</s
	>
{:else if node.type === 'Link'}
	{#if node.link_type === 'identifier'}
		<Docs_Link reference={node.reference} display_text={node.display_text} />
	{:else}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={node.reference} target="_blank" rel="noopener">{node.display_text ?? node.reference}</a
		>
	{/if}
{:else if node.type === 'Paragraph'}
	<p>
		{#each node.children as child (child)}<Mdz_Node_View node={child} />{/each}
	</p>
{/if}

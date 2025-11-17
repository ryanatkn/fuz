<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {resolve} from '$app/paths';

	import type {Mdz_Node} from '$lib/mdz.js';
	import Docs_Link from '$lib/Docs_Link.svelte';
	import Mdz_Node_View from '$lib/Mdz_Node_View.svelte';
	import {mdz_components_context, mdz_elements_context} from '$lib/mdz_components.js';

	const {
		node,
	}: {
		node: Mdz_Node;
	} = $props();

	const components = mdz_components_context.get_maybe();
	const elements = mdz_elements_context.get_maybe();
</script>

{#snippet render_children(nodes: Array<Mdz_Node>)}
	<!-- TODO @many currently not using keys, what would be correct here? -->
	{#each nodes as node (node)}<Mdz_Node_View {node} />{/each}
{/snippet}

{#if node.type === 'Element'}
	{@const element_config = elements?.get(node.name)}
	{#if element_config !== undefined}
		<svelte:element this={node.name}>
			{#if node.children.length > 0}
				{@render render_children(node.children)}
			{/if}
		</svelte:element>
	{:else}
		<code class="color_c_5">&lt;{node.name} /&gt;</code>
	{/if}
{:else if node.type === 'Component'}
	{@const Component = components?.get(node.name)}
	{#if Component}
		<Component>
			{#if node.children.length > 0}
				{@render render_children(node.children)}
			{/if}
		</Component>
	{:else}
		<code class="color_c_5">&lt;{node.name} /&gt;</code>
	{/if}
{:else if node.type === 'Text'}
	{node.content}
{:else if node.type === 'Code'}
	<Docs_Link reference={node.content} />
{:else if node.type === 'Bold'}
	<strong>{@render render_children(node.children)}</strong>
{:else if node.type === 'Italic'}
	<em>{@render render_children(node.children)}</em>
{:else if node.type === 'Strikethrough'}
	<s>{@render render_children(node.children)}</s>
{:else if node.type === 'Link'}
	{#if node.link_type === 'internal'}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={resolve(node.reference as any)}>{node.display_text ?? node.reference}</a>
	{:else}
		<!-- external link -->
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a href={node.reference} target="_blank" rel="noopener">{node.display_text ?? node.reference}</a
		>
	{/if}
{:else if node.type === 'Paragraph'}
	<p>{@render render_children(node.children)}</p>
{:else if node.type === 'Hr'}
	<hr />
{:else if node.type === 'Heading'}
	<svelte:element this={`h${node.level}`}>
		{@render render_children(node.children)}
	</svelte:element>
{:else if node.type === 'Codeblock'}
	<Code lang={node.lang} content={node.content} />
{/if}

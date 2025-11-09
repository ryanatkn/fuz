<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

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

{#snippet render_children(children: Array<Mdz_Node>)}
	{#each children as child (child)}<Mdz_Node_View node={child} />{/each}
{/snippet}

{#if node.type === 'Component'}
	{@const Component = components[node.name]}
	{#if Component}
		<Component>
			{#if node.children}
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
	{#if node.link_type === 'identifier'}
		<Docs_Link reference={node.reference} display_text={node.display_text} />
	{:else}
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

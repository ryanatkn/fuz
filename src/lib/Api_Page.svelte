<script lang="ts">
	import {resolve} from '$app/paths';

	import type {Src_Module_Declaration} from '$lib/src_json.js';
	import Details from '$lib/Details.svelte';

	interface Props {
		decl: Src_Module_Declaration;
		module_path: string;
		repo_url?: string;
	}

	const {decl, module_path, repo_url}: Props = $props();

	// Generate source URL
	const source_url = $derived(
		repo_url && decl.source_location
			? `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '')}#L${decl.source_location.line}`
			: undefined,
	);
</script>

<!-- Metadata -->
{#if source_url}
	<div class="meta">
		<a class="chip" href={resolve(source_url as any)} target="_blank" rel="noopener">
			View source
		</a>
	</div>
{/if}

<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
{#if decl.deprecated_message}
	<div class="deprecated_warning pane">
		<strong>⚠️ Deprecated:</strong>
		<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
		{decl.deprecated_message}
	</div>
{/if}

<!-- Type Signature -->
{#if decl.type_signature}
	<section class="section">
		<h2>Type Signature</h2>
		<pre class="type_signature pane"><code>{decl.type_signature}</code></pre>
	</section>
{/if}

<!-- Documentation -->
{#if decl.doc_comment || decl.summary}
	<section class="section">
		<h2>Documentation</h2>
		<div class="doc_content">
			{decl.doc_comment || decl.summary}
		</div>
	</section>
{/if}

<!-- Parameters -->
{#if decl.parameters?.length}
	<section class="section">
		<h2>Parameters</h2>
		<table class="params_table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Optional</th>
					{#if decl.parameters.some((p) => p.description)}
						<th>Description</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each decl.parameters as param (param)}
					<tr>
						<td><code>{param.name}</code></td>
						<td><code class="type">{param.type}</code></td>
						<td>{param.optional ? 'yes' : 'no'}</td>
						{#if decl.parameters.some((p) => p.description)}
							<td>{param.description ?? ''}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- Component Props (for Svelte components) -->
{#if decl.props?.length}
	<section class="section">
		<h2>Props</h2>
		<table class="params_table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Optional</th>
					{#if decl.props.some((p) => p.description)}
						<th>Description</th>
					{/if}
					{#if decl.props.some((p) => p.default_value)}
						<th>Default</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each decl.props as prop (prop)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td><code class="type">{prop.type}</code></td>
						<td>{prop.optional ? 'yes' : 'no'}</td>
						{#if decl.props.some((p) => p.description)}
							<td>{prop.description ?? ''}</td>
						{/if}
						{#if decl.props.some((p) => p.default_value)}
							<td>{prop.default_value ? `<code>${prop.default_value}</code>` : ''}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- Return Type -->
{#if decl.return_type}
	<section class="section">
		<h2>Return Type</h2>
		<pre class="type_signature pane"><code>{decl.return_type}</code></pre>
	</section>
{/if}

<!-- Generic Parameters -->
{#if decl.generic_params?.length}
	<section class="section">
		<h2>Generic Parameters</h2>
		<ul class="generic_list">
			{#each decl.generic_params as generic (generic)}
				<li><code>{generic}</code></li>
			{/each}
		</ul>
	</section>
{/if}

<!-- Extends/Implements -->
{#if decl.extends?.length || decl.implements?.length}
	<section class="section">
		<h2>Inheritance</h2>
		{#if decl.extends?.length}
			<div>
				<strong>Extends:</strong>
				<ul class="inheritance_list">
					{#each decl.extends as ext (ext)}
						<li><code>{ext}</code></li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if decl.implements?.length}
			<div>
				<strong>Implements:</strong>
				<ul class="inheritance_list">
					{#each decl.implements as impl (impl)}
						<li><code>{impl}</code></li>
					{/each}
				</ul>
			</div>
		{/if}
	</section>
{/if}

<!-- Examples -->
{#if decl.examples?.length}
	<section class="section">
		<h2>Examples</h2>
		{#each decl.examples as example, i (example)}
			<Details>
				{#snippet summary()}Example {i + 1}{/snippet}
				<pre class="example_code pane"><code>{example}</code></pre>
			</Details>
		{/each}
	</section>
{/if}

<!-- See Also -->
{#if decl.see_also?.length}
	<section class="section">
		<h2>See Also</h2>
		<ul class="see_also_list">
			{#each decl.see_also as ref (ref)}
				<li>{ref}</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- Members (for classes) -->
{#if decl.members?.length}
	<section class="section">
		<h2>Members</h2>
		<ul class="members_list">
			{#each decl.members as member (member)}
				<li class="member">
					<code class="member_name">{member.name}</code>
					{#if member.kind}
						<span class="kind_badge chip">{member.kind}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- Properties (for types/interfaces) -->
{#if decl.properties?.length}
	<section class="section">
		<h2>Properties</h2>
		<ul class="members_list">
			{#each decl.properties as prop (prop)}
				<li class="member">
					<code class="member_name">{prop.name}</code>
					{#if prop.kind}
						<span class="kind_badge chip">{prop.kind}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style>
	.meta {
		display: flex;
		gap: var(--space_sm);
		margin-bottom: var(--space_sm);
	}

	.deprecated_warning {
		background-color: var(--color_c_1);
		border: var(--border_width) solid var(--color_c_5);
		padding: var(--space_sm);
		border-radius: var(--border_radius_xs);
		margin-top: var(--space_md);
	}

	.section {
		margin-bottom: var(--space_lg);
	}

	.section h2 {
		font-size: var(--font_size_lg);
		font-weight: 600;
		margin: 0 0 var(--space_md) 0;
		color: var(--text_color_2);
	}

	.type_signature {
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
		background-color: var(--bg_3);
		padding: var(--space_sm);
		border-radius: var(--border_radius_xs);
		overflow-x: auto;
		white-space: pre-wrap;
		word-break: break-all;
	}

	.doc_content {
		line-height: 1.6;
		white-space: pre-wrap;
	}

	.params_table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--font_size_sm);
	}

	.params_table th,
	.params_table td {
		text-align: left;
		padding: var(--space_xs) var(--space_sm);
		border-bottom: var(--border_width) solid var(--border_color);
	}

	.params_table th {
		font-weight: 600;
		background-color: var(--bg_3);
	}

	.params_table code.type {
		font-size: var(--font_size_xs);
		color: var(--text_color_3);
	}

	.generic_list,
	.inheritance_list,
	.see_also_list,
	.members_list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.generic_list li,
	.inheritance_list li {
		padding: var(--space_xs2);
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
	}

	.see_also_list li {
		padding: var(--space_xs2);
		font-size: var(--font_size_sm);
	}

	.members_list .member {
		display: flex;
		align-items: center;
		gap: var(--space_sm);
		padding: var(--space_xs);
		border-bottom: var(--border_width) solid var(--border_color);
	}

	.member_name {
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
	}

	.example_code {
		font-family: var(--font_family_mono);
		font-size: var(--font_size_xs);
		background-color: var(--bg_3);
		padding: var(--space_sm);
		border-radius: var(--border_radius_xs);
		overflow-x: auto;
		white-space: pre;
	}
</style>

<script lang="ts">
	import type {Src_Module_Declaration} from '$lib/src_json.js';
	import Details from '$lib/Details.svelte';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import Identifier_Link_Or_Ts from '$lib/Identifier_Link_Or_Ts.svelte';

	const {
		decl,
		module_path,
		repo_url,
	}: {
		decl: Src_Module_Declaration;
		module_path: string;
		repo_url?: string;
	} = $props();

	// Generate source URL
	const source_url = $derived(
		repo_url && decl.source_location
			? `${repo_url}/blob/main/src/lib/${module_path.replace(/^\.\//, '')}#L${decl.source_location.line}`
			: undefined,
	);

	// TODO verbose and badly laid out -- but we want to be sure it's complete/thorough
</script>

<!-- Metadata -->
{#if source_url}
	<div class="meta">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="chip" href={source_url} target="_blank" rel="noopener"> view source </a>
	</div>
{/if}

<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
{#if decl.deprecated_message}
	<div class="deprecated_warning pane">
		<strong>⚠️ deprecated:</strong>
		<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
		{decl.deprecated_message}
	</div>
{/if}

{#if decl.kind}
	<section class="section">
		<span class="chip font_size_md">{decl.kind}</span>
	</section>
{/if}

<!-- type signature -->
{#if decl.type_signature}
	<section class="section">
		<Code content={decl.type_signature} lang="ts" />
	</section>
{/if}

<!-- documentation -->
{#if decl.doc_comment || decl.summary}
	<section class="section">
		<div class="doc_content">
			{decl.doc_comment || decl.summary}
		</div>
	</section>
{/if}

<!-- parameters -->
{#if decl.parameters?.length}
	<section class="section">
		<h2>parameters</h2>
		<table class="params_table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>optional</th>
					{#if decl.parameters.some((p) => p.description)}
						<th>description</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each decl.parameters as param (param)}
					<tr>
						<td><code>{param.name}</code></td>
						<td><Identifier_Link_Or_Ts type={param.type} /></td>
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

<!-- component props (for Svelte components) -->
{#if decl.props?.length}
	<section class="section">
		<h2>props</h2>
		<table class="params_table">
			<thead>
				<tr>
					<th>name</th>
					<th>type</th>
					<th>optional</th>
					{#if decl.props.some((p) => p.description)}
						<th>description</th>
					{/if}
					{#if decl.props.some((p) => p.default_value)}
						<th>default</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each decl.props as prop (prop)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td><Identifier_Link_Or_Ts type={prop.type} /></td>
						<td>{prop.optional ? 'yes' : 'no'}</td>
						{#if decl.props.some((p) => p.description)}
							<td>{prop.description ?? ''}</td>
						{/if}
						{#if decl.props.some((p) => p.default_value)}
							<td>
								{#if prop.default_value}
									<Code content={prop.default_value} lang="ts" />
								{/if}
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- return type -->
{#if decl.return_type}
	<section class="section">
		<h2>return type</h2>
		<Code content={decl.return_type} lang="ts" />
	</section>
{/if}

<!-- generic parameters -->
{#if decl.generic_params?.length}
	<section class="section">
		<h2>generic parameters</h2>
		<ul class="generic_list">
			{#each decl.generic_params as generic (generic)}
				<li><Code content={generic} lang="ts" /></li>
			{/each}
		</ul>
	</section>
{/if}

<!-- Extends/Implements -->
{#if decl.extends?.length || decl.implements?.length}
	<section class="section">
		<h2>inheritance</h2>
		{#if decl.extends?.length}
			<div>
				<strong>extends:</strong>
				<ul class="inheritance_list">
					{#each decl.extends as ext (ext)}
						<li><Identifier_Link_Or_Ts type={ext} /></li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if decl.implements?.length}
			<div>
				<strong>implements:</strong>
				<ul class="inheritance_list">
					{#each decl.implements as impl (impl)}
						<li><Identifier_Link_Or_Ts type={impl} /></li>
					{/each}
				</ul>
			</div>
		{/if}
	</section>
{/if}

<!-- examples -->
{#if decl.examples?.length}
	<section class="section">
		<h2>examples</h2>
		{#each decl.examples as example, i (example)}
			<Details>
				{#snippet summary()}Example {i + 1}{/snippet}
				<Code content={example} lang="ts" />
			</Details>
		{/each}
	</section>
{/if}

<!-- see also -->
{#if decl.see_also?.length}
	<section class="section">
		<h2>see also</h2>
		<ul class="see_also_list">
			{#each decl.see_also as ref (ref)}
				<li>{ref}</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- members (for classes) -->
{#if decl.members?.length}
	<section class="section">
		<h2>members</h2>
		<ul class="members_list">
			{#each decl.members as member (member)}
				<li class="member">
					<code class="member_name">{member.name}</code>
					{#if member.kind}
						<span class="chip">{member.kind}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- properties (for types/interfaces) -->
{#if decl.properties?.length}
	<section class="section">
		<h2>properties</h2>
		<ul class="members_list">
			{#each decl.properties as prop (prop)}
				<li class="member">
					<code class="member_name">{prop.name}</code>
					{#if prop.kind}
						<span class="chip">{prop.kind}</span>
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

	.doc_content {
		line-height: 1.6;
		white-space: pre-wrap;
	}

	.params_table {
		width: 100%;
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
</style>

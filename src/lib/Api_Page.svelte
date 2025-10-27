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
	// (all parsed data is now rendered; layout improvements can come later)
</script>

<!-- Metadata -->
{#if source_url}
	<p>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="chip" href={source_url} target="_blank" rel="noopener"> view source </a>
	</p>
{/if}

<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
{#if decl.deprecated_message}
	<p>
		<strong>⚠️ deprecated:</strong>
		<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
		{decl.deprecated_message}
	</p>
{/if}

{#if decl.kind}
	<p>
		<span class="chip font_size_md">{decl.kind}</span>
	</p>
{/if}

<!-- type signature -->
{#if decl.type_signature}
	<p>
		<Code content={decl.type_signature} lang="ts" />
	</p>
{/if}

<!-- documentation -->
{#if decl.doc_comment || decl.summary}
	<p>
		{decl.doc_comment || decl.summary}
	</p>
{/if}

<!-- parameters -->
{#if decl.parameters?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>parameter</th>
					<th>type</th>
					<th>optional</th>
					{#if decl.parameters.some((p) => p.description)}
						<th>description</th>
					{/if}
					{#if decl.parameters.some((p) => p.default_value)}
						<th>default</th>
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
						{#if decl.parameters.some((p) => p.default_value)}
							<td>
								{#if param.default_value}
									<Code content={param.default_value} lang="ts" />
								{/if}
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- component props (for Svelte components) -->
{#if decl.props?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>prop</th>
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
	<section>
		<h4>return type</h4>
		<Code content={decl.return_type} lang="ts" />
		{#if decl.return_description}
			<p>{decl.return_description}</p>
		{/if}
	</section>
{/if}

<!-- generic parameters -->
{#if decl.generic_params?.length}
	<section>
		<h4>generic parameters</h4>
		<ul>
			{#each decl.generic_params as generic (generic)}
				<li><Code content={generic} lang="ts" /></li>
			{/each}
		</ul>
	</section>
{/if}

<!-- Extends/Implements -->
{#if decl.extends?.length || decl.implements?.length}
	<section>
		<h4>inheritance</h4>
		{#if decl.extends?.length}
			<div>
				<strong>extends:</strong>
				<ul>
					{#each decl.extends as ext (ext)}
						<li><Identifier_Link_Or_Ts type={ext} /></li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if decl.implements?.length}
			<div>
				<strong>implements:</strong>
				<ul>
					{#each decl.implements as impl (impl)}
						<li><Identifier_Link_Or_Ts type={impl} /></li>
					{/each}
				</ul>
			</div>
		{/if}
	</section>
{/if}

<!-- throws -->
{#if decl.throws?.length}
	<section>
		<h4>throws</h4>
		<ul>
			{#each decl.throws as thrown (thrown)}
				<li>
					{#if thrown.type}
						<code>{thrown.type}</code> - {thrown.description}
					{:else}
						{thrown.description}
					{/if}
				</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- since -->
{#if decl.since}
	<section>
		<h4>since</h4>
		<p>{decl.since}</p>
	</section>
{/if}

<!-- examples -->
{#if decl.examples?.length}
	<section>
		<h4>examples</h4>
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
	<section>
		<h4>see also</h4>
		<ul>
			{#each decl.see_also as ref (ref)}
				<li>{ref}</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- members (for classes) -->
{#if decl.members?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>member</th>
					<th>kind</th>
				</tr>
			</thead>
			<tbody>
				{#each decl.members as member (member)}
					<tr>
						<td><code>{member.name}</code></td>
						<td>{member.kind ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- properties (for types/interfaces) -->
{#if decl.properties?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>property</th>
					<th>kind</th>
				</tr>
			</thead>
			<tbody>
				{#each decl.properties as prop (prop)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>{prop.kind ?? ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

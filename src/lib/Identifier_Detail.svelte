<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import type {Identifier} from '$lib/identifier.svelte.js';
	import Details from '$lib/Details.svelte';
	import Type_Link from '$lib/Type_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';

	const {identifier}: {identifier: Identifier} = $props();

	// Convenience accessor to the underlying identifier data
	const identifier_json = $derived(identifier.identifier_json);

	// TODO verbose and badly laid out -- but we want to be sure it's complete/thorough
	// (all parsed data is now rendered; layout improvements can come later)
</script>

<!-- Metadata -->
<p>
	<Module_Link module_path={identifier.module_path} />
</p>
{#if identifier.source_url}
	<p>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="chip" href={identifier.source_url} target="_blank" rel="noopener"> view source </a>
	</p>
{/if}

<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
{#if identifier.is_deprecated()}
	<p>
		<strong>⚠️ deprecated:</strong>
		<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
		{identifier_json.deprecated_message}
	</p>
{/if}

<!-- TODO is this useful sometimes? -->
<!-- {#if identifier.kind}
	<p>
		<span class="chip font_size_md">{identifier.kind}</span>
	</p>
{/if} -->

<!-- type signature -->
{#if identifier_json.type_signature}
	<p>
		<Code content={identifier_json.type_signature} lang="ts" />
	</p>
{/if}

<!-- documentation -->
{#if identifier.has_documentation()}
	<p>
		{identifier_json.doc_comment}
	</p>
{/if}

<!-- parameters -->
{#if identifier_json.parameters?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>parameter</th>
					<th>type</th>
					<th>optional</th>
					{#if identifier_json.parameters.some((p) => p.description)}
						<th>description</th>
					{/if}
					{#if identifier_json.parameters.some((p) => p.default_value)}
						<th>default</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each identifier_json.parameters as param (param)}
					<tr>
						<td><code>{param.name}</code></td>
						<td><Type_Link type={param.type} /></td>
						<td>{param.optional ? 'yes' : 'no'}</td>
						{#if identifier_json.parameters.some((p) => p.description)}
							<td>{param.description ?? ''}</td>
						{/if}
						{#if identifier_json.parameters.some((p) => p.default_value)}
							<td>
								{#if param.default_value}
									<Code inline content={param.default_value} lang="ts" />
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
{#if identifier_json.props?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>prop</th>
					<th>type</th>
					<th>optional</th>
					{#if identifier_json.props.some((p) => p.bindable)}
						<th>bindable</th>
					{/if}
					{#if identifier_json.props.some((p) => p.description)}
						<th>description</th>
					{/if}
					{#if identifier_json.props.some((p) => p.default_value)}
						<th>default</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each identifier_json.props as prop (prop)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td><Type_Link type={prop.type} /></td>
						<td>{prop.optional ? 'yes' : 'no'}</td>
						{#if identifier_json.props.some((p) => p.bindable)}
							<td>{prop.bindable ? 'yes' : 'no'}</td>
						{/if}
						{#if identifier_json.props.some((p) => p.description)}
							<td>{prop.description ?? ''}</td>
						{/if}
						{#if identifier_json.props.some((p) => p.default_value)}
							<td>
								{#if prop.default_value}
									<Code inline content={prop.default_value} lang="ts" />
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
{#if identifier_json.return_type}
	<section>
		<h4>return type</h4>
		<Code content={identifier_json.return_type} lang="ts" />
		{#if identifier_json.return_description}
			<p>{identifier_json.return_description}</p>
		{/if}
	</section>
{/if}

<!-- generic parameters -->
{#if identifier_json.generic_params?.length}
	<section>
		<h4>generic parameters</h4>
		<table>
			<thead>
				<tr>
					<th>parameter</th>
					{#if identifier_json.generic_params.some((g) => g.constraint)}
						<th>constraint</th>
					{/if}
					{#if identifier_json.generic_params.some((g) => g.default_type)}
						<th>default</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each identifier_json.generic_params as generic (generic)}
					<tr>
						<td><code>{generic.name}</code></td>
						{#if identifier_json.generic_params.some((g) => g.constraint)}
							<td>
								{#if generic.constraint}
									<Type_Link type={generic.constraint} />
								{/if}
							</td>
						{/if}
						{#if identifier_json.generic_params.some((g) => g.default_type)}
							<td>
								{#if generic.default_type}
									<Type_Link type={generic.default_type} />
								{/if}
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- Extends/Implements -->
{#if identifier_json.extends?.length || identifier_json.implements?.length}
	<section>
		<h4>inheritance</h4>
		{#if identifier_json.extends?.length}
			<div>
				<strong>extends:</strong>
				<ul>
					{#each identifier_json.extends as ext (ext)}
						<li><Type_Link type={ext} /></li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if identifier_json.implements?.length}
			<div>
				<strong>implements:</strong>
				<ul>
					{#each identifier_json.implements as impl (impl)}
						<li><Type_Link type={impl} /></li>
					{/each}
				</ul>
			</div>
		{/if}
	</section>
{/if}

<!-- throws -->
{#if identifier_json.throws?.length}
	<section>
		<h4>throws</h4>
		<ul>
			{#each identifier_json.throws as thrown (thrown)}
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
{#if identifier_json.since}
	<section>
		<h4>since</h4>
		<p>{identifier_json.since}</p>
	</section>
{/if}

<!-- examples -->
{#if identifier_json.examples?.length}
	<section>
		<h4>examples</h4>
		{#each identifier_json.examples as example, i (example)}
			<Details>
				{#snippet summary()}Example {i + 1}{/snippet}
				<Code content={example} lang="ts" />
			</Details>
		{/each}
	</section>
{/if}

<!-- see also -->
{#if identifier_json.see_also?.length}
	<section>
		<h4>see also</h4>
		<ul>
			{#each identifier_json.see_also as ref (ref)}
				<li>{ref}</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- members (for classes) -->
{#if identifier_json.members?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>member</th>
					<th>type</th>
					{#if identifier_json.members.some((m) => m.modifiers?.length)}
						<th>modifiers</th>
					{/if}
					{#if identifier_json.members.some((m) => m.doc_comment)}
						<th>description</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each identifier_json.members as member (member)}
					<tr>
						<td><code>{member.name}</code></td>
						<td>
							{#if member.type_signature}
								<Type_Link type={member.type_signature} />
							{/if}
						</td>
						{#if identifier_json.members.some((m) => m.modifiers?.length)}
							<td>{member.modifiers?.join(' ') ?? ''}</td>
						{/if}
						{#if identifier_json.members.some((m) => m.doc_comment)}
							<td>{member.doc_comment ?? ''}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

<!-- properties (for types/interfaces) -->
{#if identifier_json.properties?.length}
	<section>
		<table>
			<thead>
				<tr>
					<th>property</th>
					<th>type</th>
					{#if identifier_json.properties.some((p) => p.modifiers?.length)}
						<th>modifiers</th>
					{/if}
					{#if identifier_json.properties.some((p) => p.doc_comment)}
						<th>description</th>
					{/if}
				</tr>
			</thead>
			<tbody>
				{#each identifier_json.properties as prop (prop)}
					<tr>
						<td><code>{prop.name}</code></td>
						<td>
							{#if prop.type_signature}
								<Type_Link type={prop.type_signature} />
							{/if}
						</td>
						{#if identifier_json.properties.some((p) => p.modifiers?.length)}
							<td>{prop.modifiers?.join(' ') ?? ''}</td>
						{/if}
						{#if identifier_json.properties.some((p) => p.doc_comment)}
							<td>{prop.doc_comment ?? ''}</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
{/if}

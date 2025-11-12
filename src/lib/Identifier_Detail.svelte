<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import type {Identifier} from '$lib/identifier.svelte.js';
	import Details from '$lib/Details.svelte';
	import Type_Link from '$lib/Type_Link.svelte';
	import Module_Link from '$lib/Module_Link.svelte';
	import Mdz from '$lib/Mdz.svelte';

	const {identifier}: {identifier: Identifier} = $props();

	// TODO BLOCK should {#if identifier.type_signature} be inline or set only white_space_pre_wrap ? same with `<h4>returns</h4>`
</script>

<!-- Metadata -->
<p class="row justify_content_space_between">
	<Module_Link module_path={identifier.module_path} />
	{#if identifier.url_github}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="chip" href={identifier.url_github} target="_blank" rel="noopener">view source</a>
	{/if}
</p>

<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
{#if identifier.is_deprecated}
	<p>
		<strong>⚠️ deprecated:</strong>
		<!-- eslint-disable-next-line @typescript-eslint/no-deprecated -->
		{identifier.deprecated_message}
	</p>
{/if}

<!-- TODO is this useful sometimes? -->
<!-- {#if identifier.kind}
	<p>
		<span class="chip font_size_md">{identifier.kind}</span>
	</p>
{/if} -->

<!-- type signature -->
{#if identifier.type_signature}
	<Code inline content={identifier.type_signature} lang="ts" />
{/if}

<!-- documentation -->
{#if identifier.has_documentation}
	<Mdz content={identifier.doc_comment!} />
{/if}

<!-- parameters -->
{#if identifier.parameters?.length}
	<section>
		{#each identifier.parameters as param (param)}
			<section>
				<h4>
					<code
						>{param.name}{#if param.optional}<strong>?</strong>{/if}</code
					>
				</h4>
				{#if param.description}
					<Mdz content={param.description} />
				{/if}
				<div class="row gap_md">
					<strong>type</strong>
					<Type_Link type={param.type} />
				</div>
				{#if param.optional || param.default_value}
					<div class="row gap_md">
						{#if param.optional}
							<span class="chip">optional</span>
						{/if}
						{#if param.default_value}
							<strong>default</strong>
							<Code inline content={param.default_value} lang="ts" />
						{/if}
					</div>
				{/if}
			</section>
		{/each}
	</section>
{/if}

<!-- component props (for Svelte components) -->
{#if identifier.props?.length}
	<section>
		{#each identifier.props as prop (prop)}
			<section>
				<h4>
					<code
						>{prop.name}{#if prop.optional}<strong>?</strong>{/if}</code
					>
				</h4>
				{#if prop.description}
					<Mdz content={prop.description} />
				{/if}
				<div class="row gap_md mb_lg">
					<strong>type</strong>
					<Type_Link type={prop.type} />
				</div>
				{#if prop.optional || prop.bindable || prop.default_value}
					<div class="row gap_md">
						{#if prop.optional}
							<span class="chip">optional</span>
						{/if}
						{#if prop.bindable}
							<span class="chip">bindable</span>
						{/if}
						{#if prop.default_value}
							<strong>default</strong>
							<Code inline content={prop.default_value} lang="ts" />
						{/if}
					</div>
				{/if}
			</section>
		{/each}
	</section>
{/if}

<!-- returns -->
{#if identifier.return_type}
	<section>
		<h4>returns</h4>
		<Code inline content={identifier.return_type} lang="ts" />
		{#if identifier.return_description}
			<Mdz content={identifier.return_description} />
		{/if}
	</section>
{/if}

<!-- generics -->
{#if identifier.generic_params?.length}
	<section>
		<h4>generics</h4>
		{#each identifier.generic_params as generic (generic)}
			<section>
				<h4><code>{generic.name}</code></h4>
				{#if generic.constraint}
					<div class="row gap_md">
						<strong>constraint</strong>
						<Type_Link type={generic.constraint} />
					</div>
				{/if}
				{#if generic.default_type}
					<div class="row gap_md">
						<strong>default</strong>
						<Type_Link type={generic.default_type} />
					</div>
				{/if}
			</section>
		{/each}
	</section>
{/if}

<!-- Extends/Implements -->
{#if identifier.extends?.length || identifier.implements?.length}
	<section>
		<h4>inheritance</h4>
		{#if identifier.extends?.length}
			<div>
				<strong>extends:</strong>
				<ul>
					{#each identifier.extends as ext (ext)}
						<li><Type_Link type={ext} /></li>
					{/each}
				</ul>
			</div>
		{/if}
		{#if identifier.implements?.length}
			<div>
				<strong>implements:</strong>
				<ul>
					{#each identifier.implements as impl (impl)}
						<li><Type_Link type={impl} /></li>
					{/each}
				</ul>
			</div>
		{/if}
	</section>
{/if}

<!-- throws -->
{#if identifier.throws?.length}
	<section>
		<h4>throws</h4>
		<ul>
			{#each identifier.throws as thrown (thrown)}
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
{#if identifier.since}
	<section>
		<h4>since</h4>
		<p>{identifier.since}</p>
	</section>
{/if}

<!-- examples -->
{#if identifier.examples?.length}
	<section>
		<h4>examples</h4>
		{#each identifier.examples as example, i (example)}
			<Details>
				{#snippet summary()}Example {i + 1}{/snippet}
				<Code content={example} lang="ts" />
			</Details>
		{/each}
	</section>
{/if}

<!-- see also -->
{#if identifier.see_also?.length}
	<section>
		<h4>see also</h4>
		<ul>
			{#each identifier.see_also as ref (ref)}
				<li>
					<Mdz content={ref} />
				</li>
			{/each}
		</ul>
	</section>
{/if}

<!-- members (for classes) -->
{#if identifier.members?.length}
	<section>
		{#each identifier.members as member (member)}
			<section>
				<h4><code>{member.name}</code></h4>
				{#if member.doc_comment}
					<Mdz content={member.doc_comment} />
				{/if}
				{#if member.type_signature}
					<p class="row gap_md">
						<strong>type</strong>
						<Type_Link type={member.type_signature} />
					</p>
				{/if}
				{#if member.modifiers?.length}
					<div class="row gap_md">
						{#each member.modifiers as modifier (modifier)}
							<span class="chip">{modifier}</span>
						{/each}
					</div>
				{/if}
			</section>
		{/each}
	</section>
{/if}

<!-- properties (for types/interfaces) -->
{#if identifier.properties?.length}
	<section>
		{#each identifier.properties as prop (prop)}
			<section>
				<h4><code>{prop.name}</code></h4>
				{#if prop.doc_comment}
					<Mdz content={prop.doc_comment} />
				{/if}
				{#if prop.type_signature}
					<div class="row gap_md">
						<strong>type</strong>
						<Type_Link type={prop.type_signature} />
					</div>
				{/if}
				{#if prop.modifiers?.length}
					<div class="row gap_md">
						{#each prop.modifiers as modifier (modifier)}
							<span class="chip">{modifier}</span>
						{/each}
					</div>
				{/if}
			</section>
		{/each}
	</section>
{/if}

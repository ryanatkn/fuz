<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {swallow} from '$lib/swallow.js';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Library_Vocab from '$lib/Library_Vocab.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {get_tome} from '$lib/tome.js';
	import {default_variables} from '$lib/variables.js';
	import type {Theme_Variable} from '$lib/theme.js';
	import Theme_Variable_Detail from '$routes/Theme_Variable_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	export let variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	let selected_variable: Theme_Variable | null = null;

	const click = (e: MouseEvent, variable: Theme_Variable): void => {
		swallow(e);
		selected_variable = variable;
	};
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<p>
			Variables are <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*"
				>CSS custom properties</a
			>
			that can be grouped into a <Library_Vocab name="theme" />. Each variable can have values for
			light and/or dark color schemes.
		</p>
		<p>
			Compared to most systems not based on CSS custom properties, variables are more easily changed
			at runtime by developers and end-users. The goal is to provide runtime theming with minimal
			overhead. Variables also double as an interface that user-generated content can safely use.
			Stay tuned for examples.
		</p>
		<blockquote>
			Variables are <code>snake_case</code> so that they're also valid JS identifiers, not for stylistic
			or contrarian reasons. This choice leaks to the CSS class naming conventions, so that variable-derived
			utility classes match their corresponding variable names. This topic needs a blog post.
		</blockquote>
	</section>
	<section>
		<Code
			lang="ts"
			content={`export interface Theme {
	// TODO probably need an \`id\`
	// id: string;
	name: string;
	items: Theme_Variable[];
}

export interface Theme_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}
		/>
	</section>
	<section class="box">
		<blockquote class="spaced">
			{variables.length} theme variables
		</blockquote>
		<!-- TODO add info through the contextmenu or dialog -->
		<div class="variables">
			{#each variables as variable (variable.name)}
				<button class="variable menu_item" on:click={(e) => click(e, variable)}
					>--{variable.name}</button
				>
			{/each}
		</div>
	</section>
</Tome_Detail>
{#if selected_variable}
	<Dialog on:close={() => (selected_variable = null)} let:close>
		<div class="pane">
			<div class="panel padded_lg box">
				<Theme_Variable_Detail variable={selected_variable} />
				<br />
				<aside>this is unfinished</aside>
				<br />
				<button on:click={close}>ok</button>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	section {
		margin-bottom: var(--spacing_5);
	}
	.variables {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		font-family: var(--font_family_mono);
		white-space: nowrap;
	}
	.variable {
		width: 256px;
		min-height: var(--icon_size_sm);
	}
</style>

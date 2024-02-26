<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Library_Vocab from '$lib/Library_Vocab.svelte';
	import {get_tome} from '$lib/tome.js';
	import {default_variables} from '$lib/variables.js';
	import {get_selected_variable} from '$routes/library/helpers.js';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	export let variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	const selected_variable = get_selected_variable();
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<p>
			Variables are <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*"
				>CSS custom properties</a
			>
			that can be grouped into a <Library_Vocab name="themes">theme</Library_Vocab>. Each variable
			can have values for light and/or dark color schemes.
		</p>
		<aside>
			<p>
				These are named "variables" or "style variables" instead of the common name "design tokens"
				because Fuz is made by a programmer designing more for devs and end-users than designers.
				Their functionality is like JS variables but for CSS, and they're implemented with CSS
				custom properties, which are commonly called CSS variables.
			</p>
			<p>
				Also, in the programming domains I'm familiar with, including some Fuz projects, a token is
				a secret for authentication, and I don't like seeing the term overloaded. Wikipedia has
				programming usages but no page about design tokens. And finally, the term token has been
				popularized by cryptocurrencies which have no relation with Fuz, so its vibes are all over
				the place.
			</p>
		</aside>
		<p>
			The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			to both developers and end-users. Variables also provide an interface that user-generated
			content can safely use, and they can be leveraged by CSS classes, both utility and semantic.
			The result is a flexible and non-dogmatic system that aligns with modern CSS to achieve great
			UX and DX.
		</p>
		<aside>
			<p>
				Variables are <code>snake_case</code> so that they're also valid JS identifiers, not for
				stylistic or contrarian reasons. This choice leaks to the CSS class naming conventions, so
				that variable-derived utility classes match their corresponding variable names. This fits
				nicely with
				<a href="https://svelte.dev/docs/element-directives#class-name"
					>Svelte's class shorthand syntax</a
				>.
			</p>
			<p>
				The naming convention also supports my goal of thinking about Fuz and your app as having a
				single unified flat namespace, where every identifier regardless of module is unique and
				part of a larger whole - the system's vocabulary. Maybe this needs a blog post.
			</p>
		</aside>
	</section>
	<section>
		<Code
			lang="ts"
			content={`export interface Theme {
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
				<button class="variable menu_item" on:click={() => ($selected_variable = variable)}
					>--{variable.name}</button
				>
			{/each}
		</div>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_5);
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

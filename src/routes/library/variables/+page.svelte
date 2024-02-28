<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import {default_variables} from '$lib/variables.js';
	import Style_Variable_Button from '$routes/Style_Variable_Button.svelte';

	const LIBRARY_ITEM_NAME = 'variables';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	export let variables = default_variables.slice().sort((a, b) => a.name.localeCompare(b.name));

	// TODO maybe FAQ? need a standardized pattern -- first add the "on this page" menu functionality
</script>

<Tome_Detail {tome}>
	<section class="prose">
		<p>
			Variables are <Mdn_Link href="Web/CSS/--*">CSS custom properties</Mdn_Link>
			that can be grouped into a <Tome_Link name="themes">theme</Tome_Link>. Each variable can have
			values for light and/or dark color schemes.
		</p>
		<p>
			The goal of the variables system is to provide runtime theming that's efficient and ergnomic
			both both developers and end-users. Variables can be composed in multiple ways:
		</p>
		<ul>
			<li>by CSS classes, both utility and semantic</li>
			<li>
				by other variables, both in calculations and to add useful semantics (e.g. <code
					>button_bg_hover</code
				>
				defaults to <code>fg_2</code> but can be themed independently)
			</li>
			<li>in JS like in Svelte components</li>
		</ul>
		<p>
			Variables also provide an interface that user-generated content can safely use in most cases.
			The result is a non-dogmatic system that aligns with modern CSS to deliver high-capability UX
			and DX with minimal overhead.
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
				a secret for authentication, and I don't like overloading the term. Wikipedia has several
				programming usages but no page about design tokens. And finally, the term token has been
				popularized by cryptocurrencies which have no relation with Fuz, so its vibes are all over
				the place.
			</p>
		</aside>
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
				single unified flat namespace, where every identifier regardless of module is unique, and
				part of a larger whole - the system's vocabulary, available in every appropriate context -
				JS, HTML, and CSS, on the client and server, and in tests and dev tools. Maybe this needs a
				blog post.
			</p>
		</aside>
	</section>
	<section>
		<Code
			lang="ts"
			content={`export interface Theme {
	name: string;
	variables: Style_Variable[];
}

export interface Style_Variable {
	name: string;
	light?: string;
	dark?: string;
	summary?: string;
}`}
		/>
	</section>
	<section class="box">
		<blockquote class="mb_lg">
			{variables.length} style variables
		</blockquote>
		<aside class="mb_lg">TODO some of these will change</aside>
		<!-- TODO add info through the contextmenu or dialog -->
		<div class="variables">
			{#each variables as variable (variable.name)}
				<Style_Variable_Button name={variable.name} classes="menu_item" />
			{/each}
		</div>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl5);
	}
	.variables {
		width: 100%;
		display: inline-grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--style_variable_name_width, 240px), 1fr));
		font-family: var(--font_family_mono);
		white-space: nowrap;
	}
</style>

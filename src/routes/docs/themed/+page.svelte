<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import type {Theme} from '@ryanatkn/moss/theme.js';
	import {default_themes} from '@ryanatkn/moss/themes.js';

	import Tome_Content from '$lib/Tome_Content.svelte';
	import Details from '$lib/Details.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Theme_Form from '$routes/Theme_Form.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	// import Themed_Scope from '$routes/docs/themed/Themed_Scope.svelte'; // TODO @many revisit Themed_Scope
	import {themer_context} from '$lib/themer.svelte.js';

	const LIBRARY_ITEM_NAME = 'Themed';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	const themer = themer_context.get();

	// let show_create_theme_dialog = false;
	let editing_theme: null | Theme = $state(null);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section class="theme">
		<p>
			Fuz provides UI components that use <a href="https://moss.ryanatkn.com/docs/themes"
				>Moss' theming system</a
			> for dark mode and custom themes.
		</p>
		<p>
			<code>Themed</code> adds global support for both the browser's
			<Mdn_Link path="Web/CSS/color-scheme" />
			and custom themes based on
			<a href="https://moss.ryanatkn.com/docs/variables">Moss style variables</a>, which use
			<Mdn_Link path="Web/CSS/--*">CSS custom properties</Mdn_Link>.
			<code>Themed</code> is a singleton component that's mounted at the top-level of the page:
		</p>
		<Code content={`import Themed from '@ryanatkn/fuz/Themed.svelte';`} lang="ts" />
		<Code content={`<!-- +layout.svelte -->\n<Themed>\n\t{@render children()}\n</Themed>`} />
		<Details>
			{#snippet summary()}Why the singleton?{/snippet}
			<aside>
				<p>Most theme usage affects the whole page, so Fuz makes that easy.</p>
				<p>
					By default <code>Themed</code> syncs its settings to the global <code>:root</code> tag and
					persists to <code>localStorage</code>.
				</p>
				<p>These behaviors can be customized with its props:</p>
				<ul>
					<li><code>sync_color_scheme</code></li>
					<li><code>load_color_scheme</code></li>
					<li><code>save_color_scheme</code></li>
					<li><code>load_theme</code></li>
					<li><code>save_theme</code></li>
				</ul>
				<p>A feature to support partial page theming is planned with <code>Themed_Scope</code>.</p>
				<!-- TODO @many revisit Themed_Scope <p>See <code>Themed_Scope</code> below to theme one branch of the DOM tree.</p> -->
			</aside>
		</Details>
		<Details>
			{#snippet summary()}Why nested children?{/snippet}
			<aside>
				<p>
					<code>Themed</code> is designed to wrap every page at the top level so it can provide the
					selected theme and color scheme in the Svelte context via a <code>themer</code> instance.
					It works without children, but <code>themer_context.get()</code> will fail unless you call
					<code>themer_context.set()</code> yourself.
				</p>
				<p>
					This lets you call <code>themer_context.get()</code> to access the reactive
					<code>Themer</code>
					class instance anywhere in your code. The helper components on this page like
					<code>Color_Scheme_Input</code> and <code>Theme_Input</code> use it so they don't require
					a <code>themer</code> prop.
				</p>
				<p>
					If you don't don't want to wrap everything in <code>Themed</code> for some reason, you can
					set a <code>Themer</code> in context manually. It must be the same reference as the
					<code>Themed</code> prop:
				</p>
				<Code
					content={'<' +
						`script>
	const themer = new Themer(...);
	set_themer(themer);
</script>
<Themed {themer} />
<!--
	sibling components not nested in \`Themed\`
	can now call \`themer_context.get()\`
-->`}
				/>
			</aside>
		</Details>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Color scheme" />
		<p>
			<code>Themed</code> defaults to automatic
			<Mdn_Link path="Web/CSS/color-scheme" />
			detection with
			<Mdn_Link path="Web/CSS/@media/prefers-color-scheme" />, and users can also set it directly:
		</p>
		<div class="mb_lg">
			<Color_Scheme_Input />
		</div>
		<Code
			content={`import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';`}
			lang="ts"
		/>
		<Code content="<Color_Scheme_Input />" />
		<p>Pass props to override the default:</p>
		<!-- TODO this is bugged on page load, auto is SSR'd but doesn't update here, can we fix? Should Svelte prefer the client value? -->
		<Code
			content={`<Color_Scheme_Input\n\tvalue={{color_scheme: ${
				"'" + JSON.stringify(themer.color_scheme).replace(/"/g, '') + "'"
			}}}\n\tonchange={...}\n/>`}
		/>
		<p>
			The builtin themes support both dark and light color schemes. Custom themes may support one or
			both color schemes.
		</p>
		<Details>
			{#snippet summary()}More about <code>Color_Scheme_Input</code>{/snippet}
			<aside>
				<p>
					<code>Color_Scheme_Input</code> enables users to choose and persist the color scheme without
					boilerplate.
				</p>
				<p>
					By default, <code>Color_Scheme_Input</code> works with <code>Themed</code>'s
					<code>themer</code> in context to save the user's preference to <code>localStorage</code>.
					To customize this behavior, pass your own <code>value</code> or <code>onchange</code>
					props. The <code>value</code> defaults to <code>themer_context.get()</code> so technically
					you could call <code>set_themer</code>, but it's unlikely you want to override it in
					context.
				</p>
			</aside>
		</Details>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Builtin themes" />
		<p>
			A theme is a simple JSON collection of <a href="https://moss.ryanatkn.com/docs/variables"
				>Moss style variables</a
			> that can be transformed into CSS that set custom properties. Each variable can have values for
			light and/or dark color schemes. In other words, "dark" isn't a theme, it's a mode that any theme
			can implement.
		</p>
		<!-- TODO explain when exported <Code code={`<Theme_Input\n\t{themes}\n\t{selected_theme}\n/>`} /> -->
		<div class="width_upto_sm mb_lg">
			<Theme_Input {themes} enable_editing onedit={(t) => (editing_theme = t)} />
		</div>
		<!-- <button class="mb_lg" onclick={() => (show_create_theme_dialog = true)} disabled
				>create a new theme (todo)</button
			> -->
		<aside>
			⚠️ The builtin themes need a lot more work, but the proof of concept seems to work.
		</aside>
		<aside>
			⚠️ Custom themes currently pop in on page load. To see this, change from the base theme and
			refresh the page. This can be fixed using a similar strategy that we use to avoid pop-in of
			user-defined color schemes, but it's more involved.
		</aside>
	</Tome_Section>
	<!-- TODO @many revisit Themed_Scope
	<Tome_Section class="theme">
		<Tome_Section_Header text="Scoped themes"/>
		<Details>
			{#snippet summary()}⚠️ Scoped themes are a work in progress and may not be supported depending
				on complexity. It shouldn't worsen the unscoped API.{/snippet}
			<div class="mb_lg">
				<p>Scope a theme to one branch of the DOM tree with <code>Themed_Scope</code>:</p>
				<Code content={`import Themed_Scope from '@ryanatkn/fuz/Themed_Scope.svelte';`} lang="ts" />
				<Code content={`<Themed_Scope {selected_theme}>\n\t\t...\n</Themed_Scope>`} />
			</div>
			<div>
				{#each themes as theme (theme.name)}
					TODO @many proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check
					{@const selected =
						themer.color_scheme === 'light' && theme.name === themer.theme.name}
					<Themed_Scope
						themer={new Themer(
							untrack(() => theme),
							'light',
						)}
					>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								onclick={() => {
									select_theme(theme);
									themer.color_scheme = 'light';
								}}
								>{#if selected}★{:else}☆{/if}</button
							>
							<div style:flex="1" class="p_md">
								the <code>{theme.name}</code> theme
							</div>
						</div>
					</Themed_Scope>
				{/each}
				{#each themes as theme (theme.name)}
					@many proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check
					{@const selected =
						themer.color_scheme === 'dark' && theme.name === themer.theme.name}
					<Themed_Scope
						themer={new Themer(
							untrack(() => theme),
							'dark',
						)}
					>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								onclick={() => {
									select_theme(theme);
									themer.color_scheme = 'dark';
								}}
								>{#if selected}★{:else}☆{/if}</button
							>
							<div style:flex="1" class="p_md">
								the <code>{theme.name}</code> theme
							</div>
						</div>
					</Themed_Scope>
				{/each}
			</div>
		</Details>
	</Tome_Section>
	-->
	<Tome_Section>
		<Tome_Section_Header text="Example usage" />
		<p>Themes are plain CSS that can be sourced in a variety of ways.</p>
		<p>To use Fuz's base theme:</p>
		<Code
			content={`<!-- +layout.svelte -->
<` +
				`script>
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		children: Snippet;
	}
	
	const {children}: Props = $props();
</script>

<!-- enable theme and color-scheme support -->
<Themed>
	{@render children()}
</Themed>`}
		/>
		<p>
			<code>Themed</code> can be customized with the the nonreactive prop
			<code>themer</code>:
		</p>
		<Code
			content={`import {Themer} from '@ryanatkn/fuz/themer.svelte.js';\nconst themer = new Themer(...);`}
			lang="ts"
		/>
		<Code
			content={`<Themed {themer}>
	{@render children()}
</Themed>`}
		/>
		<aside>
			The <code>themer</code> prop is not reactive because it's put in Svelte context without a wrapper.
			This could be fixed, let me know if you have a usecase.
		</aside>
		<p>
			<code>Themed</code> sets the <code>themer</code> in the Svelte context:
		</p>
		<!-- TODO @many revisit Themed_Scope
		 	// the nearest \`Themed\` or \`Themed_Scope\` ancestor:
		-->
		<Code
			content={`// get values from the Svelte context provided by
// the nearest \`Themed\` ancestor:
import {themer_context} from '@ryanatkn/fuz/themer.svelte.js';
const themer = themer_context.get();
themer.theme.name; // '${themer.theme.name}'
themer.color_scheme; // '${themer.color_scheme}'`}
			lang="ts"
		/>
		<p>
			For a more complete example, see <a href="https://github.com/ryanatkn/fuz_template"
				>fuz_template</a
			>.
		</p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="More details" />
		<p>
			<code>Themed</code> initializes the system's theme support. Without it, the page will not
			reflect the user's system
			<code>color-scheme</code>. By default, <code>Themed</code> applies the base theme to the root
			of the page via <code>create_theme_setup_script</code>. It uses JS to add the
			<code>.dark</code> CSS class to the <code>:root</code> element.
		</p>
		<p>
			This strategy enables color scheme and theme support with minimal CSS and optimal performance
			for most use cases. The system supports plain CSS usage that can be static or dynamic, or
			imported at buildtime or runtime. It also allows runtime access to the underlying data like
			the <a href="https://moss.ryanatkn.com/docs/variables">style variables</a> if you want to pay the
			performance costs. Scoped theming to one part of the page is planned.
		</p>
		<p>
			The theme setup script interacts with <code>sync_color_scheme</code> to save the user's
			preference to <code>localStorage</code>. See also <code>Color_Scheme_Input</code>.
		</p>
		<p>
			The setup script avoids flash-on-load due to color scheme, but currently themes flash in after
			loading. We'll try to fix this when the system stabilizes.
		</p>
	</Tome_Section>
</Tome_Content>

<!-- TODO enable creating themes -->
<!-- {#if show_create_theme_dialog}
	<Dialog onclose={() => (show_create_theme_dialog = false)} let:close>
		<div class="pane p_md width_upto_md mx_auto">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					oncreate={(theme) => {
						themes = themes.concat(theme);
						close();
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if} -->
{#if editing_theme}
	<Dialog onclose={() => (editing_theme = null)}>
		<div class="pane p_md width_upto_md mx_auto">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					theme={editing_theme}
					onsave={(theme) => {
						console.log(`update theme`, theme); // eslint-disable-line no-console
						alert('todo'); // eslint-disable-line no-alert
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.theme_editor_wrapper {
		width: var(--distance_md);
		padding: var(--space_lg);
	}
</style>

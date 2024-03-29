<script lang="ts">
	import {writable} from 'svelte/store';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {get_tome} from '$lib/tome.js';
	import Color_Scheme_Input from '$lib/Color_Scheme_Input.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {type Theme, save_theme, get_theme, get_color_scheme} from '$lib/theme.js';
	import {default_themes} from '$lib/themes.js';
	import Theme_Input from '$lib/Theme_Input.svelte';
	import Theme_Form from '$routes/Theme_Form.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Themed_Scope from '$lib/Themed_Scope.svelte';

	const LIBRARY_ITEM_NAME = 'themes';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	const themes = default_themes.slice();

	const selected_theme = get_theme();
	const selected_color_scheme = get_color_scheme();

	// This is only needed for the custom controls below,
	// it's automated by default with `Theme_Input` and the top-level `Themed`.
	const select_theme = (theme: Theme): void => {
		$selected_theme = theme;
		save_theme(theme);
	};

	// let show_create_theme_dialog = false;
	let editing_theme: null | Theme = null;

	// TODO some hacky layout patterns below, tricky to mix prose and other elements
</script>

<Tome_Detail {tome}>
	<section class="theme panel">
		<div class="prose">
			<p>
				<code>Themed</code> adds global support for both the browser's
				<Mdn_Link href="Web/CSS/color-scheme">color-scheme</Mdn_Link>
				and custom themes based on <Tome_Link name="variables" />, which use
				<Mdn_Link href="Web/CSS/Using_CSS_custom_properties">CSS custom properties</Mdn_Link>.
				<code>Themed</code> is a singleton component that's mounted at the top-level of the page:
			</p>
			<Code content={`import Themed from '@ryanatkn/fuz/Themed.svelte';`} lang="ts" />
			<Code content={`<!-- +layout.svelte -->\n<Themed>\n\t<slot />\n</Themed>`} />
			<details>
				<summary>why the singleton?</summary>
				<aside>
					<p>
						By default <code>Themed</code> syncs its settings to the global <code>:root</code> tag
						and persists to <code>localStorage</code>.
					</p>
					<p>These behaviors can be customized with its props:</p>
					<ul>
						<li><code>sync_color_scheme</code></li>
						<li><code>load_color_scheme</code></li>
						<li><code>save_color_scheme</code></li>
						<li><code>load_theme</code></li>
						<li><code>save_theme</code></li>
					</ul>
					<p>See <code>Themed_Scope</code> below to theme one branch of the DOM tree.</p>
				</aside>
			</details>
			<details>
				<summary>why nest the slot?</summary>
				<aside>
					<p>
						<code>Themed</code> is designed to wrap every page at the top level so it can provide
						the selected theme and color scheme in the Svelte context. It works without a slot, but
						<code>get_theme</code> and <code>get_color_scheme</code> will fail unless you call
						<code>set_theme</code> and <code>set_color_scheme</code> yourself.
					</p>
					<p>
						These context helpers provide the <code>writable</code> stores to your code, and they also
						reduce boilerplate in the helper components documented below.
					</p>
					<p>
						If you set stores in context manually, they must be the same references as the <code
							>Themed</code
						> props:
					</p>
					<Code
						content={'<' +
							`script>\n\tconst theme = writable(...);\n\tconst color_scheme = writable(...);\n\tset_theme(theme);\n\tset_color_scheme(color_scheme);\n</script>\n<Themed\n\tselected_theme={theme}\n\tselected_color_scheme={color_scheme}\n/>\n<!-- sibling content... -->`}
					/>
				</aside>
			</details>
		</div>
	</section>
	<section class="theme panel">
		<div class="prose">
			<h3>color scheme</h3>
			<p>
				<code>Themed</code> defaults to automatic
				<Mdn_Link href="Web/CSS/color-scheme">color-scheme</Mdn_Link>
				detection with
				<Mdn_Link href="Web/CSS/@media/prefers-color-scheme">prefers-color-scheme</Mdn_Link>, and
				users can also set it directly:
			</p>
			<Color_Scheme_Input />
			<Code
				content={`import Color_Scheme_Input from '@ryanatkn/fuz/Color_Scheme_Input.svelte';`}
				lang="ts"
			/>
			<Code content="<Color_Scheme_Input />" />
			<p>Pass a prop to override the default:</p>
			<Code
				content={`<Color_Scheme_Input\n\tselected_color_scheme={writable(${
					$selected_color_scheme
						? "'" + JSON.stringify($selected_color_scheme).replace(/"/gu, '') + "'"
						: 'null'
				})}\n/>`}
			/>
			<p>
				The builtin themes support both dark and light color schemes. Custom themes may support one
				or both color schemes.
			</p>
			<details>
				<summary>more about <code>Color_Scheme_Input</code></summary>
				<aside>
					<p>
						<code>Color_Scheme_Input</code> enables users to choose and persist the color scheme without
						boilerplate.
					</p>
					<p>
						By default, <code>Color_Scheme_Input</code> works with <code>Themed</code> to save the
						user's preference to <code>localStorage</code>. To customize this behavior, pass a
						custom
						<code>selected_color_scheme</code>
						or <code>select</code> function prop.
					</p>
				</aside>
			</details>
		</div>
	</section>
	<section class="theme panel">
		<div class="prose">
			<h3>themes</h3>
			<p>
				A theme is a simple JSON collection of <Tome_Link name="variables" /> that can be transformed
				into CSS that set
				<Mdn_Link href="Web/CSS/Using_CSS_custom_properties">CSS custom properties</Mdn_Link>. Each
				variable can have values for light and/or dark color schemes.
			</p>
			<aside>The builtin themes need more work, but the proof of concept is ready!</aside>
			<!-- TODO explain when exported <Code code={`<Theme_Input\n\t{themes}\n\t{selected_theme}\n/>`} /> -->
			<div class="width_sm mb_lg">
				<Theme_Input {themes} enable_editing={true} on:edit={(e) => (editing_theme = e.detail)} />
			</div>
			<!-- <button class="mb_lg" on:click={() => (show_create_theme_dialog = true)} disabled={true}
				>create a new theme (todo)</button
			> -->
			<aside>
				Editing themes at runtime is a work in progress, but you can click around to see where it's
				going!
			</aside>
		</div>
	</section>
	<section class="theme panel">
		<div class="mb_lg prose">
			<h3>scoped themes</h3>
		</div>
		<details>
			<summary>⚠️ scoped themes are a work in progress</summary>
			<div class="mb_lg prose">
				<p>Scope a theme to one branch of the DOM tree with <code>Themed_Scope</code>:</p>
				<Code content={`import Themed_Scope from '@ryanatkn/fuz/Themed_Scope.svelte';`} lang="ts" />
				<Code content={`<Themed_Scope {selected_theme}>\n\t\t...\n</Themed_Scope>`} />
			</div>
			<div>
				<!-- TODO this is a lot of copypasta -->
				{#each themes as theme (theme.name)}
					<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
					{@const selected =
						$selected_color_scheme === 'light' && theme.name === $selected_theme.name}
					<Themed_Scope selected_theme={writable(theme)} selected_color_scheme={writable('light')}>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								on:click={() => {
									select_theme(theme);
									$selected_color_scheme = 'light';
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
					<!-- TODO @multiple proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
					{@const selected =
						$selected_color_scheme === 'dark' && theme.name === $selected_theme.name}
					<Themed_Scope selected_theme={writable(theme)} selected_color_scheme={writable('dark')}>
						<div class="box row p_sm">
							<button
								type="button"
								class="icon_button"
								class:selected
								on:click={() => {
									select_theme(theme);
									$selected_color_scheme = 'dark';
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
		</details>
	</section>
	<section class="theme panel prose">
		<h3>theme usage</h3>
		<p>Themes are plain CSS that can be sourced in a variety of ways.</p>
		<p>To use fuz's base theme:</p>
		<Code
			content={`<!-- +layout.svelte -->
<script>
	import '@ryanatkn/fuz/style.css';
	import '@ryanatkn/fuz/theme.css';
	import Themed from '@ryanatkn/fuz/Themed.svelte';
<script>

<!-- enable theme and color-scheme support -->
<Themed>
	<slot />
</Themed>`}
		/>
		<p>
			<code>Themed</code> can be customized with the nonreactive, bindable, writable store props
			<code>selected_theme</code>
			and <code>selected_color_scheme</code>:
		</p>
		<Code
			content={`<Themed {selected_theme} {selected_color_scheme}>
	<slot />
</Themed>`}
		/>
		<p>
			<code>Themed</code> sets the writable stores <code>selected_theme</code>
			and <code>selected_color_scheme</code> in the Svelte context:
		</p>
		<div class="w_100">
			<Code
				content={`// get values from the Svelte context provided by
// the nearest \`Themed\` or \`Themed_Scope\` ancestor:

import {get_theme} from '@ryanatkn/fuz/theme.js';
const selected_theme = get_theme();
$selected_theme.name; // '${$selected_theme.name}'

import {get_color_scheme} from '@ryanatkn/fuz/theme.js';
const selected_color_scheme = get_color_scheme();
$selected_color_scheme; // '${$selected_color_scheme}'`}
				lang="js"
			/>
		</div>
		<p>
			<details>
				<summary>more about <code>Themed</code></summary>
				<aside>
					<p>
						<code>Themed</code> initializes the system's theme support. Without it, the page will
						not reflect the user's system
						<code>color-scheme</code>. By default, <code>Themed</code> applies the base theme to the
						root of the page via <code>create_theme_setup_script</code>. It uses JS to add the
						<code>.dark</code> CSS class to the <code>:root</code> element.
					</p>
					<p>
						This strategy enables color scheme and theme support with minimal CSS and optimal
						performance for most use cases. The system supports plain CSS usage that can be static
						or dynamic, scoped or global, or imported at buildtime or runtime. It also allows
						runtime access to the data if you want to pay the performance costs.
					</p>
					<p>
						The theme setup script interacts with <code>sync_color_scheme</code> to save the user's
						preference to <code>localStorage</code>. See also <code>Color_Scheme_Input</code>.
					</p>
					<p>
						The setup script avoids flash-on-load due to color scheme, but currently themes flash in
						after loading. We'll try to fix this when the system stabilizes.
					</p>
				</aside>
			</details>
		</p>
	</section>
	<!-- TODO probably do this, needs colored buttons and other missing things though,
		gets big - maybe put behind a click? or at least on the main library page? -->
	<!-- <section class="panel prose p_md">
		<Style_Examples />
	</section> -->
</Tome_Detail>

<!-- TODO enable creating themes -->
<!-- {#if show_create_theme_dialog}
	<Dialog on:close={() => (show_create_theme_dialog = false)} let:close>
		<div class="pane">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					on:create={(e) => {
						themes = themes.concat(e.detail);
						close();
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if} -->
{#if editing_theme}
	<Dialog on:close={() => (editing_theme = null)}>
		<div class="pane">
			<div class="theme_editor_wrapper panel">
				<Theme_Form
					theme={editing_theme}
					on:save={(e) => {
						console.log(`update e.detail`, e.detail); // eslint-disable-line no-console
						alert('todo'); // eslint-disable-line no-alert
					}}
				/>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.theme {
		padding: var(--space_lg);
	}
	section {
		width: 100%;
		margin-bottom: var(--space_xl6);
	}
	.theme_editor_wrapper {
		width: var(--width_md);
		padding: var(--space_lg);
	}
</style>

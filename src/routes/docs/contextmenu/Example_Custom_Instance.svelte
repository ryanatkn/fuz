<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';
	import {swallow} from '@ryanatkn/belt/dom.js';

	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu_Submenu from '$lib/Contextmenu_Submenu.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Glyph from '$lib/Glyph.svelte';

	const {
		Contextmenu_Root_Component,
		root_component_name,
	}: {Contextmenu_Root_Component: typeof Contextmenu_Root; root_component_name: string} = $props();

	const contextmenu = new Contextmenu_State();

	let toggled = $state(false);
	let selected_color: 'f' | 'g' | 'j' | undefined = $state();

	const selected_color_class = $derived(selected_color ? `color_${selected_color}_5` : undefined);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Contextmenu_Root_Component {contextmenu} scoped>
	<Tome_Section>
		<Tome_Section_Header text="Custom instance" />
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => (toggled = !toggled)}>toggle</Contextmenu_Entry>
				<Contextmenu_Submenu>
					{#snippet icon()}🎨{/snippet}
					select color
					{#snippet menu()}
						<Contextmenu_Entry run={() => (selected_color = 'f')}
							><span class="color_f_5">option f</span></Contextmenu_Entry
						>
						<Contextmenu_Entry run={() => (selected_color = 'g')}
							><span class="color_g_5">option g</span></Contextmenu_Entry
						>
						<Contextmenu_Entry run={() => (selected_color = 'j')}
							><span class="color_j_5">option j</span></Contextmenu_Entry
						>
					{/snippet}
				</Contextmenu_Submenu>
			{/snippet}
			<div class="panel p_md">
				<p class="mb_md">
					The <code>{root_component_name}</code> prop <code>contextmenu</code> accepts a custom
					<code>Contextmenu_State</code> instance, allowing you to observe its reactive state and control
					it programmatically.
				</p>
				<Code lang="ts" content={`const contextmenu = new Contextmenu_State();`} />
				<Code
					content={`<${root_component_name} {contextmenu} scoped>...</${root_component_name}>`}
				/>
				<p class="mb_md">
					Try opening the contextmenu on this panel, then use the navigation buttons below to cycle
					through entries — just like the arrow keys. The buttons keep the menu open by calling
					selection methods directly instead of activating entries.
				</p>
				<div class="mb_md {selected_color_class}">
					<p>Reactive state:</p>
					<ul>
						<li><code>contextmenu.opened</code> === <code>{contextmenu.opened}</code></li>
						<li>
							<code>contextmenu.x</code> ===
							<code> {contextmenu.x} && contextmenu.y === {contextmenu.y}</code>
						</li>
						{#if contextmenu.error}
							<li class="color_error">Error: <code>{contextmenu.error}</code></li>
						{/if}
					</ul>
				</div>
				{#if contextmenu.opened}
					<div class="display_flex" transition:slide>
						<div class="box">
							<button
								type="button"
								class="border_bottom_left_radius_0 border_bottom_right_radius_0"
								onmousedowncapture={(e) => {
									swallow(e);
									contextmenu.select_previous();
								}}><Glyph glyph="↑" /></button
							>
							<div class="row">
								<button
									type="button"
									class="border_bottom_right_radius_0 border_top_right_radius_0"
									onmousedowncapture={(e) => {
										swallow(e);
										contextmenu.collapse_selected();
									}}><Glyph glyph="←" /></button
								>
								<button
									type="button"
									class="border_bottom_left_radius_0 border_top_left_radius_0"
									onmousedowncapture={(e) => {
										swallow(e);
										contextmenu.expand_selected();
									}}><Glyph glyph="→" /></button
								>
							</div>
							<button
								type="button"
								class="border_top_left_radius_0 border_top_right_radius_0"
								onmousedowncapture={(e) => {
									swallow(e);
									contextmenu.select_next();
								}}><Glyph glyph="↓" /></button
							>
						</div>
					</div>
				{/if}
				<!-- TODO this extra wrapper is only for the last-child margin behavior, but that may be removed -->
				<div>
					{#if toggled}
						<div transition:slide>toggled</div>
					{/if}
				</div>
			</div>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root_Component>

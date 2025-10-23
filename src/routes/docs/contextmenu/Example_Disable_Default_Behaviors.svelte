<script lang="ts">
	import {resolve} from '$app/paths';

	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const selected = selected_contextmenu_root_component_context.get();
	const Contextmenu_Root_Component = $derived(selected.component);

	const contextmenu = new Contextmenu_State();

	let toggled = $state(false);

	let text_el: HTMLElement | undefined = $state();

	const select_text = () => {
		const selection = window.getSelection();
		if (!selection || !text_el) return;
		const range = document.createRange();
		range.selectNodeContents(text_el);
		selection.removeAllRanges();
		selection.addRange(range);
	};
</script>

<Contextmenu_Root_Component {contextmenu} scoped link_entry={null} text_entry={null}>
	<Tome_Section>
		<Tome_Section_Header text="Disable default behaviors" />
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => void (toggled = !toggled)}>Toggle something</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md">
				<p>
					This example disables both automatic <code>a</code> link detection and
					<code>copy text</code>
					detection by setting props <code>link_entry={'{null}'}</code> and
					<code>text_entry={'{null}'}</code>
					on the
					<code>Contextmenu_Root</code>.
				</p>
				<div bind:this={text_el} class="mb_md">
					<p>
						Try <button type="button" onclick={select_text} class:color_a={toggled}
							>selecting this text</button
						>
						and opening the contextmenu -- the <code>copy text</code> entry will not appear, unlike other
						examples.
					</p>
				</div>
				<p class="mb_md">
					Try opening the contextmenu on <a href={resolve('/')}>this link</a>. No link entry! Only
					the custom "Toggle something" entry.
				</p>
			</div>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root_Component>

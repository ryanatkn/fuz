<script lang="ts">
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const contextmenu = new Contextmenu_State();

	// TODO maybe pass `contextmenu` to the children snippet

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

	let value = $state('');

	// TODO very hacky
	const text1 = `If a contextmenu is triggered on selected text, it includes a 'copy text' entry.  Try selecting text and then opening the contextmenu on it.`;
	const text2 = `If a contextmenu is triggered on selected text, it includes a 'copy text' entry.\n\n\nTry selecting text and then opening the contextmenu on it.`;
	const text3 = `If a contextmenu is triggered on selected text, it includes a 'copy text' entry.

Try selecting text and then opening the contextmenu on it.`;

	const highlighted = $derived(value === text1 || value === text2 || value === text3);
</script>

<Contextmenu_Root {contextmenu} scoped>
	<Tome_Section>
		<div class:color_d_5={highlighted}>
			<Tome_Section_Header text="Select text" />
		</div>
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle something</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md" class:color_g_5={highlighted}>
				<div bind:this={text_el} class="mb_lg">
					<p>
						If a contextmenu is triggered on selected text, it includes a <code>copy text</code>
						entry.
					</p>
					<p>
						Try <button type="button" onclick={select_text} class:color_a={toggled}
							>selecting text</button
						> and then opening the contextmenu on it.
					</p>
				</div>
				<label>
					<input type="text" placeholder="paste text here?" bind:value />
				</label>
				<p class:color_g_5={highlighted}>
					Opening the contextmenu on an <code>input</code> or <code>textarea</code> opens the browser's
					default contextmenu.
				</p>
				<label>
					<textarea placeholder="paste text here?" bind:value></textarea>
				</label>
				<p>
					<Mdn_Link path="Web/HTML/Global_attributes/contenteditable" /> likewise has your browser's
					default contextmenu behavior.
				</p>
				<p><code>contenteditable</code></p>
				<blockquote contenteditable bind:innerText={value}></blockquote>
				<p><code>contenteditable="plaintext-only"</code></p>
				<blockquote contenteditable="plaintext-only" bind:innerText={value}></blockquote>
			</div>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root>

<style>
	label {
		/* TODO hacky */
		display: block;
	}
</style>

<script lang="ts">
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_Store} from '$lib/contextmenu.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';

	const contextmenu = new Contextmenu_Store();

	// TODO BLOCK add some initial option that customizes the behavior
	// TODO BLOCK maybe pass `contextmenu` to the children snippet

	let toggled = $state(false);

	// TODO BLOCK input example (with paste option?)

	// TODO BLOCK selecting text needs to be moved - doesn't work properly here

	let text_el: HTMLElement;

	const select_text = () => {
		const selection = window.getSelection();
		if (!selection) return;
		const range = document.createRange();
		range.selectNodeContents(text_el);
		selection.removeAllRanges();
		selection.addRange(range);
	};

	let value = $state('');

	// TODO very hacky
	const text1 = `If a contextmenu is triggered on selected text, it includes a Copy text entry by default.  Try selecting text and then opening the contextmenu on it.`;
	const text2 = `If a contextmenu is triggered on selected text, it includes a Copy text entry by default.\n\n\nTry selecting text and then opening the contextmenu on it.`;
	const text3 = `If a contextmenu is triggered on selected text, it includes a Copy text entry by default.

Try selecting text and then opening the contextmenu on it.`;

	const highlighted = $derived(value === text1 || value === text2 || value === text3);
</script>

<Contextmenu_Root {contextmenu} scoped>
	<h3 class:color_d_5={highlighted}>Select text example</h3>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md prose" class:color_g_5={highlighted}>
			<div bind:this={text_el} class="mb_lg">
				<p>
					If a contextmenu is triggered on selected text, it includes a <code>Copy text</code>
					entry by default.
				</p>
				<p>
					Try <button class="inline" on:click={select_text} class:color_a={toggled}
						>selecting text</button
					> and then opening the contextmenu on it.
				</p>
			</div>
			<label>
				<input type="text" placeholder="paste text here?" bind:value />
			</label>
			<p class:color_g_5={highlighted}>
				Opening the contextmenu on an input opens the browser's default contextmenu.
			</p>
			<p>
				<Mdn_Link href="Web/HTML/Global_attributes/contenteditable">contenteditable</Mdn_Link> likewise
				has your browser's default contextmenu behavior:
			</p>
			<blockquote contenteditable="true" bind:innerText={value} />
			<p><code>contenteditable=plaintext-only</code></p>
			<blockquote contenteditable="plaintext-only" bind:innerText={value} />
		</div>
	</Contextmenu>
</Contextmenu_Root>

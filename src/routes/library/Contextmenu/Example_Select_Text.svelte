<script lang="ts">
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_Store} from '$lib/contextmenu.svelte';

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

	const text = `If a contextmenu behavior is triggered when text is selected, it includes a Copy text entry by default.  Try selecting text and then opening the contextmenu on it.`;
</script>

<Contextmenu_Root {contextmenu}>
	<h3>Select text example</h3>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md prose">
			<div bind:this={text_el} class="mb_lg">
				<p>
					If a contextmenu behavior is triggered when text is selected, it includes a <code
						>Copy text</code
					> entry by default.
				</p>
				<p>
					Try <button class="inline" on:click={select_text} class:color_a={toggled}
						>selecting text</button
					> and then opening the contextmenu on it.
				</p>
			</div>
			<label>
				<input type="text" placeholder="paste text here" bind:value />
				<p class:color_g_5={value === text}>
					Opening the contextmenu on an input opens the browser's default contextmenu.
				</p>
			</label>
		</div>
	</Contextmenu>
</Contextmenu_Root>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

	// TODO BLOCK opt out of this with a prop? `null` for snippet? default to fallback_link snippet inside `Contextmenu_Root`?

	// TODO BLOCK opening it on itself is bugged, opens another menu

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
</script>

<Contextmenu_Root>
	<div class="prose">
		<h3>Default behaviors example</h3>
		<div class="panel p_md">
			<Code
				content={`<Contextmenu_Root>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}
			/>
			<p>
				Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has
				special behavior by default. To accesss your browser's normal contextmenu, open the
				contextmenu on the link inside the contextmenu itself or hold <code>Shift</code>.
			</p>
			<p>
				Although disruptive to default browser behavior, this allows links to have contextmenu
				behaviors, and it allows you to open the contextmenu anywhere to access all contextual
				behaviors.
			</p>
			<p bind:this={text_el}>
				Also try <button class="inline" on:click={select_text}>selecting text</button> and then opening
				the contextmenu on it.
			</p>
		</div>
	</div>
</Contextmenu_Root>

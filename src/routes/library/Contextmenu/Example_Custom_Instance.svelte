<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_Store} from '$lib/contextmenu_helpers.svelte.js';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const contextmenu = new Contextmenu_Store();

	// TODO add some initial option that customizes the behavior
	// TODO maybe pass `contextmenu` to the children snippet

	let toggled = $state(false);
</script>

<Contextmenu_Root {contextmenu} scoped>
	<Tome_Subheading text="Custom instance" slug="custom-instance" />
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md">
			<Code lang="ts" content={`const contextmenu = create_contextmenu();`} />
			<Code content={`<Contextmenu_Root {contextmenu} scoped>...`} />
			<p>
				The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try opening
				the contextmenu on this panel.
			</p>
			<!-- TODO this extra wrapper is only for the last-child margin behavior, but that may be removed -->
			<div>
				{#if toggled}
					<div transition:slide>toggled</div>
				{/if}
			</div>
		</div>
	</Contextmenu>
</Contextmenu_Root>

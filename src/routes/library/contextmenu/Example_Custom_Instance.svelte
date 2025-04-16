<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_State} from '$lib/contextmenu_state.svelte.js';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const contextmenu = new Contextmenu_State();

	// TODO add some initial option that customizes the behavior
	// TODO maybe pass `contextmenu` to the children snippet

	let toggled = $state(false);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Contextmenu_Root {contextmenu} scoped>
	<Tome_Section>
		<Tome_Section_Header text="Custom instance" />
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md">
				<Code lang="ts" content={`const contextmenu = create_contextmenu();`} />
				<Code content={`<Contextmenu_Root {contextmenu} scoped>...`} />
				<p>
					The <code>Contextmenu_Root</code> prop <code>contextmenu</code> provides more control. Try
					opening the contextmenu on this panel.
				</p>
				<!-- TODO this extra wrapper is only for the last-child margin behavior, but that may be removed -->
				<div>
					{#if toggled}
						<div transition:slide>toggled</div>
					{/if}
				</div>
			</div>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root>

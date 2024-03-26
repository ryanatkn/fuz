<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import {Contextmenu_Store} from '$lib/contextmenu.svelte';

	const contextmenu = new Contextmenu_Store();

	// TODO BLOCK add some initial option that customizes the behavior
	// TODO BLOCK maybe pass `contextmenu` to the children snippet

	let toggled = $state(false);
</script>

<Contextmenu_Root {contextmenu} scoped>
	<h3>Custom instance example</h3>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => (toggled = !toggled)}>Toggle</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md">
			<p>
				<Code lang="ts" content={`const contextmenu = create_contextmenu();`} />
			</p>
			<p>
				<Code content={`<Contextmenu_Root {contextmenu} scoped>...`} />
			</p>
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

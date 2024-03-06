<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {slide} from 'svelte/transition';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';

	let greeted = $state(false);
	let with_icon = $state(false);
</script>

<div class="prose">
	<h3>Basic example</h3>
	<Contextmenu_Root>
		<Contextmenu>
			{#snippet entries()}
				<!-- eslint-disable-next-line no-alert -->
				<Contextmenu_Entry run={() => (greeted = !greeted)}>Hello world</Contextmenu_Entry>
				<!-- eslint-disable-next-line no-alert -->
				<Contextmenu_Entry run={() => (with_icon = !with_icon)}>
					<svelte:fragment slot="icon">🌞</svelte:fragment>
					With an optional icon
				</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md">
				<Code
					content={`<Contextmenu_Root>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${greeted} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (with_icon = !with_icon)}> <!-- ${with_icon} />
        <svelte:fragment slot="icon">🌞</svelte:fragment>
        With an optional icon
      </Contextmenu_Entry>
    {/snippet}
    ...content with the above contextmenu behavior...
  </Contextmenu>
  ...content with only default contextmenu behavior...
</Contextmenu_Root>
...context without contextmenu behavior`}
				/>
				<p>
					Try opening the contextmenu on this panel with rightclick or longpress.
					<!-- TODO this extra wrapper is only for the last-child margin behavior, but that may be removed -->
				</p>
				<div>
					{#if greeted}
						<div transition:slide><code>greeted = true</code></div>
					{/if}
					{#if with_icon}
						<div transition:slide><code>with_icon = true</code></div>
					{/if}
				</div>
			</div>
		</Contextmenu>
	</Contextmenu_Root>
</div>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	let greeted = $state(false);
	let greeted_icon_snippet = $state(false);
	let greeted_icon_string = $state(false);
</script>

<Contextmenu_Root scoped>
	<Tome_Section>
		<Tome_Section_Header text="Basic usage" />
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => (greeted = !greeted)}>Hello world</Contextmenu_Entry>
				<Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}>
					{#snippet icon()}🌞{/snippet}
					Hello with an optional icon snippet
				</Contextmenu_Entry>
				<Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚">
					Hello with an optional icon string
				</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md">
				<p>Try opening the contextmenu on this panel with rightclick or longpress.</p>
				<Code
					content={`<Contextmenu_Root scoped>
  <Contextmenu>
    {#snippet entries()}
      <Contextmenu_Entry run={() => (greeted = !greeted)}> <!-- ${greeted} />
        Hello world
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_snippet = !greeted_icon_snippet)}> <!-- ${greeted_icon_snippet} />
        {#snippet icon()}🌞{/snippet}
        Hello with an optional icon snippet
      </Contextmenu_Entry>
      <Contextmenu_Entry run={() => (greeted_icon_string = !greeted_icon_string)} icon="🌚"> <!-- ${greeted_icon_string} />
        Hello with an optional icon string
      </Contextmenu_Entry>
    {/snippet}
    ...markup with the above contextmenu behavior...
  </Contextmenu>
  ...markup with only default contextmenu behavior...
</Contextmenu_Root>
...markup without contextmenu behavior...`}
				/>
				<div><code class:color_g_5={greeted}>greeted = {greeted}</code></div>
				<div>
					<code class:color_e_5={greeted_icon_snippet}
						>greeted_icon_snippet = {greeted_icon_snippet}</code
					>
				</div>
				<div>
					<code class:color_d_5={greeted_icon_string}
						>greeted_icon_string = {greeted_icon_string}</code
					>
				</div>
				<aside class="mt_lg">
					The <code>scoped</code> prop is only needed when mounting a contextmenu inside a specific element
					instead of the entire page.
				</aside>
			</div>
		</Contextmenu>
	</Tome_Section>
</Contextmenu_Root>

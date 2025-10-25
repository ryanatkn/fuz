<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const selected = selected_contextmenu_root_component_context.get();
	const Contextmenu_Root_Component = $derived(selected.component);
	const root_component_name = $derived(selected.name);
</script>

<Contextmenu_Root_Component scoped>
	<Tome_Section>
		<Tome_Section_Header text="Default behaviors" />
		<div class="panel p_md">
			<Code
				content={`<${root_component_name} scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</${root_component_name}>`}
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
			<aside>
				Notice that opening the contextmenu on anything here except the link passes through to the
				browser's default contextmenu, because we didn't include any behaviors.
			</aside>
		</div>
	</Tome_Section>
</Contextmenu_Root_Component>

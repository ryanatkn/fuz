<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';

	// TODO BLOCK opening it on itself is bugged, opens another menu
</script>

<Contextmenu_Root scoped>
	<h3>Default behaviors example</h3>
	<div class="panel p_md">
		<Code
			content={`<Contextmenu_Root scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu_Root>`}
		/>
		<p>
			Opening the contextmenu on <a href="https://www.fuz.dev/">a link like this one</a> has special
			behavior by default. To accesss your browser's normal contextmenu, open the contextmenu on the
			link inside the contextmenu itself or hold <code>Shift</code>.
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
</Contextmenu_Root>

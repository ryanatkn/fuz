<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Contextmenu from '$lib/Contextmenu.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';
</script>

<Contextmenu scoped>
	<Tome_Subheading text="Default behaviors" slug="default-behaviors" />
	<div class="panel p_md">
		<Code
			content={`<Contextmenu scoped>
  ...<a href="https://www.fuz.dev/">
    a link like this one
  </a>...
</Contextmenu>`}
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
</Contextmenu>

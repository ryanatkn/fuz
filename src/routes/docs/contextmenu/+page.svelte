<script lang="ts">
	import Tome_Content from '$lib/Tome_Content.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Contextmenu_Discussion from '$routes/docs/contextmenu/Discussion.svelte';
	import Example_Full from '$routes/docs/contextmenu/Example_Full.svelte';
	import Example_Basic from '$routes/docs/contextmenu/Example_Basic.svelte';
	import Example_Custom_Instance from '$routes/docs/contextmenu/Example_Custom_Instance.svelte';
	import Example_Select_Text from '$routes/docs/contextmenu/Example_Select_Text.svelte';
	import Example_Default_Behaviors from '$routes/docs/contextmenu/Example_Default_Behaviors.svelte';

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// TODO examples for error, async
</script>

<!-- TODO demonstrate usage of a custom `link_snippet` and `linkProps`  -->
<Tome_Content {tome}>
	<section>
		<aside>
			<p>
				todo: demonstrate using <code>contextmenu_action</code> to avoid the wrapper element
			</p>
		</aside>
		<aside>
			<p>todo: for mobile, probably change to a drawer-from-bottom design</p>
		</aside>
	</section>
	<Example_Basic />
	<Example_Default_Behaviors />
	<Example_Custom_Instance />
	<Example_Select_Text />
	<Example_Full />
	<Contextmenu_Discussion />
</Tome_Content>

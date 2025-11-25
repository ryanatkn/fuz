<script lang="ts">
	import TomeContent from '$lib/TomeContent.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Introduction from '$routes/docs/contextmenu/Introduction.svelte';
	import Discussion from '$routes/docs/contextmenu/Discussion.svelte';
	import ExampleFull from '$routes/docs/contextmenu/ExampleFull.svelte';
	import ExampleBasic from '$routes/docs/contextmenu/ExampleBasic.svelte';
	import ExampleCustomInstance from '$routes/docs/contextmenu/ExampleCustomInstance.svelte';
	import ExampleSelectText from '$routes/docs/contextmenu/ExampleSelectText.svelte';
	import ExampleDisableDefaultBehaviors from '$routes/docs/contextmenu/ExampleDisableDefaultBehaviors.svelte';
	import ExampleDefaultBehaviors from '$routes/docs/contextmenu/ExampleDefaultBehaviors.svelte';
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	selected_contextmenu_root_component_context.set();

	// TODO examples for error, async
</script>

<!-- TODO demonstrate usage of a custom `link_snippet` and `linkProps`  -->
<TomeContent {tome}>
	<Introduction />
	<ExampleBasic />
	<ExampleDefaultBehaviors />
	<ExampleSelectText />
	<ExampleDisableDefaultBehaviors />
	<ExampleCustomInstance />
	<ExampleFull />
	<Discussion />
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
</TomeContent>

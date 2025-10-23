<script lang="ts">
	import Tome_Content from '$lib/Tome_Content.svelte';
	import {get_tome_by_name} from '$lib/tome.js';
	import Introduction from '$routes/docs/contextmenu/Introduction.svelte';
	import Discussion from '$routes/docs/contextmenu/Discussion.svelte';
	import Example_Full from '$routes/docs/contextmenu/Example_Full.svelte';
	import Example_Basic from '$routes/docs/contextmenu/Example_Basic.svelte';
	import Example_Custom_Instance from '$routes/docs/contextmenu/Example_Custom_Instance.svelte';
	import Example_Select_Text from '$routes/docs/contextmenu/Example_Select_Text.svelte';
	import Example_Disable_Default_Behaviors from '$routes/docs/contextmenu/Example_Disable_Default_Behaviors.svelte';
	import Example_Default_Behaviors from '$routes/docs/contextmenu/Example_Default_Behaviors.svelte';
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Root_For_Safari_Compatibility from '$lib/Contextmenu_Root_For_Safari_Compatibility.svelte';

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let selected_root_component = $state<'standard' | 'compat'>('standard');

	const Contextmenu_Root_Component = $derived(
		selected_root_component === 'compat'
			? Contextmenu_Root_For_Safari_Compatibility
			: Contextmenu_Root,
	);
	const root_component_name = $derived(
		Contextmenu_Root_Component === Contextmenu_Root
			? 'Contextmenu_Root'
			: 'Contextmenu_Root_For_Safari_Compatibility',
	);

	// TODO examples for error, async
</script>

<!-- TODO demonstrate usage of a custom `link_snippet` and `linkProps`  -->
<Tome_Content {tome}>
	<Introduction {Contextmenu_Root_Component} {root_component_name}>
		<fieldset>
			<legend><h4>Selected root component</h4></legend>
			<label class="row">
				<input type="radio" bind:group={selected_root_component} value="standard" />
				<div>standard <code>Contextmenu_Root</code></div>
			</label>
			<label class="row">
				<input type="radio" bind:group={selected_root_component} value="compat" />
				<div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div>
			</label>
		</fieldset>
	</Introduction>
	<Example_Basic {Contextmenu_Root_Component} {root_component_name} />
	<Example_Default_Behaviors {Contextmenu_Root_Component} {root_component_name} />
	<Example_Select_Text {Contextmenu_Root_Component} />
	<Example_Disable_Default_Behaviors {Contextmenu_Root_Component} />
	<Example_Custom_Instance {Contextmenu_Root_Component} {root_component_name} />
	<Example_Full {Contextmenu_Root_Component} />
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
</Tome_Content>

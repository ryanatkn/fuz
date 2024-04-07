<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Contextmenu_Discussion from '$routes/library/Contextmenu/Discussion.svelte';
	import Example_Full from '$routes/library/Contextmenu/Example_Full.svelte';
	import Example_Basic from '$routes/library/Contextmenu/Example_Basic.svelte';
	import Example_Custom_Instance from '$routes/library/Contextmenu/Example_Custom_Instance.svelte';
	import Example_Select_Text from '$routes/library/Contextmenu/Example_Select_Text.svelte';
	import Example_Default_Behaviors from '$routes/library/Contextmenu/Example_Default_Behaviors.svelte';

	// TODO BLOCK rewrite the docs with the other text

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO examples for error, async
</script>

<!-- TODO demonstrate usage of a custom `link_snippet` and `linkProps`  -->
<Tome_Detail {tome}>
	{#snippet header()}<h2>{tome.name}</h2>{/snippet}
	<section>
		<aside>
			<!-- TODO style hack, maybe use margin-bottom only on h elements? -->
			<h4>TODO</h4>
			<ul>
				<li>consider mobile drawer-from-bottom design (maybe an option)</li>
			</ul>
		</aside>
	</section>
	<section><Example_Basic /></section>
	<section><Example_Default_Behaviors /></section>
	<section><Example_Custom_Instance /></section>
	<section><Example_Select_Text /></section>
	<section><Example_Full /></section>
	<section><Contextmenu_Discussion /></section>
</Tome_Detail>

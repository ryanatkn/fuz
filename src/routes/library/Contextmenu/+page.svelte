<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Contextmenu_Discussion from '$routes/library/Contextmenu/Discussion.svelte';
	import Example_Full from '$routes/library/Contextmenu/Example_Full.svelte';
	import Example_Basic from '$routes/library/Contextmenu/Example_Basic.svelte';
	import Contextmenu_Custom_Instance_Example from '$routes/library/Contextmenu/Example_Custom_Instance.svelte';
	import Example_Default_Behaviors from '$routes/library/Contextmenu/Example_Default_Behaviors.svelte';

	// TODO BLOCK rewrite the docs with the other text

	const LIBRARY_ITEM_NAME = 'Contextmenu';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO examples for error, async

	// TODO BLOCK the flip animations caused the contextmenu wrapper of the children to be nested, make sure it doesn't mess up the contextmenu behavior
</script>

<!-- TODO demonstrate usage of a custom `link_snippet` and `linkProps`  -->
<Tome_Detail {tome}>
	<div slot="header"><h2>{tome.name}</h2></div>
	<Example_Basic />
	<hr />
	<Example_Default_Behaviors />
	<hr />
	<Contextmenu_Custom_Instance_Example />
	<hr />
	<Example_Full />
	<hr />
	<Contextmenu_Discussion />
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl4);
	}
	.position {
		border-radius: var(--border_radius);
		background-color: var(--bg);
		display: flex;
	}
	.position .icon {
		font-size: var(--icon_size_xl);
	}
	.cats {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cat_wrapper {
		display: flex;
		flex-direction: column;
		width: 120px;
	}
</style>

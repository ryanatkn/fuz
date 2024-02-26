<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'borders';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div>border_color</div>
	<div>border_style</div>

	<div>border_1</div>
	<div>border_2</div>
	<div>border_3</div>
	<div>border_4</div>
	<div>border_5</div>

	<div>border_disabled</div>

	<div>border_width</div>
	<div>border_width_1</div>
	<div>border_width_2</div>
	<div>border_width_3</div>
	<div>border_width_4</div>
	<div>border_width_5</div>
	<div>border_width_6</div>

	<div>outline_width</div>
	<div>outline_width_1</div>
	<div>outline_width_2</div>
	<div>outline_width_3</div>

	<div>outline_style</div>
	<div>outline_color</div>

	<div>radius_md</div>
	<div>radius_sm</div>
	<div>radius_xs</div>
	<div>radius_xs2</div>
</Tome_Detail>

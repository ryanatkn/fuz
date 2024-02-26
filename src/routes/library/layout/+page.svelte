<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'layout';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div>space_xs5</div>
	<div>space_xs4</div>
	<div>space_xs3</div>
	<div>space_xs2</div>
	<div>space_xs</div>
	<div>space_sm</div>
	<div>space_md</div>
	<div>space_lg</div>
	<div>space_xl</div>
	<div>space_xl2</div>
	<div>space_xl3</div>
	<div>space_xl4</div>
	<div>space_xl5</div>
	<div>space_xl6</div>
	<div>space_xl7</div>
	<div>space_xl8</div>
	<div>space_xl9</div>
	<div>width_md</div>
	<div>width_sm</div>
</Tome_Detail>

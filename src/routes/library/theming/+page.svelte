<script lang="ts">
	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';

	const LIBRARY_ITEM_NAME = 'theming';

	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);
</script>

<Tome_Content {tome}>
	<section>
		<!-- TODO @many add `Svg` library entry -->
		<p>
			Fuz bases its theme support on my CSS framework <a href="https://moss.ryanatkn.com/">Moss</a>,
			which is based on CSS custom properties. For more see <Tome_Link name="Themed" />.
		</p>
	</section>
</Tome_Content>

<script lang="ts">
	import {type Snippet} from 'svelte';

	import Tome_Section_Title, {type Props as Header_Props} from '$lib/Tome_Section_Title.svelte';
	import {intersect} from '$lib/intersect.ts';

	interface Props {
		header_props: Header_Props;
		children: Snippet;
	}

	const {header_props, children}: Props = $props();

	// TODO BLOCK add tag and attrs to props?

	// TODO BLOCK rename `Tome_Section_Title` and `Tome_Title` to `_Header`?
</script>

<section
	use:intersect={({intersecting}) => {
		selections?.mutate((v) => (intersecting ? v.add(view.name) : v.delete(view.name)));
	}}
>
	<Tome_Section_Title {...header_props} />
	{@render children()}
</section>

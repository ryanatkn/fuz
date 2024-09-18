<script lang="ts">
	import {type Snippet} from 'svelte';

	import Tome_Section_Header, {type Props as Header_Props} from '$lib/Tome_Section_Header.svelte';
	import {intersect} from '$lib/intersect.ts';
	import {get_library_links} from '$lib/library_helpers.svelte.js';

	interface Props {
		header_props: Header_Props;
		children: Snippet;
	}

	const {header_props, children}: Props = $props();

	const library_links = get_library_links();

	// TODO BLOCK add tag and attrs to props?
</script>

<section
	use:intersect={({intersecting}) => {
		if (intersecting) {
			library_links.slugs_onscreen.add(header_props.slug);
		} else {
			library_links.slugs_onscreen.delete(header_props.slug);
		}
	}}
>
	<Tome_Section_Header {...header_props} />
	{@render children()}
</section>

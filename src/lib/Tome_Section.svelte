<script lang="ts">
	import {type Snippet} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';

	import Tome_Section_Header, {type Props as Header_Props} from '$lib/Tome_Section_Header.svelte';
	import {intersect} from '$lib/intersect.ts';
	import {get_library_links} from '$lib/library_helpers.svelte.js';

	interface Props {
		header_props: Header_Props;
		children: Snippet;
	}

	const {header_props, children}: Props = $props();

	const slug = $derived(slugify(header_props.text));

	const library_links = get_library_links();

	// TODO BLOCK add tag and attrs to props?

	// TODO BLOCK instead of `header_props`, maybe register the section API that the title hooks into,
	// requiring a parent `Tome_Section`, and likewise the section requirng a header,
	// and then in use:intersect the header has registered the slug that this component uses
</script>

<section
	use:intersect={({intersecting}) => {
		if (intersecting) {
			library_links.slugs_onscreen.add(slug);
		} else {
			library_links.slugs_onscreen.delete(slug);
		}
	}}
>
	<Tome_Section_Header {...header_props} />
	{@render children()}
</section>

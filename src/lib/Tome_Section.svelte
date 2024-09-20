<script lang="ts">
	import {type Snippet} from 'svelte';

	import {intersect} from '$lib/intersect.ts';
	import {get_library_links} from '$lib/library_helpers.svelte.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

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
	{@render children()}
</section>

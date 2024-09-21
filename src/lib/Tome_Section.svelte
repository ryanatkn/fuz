<script lang="ts" module>
	export type Register_Section_Header = (slug: string) => void;
	const KEY = Symbol('register_section_header');
	export const get_register_section_header = (): Register_Section_Header => getContext(KEY);
	export const set_register_section_header = (
		value: Register_Section_Header,
	): Register_Section_Header => setContext(KEY, value);
</script>

<script lang="ts">
	import {getContext, setContext, type Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	import {intersect} from '$lib/intersect.ts';
	import {get_library_links} from '$lib/library_helpers.svelte.js';

	interface Props {
		attrs?: SvelteHTMLElements['section'];
		children: Snippet;
	}

	const {attrs, children}: Props = $props();

	const library_links = get_library_links();

	let slug: string;

	set_register_section_header((s) => {
		slug = s;
	});

	// TODO BLOCK add tag and attrs to props?

	// TODO BLOCK instead of `header_props`, maybe register the section API that the title hooks into,
	// requiring a parent `Tome_Section`, and likewise the section requirng a header,
	// and then in use:intersect the header has registered the slug that this component uses
</script>

<section
	{...attrs}
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

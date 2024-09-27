<script lang="ts" module>
	export type Register_Section_Header = (slug: string) => void;
	export const register_section_header_context = create_context<Register_Section_Header>();
</script>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {DEV} from 'esm-env';

	import {create_context} from '$lib/context_helpers.js';
	import {intersect} from '$lib/intersect.js';
	import {library_links_context} from '$lib/library_helpers.svelte.js';

	interface Props {
		attrs?: SvelteHTMLElements['section'];
		children: Snippet;
	}

	const {attrs, children}: Props = $props();

	const library_links = library_links_context.get();

	let slug: string;

	register_section_header_context.set((s) => {
		slug = s;
	});
</script>

<section
	{...attrs}
	use:intersect={({intersecting}) => {
		if (!slug) {
			if (DEV) console.error('Tome_Section_Header must be a child of Tome_Section'); // eslint-disable-line no-console
			return;
		}
		if (intersecting) {
			library_links.slugs_onscreen.add(slug);
		} else {
			library_links.slugs_onscreen.delete(slug);
		}
	}}
>
	{@render children()}
</section>

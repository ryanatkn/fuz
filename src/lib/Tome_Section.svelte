<script lang="ts" module>
	import {create_context} from '$lib/context_helpers.js';

	export type Register_Section_Header = (slug: string) => string | undefined;
	export const register_section_header_context = create_context<Register_Section_Header>();
	export const section_depth_context = create_context(() => 0);
	export const section_id_context = create_context<string | undefined>();

	// Module-level counter for generating stable section IDs.
	// Counter never resets - sections get fresh IDs on each page due to keyed recreation.
	let section_counter = 0;
</script>

<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {DEV} from 'esm-env';

	import {intersect} from '$lib/intersect.svelte.js';
	import {docs_links_context} from '$lib/docs_helpers.svelte.js';

	const {
		children,
		...rest
	}: SvelteHTMLElements['section'] & {
		children: Snippet;
	} = $props();

	const docs_links = docs_links_context.get();

	// Get parent depth and increment for children
	const parent_depth = section_depth_context.get();
	const current_depth = parent_depth + 1;
	section_depth_context.set(current_depth);

	// Read parent section ID before overwriting context (undefined for root sections)
	const parent_section_id = section_id_context.maybe_get();

	// Generate unique section ID immediately (before children render)
	const section_id = `section_${section_counter++}`;

	// Provide own section ID to direct children (header) via context
	section_id_context.set(section_id);

	let slug: string;

	register_section_header_context.set((s) => {
		slug = s;
		return parent_section_id; // Return parent section ID to header
	});
</script>

<section
	{...rest}
	{@attach intersect(() => ({intersecting}) => {
		if (!slug) {
			if (DEV) console.error('Tome_Section_Header must be a child of Tome_Section'); // eslint-disable-line no-console
			return;
		}
		if (intersecting) {
			docs_links.slugs_onscreen.add(slug);
		} else {
			docs_links.slugs_onscreen.delete(slug);
		}
	})}
>
	{@render children()}
</section>

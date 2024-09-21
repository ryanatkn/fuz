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
	import {DEV} from 'esm-env';

	import {intersect} from '$lib/intersect.js';
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

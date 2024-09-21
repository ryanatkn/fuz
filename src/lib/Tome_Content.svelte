<script lang="ts">
	import type {Snippet} from 'svelte';
	import {slugify} from '@ryanatkn/belt/path.js';
	import {page} from '$app/stores';
	import {base} from '$app/paths';

	import Tome_Header from '$lib/Tome_Header.svelte';
	import {set_tome, type Tome} from '$lib/tome.js';
	import {DEFAULT_LIBRARY_PATH, get_library_links} from '$lib/library_helpers.svelte.js';
	import {intersect} from '$lib/intersect.js';

	interface Props {
		tome: Tome;
		library_path?: string;
		header?: Snippet;
		children: Snippet;
	}

	const {tome, library_path = DEFAULT_LIBRARY_PATH, header, children}: Props = $props();

	const library_links = get_library_links();

	set_tome(tome); // TODO make reactive?

	const slug = slugify(tome.name);

	// TODO extract somewhere?
	const at_root = $derived($page.url.pathname === base + library_path);
	$inspect('at_root', at_root);
</script>

<section
	class="tome_content width_md mb_xl9"
	use:intersect={at_root
		? ({intersecting}) => {
				if (intersecting) {
					library_links.slugs_onscreen.add(slug);
				} else {
					library_links.slugs_onscreen.delete(slug);
				}
			}
		: null}
>
	<header
		class="mb_xl3"
		use:intersect={at_root
			? null
			: ({intersecting}) => {
					if (intersecting) {
						library_links.slugs_onscreen.add(slug);
					} else {
						library_links.slugs_onscreen.delete(slug);
					}
				}}
	>
		{#if header}
			{@render header()}
		{:else}
			<Tome_Header />
		{/if}
	</header>
	{@render children()}
</section>

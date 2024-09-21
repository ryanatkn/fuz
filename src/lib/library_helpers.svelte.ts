import {base} from '$app/paths';
import {SvelteSet} from 'svelte/reactivity';

import {Svelte_Context} from '$lib/context_helpers.js';

export const DEFAULT_LIBRARY_PATH = '/library';

export const to_library_path_info = (
	slug: string,
	pathname: string,
	root_path = DEFAULT_LIBRARY_PATH,
): {path: string; path_is_selected: boolean; path_segment: string | undefined} => {
	const path_segment = pathname.split('/').at(-1);
	const path = base + root_path + '/' + slug;
	const path_is_selected = path_segment === slug; // messy but works
	return {path, path_is_selected, path_segment};
};

export const library_links_context = new Svelte_Context({
	label: 'library_links',
	fallback: () => new Library_Links(),
});

export type Library_Link_Tag = 'h3' | 'h4';

export interface Library_Link {
	id: string;
	text: string;
	slug: string;
	tag: Library_Link_Tag | undefined; // TODO hacky, maybe `depth` or similar is better?
}

export class Library_Links {
	library_links: Library_Link[] = $state([]);

	slugs_onscreen: SvelteSet<string> = $state(new SvelteSet());

	constructor(public readonly root_path = DEFAULT_LIBRARY_PATH) {}

	add(id: string, text: string, slug: string, tag?: Library_Link_Tag): void {
		const index = this.library_links.findIndex((t) => t.id === id);
		const v: Library_Link = {id, text, slug, tag};
		if (index === -1) {
			this.library_links.push(v);
		} else {
			this.library_links[index] = v;
		}
	}

	remove(id: string): boolean {
		const index = this.library_links.findIndex((t) => t.id === id);
		if (index === -1) return false;
		this.library_links.splice(index, 1);
		return true;
	}
}

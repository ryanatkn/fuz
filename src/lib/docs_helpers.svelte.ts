import {resolve} from '$app/paths';
import {SvelteSet} from 'svelte/reactivity';
import {ensure_end, ensure_start} from '@ryanatkn/belt/string.js';

import {create_context} from '$lib/context_helpers.js';

export const DEFAULT_LIBRARY_PATH = '/docs';

export const to_docs_path_info = (
	slug: string,
	pathname: string,
	root_path = DEFAULT_LIBRARY_PATH,
): {path: string; path_is_selected: boolean; path_segment: string | undefined} => {
	const path_segment = pathname.split('/').at(-1);
	const path = resolve((ensure_end(ensure_start(root_path, '/'), '/') + slug) as any); // TODO @many check sometime if typecast is still needed
	const path_is_selected = path_segment === slug; // messy but works
	return {path, path_is_selected, path_segment};
};

export const docs_links_context = create_context(() => new Docs_Links());

export type Docs_Link_Tag = 'h3' | 'h4';

export interface Docs_Link {
	id: string;
	text: string;
	slug: string;
	tag: Docs_Link_Tag | undefined; // TODO hacky, maybe `depth` or similar is better?
}

export class Docs_Links {
	readonly root_path: string;

	docs_links: Array<Docs_Link> = $state([]);

	readonly slugs_onscreen: SvelteSet<string> = new SvelteSet();

	constructor(root_path = DEFAULT_LIBRARY_PATH) {
		this.root_path = root_path;
	}

	add(id: string, text: string, slug: string, tag?: Docs_Link_Tag): void {
		const index = this.docs_links.findIndex((t) => t.id === id);
		const v: Docs_Link = {id, text, slug, tag};
		if (index === -1) {
			this.docs_links.push(v);
		} else {
			this.docs_links[index] = v;
		}
	}

	remove(id: string): boolean {
		const index = this.docs_links.findIndex((t) => t.id === id);
		if (index === -1) return false;
		this.docs_links.splice(index, 1);
		return true;
	}
}

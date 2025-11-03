import {resolve} from '$app/paths';
import {SvelteMap, SvelteSet} from 'svelte/reactivity';
import {ensure_end, ensure_start} from '@ryanatkn/belt/string.js';

import {create_context} from '$lib/context_helpers.js';

export const DOCS_PATH_DEFAULT = '/docs';
export const DOCS_API_PATH = resolve(`${DOCS_PATH_DEFAULT}/api` as any);

// Shared order counter for all docs links (headers and sections)
// This ensures proper document order even when components mount/unmount
let global_docs_link_order = 0;
export const get_next_docs_link_order = (): number => global_docs_link_order++;

// For testing only - resets the global order counter
export const reset_docs_link_order = (): void => {
	global_docs_link_order = 0;
};

export const to_docs_path_info = (
	slug: string,
	pathname: string,
	root_path = DOCS_PATH_DEFAULT,
): {path: string; path_is_selected: boolean; path_segment: string | undefined} => {
	const path_segment = pathname.split('/').at(-1);
	const path = resolve((ensure_end(ensure_start(root_path, '/'), '/') + slug) as any);
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
	order: number;
}

export class Docs_Links {
	readonly root_path: string;

	readonly links: SvelteMap<string, Docs_Link> = new SvelteMap();

	// Maps compound keys (pathname#slug) to their original order
	// This preserves order across component remounts
	#slug_to_order: Map<string, number> = new Map();

	// Counter for generating unique IDs
	#next_id = 0;

	docs_links = $derived.by(() => {
		const arr = Array.from(this.links.values());
		// Sort by order to maintain document order
		arr.sort((a, b) => a.order - b.order);
		return arr;
	});

	readonly slugs_onscreen: SvelteSet<string> = new SvelteSet();

	constructor(root_path = DOCS_PATH_DEFAULT) {
		this.root_path = root_path;
	}

	add(slug: string, text: string, pathname: string, tag?: Docs_Link_Tag): string {
		// Generate unique ID
		const id = 'docs_link_' + this.#next_id++;

		// Use compound key (pathname#slug) to preserve order across remounts
		const page_slug_key = `${pathname}#${slug}`;
		const existing_order = this.#slug_to_order.get(page_slug_key);
		const order = existing_order ?? get_next_docs_link_order();

		// Store order for new slugs only
		if (existing_order === undefined) {
			this.#slug_to_order.set(page_slug_key, order);
		}

		this.links.set(id, {id, slug, text, tag, order});
		return id;
	}

	remove(id: string): void {
		this.links.delete(id);
	}
}

import {resolve} from '$app/paths';
import {SvelteMap, SvelteSet} from 'svelte/reactivity';
import {ensure_end, ensure_start} from '@ryanatkn/belt/string.js';

import {create_context} from '$lib/context_helpers.js';

export const DOCS_PATH_DEFAULT = '/docs';
export const DOCS_PATH = resolve('/docs');
export const DOCS_API_PATH = DOCS_PATH + '/api';

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

export type Docs_Link_Tag = 'h2' | 'h3' | 'h4';

export interface Docs_Link_Info {
	id: string;
	text: string;
	slug: string;
	tag: Docs_Link_Tag | undefined;
	depth: number;
	order: number;
	parent_id: string | undefined;
}

export class Docs_Links {
	readonly root_path: string;

	readonly links: SvelteMap<string, Docs_Link_Info> = new SvelteMap();

	// Maps compound keys (pathname#slug) to their original order
	// This preserves order across component remounts
	#slug_to_order: Map<string, number> = new Map();

	// Counter for generating unique IDs
	#next_id = 0;

	docs_links = $derived.by(() => {
		// Build parent-child map
		const children_map: Map<string | undefined, Array<Docs_Link_Info>> = new Map();

		for (const link of this.links.values()) {
			if (!children_map.has(link.parent_id)) {
				children_map.set(link.parent_id, []);
			}
			children_map.get(link.parent_id)!.push(link);
		}

		// Sort siblings by order
		for (const siblings of children_map.values()) {
			siblings.sort((a, b) => a.order - b.order);
		}

		// Flatten tree with depth-first traversal
		const result: Array<Docs_Link_Info> = [];
		const traverse = (parent_id: string | undefined) => {
			const children = children_map.get(parent_id) || [];
			for (const child of children) {
				result.push(child);
				traverse(child.id); // recursively add children
			}
		};

		traverse(undefined); // start with root nodes (no parent)
		return result;
	});

	readonly slugs_onscreen: SvelteSet<string> = new SvelteSet();

	constructor(root_path = DOCS_PATH_DEFAULT) {
		this.root_path = root_path;
	}

	add(
		slug: string,
		text: string,
		pathname: string,
		tag?: Docs_Link_Tag,
		depth = 1,
		parent_id?: string,
		explicit_id?: string,
	): string {
		// Use explicit ID if provided, otherwise generate one
		const id = explicit_id ?? 'docs_link_' + this.#next_id++;

		// Use compound key (pathname#slug) to preserve order across remounts
		const page_slug_key = `${pathname}#${slug}`;
		const existing_order = this.#slug_to_order.get(page_slug_key);
		const order = existing_order ?? get_next_docs_link_order();

		// Store order for new slugs only
		if (existing_order === undefined) {
			this.#slug_to_order.set(page_slug_key, order);
		}

		this.links.set(id, {id, slug, text, tag, depth, order, parent_id});
		return id;
	}

	remove(id: string): void {
		this.links.delete(id);
	}
}

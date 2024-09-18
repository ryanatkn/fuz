import {getContext, setContext} from 'svelte';
import {base} from '$app/paths';

export const DEFAULT_LIBRARY_PATH = '/library';

export const to_library_path_info = (
	name: string,
	pathname: string,
	root_path = DEFAULT_LIBRARY_PATH,
): {path: string; path_is_selected: boolean; path_segment: string | undefined} => {
	const path_segment = pathname.split('/').at(-1);
	const path = base + root_path + '/' + name;
	const path_is_selected = path_segment === name; // messy but works
	return {path, path_is_selected, path_segment};
};

const LIBRARY_LINKS_KEY = Symbol('library_links');

export const set_library_links = (library_links = new Library_Links()): Library_Links =>
	setContext(LIBRARY_LINKS_KEY, library_links);

export const get_library_links = (): Library_Links => {
	const links = getContext(LIBRARY_LINKS_KEY);
	if (!links) throw Error('get_library_links called before set_library_links');
	return links as Library_Links;
};

export type Library_Link_Tag = 'h3' | 'h4';

export interface Library_Link {
	id: string;
	text: string;
	slug: string;
	tag: Library_Link_Tag | undefined; // TODO hacky, maybe `depth` or similar is better?
}

export class Library_Links {
	library_links: Library_Link[] = $state([]);

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

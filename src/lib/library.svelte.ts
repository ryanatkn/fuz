import {getContext, setContext} from 'svelte';

const LIBRARY_LINKS_KEY = Symbol('library_links');

export const set_library_links = (library_links = new Library_Links()): Library_Links =>
	setContext(LIBRARY_LINKS_KEY, library_links);

export const get_library_links = (): Library_Links => {
	const links = getContext(LIBRARY_LINKS_KEY);
	if (!links) throw Error('get_library_links called before set_library_links');
	return links as Library_Links;
};

export type Library_Link_Data = {id: string; text: string; slug: string};

export class Library_Links {
	library_links: Library_Link_Data[] = $state([]);

	constructor(public readonly root_path = '/library') {}

	add(id: string, text: string, slug: string): void {
		this.library_links.push({id, text, slug});
	}

	remove(id: string): void {
		const index = this.library_links.findIndex((t) => t.id === id);
		if (index !== -1) this.library_links.splice(index, 1);
	}
}

import {resolve} from '$app/paths';
import {slugify} from '@ryanatkn/belt/path.js';
import {z} from 'zod';

import {create_context} from './context_helpers.js';
import {DOCS_PATH_DEFAULT} from './docs_helpers.svelte.js';

export const Tome = z.object({
	name: z.string(),
	// TODO ? summary: z.string(),
	category: z.string(),
	// TODO uppercase this
	component: z.any(), // TODO type
	related_tomes: z.array(z.string()),
	related_modules: z.array(z.string()),
	related_identifiers: z.array(z.string()),
});
export type Tome = z.infer<typeof Tome>;

export const to_tome_pathname = (
	item: Tome | string,
	docs_path = DOCS_PATH_DEFAULT,
	hash?: string,
): string => {
	const name = typeof item === 'string' ? item : item.name;
	const path = docs_path + '/' + slugify(name);
	return resolve((hash ? path + '#' + hash : path) as any);
};

export const tomes_context = create_context<Map<string, Tome>>();

export const get_tome_by_name = (name: string): Tome => {
	const tomes = tomes_context.get();
	const tome = tomes.get(name);
	if (!tome) throw Error(`unable to find tome "${name}"`);
	return tome;
};

export const tome_context = create_context<Tome>();

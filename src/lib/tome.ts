import {base} from '$app/paths';
import {slugify} from '@ryanatkn/belt/path.js';
import {getContext, setContext} from 'svelte';
import {z} from 'zod';

import {DEFAULT_LIBRARY_PATH} from '$lib/library_helpers.svelte.js';

export const Tome = z.object({
	name: z.string(),
	// TODO ? summary: z.string(),
	category: z.string(),
	// TODO uppercase this
	component: z.any(), // TODO type
	related: z.array(z.string()),
});
export type Tome = z.infer<typeof Tome>;

export const to_tome_pathname = (
	item: Tome,
	library_path = DEFAULT_LIBRARY_PATH,
	base_path = base,
): string => base_path + library_path + '/' + slugify(item.name);

const TOMES_KEY = Symbol();
export const get_tomes = (): Map<string, Tome> => getContext(TOMES_KEY);
export const set_tomes = (tomes: Map<string, Tome>): Map<string, Tome> =>
	setContext(TOMES_KEY, tomes);

export const get_tome_by_name = (name: string): Tome => {
	const tomes = get_tomes();
	const tome = tomes.get(name);
	if (!tome) throw Error(`unable to find tome "${name}"`);
	return tome;
};

const TOME_KEY = Symbol();
export const get_tome = (): Tome => getContext(TOME_KEY);
export const set_tome = (tome: Tome): Tome => setContext(TOME_KEY, tome);

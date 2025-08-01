import {resolve} from '$app/paths';
import {slugify} from '@ryanatkn/belt/path.js';
import {z} from 'zod';

import {create_context} from '$lib/context_helpers.js';
import {DEFAULT_LIBRARY_PATH} from '$lib/docs_helpers.svelte.js';

export const Tome = z.object({
	name: z.string(),
	// TODO ? summary: z.string(),
	category: z.string(),
	// TODO uppercase this
	component: z.any(), // TODO type
	related: z.array(z.string()),
});
export type Tome = z.infer<typeof Tome>;

export const to_tome_pathname = (item: Tome, docs_path = DEFAULT_LIBRARY_PATH): string =>
	resolve((docs_path + '/' + slugify(item.name)) as any); // TODO @many check sometime if typecast is still needed

export const tomes_context = create_context<Map<string, Tome>>();

export const get_tome_by_name = (name: string): Tome => {
	const tomes = tomes_context.get();
	const tome = tomes.get(name);
	if (!tome) throw Error(`unable to find tome "${name}"`);
	return tome;
};

export const tome_context = create_context<Tome>();

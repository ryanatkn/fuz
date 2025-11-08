import {readdir, readFile} from 'node:fs/promises';
import {join} from 'node:path';
import type {Mdz_Node} from '$lib/mdz.js';

export interface Mdz_Fixture {
	name: string;
	input: string;
	expected: Array<Mdz_Node>;
}

/**
 * Extract node types from an array of nodes for easier testing.
 */
export const node_types = (nodes: Array<Mdz_Node>): Array<string> => nodes.map((n) => n.type);

/**
 * Extract text content from a node, recursively for container nodes.
 */
export const text_content = (node: Mdz_Node): string => {
	if (node.type === 'Text') return node.content;
	if (node.type === 'Code') return node.content;
	if ('children' in node) {
		return node.children.map(text_content).join('');
	}
	return '';
};

/**
 * Load all fixtures from the mdz fixtures directory.
 */
export const load_fixtures = async (): Promise<Array<Mdz_Fixture>> => {
	const fixtures_dir = join(import.meta.dirname);
	const entries = await readdir(fixtures_dir, {withFileTypes: true});
	const fixture_names = entries
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)
		.sort();

	return await Promise.all(
		fixture_names.map(async (name) => {
			const fixture_dir = join(fixtures_dir, name);
			const input = await readFile(join(fixture_dir, 'input.mdz'), 'utf-8');
			const expected_text = await readFile(join(fixture_dir, 'expected.json'), 'utf-8');
			const expected = JSON.parse(expected_text);
			return {name, input, expected};
		}),
	);
};

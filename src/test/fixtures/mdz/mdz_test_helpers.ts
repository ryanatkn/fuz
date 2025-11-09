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
 * Validate position indices in parsed nodes.
 * Checks that all start/end positions are valid and contiguous.
 */
export const validate_positions = (
	nodes: Array<Mdz_Node>,
	parent_start?: number,
	parent_end?: number,
): void => {
	if (nodes.length === 0) return;

	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i]!;

		// Basic position validation
		if (node.start < 0 || node.end < 0) {
			throw Error(`Node ${i} has negative position: start=${node.start}, end=${node.end}`);
		}
		if (node.start >= node.end) {
			throw Error(`Node ${i} has invalid range: start=${node.start}, end=${node.end}`);
		}

		// Validate node fits within parent bounds
		if (parent_start !== undefined && parent_end !== undefined) {
			if (node.start < parent_start || node.end > parent_end) {
				throw Error(
					`Node ${i} (${node.start}-${node.end}) exceeds parent bounds (${parent_start}-${parent_end})`,
				);
			}
		}

		// Validate children positions recursively
		if ('children' in node && node.children.length > 0) {
			validate_positions(node.children, node.start, node.end);

			// Verify children are contiguous within parent
			const first_child = node.children[0]!;
			const last_child = node.children[node.children.length - 1]!;

			// Children should span from parent start to parent end
			// (allowing for delimiters at boundaries)
			if (first_child.start < node.start || last_child.end > node.end) {
				throw Error(
					`Children (${first_child.start}-${last_child.end}) exceed parent bounds (${node.start}-${node.end})`,
				);
			}
		}
	}

	// Validate sibling nodes are contiguous (no gaps or overlaps)
	for (let i = 0; i < nodes.length - 1; i++) {
		const current = nodes[i]!;
		const next = nodes[i + 1]!;

		if (current.end > next.start) {
			throw Error(
				`Overlapping nodes at ${i}: node[${i}] ends at ${current.end}, node[${i + 1}] starts at ${next.start}`,
			);
		}
	}
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

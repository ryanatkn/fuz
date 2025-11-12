/**
 * A generic function with type constraints.
 *
 * @param items - An array of items
 * @param predicate - A function to test each item
 * @returns The first matching item or undefined
 */
export function find<T extends {id: number}>(
	items: Array<T>,
	predicate: (item: T) => boolean,
): T | undefined {
	return items.find(predicate);
}

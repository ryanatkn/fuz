/**
 * Helper function to recursively freeze an object and all its
 * properties that are objects or arrays.
 *
 * @param obj The object to freeze
 * @returns The frozen object (same reference)
 */
export const deep_freeze = <T>(obj: T): T => {
	// Return early for null, undefined, or primitive values
	if (!obj || typeof obj !== 'object') {
		return obj;
	}

	// Deeply freeze any properties
	for (const key in obj) {
		if (Object.hasOwn(obj, key)) {
			deep_freeze(obj[key]);
		}
	}

	// Finally freeze the object itself
	return Object.freeze(obj);
};

/**
 * Renders any value to a string representation
 *
 * @param value Any JS value to stringify
 * @returns A string representation of the value
 */
export const render_value_to_string = (value: unknown): string => {
	if (value === null) return 'null';
	if (value === undefined) return 'undefined';
	const type = typeof value;
	if (type === 'string') return `'${value}'`; // eslint-disable-line @typescript-eslint/no-base-to-string
	if (type === 'number' || type === 'boolean') return value + ''; // eslint-disable-line @typescript-eslint/no-base-to-string
	if (Array.isArray(value)) return `[${value.map(render_value_to_string).join(', ')}]`;
	if (type === 'object') return JSON.stringify(value);
	return value + ''; // eslint-disable-line @typescript-eslint/no-base-to-string
};

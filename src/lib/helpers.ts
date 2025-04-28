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

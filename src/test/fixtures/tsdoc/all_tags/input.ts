/**
 * Comprehensive function demonstrating all TSDoc tags.
 *
 * This function showcases the complete set of supported TSDoc features
 * for documentation generation.
 *
 * @param input input value to process
 * @param options configuration options
 * @returns processed result
 * @throws TypeError if input is invalid
 * @throws RangeError if value is out of range
 * @example
 * const result = complex_function('test', {verbose: true});
 * @deprecated Use simple_function() for new code
 * @see {@link https://example.com/api}
 * @since 1.5.0
 */
export function complex_function(input: string, _options?: {verbose?: boolean}) {
	if (typeof input !== 'string') {
		throw new TypeError('Input must be a string');
	}
	if (input.length > 100) {
		throw new RangeError('Input too long');
	}
	return input.toUpperCase();
}

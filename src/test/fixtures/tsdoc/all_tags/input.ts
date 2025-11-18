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
 * @see {@link https://fuz.dev/docs}
 * @since 1.5.0
 */
export function complex_function(input: string, options: {verbose?: boolean}) {
	if (typeof input !== 'string') {
		throw new TypeError('Input must be a string');
	}
	if (input.length > 100) {
		throw new RangeError('Input too long');
	}
	options.verbose = !!options.verbose;
	return input.toUpperCase();
}

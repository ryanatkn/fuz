/**
 * Function that can throw multiple error types.
 *
 * @param value value to validate
 * @throws TypeError if value is not a string
 * @throws RangeError if value length exceeds limit
 * @throws Error for other validation failures
 */
export function validate_input(value: any) {
	if (typeof value !== 'string') {
		throw new TypeError('Must be string');
	}
	if (value.length > 100) {
		throw new RangeError('Too long');
	}
	if (!value.trim()) {
		throw new Error('Cannot be empty');
	}
	return value;
}

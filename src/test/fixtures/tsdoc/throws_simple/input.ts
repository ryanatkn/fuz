/**
 * Function that may throw an error.
 *
 * @param value - value to check
 * @throws Error if value is negative
 */
export function check_positive(value: number) {
	if (value < 0) {
		throw new Error('Value must be positive');
	}
	return value;
}

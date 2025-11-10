/**
 * Function with a return type description.
 *
 * @returns the sum of the numbers
 */
export function sum(numbers: number[]) {
	return numbers.reduce((a, b) => a + b, 0);
}

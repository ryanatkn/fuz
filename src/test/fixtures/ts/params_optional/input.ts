/**
 * A function with optional and default parameters.
 *
 * @param required - A required parameter
 * @param optional - An optional parameter
 * @param withDefault - A parameter with a default value
 */
export function test_params(
	required: string,
	optional?: number,
	withDefault: boolean = true,
): void {
	console.log(required, optional, withDefault);
}

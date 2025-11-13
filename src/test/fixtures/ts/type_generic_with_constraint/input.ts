/**
 * A generic type with constraints and defaults.
 */
export interface Result<T extends object = Record<string, unknown>, E = Error> {
	/** Whether the operation succeeded */
	success: boolean;
	/** The data if successful */
	data?: T;
	/** The error if failed */
	error?: E;
}

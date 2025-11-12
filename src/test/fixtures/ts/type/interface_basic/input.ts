/**
 * A basic interface.
 */
export interface User {
	/** The user's unique ID */
	id: number;
	/** The user's name */
	name: string;
	/** The user's email address */
	readonly email: string;
}

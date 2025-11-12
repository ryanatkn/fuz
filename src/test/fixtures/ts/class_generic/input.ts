/**
 * A generic class with type parameters.
 */
export class Box<T, U = string> {
	value: T;
	label: U;

	constructor(value: T, label: U) {
		this.value = value;
		this.label = label;
	}

	/** Get the boxed value */
	get(): T {
		return this.value;
	}

	/** Update the value */
	set(value: T): void {
		this.value = value;
	}
}

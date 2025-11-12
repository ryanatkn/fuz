/**
 * A class with private fields that should be filtered out.
 */
export class Counter {
	// Private fields (should NOT appear in output)
	#count: number = 0;
	#max: number;

	// Public members (SHOULD appear in output)
	readonly name: string;

	constructor(name: string, max: number = 100) {
		this.name = name;
		this.#max = max;
	}

	/** Get the current count */
	get_count(): number {
		return this.#count;
	}

	/** Increment the counter */
	increment(): void {
		if (this.#count < this.#max) {
			this.#count++;
		}
	}

	/** Reset the counter to zero */
	reset(): void {
		this.#reset();
	}

	// Private method (should NOT appear in output)
	#reset(): void {
		this.#count = 0;
	}
}

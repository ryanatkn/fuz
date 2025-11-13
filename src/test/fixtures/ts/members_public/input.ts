/**
 * A class with only public members.
 */
export class User {
	name: string;
	age: number;
	readonly id: number;
	static count: number = 0;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.id = User.count++;
	}

	/** Get user info as a string */
	to_string(): string {
		return `${this.name} (${this.age})`;
	}

	/** Static factory method */
	static create(name: string): User {
		return new User(name, 0);
	}
}

import {getContext, setContext} from 'svelte';

// This uses a function instead of a class because of the overloaded type signatures.
// The first attempt at a class-based version is commented out at the bottom of the file.
// See https://github.com/ryanatkn/fuz/pull/56 for more.

/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 *
 * If a `fallback` is provided, `optional` is implicitly `false`.
 *
 * If `optional` is `false` or `undefined` and no `fallback` is provided,
 * `get` throws an error if no value is set in the context.
 */
export function create_context<T>(options: {label?: string; fallback: () => T}): {
	get: (error_message?: string) => T;
	set: (value?: T) => T;
};
export function create_context<T>(options: {label?: string; optional?: false}): {
	get: (error_message?: string) => T;
	set: (value: T) => T;
};
export function create_context<T>(options: {label?: string; optional: true}): {
	get: (error_message?: string) => T | undefined;
	set: (value: T) => T;
};
export function create_context<T>(options: {
	label?: string;
	fallback?: () => T;
	optional?: boolean;
}): {get: (error_message?: string) => T | undefined; set: (value?: T) => T} {
	const {label, fallback, optional} = options;
	const key = Symbol(label);
	return {
		get: (error_message?: string) => {
			const found: T | undefined = getContext(key); // `null` is a valid value and the typescript-eslint rule below is bugged because `??` would clobber nulls, see issue https://github.com/typescript-eslint/typescript-eslint/issues/7842
			const value = found === undefined ? fallback?.() : found; // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
			if (!optional && value === undefined) {
				throw Error(error_message ?? 'context value not set' + (label ? ` for "${label}"` : ''));
			}
			return value;
		},
		set(value: T | undefined = fallback?.()): T {
			if (value === undefined) {
				throw Error(
					'context value' +
						(label ? ` "${label}"` : '') +
						' is not defined - provide a value to `set` or `fallback` in the options',
				);
			}
			setContext(key, value);
			return value;
		},
	};
}

// Class-based version that has `TODO BLOCK` comments with its issues.
// The only advantage I see of this version is that
// the user gets to decide if it's required or optional with each get,
// instead of defining optionality up front.

// export interface Svelte_Context_Options<T> {
// 	/**
// 	 * Improves error messages.
// 	 */
// 	label?: string;
// 	/**
// 	 * Provides a default value when the context is not set.
// 	 */
// 	fallback?: () => T;
// }
/*
export class Svelte_Context<T> {
	label?: string;
	key: symbol;
	fallback: (() => T) | undefined;

	constructor(options?: Svelte_Context_Options<T>) {
		this.label = options?.label;
		this.key = Symbol(this.label);
		this.fallback = options?.fallback;
	}

	maybe_get(): T | undefined {
		if (DEV && this.fallback) {
			// TODO BLOCK this method doesn't exist if there's a fallback -
     // maybe this instead of this check, add a separate class that doesn't have this method?
     // but that's more complexity for the user and more code to ship
			throw Error(
				'`maybe_get` is invalid with a fallback' + (this.label ? ` for "${this.label}"` : ''),
			);
		}
		return getContext(this.key) ?? this.fallback?.();
	}

	get(error_message?: string): T {
		const value = this.maybe_get();
		if (value === undefined) {
			throw Error(error_message ?? 'context value not set' + (this.label ? ` for "${this.label}"` : ''));
		}
		return value;
	}

	// TODO BLOCK this type is invalid when a fallback is omitted, is required and can't be `undefined`
	set(value: T | undefined = this.fallback?.()): T {
		if (value === undefined) {
			throw Error(
				'context value' +
					(this.label ? ` "${this.label}"` : '') +
					' is not defined - provide a value to `set` or fallback in the constructor',
			);
		}
		setContext(this.key, value);
		return value;
	}
}
*/

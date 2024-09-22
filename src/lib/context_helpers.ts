import {getContext, setContext} from 'svelte';

// This uses a function instead of a class because of the overloaded type signatures.
// It could be implemented internally with a class like `Svelte_Context`
// but this is less code and seems a bit simpler.
// The memory gains of a class appear minimal given the expected usage patterns.
// See https://github.com/ryanatkn/fuz/pull/56 for more.

// TODO maybe remove `error_message`?

/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 *
 * If a `fallback` is provided, `optional` is implicitly `false`.
 *
 * If `optional` is `false` or `undefined` and no `fallback` is provided,
 * `get` throws an error if no value is set in the context.
 */
export function create_context<T>(options: {fallback: () => T}): {
	get: () => T;
	set: (value?: T) => T;
};
export function create_context<T>(options: {optional: true}): {
	get: () => T | undefined;
	set: (value: T) => T;
};
export function create_context<T>(options?: {optional?: false}): {
	get: (error_message?: string) => T;
	set: (value: T) => T;
};
export function create_context<T>(options?: {fallback?: () => T; optional?: boolean}): {
	get: (error_message?: string) => T | undefined;
	set: (value?: T) => T;
} {
	const fallback = options?.fallback;
	const optional = options?.optional;
	const key = Symbol();
	return {
		get: (error_message?: string) => {
			const got: T | undefined = getContext(key); // `null` is a valid value and the typescript-eslint rule below is bugged because `??` would clobber nulls, see issue https://github.com/typescript-eslint/typescript-eslint/issues/7842
			const value = got === undefined ? fallback?.() : got; // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
			if (!optional && value === undefined) {
				throw Error(error_message ?? 'context value is not set');
			}
			return value;
		},
		set: (value: T | undefined = fallback?.()): T => {
			if (value === undefined) {
				throw Error('context value must be provided to `set` as an argument or `fallback` option');
			}
			setContext(key, value);
			return value;
		},
	};
}

import {getContext, setContext} from 'svelte';
import {DEV} from 'esm-env';

export interface Svelte_Context_Options<T> {
	/**
	 * Improves error messages.
	 */
	label?: string;
	/**
	 * Provides a default value when the context is not set.
	 */
	fallback?: () => T;
}

/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 */
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
			// TODO instead of this check, maybe a separate class that doesn't have this method? but that's more complexity for the user and code to ship
			throw Error(
				'`maybe_get` is invalid with a fallback' + (this.label ? ` for "${this.label}"` : ''),
			);
		}
		return getContext(this.key) ?? this.fallback?.();
	}

	get(message?: string): T {
		const value = this.maybe_get();
		if (value === undefined) {
			throw Error(message ?? 'context value not set' + (this.label ? ` for "${this.label}"` : ''));
		}
		return value;
	}

	set(value?: T): T {
		const v = value ?? this.fallback?.();
		if (v === undefined) {
			throw Error(
				'context value' +
					(this.label ? ` "${this.label}"` : '') +
					' is not defined - provide a value to `set` or fallback in the constructor',
			);
		}
		setContext(this.key, v);
		return v;
	}
}

import {getContext, setContext} from 'svelte';

export interface Svelte_Context_Options<T> {
	label?: string;
	fallback?: () => T;
}

/**
 * Wraps Svelte's `setContext` and `getContext` for better ergonmics.
 * The `label` option enhances error messages.
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

	// TODO this is incorrectly named in the case that a fallback is provided, there's no maybe in that case,
	// and I can't see how to get the ideal API with a single class because it depends on the `fallback` constructor option
	maybe_get(): T | undefined {
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

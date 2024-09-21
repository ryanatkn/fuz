import {getContext, setContext} from 'svelte';

export class SvelteContext<T> {
	label?: string;
	key: symbol;
	fallback: (() => T) | undefined;

	constructor(fallback?: () => T, label?: string) {
		this.fallback = fallback;
		this.label = label;
		this.key = Symbol(label);
	}

	get(): T | undefined {
		return getContext(this.key) ?? this.fallback?.();
	}

	get_or_throw(message?: string): T {
		const value = this.get();
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

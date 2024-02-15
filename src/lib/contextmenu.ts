import {
	getContext,
	onDestroy,
	setContext,
	type ComponentProps,
	type ComponentType,
	type SvelteComponent,
} from 'svelte';
import {writable, type Readable, type Writable, get} from 'svelte/store';
import type {Result} from '@ryanatkn/belt/result.js';
import {to_array} from '@ryanatkn/belt/array.js';

import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';

// TODO rewrite with runes!!!!

// TODO @multiple added this hack with Svelte 4, didn't see an open issue about it
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

export type Contextmenu_Params<T extends SvelteComponent = SvelteComponent> = {
	component: ComponentType<T>;
	props: ComponentProps<T>;
};

export type Contextmenu_Action_Params =
	| Contextmenu_Params
	| Array<Contextmenu_Params | ComponentProps<Contextmenu_Text_Entry> | null | undefined>
	| ComponentProps<Contextmenu_Text_Entry>;

/**
 * This helper function is needed to construct `Contextmenu_Params` with type safety.
 * It uses TypeScript's inferred generics for functions,
 * which do not work for plain objects as of v5.0.4.
 * `DialogParams` uses a similar strategy.
 */
export const to_contextmenu_params = <T extends SvelteComponent>(
	component: ComponentType<T>,
	props: ComponentProps<T>,
): Contextmenu_Params<T> => ({component, props});

type Activate_Result = Result<any, {message?: string}> | any;

export type Item_State = Submenu_State | Entry_State;
export interface Entry_State {
	is_menu: false; // TODO rename to `type`?
	menu: Submenu_State | Root_Menu_State;
	selected: boolean;
	run: Writable<Contextmenu_Run>;
	pending: boolean;
	error_message: string | null;
	promise: Promise<any> | null;
}
export interface Submenu_State {
	is_menu: true;
	menu: Submenu_State | Root_Menu_State;
	depth: number;
	selected: boolean;
	items: Item_State[];
}
export interface Root_Menu_State {
	is_menu: true;
	menu: null;
	depth: 1;
	items: Item_State[];
}
export interface Contextmenu_Run {
	(): void | Promise<Activate_Result>;
}

export interface Contextmenu {
	open: boolean;
	params: Contextmenu_Params[];
	x: number;
	y: number;
}

export interface Contextmenu_Store extends Readable<Contextmenu> {
	layout: Readable<{width: number; height: number}>;
	initial_layout: Readable<{width: number; height: number}> | undefined;
	link_component: ComponentType<Contextmenu_Link_Entry>;
	text_component: ComponentType<Contextmenu_Text_Entry>;
	action: ReturnType<typeof create_contextmenu_action>;
	error: Writable<string | undefined>;
	open: (params: Contextmenu_Params[], x: number, y: number) => void;
	close: () => void;
	activate: (item: Item_State) => boolean | Promise<Activate_Result>;
	/**
	 * Activates the selected entry, or if none, selects the first.
	 */
	activate_selected: () => void | boolean | Promise<Activate_Result>;
	select: (item: Item_State) => void;
	collapse_selected: () => void;
	expand_selected: () => void; // opens the selected submenu
	select_next: () => void;
	select_previous: () => void;
	select_first: () => void;
	select_last: () => void;
	/**
	 * Used by `Contextmenu_Entry` and custom entry components
	 * @initializes
	 */
	add_entry: (run: Writable<Contextmenu_Run>) => Entry_State;
	/**
	 * @initializes
	 */
	add_submenu: () => Submenu_State;
	// These two properties are mutated internally.
	// If you need reactivity, use `$contextmenu` in a reactive statement to react to all changes, and
	// then access the mutable non-reactive  `contextmenu.root_menu` and `contextmenu.selections`.
	// See `Contextmenu_Entry.svelte` and `Contextmenu_Submenu.svelte` for reactive usage examples.
	root_menu: Root_Menu_State;
	selections: Item_State[];
}

export interface Contextmenu_Store_Options {
	link_component?: ComponentType<Contextmenu_Link_Entry>;
	text_component?: ComponentType<Contextmenu_Text_Entry>;
	layout?: Readable<{width: number; height: number}>; // TODO consider making this a prop on `Contextmenu`, and being assigned here
}

/**
 * Creates a `contextmenu` store.
 * For external usage see `use:contextmenu.run` scattered throughout the app,
 * and for internal usage see `Contextmenu.svelte`.
 */
export const create_contextmenu = (options?: Contextmenu_Store_Options): Contextmenu_Store => {
	const link_component = options?.link_component ?? Contextmenu_Link_Entry;
	const text_component = options?.text_component ?? Contextmenu_Text_Entry;
	const initial_layout = options?.layout;

	const layout: Contextmenu_Store['layout'] = initial_layout || writable({width: 0, height: 0});
	const root_menu: Contextmenu_Store['root_menu'] = {
		is_menu: true,
		menu: null,
		depth: 1,
		items: [],
	};
	const selections: Contextmenu_Store['selections'] = [];

	const {update, set: _set, ...rest} = writable<Contextmenu>({open: false, params: [], x: 0, y: 0});

	// TODO instead of this, use a store per entry probably
	const force_update = () => update(($) => ({...$}));

	// TODO not mutation, probably
	const reset_items = (items: Item_State[]): void => {
		for (const item of items) {
			if (item.is_menu) {
				reset_items(item.items);
			} else {
				if (item.promise !== null) item.promise = null;
				if (item.error_message !== null) item.error_message = null;
			}
		}
	};

	const error: Contextmenu_Store['error'] = writable(undefined);

	const store: Contextmenu_Store = {
		...rest,
		root_menu,
		selections,
		layout,
		initial_layout,
		link_component,
		text_component,
		action: create_contextmenu_action(text_component),
		error,
		open: (params, x, y) => {
			selections.length = 0;
			update(($state) => ({...$state, open: true, params, x, y}));
		},
		close: () =>
			update(($state) => {
				if (!$state.open) return $state;
				reset_items(root_menu.items);
				return {...$state, open: false};
			}),
		activate: (item) => {
			if (item.is_menu) {
				store.expand_selected();
			} else {
				let returned;
				try {
					returned = get(item.run)();
				} catch (err) {
					const message = typeof err?.message === 'string' ? err.message : undefined;
					item.error_message = message ?? 'unknown error';
					error.set(message);
				}
				if (returned?.then) {
					item.pending = true;
					item.error_message = null;
					const promise = (item.promise = returned
						.then(
							(result) => {
								if (promise !== item.promise) return;
								if (typeof result?.ok === 'boolean') {
									if (result.ok) {
										store.close();
									} else {
										const message = typeof result.message === 'string' ? result.message : undefined;
										item.error_message = message ?? 'unknown error';
										error.set(message);
									}
								} else {
									store.close();
								}
								return result;
							},
							(err) => {
								if (promise !== item.promise) return;
								const message = typeof err?.message === 'string' ? err.message : undefined;
								item.error_message = message ?? 'unknown error';
								error.set(message);
							},
						)
						.finally(() => {
							if (promise !== item.promise) return;
							item.pending = false;
							item.promise = null;
							force_update();
						}));
					force_update();
					return item.promise; // async path
				}
				store.close(); // synchronous path only
			}
			return true;
		},
		activate_selected: () => {
			const selected = selections[selections.length - 1];
			return selected ? store.activate(selected) : store.select_first();
		},
		// Instead of diffing, this does the simple thing and
		// deselects everything and then re-creates the list of selections.
		// Could be improved but it's fine because we're using mutation and the N is very small,
		// and it allows us to have a single code path for the various selection methods.
		select: (item) => {
			if (selections[selections.length - 1] === item) return;
			for (const s of selections) s.selected = false;
			selections.length = 0;
			let i: Item_State | Root_Menu_State = item;
			do {
				i.selected = true;
				selections.unshift(i);
			} while ((i = i.menu) && i.menu);
			force_update();
		},
		collapse_selected: () => {
			if (selections.length <= 1) return;
			const deselected = selections.pop()!;
			deselected.selected = false;
			force_update();
		},
		expand_selected: () => {
			const parent = selections[selections.length - 1];
			if (!parent?.is_menu) return;
			const selected = parent.items[0];
			selected.selected = true;
			selections.push(selected);
			force_update();
		},
		select_next: () => {
			if (!selections.length) return store.select_first();
			const item = selections[selections.length - 1];
			const index = item.menu.items.indexOf(item);
			store.select(item.menu.items[index === item.menu.items.length - 1 ? 0 : index + 1]);
		},
		select_previous: () => {
			if (!selections.length) return store.select_last();
			const item = selections[selections.length - 1];
			const index = item.menu.items.indexOf(item);
			store.select(item.menu.items[index === 0 ? item.menu.items.length - 1 : index - 1]);
		},
		select_first: () =>
			store.select((selections[selections.length - 1]?.menu || root_menu).items[0]),
		select_last: () => {
			const {items} = selections[selections.length - 1]?.menu || root_menu;
			return store.select(items[items.length - 1]);
		},
		add_entry: (run) => {
			const menu = get_contextmenu_submenu() || root_menu;
			const entry: Entry_State = {
				is_menu: false,
				menu,
				selected: false,
				run,
				pending: false,
				error_message: null,
				promise: null,
			};
			menu.items.push(entry);
			onDestroy(() => {
				menu.items.length = 0;
			});
			return entry;
		},
		add_submenu: () => {
			const menu = get_contextmenu_submenu() || root_menu;
			const submenu: Submenu_State = {
				is_menu: true,
				menu,
				depth: menu.depth + 1,
				selected: false,
				items: [],
			};
			menu.items.push(submenu);
			set_contextmenu_submenu(submenu);
			onDestroy(() => {
				menu.items.length = 0;
			});
			return submenu;
		},
	};
	return store;
};

// The dataset key must not have capital letters or dashes or it'll differ between JS and DOM:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
const CONTEXTMENU_DATASET_KEY = 'contextmenu';
const CONTEXTMENU_DOM_QUERY = `a,[data-${CONTEXTMENU_DATASET_KEY}]`;
const contextmenu_cache = new Map<string, Contextmenu_Params[]>();
let cache_key_counter = 0;

const create_contextmenu_action =
	(text_component: ComponentType<Contextmenu_Text_Entry>) =>
	(el: HTMLElement | SVGElement, params: Contextmenu_Action_Params | null | undefined) => {
		const key = cache_key_counter++ + '';
		el.dataset[CONTEXTMENU_DATASET_KEY] = key;
		contextmenu_cache.set(key, resolve_contextmenu_params(params, text_component));
		return {
			update: (p: Contextmenu_Action_Params | null | undefined) => {
				contextmenu_cache.set(key, resolve_contextmenu_params(p, text_component));
			},
			destroy: () => {
				contextmenu_cache.delete(key);
			},
		};
	};

const resolve_contextmenu_params = (
	params: Contextmenu_Action_Params | null | undefined,
	text_component: ComponentType<Contextmenu_Text_Entry>,
): Contextmenu_Params[] =>
	to_array(params)
		.filter(Boolean)
		.map((p: any) =>
			'component' in p && 'props' in p ? p : {component: text_component, props: p},
		);

const CONTEXTMENU_OPEN_VIBRATE_DURATION = 17;

/**
 * Opens the contextmenu, if appropriate,
 * querying the menu items from the DOM starting at the event target.
 * @param target - the leaf element from which to open the contextmenu
 * @param x - the page X coordinate at which to open the contextmenu, typically the mouse `pageX`
 * @param y - the page Y coordinate at which to open the contextmenu, typically the mouse `pageY`
 * @param contextmenu - the contextmenu store
 * @returns a boolean indicating if the menu was opened or not
 */
export const open_contextmenu = (
	target: HTMLElement | SVGElement,
	x: number,
	y: number,
	contextmenu: Contextmenu_Store,
): boolean => {
	const params = query_contextmenu_params(target, contextmenu);
	if (!params?.length) return false;
	contextmenu.open(params, x, y);
	// Unfortunately `vibrate` this gets blocked by some browsers the way we're doing it
	// outside of a user interaction in a custom `longpress` gesture that triggers on a timeout,
	// which exists only because iOS doesn't support the contextmenu event:
	// https://github.com/fuz-dev/fuz/pull/319
	navigator.vibrate?.(CONTEXTMENU_OPEN_VIBRATE_DURATION);
	return true;
};

const query_contextmenu_params = (
	target: HTMLElement | SVGElement,
	contextmenu: Contextmenu_Store,
): null | Contextmenu_Params[] => {
	const {link_component, text_component} = contextmenu;
	let params: null | Contextmenu_Params[] = null;
	// crawl DOM for contextmenu entries
	let el: HTMLElement | SVGElement | null | undefined = target;
	let cache_key: string, cached: Contextmenu_Params[] | undefined;
	while ((el = el?.closest(CONTEXTMENU_DOM_QUERY))) {
		if ((cache_key = el.dataset[CONTEXTMENU_DATASET_KEY]!)) {
			if (!params) params = [];
			cached = contextmenu_cache.get(cache_key);
			if (cached === undefined) {
				continue;
			}
			for (const item of cached) {
				const {props} = item;
				// preserve bubbling order
				// TODO probably should use `deepEqual`, but we don't have that dependency yet
				if (!params?.some((i) => i.component === item.component && shallow_equal(i.props, props))) {
					(params || (params = [])).push(item);
				}
			}
		}
		if (link_component && el.tagName === 'A') {
			(params || (params = [])).push({
				component: link_component,
				props: {href: (el as HTMLAnchorElement).href},
			});
		}
		el = el.parentElement;
	}
	// add "Copy text" entry if anything is selected and we have any other entries
	if (params) {
		const text = window.getSelection()?.toString();
		if (text) {
			params.unshift({
				component: text_component,
				props: {
					content: 'Copy text',
					icon: '📋',
					run: () => void navigator.clipboard.writeText(text),
				},
			});
		}
	}
	return params;
};

const CONTEXTMENU_STORE_KEY = Symbol();
export const set_contextmenu = (contextmenu: Contextmenu_Store): Contextmenu_Store =>
	setContext(CONTEXTMENU_STORE_KEY, contextmenu);
export const get_contextmenu = (): Contextmenu_Store => getContext(CONTEXTMENU_STORE_KEY);

const CONTEXTMENU_STATE_KEY = Symbol();
export const set_contextmenu_submenu = (submenu: Submenu_State): Submenu_State =>
	setContext(CONTEXTMENU_STATE_KEY, submenu);
export const get_contextmenu_submenu = (): Submenu_State | undefined =>
	getContext(CONTEXTMENU_STATE_KEY);

const CONTEXTMENU_DIMENSIONS_STORE_KEY = Symbol();
export const set_contextmenu_dimensions = (): Writable<{width: number; height: number}> => {
	const dimensions = writable({width: 0, height: 0});
	setContext(CONTEXTMENU_DIMENSIONS_STORE_KEY, dimensions);
	return dimensions;
};
export const get_contextmenu_dimensions = (): Writable<{width: number; height: number}> =>
	getContext(CONTEXTMENU_DIMENSIONS_STORE_KEY);

// TODO quick and hacky, probably delete, see usage
const shallow_equal = (a: any, b: any): boolean => {
	if (!a || !b) return a === b;
	let i = 0;
	for (const k in a) {
		if (a[k] !== b[k]) return false;
		i++;
	}
	return i === Object.keys(b).length;
};

import {
	getContext,
	onDestroy,
	setContext,
	type ComponentProps,
	type ComponentType,
	type SvelteComponent,
	type Snippet,
} from 'svelte';
import {type Writable, get} from 'svelte/store';
import type {Result} from '@ryanatkn/belt/result.js';
import {to_array} from '@ryanatkn/belt/array.js';

import Contextmenu_Link_Entry from '$lib/Contextmenu_Link_Entry.svelte';
import Contextmenu_Text_Entry from '$lib/Contextmenu_Text_Entry.svelte';
import {Dimensions} from '$lib/dimensions.svelte.js';

// TODO rewrite with runes!!!!

// TODO @multiple added this hack with Svelte 4, didn't see an open issue about it
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */

export type Contextmenu_Params<T extends SvelteComponent = SvelteComponent> =
	| Snippet
	| {
			component: ComponentType<T>;
			props: ComponentProps<T>;
	  };

// TODO BLOCK should this just be snippets? might need a wrapper hack
export type Contextmenu_Action_Params =
	| Snippet
	| Contextmenu_Params
	| Array<Contextmenu_Params | ComponentProps<Contextmenu_Text_Entry> | null | undefined>
	| ComponentProps<Contextmenu_Text_Entry>;

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

export interface Contextmenu_Store_Options {
	link_component?: ComponentType<Contextmenu_Link_Entry>;
	text_component?: ComponentType<Contextmenu_Text_Entry>;
	layout?: Dimensions; // TODO consider making this a prop on `Contextmenu_Root`, and being assigned here
}

// TODO BLOCK name? should the component or this be `Contextmenu`? `Contextmenu_State`?
// maybe the compoonent is `Contextmenu_Entries`? seems like the common one should be simpler

/**
 * Creates a `contextmenu` store.
 * See usage with `Contextmenu_Root.svelte` and `Contextmenu.svelte`.
 */
export class Contextmenu_Store {
	layout: Dimensions; // TODO $state?
	/**
	 * If an initial layout is provided, control is deferred externally.
	 * Otherwise the layout syncs to the page dimensions.
	 */
	initial_layout: Dimensions | undefined; // TODO $state?
	link_component: ComponentType<Contextmenu_Link_Entry>; // TODO $state?
	text_component: ComponentType<Contextmenu_Text_Entry>; // TODO $state?

	// State for external consumers.
	HACK_counter: number = $state(0);
	opened: boolean = $state(false);
	x: number = $state(0);
	y: number = $state(0);
	params: Contextmenu_Params[] = $state([]);
	error: string | undefined = $state();

	// TODO BLOCK probably make these reactive?
	// These two properties are mutated internally.
	// If you need reactivity, use `$contextmenu` in a reactive statement to react to all changes, and
	// then access the mutable non-reactive  `contextmenu.root_menu` and `contextmenu.selections`.
	// See `Contextmenu_Entry.svelte` and `Contextmenu_Submenu.svelte` for reactive usage examples.
	root_menu: Root_Menu_State = $state({
		is_menu: true,
		menu: null,
		depth: 1,
		items: [],
	});
	selections: Item_State[] = $state([]);

	action: ReturnType<typeof create_contextmenu_action>;

	constructor(options?: Contextmenu_Store_Options) {
		this.link_component = options?.link_component ?? Contextmenu_Link_Entry;
		this.text_component = options?.text_component ?? Contextmenu_Text_Entry;
		this.initial_layout = options?.layout;

		this.layout = this.initial_layout || new Dimensions();

		this.action = create_contextmenu_action(this.text_component);
	}

	open(params: Contextmenu_Params[], x: number, y: number): void {
		console.log('open', params);
		this.selections.length = 0;
		this.opened = true;
		this.x = x;
		this.y = y;
		this.params = params;
	}

	close(): void {
		console.log('close');
		if (!this.opened) return;
		this.reset_items(this.root_menu.items);
		this.opened = false;
	}

	reset_items(items: Item_State[]): void {
		for (const item of items) {
			if (item.is_menu) {
				this.reset_items(item.items);
			} else {
				if (item.promise !== null) item.promise = null;
				if (item.error_message !== null) item.error_message = null;
			}
		}
	}

	activate(item: Item_State): boolean | Promise<Activate_Result> {
		console.log(`activate item`, item);
		if (item.is_menu) {
			this.expand_selected();
		} else {
			let returned;
			try {
				returned = get(item.run)();
			} catch (err) {
				const message = typeof err?.message === 'string' ? err.message : undefined;
				item.error_message = message ?? 'unknown error';
				this.error = message;
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
									this.close();
								} else {
									const message = typeof result.message === 'string' ? result.message : undefined;
									item.error_message = message ?? 'unknown error';
									this.error = message;
								}
							} else {
								this.close();
							}
							return result;
						},
						(err) => {
							if (promise !== item.promise) return;
							const message = typeof err?.message === 'string' ? err.message : undefined;
							item.error_message = message ?? 'unknown error';
							this.error = message;
						},
					)
					.finally(() => {
						if (promise !== item.promise) return;
						item.pending = false;
						item.promise = null;
						// TODO BLOCK shouldn't be needed but might be relying on this behavior for nonreactive properties
						this.HACK_counter++;
					}));
				// TODO BLOCK shouldn't be needed but might be relying on this behavior for nonreactive properties
				this.HACK_counter++;
				return item.promise; // async path
			}
			this.close(); // synchronous path only
		}
		return true;
	}

	activate_selected(): void | boolean | Promise<Activate_Result> {
		const selected = this.selections[this.selections.length - 1];
		return selected ? this.activate(selected) : this.select_first();
	}

	// Instead of diffing, this does the simple thing and
	// deselects everything and then re-creates the list of selections.
	// Could be improved but it's fine because we're using mutation and the N is very small,
	// and it allows us to have a single code path for the various selection methods.
	/**
	 * Activates the selected entry, or if none, selects the first.
	 */
	select(item: Item_State): void {
		console.log(`select item`, item);
		if (this.selections[this.selections.length - 1] === item) return;
		for (const s of this.selections) s.selected = false;
		this.selections.length = 0;
		let i: Item_State | Root_Menu_State = item;
		do {
			i.selected = true;
			this.selections.unshift(i);
		} while ((i = i.menu) && i.menu);
		// TODO BLOCK shouldn't be needed but might be relying on this behavior for nonreactive properties
		this.HACK_counter++;
	}

	collapse_selected(): void {
		if (this.selections.length <= 1) return;
		const deselected = this.selections.pop()!;
		deselected.selected = false;
		// TODO BLOCK shouldn't be needed but might be relying on this behavior for nonreactive properties
		this.HACK_counter++;
	}

	expand_selected(): void {
		const parent = this.selections[this.selections.length - 1];
		if (!parent?.is_menu) return;
		const selected = parent.items[0];
		selected.selected = true;
		this.selections.push(selected);
		// TODO BLOCK shouldn't be needed but might be relying on this behavior for nonreactive properties
		this.HACK_counter++;
	}

	select_next(): void {
		if (!this.selections.length) return this.select_first();
		const item = this.selections[this.selections.length - 1];
		const index = item.menu.items.indexOf(item);
		this.select(item.menu.items[index === item.menu.items.length - 1 ? 0 : index + 1]);
	}

	select_previous(): void {
		if (!this.selections.length) return this.select_last();
		const item = this.selections[this.selections.length - 1];
		const index = item.menu.items.indexOf(item);
		this.select(item.menu.items[index === 0 ? item.menu.items.length - 1 : index - 1]);
	}

	select_first(): void {
		this.select((this.selections[this.selections.length - 1]?.menu || this.root_menu).items[0]);
	}

	select_last(): void {
		const {items} = this.selections[this.selections.length - 1]?.menu || this.root_menu;
		return this.select(items[items.length - 1]);
	}

	/**
	 * Used by `Contextmenu_Entry` and custom entry components
	 * @initializes
	 */
	add_entry(run: Writable<Contextmenu_Run>): Entry_State {
		const menu = get_contextmenu_submenu() || this.root_menu;
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
	}

	/**
	 * @initializes
	 */
	add_submenu(): Submenu_State {
		const menu = get_contextmenu_submenu() || this.root_menu;
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
		console.log(`submenu`, submenu);
		console.log(`menu.items(last)`, menu.items[menu.items.length - 1]);
		return submenu;
	}
}

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
			typeof p === 'function'
				? p
				: 'component' in p && 'props' in p
					? p
					: {component: text_component, props: p},
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
	// Unfortunately `vibrate` this gets blocked by some (all?) browsers the way we're doing it
	// outside of a user interaction in a custom `longpress` gesture that triggers on a timeout,
	// which exists only because iOS doesn't support the contextmenu event.
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
				if (
					typeof item === 'function' ||
					!params?.some((i) => i.component === item.component && shallow_equal(i.props, props))
				) {
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
	console.log(`queried params`, params);
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
export const set_contextmenu_dimensions = (dimensions = new Dimensions()): Dimensions => {
	setContext(CONTEXTMENU_DIMENSIONS_STORE_KEY, dimensions);
	return dimensions;
};
export const get_contextmenu_dimensions = (): Dimensions =>
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

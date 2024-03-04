<script lang="ts">
	import type {Snippet} from 'svelte';
	import {get_contextmenu, type Contextmenu_Action_Params} from '$lib/contextmenu.js';

	interface Props {
		params: Contextmenu_Action_Params;
		children: Snippet;
	}

	const {params, children} = $props<Props>();

	const contextmenu = get_contextmenu(); // TODO BLOCK use?

	// const CONTEXTMENU_DATASET_KEY = 'contextmenu';
	// const CONTEXTMENU_DOM_QUERY = `a,[data-${CONTEXTMENU_DATASET_KEY}]`;
	// const contextmenu_cache = new Map<string, Contextmenu_Params[]>();
	// let cache_key_counter = 0;

	// const create_contextmenu_action =
	// 	(text_component: ComponentType<Contextmenu_Text_Entry>) =>
	// 	(el: HTMLElement | SVGElement, params: Contextmenu_Action_Params | null | undefined) => {
	// 		const key = cache_key_counter++ + '';
	// 		el.dataset[CONTEXTMENU_DATASET_KEY] = key;
	// 		contextmenu_cache.set(key, resolve_contextmenu_params(params, text_component));
	// 		return {
	// 			update: (p: Contextmenu_Action_Params | null | undefined) => {
	// 				contextmenu_cache.set(key, resolve_contextmenu_params(p, text_component));
	// 			},
	// 			destroy: () => {
	// 				contextmenu_cache.delete(key);
	// 			},
	// 		};
	// 	};

	// const resolve_contextmenu_params = (
	// 	params: Contextmenu_Action_Params | null | undefined,
	// 	text_component: ComponentType<Contextmenu_Text_Entry>,
	// ): Contextmenu_Params[] =>
	// 	to_array(params)
	// 		.filter(Boolean)
	// 		.map((p: any) =>
	// 			'component' in p && 'props' in p ? p : {component: text_component, props: p},
	// 		);

	// const CONTEXTMENU_OPEN_VIBRATE_DURATION = 17;
</script>

<div use:contextmenu.action={params}>
	{@render children()}
</div>

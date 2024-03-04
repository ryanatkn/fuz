<script lang="ts">
	import type {Snippet} from 'svelte';
	import {get_contextmenu, type Contextmenu_Action_Params} from '$lib/contextmenu.js';

	interface Props {
		params: Contextmenu_Action_Params;
		children: Snippet;
	}

	const {children} = $props<Props>();

	const contextmenu = get_contextmenu(); // TODO BLOCK use?
</script>

{@render children()}

<script lang="ts">
	import type {Writable} from 'svelte/store';
	import {is_editable} from '@grogarden/util/dom.js';

	// TODO  this is experimental

	export let devmode: Writable<boolean>;
	export let should_toggle = (e: KeyboardEvent): boolean =>
		e.key === '`' && e.ctrlKey && !e.shiftKey;

	const on_window_keydown = (e: KeyboardEvent) => {
		if (!is_editable(e.target) && should_toggle(e)) {
			$devmode = !$devmode;
		}
	};
</script>

<svelte:window on:keydown={on_window_keydown} />

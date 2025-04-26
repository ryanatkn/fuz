<script lang="ts">
	import {swallow} from '@ryanatkn/belt/dom.js';
	import type {Theme} from '@ryanatkn/moss/theme.js';
	import {default_themes} from '@ryanatkn/moss/themes.js';

	import {themer_context} from '$lib/themer.svelte.js';

	interface Props {
		selected_theme?: {theme: Theme};
		themes?: Array<Theme>;
		enable_editing?: boolean;
		select?: ((theme: Theme) => void | boolean) | null;
		onselect?: (theme: Theme) => void;
		onedit?: (theme: Theme) => void;
	}

	const {
		selected_theme = themer_context.get(),
		themes = default_themes,
		enable_editing = false,
		select = (theme) => {
			selected_theme.theme = theme;
		},
		onselect,
		onedit,
	}: Props = $props();
</script>

<menu class="theme_input unstyled">
	{#each themes as theme (theme.name)}
		<!-- TODO @many proper equality check, won't work when we allow editing, need an id or unique names and a deep equality check -->
		{@const selected = theme.name === selected_theme.theme.name}
		<li class="row" role="none">
			<button
				type="button"
				class="theme_button color_a"
				role="menuitemradio"
				aria-label="{theme.name} theme"
				aria-checked={selected}
				class:selected
				onclick={(e) => {
					swallow(e);
					if (select?.(theme) !== false) {
						onselect?.(theme);
					}
				}}
			>
				{theme.name}
			</button>
			{#if enable_editing}
				<button
					type="button"
					class="icon_button plain"
					onclick={(e) => {
						swallow(e);
						onedit?.(theme);
					}}>•••</button
				>
			{/if}
		</li>
	{/each}
</menu>

<style>
	.theme_button {
		flex: 1;
	}
</style>

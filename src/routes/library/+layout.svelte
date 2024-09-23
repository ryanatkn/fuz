<script lang="ts">
	import type {Snippet} from 'svelte';

	import Library from '$lib/Library.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {selected_variable_context} from '$routes/style_variable_helpers.svelte.js';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {get_pkg} from '$routes/pkg.js';
	import Svg from '$lib/Svg.svelte';
	import {fuz_logo} from '$lib/logos.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const selected_variable = selected_variable_context.set();

	const pkg = get_pkg();
</script>

<Library {tomes} {pkg}>
	{#snippet breadcrumb_children(is_primary_nav)}
		{#if is_primary_nav}
			<div class="icon row">
				<Svg data={fuz_logo} size="32px" /> <span class="ml_sm">fuz</span>
			</div>
		{:else}
			<Svg data={fuz_logo} size="32px" />
		{/if}
	{/snippet}
	{@render children()}
</Library>

{#if selected_variable.value}
	<Dialog onclose={() => (selected_variable.value = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={selected_variable.value} />
					<aside>⚠️ This is unfinished and will change.</aside>
					<button type="button" onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}

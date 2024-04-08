<script lang="ts">
	import type {Snippet} from 'svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';

	import Library from '$lib/Library.svelte';
	import {tomes} from '$routes/library/tomes.js';
	import {set_selected_variable} from '$routes/style_variable_helpers.js';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {package_json, src_json} from '$routes/package.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	const selected_variable = set_selected_variable();

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<Library {tomes} {pkg}>
	{@render children()}
</Library>

{#if $selected_variable}
	<Dialog onclose={() => ($selected_variable = null)}>
		{#snippet children(close)}
			<div class="pane">
				<div class="panel p_lg box">
					<Style_Variable_Detail variable={$selected_variable} />
					<aside>this is unfinished</aside>
					<button onclick={close}>ok</button>
				</div>
			</div>
		{/snippet}
	</Dialog>
{/if}

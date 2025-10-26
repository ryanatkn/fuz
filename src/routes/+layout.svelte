<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '@ryanatkn/fuz_code/theme.css';
	import '$routes/moss.css';

	import type {Snippet} from 'svelte';

	import Themed from '$lib/Themed.svelte';
	import {pkg_context, parse_pkg} from '$lib/pkg.js';
	import {package_json, src_json} from '$routes/package.js';
	import Spiders from '$lib/Spiders.svelte';
	import Tooltip from '$lib/Tooltip.svelte';
	import {Tooltip_State, tooltip_context} from '$lib/tooltip_state.svelte.js';

	// TODO re-enable this, see comment below
	// import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	// import Dialog from '$lib/Dialog.svelte';
	// import Settings from '$routes/Settings.svelte';
	// import {contextmenu_action} from '$lib/contextmenu_helpers.svelte.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	pkg_context.set(parse_pkg(package_json, src_json));

	// Initialize tooltip state
	tooltip_context.set(new Tooltip_State());

	// let show_settings = $state(false);
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<Themed>
	<!-- TODO add all of this and fixed scoped, so the docs examples work as expected,
		or maybe disable this main contextmenu when in the docs -->
	<!-- <Contextmenu_Root> -->
	{@render children()}
	<Spiders />
	<Tooltip />
	<!-- </Contextmenu_Root> -->
	<!-- {#if show_settings}
		<Dialog onclose={() => (show_settings = false)}>
			<div class="pane p_md width_upto_md mx_auto">
				<Settings />
			</div>
		</Dialog>
	{/if} -->
</Themed>

<!-- <svelte:body
	use:contextmenu_action={[
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	]}
/> -->

<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Teleport from '$lib/Teleport.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';

	const LIBRARY_ITEM_NAME = 'Teleport';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let swap = $state(true);
	let teleport_1: HTMLElement | undefined = $state();
	let teleport_2: HTMLElement | undefined = $state();
</script>

<Tome_Detail {tome}>
	<section>
		<p>
			Relocates elements in the DOM, in the rare cases that's useful and the best solution. The <Tome_Link
				name="Dialog"
			/> uses this to mount dialogs from any component without inheriting styles.
		</p>
		<aside>
			<p>Use only when necessary or fun.</p>
		</aside>
	</section>
	<section>
		<div class="mb_lg">
			<!-- TODO make this a generic data-driven helper -->
			<Code content={`import Teleport from '@ryanatkn/fuz/Teleport.svelte';`} lang="ts" />
		</div>
		<Code
			content={`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button onclick={() => (swap = !swap)}>
	teleport the bunny
</button>`}
		/>
	</section>
	<section>
		<!-- TODO how to do this with the `state` API? the `bind` in particular -- maybe make them stores? -->
		<Teleport to={swap ? teleport_1 : teleport_2}>🐰</Teleport>
		<div class="teleports">
			<div class="panel" bind:this={teleport_1}></div>
			<div class="panel" bind:this={teleport_2}></div>
		</div>
		<button type="button" onclick={() => (swap = !swap)}> teleport the bunny </button>
	</section>
</Tome_Detail>

<style>
	.teleports {
		display: flex;
		gap: var(--space_sm);
		margin-bottom: var(--space_sm);
	}
	.teleports > div {
		width: var(--space_xl8);
		height: var(--space_xl8);
		font-size: var(--size_xl3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<script lang="ts">
	import 'prismjs'; // TODO @multiple why are these needed? `Code` imports these already - vite config?
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Teleport from '$lib/Teleport.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Teleport';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let swap = true;
	let teleport_1: HTMLElement | undefined = undefined;
	let teleport_2: HTMLElement | undefined = undefined;
</script>

<Tome_Detail {tome}>
	<section class="prose width_sm">
		<p>Relocates elements in the DOM, in the rare cases that's useful and the best solution.</p>
		<aside>
			<p>Use only when necessary or fun.</p>
		</aside>
	</section>
	<section>
		<div class="spaced">
			<!-- TODO make this a generic data-driven helper -->
			<Code content={`import Teleport from\n\t'@ryanatkn/fuz/Teleport.svelte';`} lang="ts" />
		</div>
		<Code
			content={`<Teleport to={swap ? teleport_1 : teleport_2}>
	🐰
</Teleport>
<div class="teleports">
	<div class="panel" bind:this={teleport_1} />
	<div class="panel" bind:this={teleport_2} />
</div>
<button on:click={() => (swap = !swap)}>
	teleport the bunny
</button>`}
		/>
	</section>
	<section>
		<!-- TODO how to do this with the `state` API? the `bind` in particular -- maybe make them stores? -->
		<Teleport to={swap ? teleport_1 : teleport_2}>🐰</Teleport>
		<div class="teleports">
			<div class="panel" bind:this={teleport_1} />
			<div class="panel" bind:this={teleport_2} />
		</div>
		<button on:click={() => (swap = !swap)}> teleport the bunny </button>
	</section>
</Tome_Detail>

<style>
	.teleports {
		display: flex;
	}
	.teleports > div {
		width: var(--spacing_8);
		height: var(--spacing_8);
		font-size: var(--size_3);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* TODO standardize this */
	section {
		margin-bottom: var(--spacing_3);
	}
</style>

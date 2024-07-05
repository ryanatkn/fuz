<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Pending_Animation from '$lib/Pending_Animation.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Animation';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let turtleSlot = $state('🐢');
	let turtleSlot2a = $state('🐸');
	let turtleSlot2b = $state('⏳');
	let frogsRunning = $state(false);
	let pendingAnimation0Running = $state(true);
	let pendingAnimation1Running = $state(false);
</script>

<Tome_Detail {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code
			content={`import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';`}
			lang="ts"
		/>
		<Code content={`<Pending_Animation running={${pendingAnimation0Running}} />`} />
		<div class="mb_lg">
			<Pending_Animation running={pendingAnimation0Running} />
		</div>
		<button
			type="button"
			class="mb_lg"
			onclick={() => (pendingAnimation0Running = !pendingAnimation0Running)}
			>{#if pendingAnimation0Running}pause animation{:else}play animation{/if}</button
		>
		<Code
			content={`<Pending_Animation\n\tattrs={{class: 'size_xl5'}}\n\trunning={${pendingAnimation0Running}}\n/>`}
		/>
		<div class="box" style:align-items="flex-start" role="none">
			<Pending_Animation attrs={{class: 'size_xl5'}} running={pendingAnimation0Running} />
		</div>
	</section>
	<section>
		<Tome_Subheading text="With custom children" slug="custom-children" />
		<Code
			content={`<div
	style:font-size="var(--size_xl6)"
	style:--animation_duration="var(--duration_6)"
>
	<Pending_Animation running={${pendingAnimation1Running}}>
		{${turtleSlot}}
	</Pending_Animation>
</div>`}
		/>
		<p>
			with children <input bind:value={turtleSlot} />
			<button type="button" onclick={() => (turtleSlot = '🐢🐢🐢')}>🐢🐢🐢</button>
			<button
				type="button"
				onclick={() => (turtleSlot = (turtleSlot + turtleSlot).substring(0, 24))}>* 2</button
			>
		</p>
		<button type="button" onclick={() => (pendingAnimation1Running = !pendingAnimation1Running)}>
			{#if pendingAnimation1Running}pause animation{:else}play animation{/if}
		</button>
		<div
			style:font-size="var(--size_xl6)"
			style:--animation_duration="var(--duration_6)"
			style:text-align="center"
		>
			<Pending_Animation running={pendingAnimation1Running}>
				{turtleSlot}
			</Pending_Animation>
		</div>
	</section>
	<section>
		<Tome_Subheading text="With children index prop" slug="children-index-prop"
			>With children <code>index</code> prop</Tome_Subheading
		>
		<Code
			content={`<Pending_Animation running={${frogsRunning}}>
	{#snippet children(index)}
		<div class="row box">
			{${turtleSlot2a}}
			{index}
			<span class="size_xl5">
				{${turtleSlot2b}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`}
		/>
		<p>
			with
			<code
				>running={'{'}<button type="button" onclick={() => (frogsRunning = !frogsRunning)}
					>{frogsRunning}</button
				>{'}'}</code
			>
		</p>
		<p>
			and children <input bind:value={turtleSlot2a} />
			<input bind:value={turtleSlot2b} />
		</p>
		<Pending_Animation running={frogsRunning}>
			{#snippet children(index)}
				<div class="row box">
					<span class="size_xl5">{turtleSlot2a}</span>
					<span class="index">{index}</span>
					{turtleSlot2b}
				</div>
			{/snippet}
		</Pending_Animation>
	</section>
</Tome_Detail>

<style>
	.index {
		font-size: var(--size_xl3);
		font-weight: 300;
	}
</style>

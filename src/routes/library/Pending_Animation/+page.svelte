<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Pending_Animation from '$lib/Pending_Animation.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Animation';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let turtleSlot = '🐢';
	let turtleSlot2a = '🐸';
	let turtleSlot2b = '⏳';
	let frogsRunning = false;
	let pendingAnimation0Running = true;
	let pendingAnimation1Running = false;
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<!-- TODO make this a generic data-driven helper -->
			<Code
				content={`import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';`}
				lang="ts"
			/>
			<Code content={`<Pending_Animation running={${pendingAnimation0Running}} />`} />
			<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
			<div on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}>
				<Pending_Animation running={pendingAnimation0Running} />
			</div>
			<button on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}
				>{#if pendingAnimation0Running}pause animation{:else}play animation{/if}</button
			>
			<Code
				content={`<Pending_Animation\n\tattrs={{class: 'h_100'}}\n\trunning={${pendingAnimation0Running}}\n/>`}
			/>
			<div
				class="box"
				style:height="19rem"
				style:align-items="flex-start"
				on:click={() => (pendingAnimation0Running = !pendingAnimation0Running)}
				role="none"
			>
				<Pending_Animation attrs={{class: 'h_100'}} running={pendingAnimation0Running} />
			</div>
		</section>
		<section>
			<h3>custom slot</h3>
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
				with slot <input class="inline" bind:value={turtleSlot} />
				<button on:click={() => (turtleSlot = '🐢🐢🐢')} class="inline">🐢🐢🐢</button>
				<button
					on:click={() => (turtleSlot = (turtleSlot + turtleSlot).substring(0, 24))}
					class="inline">* 2</button
				>
			</p>
			<button on:click={() => (pendingAnimation1Running = !pendingAnimation1Running)}>
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
			<h3>slot <code>index</code> prop</h3>
			<Code
				content={`<Pending_Animation running={${frogsRunning}} let:index>
	<div class="row box">
		{${turtleSlot2a}}
		{index}
		<span style="font-size: var(--size_xl5)">
			{${turtleSlot2b}}
		</span>}
	</div>
</Pending_Animation>`}
			/>
			<p>
				with
				<code
					>running={'{'}<button class="inline" on:click={() => (frogsRunning = !frogsRunning)}
						>{frogsRunning}</button
					>{'}'}</code
				>
				<br />
				and slots <input class="inline" bind:value={turtleSlot2a} />
				<input class="inline" bind:value={turtleSlot2b} />
			</p>
			<Pending_Animation running={frogsRunning} let:index>
				<div class="row box">
					<span style="font-size: var(--size_xl5)">{turtleSlot2a}</span>
					<span class="index">{index}</span>
					{turtleSlot2b}
				</div>
			</Pending_Animation>
		</section>
	</div>
</Tome_Detail>

<style>
	code button.inline {
		margin: 0;
	}
	.index {
		font-size: var(--size_xl3);
		font-weight: 300;
	}
</style>

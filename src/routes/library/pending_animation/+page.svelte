<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Pending_Animation from '$lib/Pending_Animation.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Animation';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let turtle_slot = $state('🐢');
	let turtle_slot_2a = $state('🐸');
	let turtle_slot_2b = $state('⏳');
	let frogs_running = $state(false);
	let pending_animation_0_running = $state(true);
	let pending_animation_1_running = $state(false);
	let inline = $state(true);
</script>

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code
			content={`import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';`}
			lang="ts"
		/>
		<Code content={`<Pending_Animation running={${pending_animation_0_running}} />`} />
		<div class="mb_lg">
			<Pending_Animation running={pending_animation_0_running} />
		</div>
		<button
			type="button"
			class="mb_lg"
			onclick={() => (pending_animation_0_running = !pending_animation_0_running)}
			>{#if pending_animation_0_running}pause animation{:else}play animation{/if}</button
		>
		<Code
			content={`<Pending_Animation\n\tattrs={{class: 'size_xl5'}}\n\trunning={${pending_animation_0_running}}\n/>`}
		/>
		<div class="box" style:align-items="flex-start" role="none">
			<Pending_Animation attrs={{class: 'size_xl5'}} running={pending_animation_0_running} />
		</div>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With custom children and duration" />
		<Code
			content={`<div style:font-size="var(--size_xl6)">
	<Pending_Animation running={${pending_animation_1_running}} --animation_duration="var(--duration_6)">
		{${turtle_slot}}
	</Pending_Animation>
</div>`}
		/>
		<p>
			with children <input bind:value={turtle_slot} />
			<button type="button" onclick={() => (turtle_slot = '🐢🐢🐢')}>🐢🐢🐢</button>
			<button
				type="button"
				onclick={() => (turtle_slot = (turtle_slot + turtle_slot).substring(0, 24))}>* 2</button
			>
		</p>
		<button
			type="button"
			onclick={() => (pending_animation_1_running = !pending_animation_1_running)}
		>
			{#if pending_animation_1_running}pause animation{:else}play animation{/if}
		</button>
		<div style:font-size="var(--size_xl6)">
			<Pending_Animation
				running={pending_animation_1_running}
				--animation_duration="var(--duration_6)"
			>
				{turtle_slot}
			</Pending_Animation>
		</div>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With children index prop"
			>With children <code>index</code> prop</Tome_Section_Header
		>
		<Code
			content={`<Pending_Animation running={${frogs_running}}>
	{#snippet children(index)}
		<div class="row box">
			{${turtle_slot_2a}}
			{index}
			<span class="size_xl5">
				{${turtle_slot_2b}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`}
		/>
		<p>
			with
			<code
				>running={'{'}<button type="button" onclick={() => (frogs_running = !frogs_running)}
					>{frogs_running}</button
				>{'}'}</code
			>
		</p>
		<p>
			and children <input bind:value={turtle_slot_2a} />
			<input bind:value={turtle_slot_2b} />
		</p>
		<Pending_Animation running={frogs_running}>
			{#snippet children(index)}
				<div class="row box">
					<span class="size_xl5">{turtle_slot_2a}</span>
					<span class="size_xl3">{index}</span>
					{turtle_slot_2b}
				</div>
			{/snippet}
		</Pending_Animation>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With inline">With <code>inline</code></Tome_Section_Header>
		<Code content={`<Pending_Animation inline={${inline}} />`} />
		<p>
			with
			<code
				>inline={'{'}<button type="button" onclick={() => (inline = !inline)}>{inline}</button
				>{'}'}</code
			>
			<Pending_Animation {inline} />
		</p>
	</Tome_Section>
</Tome_Content>

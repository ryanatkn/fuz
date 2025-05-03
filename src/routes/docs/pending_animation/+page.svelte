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
	let running = $state(true);
	let inline = $state(true);

	// Formats boolean html attrs for display, using shorthand when true
	const to_boolean_attr = (name: 'running' | 'inline', value: boolean): string => {
		const default_value = name === 'running' ? true : name === 'inline' ? false : undefined; // eslint-disable-line @typescript-eslint/no-unnecessary-condition
		if (default_value === undefined) throw Error();
		if (default_value === value) return '';
		return value ? ' ' + name : ` ${name}={false}`;
	};
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code
			content={`import Pending_Animation from '@ryanatkn/fuz/Pending_Animation.svelte';`}
			lang="ts"
		/>
		<Code content={`<Pending_Animation${to_boolean_attr('running', running)} />`} />
		<Pending_Animation {running} />
		<button type="button" class="my_lg" onclick={() => (running = !running)}
			>{#if running}pause animation{:else}play animation{/if}</button
		>
		<p>
			The default animation has text children, so they scale with <code>font-size</code>.
		</p>
		<p>Set size with custom properties:</p>
		<Code
			content={`<Pending_Animation --font_size="var(--font_size_xl5)"${to_boolean_attr('running', running)} />`}
		/>
		<div class="mb_lg" style:align-items="flex-start" role="none">
			<Pending_Animation --font_size="var(--font_size_xl5)" {running} />
		</div>
		<p>Set size with classes:</p>
		<Code
			content={`<Pending_Animation attrs={{class: 'font_size_xl3'}}${to_boolean_attr('running', running)} />`}
		/>
		<div style:align-items="flex-start" role="none">
			<Pending_Animation attrs={{class: 'font_size_xl3'}} {running} />
		</div>
		<p>Size is inherited by default:</p>
		<Code
			content={`<div class="font_size_xl4"><Pending_Animation${to_boolean_attr('running', running)} /></div>`}
		/>
		<div class="font_size_xl4" style:align-items="flex-start" role="none">
			<Pending_Animation {running} />
		</div>
	</section>

	<Tome_Section>
		<Tome_Section_Header text="With inline">With <code>inline</code></Tome_Section_Header>
		<Code
			content={`<Pending_Animation${to_boolean_attr('inline', inline)}${to_boolean_attr('running', running)} />`}
		/>
		<p>
			with
			<code
				>inline={'{'}<button type="button" onclick={() => (inline = !inline)}>{inline}</button
				>{'}'}</code
			>
			<Pending_Animation {inline} {running} />
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="With custom children" />
		<Code
			content={`<Pending_Animation --font_size="var(--font_size_xl6)"${to_boolean_attr('running', running)}>
	{${turtle_slot}}
</Pending_Animation>`}
		/>
		<p>
			with children <input bind:value={turtle_slot} />
			<button type="button" onclick={() => (turtle_slot = '🐢🐢🐢')}>🐢🐢🐢</button>
			<button
				type="button"
				onclick={() => (turtle_slot = (turtle_slot + turtle_slot).substring(0, 24))}>* 2</button
			>
		</p>
		<Pending_Animation {running} --font_size="var(--font_size_xl6)">
			{turtle_slot}
		</Pending_Animation>
		<button type="button" onclick={() => (running = !running)}>
			{#if running}pause animation{:else}play animation{/if}
		</button>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="With children index prop"
			>With children <code>index</code> prop</Tome_Section_Header
		>
		<Code
			content={`<Pending_Animation${to_boolean_attr('running', running)}>
	{#snippet children(index)}
		<div class="box">
			{${turtle_slot_2a}}
			{index}
			<span class="font_size_xl5">
				{${turtle_slot_2b}}
			</span>}
		</div>
	{/snippet}
</Pending_Animation>`}
		/>
		<p>
			with
			<code
				>running={'{'}<button type="button" onclick={() => (running = !running)}>{running}</button
				>{'}'}</code
			>
		</p>
		<p>
			and children <input bind:value={turtle_slot_2a} />
			<input bind:value={turtle_slot_2b} />
		</p>
		<Pending_Animation {running}>
			{#snippet children(index)}
				<div class="row">
					<span class="font_size_xl5">{turtle_slot_2a}</span>
					<span class="font_size_xl3">{index}</span>
					{turtle_slot_2b}
				</div>
			{/snippet}
		</Pending_Animation>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="With custom duration" />
		<Code
			content={`<Pending_Animation --animation_duration="var(--duration_6)" --font_size="var(--font_size_xl4)"${to_boolean_attr('running', running)} />`}
		/>
		<Pending_Animation
			{running}
			--animation_duration="var(--duration_6)"
			--font_size="var(--font_size_xl4)"
		>
			{turtle_slot}
		</Pending_Animation>
		<button type="button" onclick={() => (running = !running)}>
			{#if running}pause animation{:else}play animation{/if}
		</button>
	</Tome_Section>
</Tome_Content>

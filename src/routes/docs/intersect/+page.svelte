<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import {intersect} from '$lib/intersect.svelte.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';

	const LIBRARY_ITEM_NAME = 'intersect';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	// Demo state for scrolling list
	let threshold = $state(0);
	let count = $state(-1);
	const get_initial_count = (): number => {
		if (typeof window === 'undefined') return 20;
		return Math.max(15, Math.floor(window.innerHeight / 50));
	};
	const items = $derived(Array.from({length: get_initial_count()}, (_, i) => i));

	// Demo state for lazy loading
	let lazy_visible = $state(new Set<number>());
	const lazy_items = Array.from({length: 6}, (_, i) => i);

	// Demo state for one-time trigger
	let triggered_items = $state(new Set<number>());
	const trigger_items = Array.from({length: 4}, (_, i) => i);

	// Demo state for conditional enabling
	let observation_enabled = $state(true);
	let enabled_intersecting = $state(false);
</script>

<Tome_Content {tome}>
	<section>
		<p>
			Creates an attachment that observes when an element enters or leaves the viewport using the
			<Mdn_Link path="Web/API/Intersection_Observer_API">Intersection Observer API</Mdn_Link>.
		</p>
		<p>
			Uses the lazy function pattern to optimize reactivity: callbacks can update without recreating
			the observer, preserving state. See <Identifier_Link name="Tome_Content" /> and <Identifier_Link
				name="Tome_Section"
			/> for usage examples in this codebase.
		</p>
	</section>
	<section>
		<Code content={`import {intersect} from '@ryanatkn/fuz/intersect.svelte.js';`} lang="ts" />
		<Code
			content={`<div {@attach intersect(() => ({intersecting}) => {
  console.log(intersecting ? 'entered' : 'left');
})}>
  scroll me into view
</div>`}
		/>
		<p>
			The simplest form takes a callback function. A <code>threshold</code> of <code>0</code>
			(default) triggers when the element is inside the viewport by at least a pixel. A value of
			<code>1</code>
			triggers when fully visible. See
			<Mdn_Link path="Web/API/IntersectionObserver/IntersectionObserver#threshold"
				>threshold</Mdn_Link
			>, <Mdn_Link path="Web/API/IntersectionObserver/IntersectionObserver#rootmargin"
				>rootMargin</Mdn_Link
			>, and
			<Mdn_Link path="Web/API/IntersectionObserver/IntersectionObserver#root">root</Mdn_Link> in the
			IntersectionObserver docs.
		</p>
		<div class="demo_scrolling">
			<div class="controls">
				<label>
					<code>threshold</code>
					<div class="control_inputs">
						<input type="number" step={0.1} min={0} max={1} bind:value={threshold} />
						<input type="range" step={0.1} min={0} max={1} bind:value={threshold} />
					</div>
				</label>
				<label>
					<code>count</code>
					<div class="control_inputs">
						<input type="number" min={-1} max={3} step={1} bind:value={count} />
						<input type="range" min={-1} max={3} step={1} bind:value={count} />
					</div>
				</label>
			</div>
			<ul class="scrolling_list">
				{#each items as item (item)}
					<li
						{@attach intersect(() => ({
							onintersect: ({intersecting, el}) => {
								el.classList.toggle('intersecting', intersecting);
							},
							count,
							options: {threshold},
						}))}
					>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<Tome_Section>
		<Tome_Section_Header text="Lazy loading" />
		<p>
			Load content only when scrolled into view. Combine with <code>count: 1</code> to load once:
		</p>
		<Code
			content={`let loaded = $state(false);

<div {@attach intersect(() => loaded ? null : ({intersecting}) => {
  if (intersecting) loaded = true;
})}>
  {#if loaded}
    <ExpensiveComponent />
  {/if}
</div>`}
		/>
		<div class="demo_lazy">
			<p class="mb_md">Scroll down to load content:</p>
			{#each lazy_items as item (item)}
				<div
					class="lazy_box"
					{@attach intersect(() =>
						lazy_visible.has(item)
							? null
							: ({intersecting}) => {
									if (intersecting) {
										lazy_visible.add(item);
										lazy_visible = lazy_visible;
									}
								},
					)}
				>
					{#if lazy_visible.has(item)}
						<div class="loaded">loaded item {item}</div>
					{:else}
						<div class="placeholder">placeholder {item}</div>
					{/if}
				</div>
			{/each}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="One-time trigger" />
		<p>
			Use <code>count: 1</code> to disconnect after the first intersection cycle (enter + leave). A
			<code>count</code>
			of <code>0</code> disables observation. Negative or <code>undefined</code> never disconnects.
		</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting}) => {
    if (intersecting) trigger_animation();
  },
  count: 1
}))}>
  animates once on scroll
</div>`}
		/>
		<div class="demo_onetime">
			<p class="mb_md">Scroll to trigger animations (once each):</p>
			{#each trigger_items as item (item)}
				<div
					class="trigger_box"
					class:triggered={triggered_items.has(item)}
					{@attach intersect(() => ({
						onintersect: ({intersecting}) => {
							if (intersecting) {
								triggered_items.add(item);
								triggered_items = triggered_items;
							}
						},
						count: 1,
					}))}
				>
					{triggered_items.has(item) ? '✨ triggered' : 'waiting...'}
				</div>
			{/each}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Intersection options" />
		<p>
			Pass <code>options</code> to customize when intersection triggers. Changing
			<code>options</code> recreates the observer and resets state. Changing callbacks does not.
		</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, intersections}) => {
    console.log({intersecting, intersections});
  },
  options: {
    threshold: 0.5,
    rootMargin: '100px'
  }
}))}>
  triggers at 50% visibility with 100px margin
</div>`}
		/>
		<p>
			The callback receives <code>intersecting</code>, <code>intersections</code> (count),
			<code>el</code>, <code>observer</code>, and <code>disconnect</code>.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Conditional enabling" />
		<p>Return <code>null</code> or <code>undefined</code> to disable observation:</p>
		<Code
			content={`let enabled = $state(true);

<div {@attach intersect(() => enabled ? callback : null)}>
  observes when enabled
</div>`}
		/>
		<div class="demo_conditional">
			<label class="mb_md">
				<input type="checkbox" bind:checked={observation_enabled} />
				observation enabled
			</label>
			<div
				class="conditional_box"
				class:intersecting={enabled_intersecting}
				{@attach intersect(() =>
					observation_enabled
						? ({intersecting}) => {
								enabled_intersecting = intersecting;
							}
						: null,
				)}
			>
				{#if observation_enabled}
					{enabled_intersecting ? '👁️ visible' : '🫣 hidden'}
				{:else}
					observation disabled
				{/if}
			</div>
		</div>
	</Tome_Section>
</Tome_Content>

<style>
	.demo_scrolling {
		display: flex;
		flex-direction: column;
		gap: var(--space_lg);
	}
	.controls {
		display: flex;
		gap: var(--space_xl);
		flex-wrap: wrap;
	}
	.controls label {
		display: flex;
		flex-direction: column;
		gap: var(--space_xs);
	}
	.control_inputs {
		display: flex;
		align-items: center;
		gap: var(--space_md);
	}
	.control_inputs input {
		width: var(--input_width_min);
		min-width: var(--input_width_min);
	}
	.scrolling_list {
		max-height: 400px;
		overflow-y: auto;
		border: var(--border_1);
		border-radius: var(--radius_xs);
	}
	.scrolling_list li {
		padding: var(--space_lg);
		background-color: hsl(var(--hue_g) 50% 80% / 0.3);
		font-weight: 700;
		transition: background-color var(--duration_2);
		border-bottom: var(--border_1);
	}
	.scrolling_list li:last-child {
		border-bottom: none;
	}
	.scrolling_list li:global(.intersecting) {
		color: var(--color_f_5);
		background-color: hsl(var(--hue_f) 50% 80% / 0.15);
	}

	.demo_lazy {
		display: flex;
		flex-direction: column;
		gap: var(--space_md);
		max-height: 500px;
		overflow-y: auto;
		padding: var(--space_md);
		border: var(--border_1);
		border-radius: var(--radius_xs);
	}
	.lazy_box {
		min-height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius_xs);
	}
	.placeholder {
		padding: var(--space_lg);
		background-color: var(--bg_3);
		color: var(--text_2);
		width: 100%;
		text-align: center;
		border-radius: var(--radius_xs);
	}
	.loaded {
		padding: var(--space_lg);
		background-color: hsl(var(--hue_a) 60% 70% / 0.3);
		color: var(--color_a_5);
		width: 100%;
		text-align: center;
		font-weight: 700;
		border-radius: var(--radius_xs);
		animation: fade-in var(--duration_3);
	}

	.demo_onetime {
		display: flex;
		flex-direction: column;
		gap: var(--space_md);
		max-height: 400px;
		overflow-y: auto;
		padding: var(--space_md);
		border: var(--border_1);
		border-radius: var(--radius_xs);
	}
	.trigger_box {
		min-height: 100px;
		padding: var(--space_lg);
		background-color: var(--bg_3);
		color: var(--text_2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius_xs);
		font-weight: 700;
		transition: all var(--duration_3);
	}
	.trigger_box.triggered {
		background-color: hsl(var(--hue_e) 60% 70% / 0.3);
		color: var(--color_e_5);
		transform: scale(1.02);
	}

	.demo_conditional {
		display: flex;
		flex-direction: column;
		gap: var(--space_md);
	}
	.conditional_box {
		min-height: 100px;
		padding: var(--space_xl);
		background-color: var(--bg_3);
		color: var(--text_2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius_xs);
		font-weight: 700;
		font-size: var(--font_size_xl);
		transition: all var(--duration_2);
	}
	.conditional_box.intersecting {
		background-color: hsl(var(--hue_f) 50% 80% / 0.15);
		color: var(--color_f_5);
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import {intersect} from '$lib/intersect.svelte.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Mdn_Link from '$lib/Mdn_Link.svelte';

	const LIBRARY_ITEM_NAME = 'intersect';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const get_initial_count = (): number => {
		if (typeof window === 'undefined') return 15;
		return Math.max(10, Math.floor(window.innerHeight / 60));
	};
	const items = $derived(Array.from({length: get_initial_count()}, (_, i) => i));

	// configurable demo state
	let threshold = $state(0);
	let count = $state(3);
	let rootMargin = $state('0px');
</script>

<Tome_Content {tome}>
	<section>
		<p>
			Creates an attachment that observes when an element enters or leaves the viewport using the
			<Mdn_Link path="Web/API/Intersection_Observer_API">Intersection Observer API</Mdn_Link>.
		</p>
		<p>
			Uses the lazy function pattern to optimize reactivity: callbacks can update without recreating
			the observer, preserving state.
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
			The callback receives <code>intersecting</code> (boolean), <code>intersections</code> (number
			count), <code>el</code>, <code>observer</code>, and <code>disconnect</code>.
		</p>
	</section>

	<Tome_Section>
		<Tome_Section_Header text="threshold: 0 (default)" />
		<p>
			Triggers when the element enters the viewport by at least a pixel. Scroll to see items change
			state.
		</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  }
}))}>
  content
</div>`}
		/>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="threshold: 0.5" />
		<p>Triggers when 50% of the element is visible.</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 0.5}
}))}>
  content
</div>`}
		/>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
						options: {threshold: 0.5},
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="threshold: 1" />
		<p>Triggers only when the element is fully visible.</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  options: {threshold: 1}
}))}>
  content
</div>`}
		/>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
						options: {threshold: 1},
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="count: 1" />
		<p>
			Disconnects after the first intersection cycle (enter and leave). A <code>count</code> of
			<code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)
		</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 1
}))}>
  content
</div>`}
		/>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
						count: 1,
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="count: 2" />
		<p>Disconnects after two intersection cycles.</p>
		<Code
			content={`<div {@attach intersect(() => ({
  onintersect: ({intersecting, el}) => {
    el.classList.toggle('intersecting', intersecting);
  },
  count: 2
}))}>
  content
</div>`}
		/>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
						count: 2,
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Configurable" />
		<p>
			Try different parameter combinations. Positive <code>count</code> values disconnect after N
			cycles.
			<code>0</code> disables observation. Negative or <code>undefined</code> never disconnects. (the
			default)
		</p>
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
					<input type="number" min={0} max={3} step={1} bind:value={count} />
					<input type="range" min={0} max={3} step={1} bind:value={count} />
				</div>
			</label>
			<label>
				<code>rootMargin</code>
				<select bind:value={rootMargin}>
					<option value="0px">0px</option>
					<option value="50px">50px</option>
					<option value="100px">100px</option>
					<option value="-25px">-25px</option>
					<option value="-50px">-50px</option>
				</select>
			</label>
		</div>
		<ul class="demo_list">
			{#each items as item (item)}
				<li
					{@attach intersect(() => ({
						onintersect: ({intersecting, el}) => {
							el.classList.toggle('intersecting', intersecting);
						},
						count,
						options: {threshold, rootMargin},
					}))}
				>
					item {item}
				</li>
			{/each}
		</ul>
	</Tome_Section>
</Tome_Content>

<style>
	.controls {
		display: flex;
		gap: var(--space_xl);
		flex-wrap: wrap;
		margin-bottom: var(--space_lg);
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
	.demo_list {
		max-height: 250px;
		overflow-y: auto;
		border: var(--border_1);
		border-radius: var(--radius_xs);
	}
	.demo_list li {
		padding: var(--space_lg);
		background-color: hsl(var(--hue_g) 50% 80% / 0.3);
		font-weight: 700;
		transition: background-color var(--duration_2);
		border-bottom: var(--border_1);
	}
	.demo_list li:last-child {
		border-bottom: none;
	}
	.demo_list li:global(.intersecting) {
		color: var(--color_f_5);
		background-color: hsl(var(--hue_f) 50% 80% / 0.15);
	}
</style>

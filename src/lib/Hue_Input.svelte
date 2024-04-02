<script lang="ts">
	import type {Hue} from '@ryanatkn/belt/colors.js';

	interface Props {
		value?: Hue;
		title?: string; // TODO this API is inconsistent with other forms
		oninput?: (hue: Hue) => void;
	}

	let {value = $bindable(180), title = 'hue', oninput}: Props = $props(); // eslint-disable-line prefer-const

	// TODO probably upstream this to belt
	const parse_hue = (v: any): Hue | null => {
		const t = typeof v;
		if (t === 'number') return v;
		if (t !== 'string') return null;
		const parsed = Number(v);
		if (Number.isNaN(parsed)) return null;
		return parsed;
	};

	// TODO BLOCK is this the API we want?
	// Binding to `hue` externally works for simple things,
	// but the `input` event makes reacting to actual changes easier.
	const update_hue = (v: Hue) => {
		value = v;
		oninput?.(value);
	};

	const on_input_event = (e: Event & {currentTarget: EventTarget & HTMLInputElement}) => {
		const parsed = parse_hue(e.currentTarget.value);
		if (parsed === null) return;
		update_hue(parsed);
	};

	let el: HTMLInputElement | undefined = $state();

	const set_hue_from_minimap = (e: MouseEvent & {currentTarget: EventTarget & HTMLElement}) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const pct = (e.clientX - rect.x) / rect.width;
		update_hue(Math.floor(360 * pct));
		el?.focus();
	};
</script>

<!-- TODO consider making this a text input or otherwise editable directly -->
<div class="hue_input">
	<label style:--hue={value}>
		{#if title}<div>{title}</div>{/if}
		<input type="number" step="0" class="hue" {value} on:input={on_input_event} />
	</label>
	<div class="minimap_wrapper">
		<div class="minimap" on:click={set_hue_from_minimap} aria-hidden />
	</div>
	<input
		bind:this={el}
		type="range"
		aria-label={title}
		{value}
		on:input={on_input_event}
		min="0"
		max="359"
	/>
</div>

<style>
	label {
		background-color: hsl(var(--hue) 50% 50%);
		height: var(--space_xl5);
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		font-weight: 700;
		color: var(--bg);
		padding-left: var(--space_xl);
		border-top-left-radius: var(--border_radius, var(--radius_md));
		border-top-right-radius: var(--border_radius, var(--radius_md));
	}
	.minimap_wrapper {
		padding: 0 var(--input_padding_x);
		background: hsl(0, 50%, 50%) 0%;
	}
	.minimap {
		background: linear-gradient(
			90deg,
			hsl(0, 50%, 50%) 0%,
			hsl(36, 50%, 50%) 10%,
			hsl(72, 50%, 50%) 20%,
			hsl(108, 50%, 50%) 30%,
			hsl(144, 50%, 50%) 40%,
			hsl(180, 50%, 50%) 50%,
			hsl(216, 50%, 50%) 60%,
			hsl(252, 50%, 50%) 70%,
			hsl(288, 50%, 50%) 80%,
			hsl(324, 50%, 50%) 90%,
			hsl(360, 50%, 50%) 100%
		);
		height: var(--space_lg);
	}
	/* TODO generic way to make this seamless? */
	input {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.hue {
		width: 10rem;
		min-width: 10rem;
		margin-left: var(--space_lg);
		font-size: var(--size_lg);
		text-align: center;
		background-color: transparent;
		border: none;
		border-radius: var(--border_radius, var(--radius_md));
		/* TODO why is this necessary? */
		height: var(--input_height);
		color: var(--bg);
	}
</style>

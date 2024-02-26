<script lang="ts">
	import {createEventDispatcher} from 'svelte';

	export let hue = 180;
	export let title = 'hue';

	const parse_hue = (value: any): number | null => {
		const t = typeof value;
		if (t === 'number') return value;
		if (t !== 'string') return null;
		const parsed = Number(value);
		if (Number.isNaN(parsed)) return null;
		return parsed;
	};

	// Binding to `hue` externally works for simple things,
	// but the `input` event makes reacting to actual changes easier.
	const dispatch = createEventDispatcher<{input: number}>();
	const update_hue = (value: number) => {
		hue = value;
		dispatch('input', hue);
	};

	const onInput = (e: Event & {currentTarget: EventTarget & HTMLInputElement}) => {
		const parsed = parse_hue(e.currentTarget.value);
		if (parsed === null) return;
		update_hue(parsed);
	};

	let el: HTMLInputElement;

	const set_hue_from_minimap = (e: MouseEvent & {currentTarget: EventTarget & HTMLElement}) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const pct = (e.clientX - rect.x) / rect.width;
		update_hue(Math.floor(360 * pct));
		el.focus();
	};
</script>

<!-- TODO consider making this a text input or otherwise editable directly -->
<div class="hue_input">
	<label class="indicator" style:--hue={hue}>
		<div class="spaced_hz">{title}</div>
		<input class="hue" value={hue} on:input={onInput} />
	</label>
	<div class="minimap_wrapper">
		<div class="minimap" on:click={set_hue_from_minimap} aria-hidden />
	</div>
	<input
		bind:this={el}
		type="range"
		aria-label={title}
		value={hue}
		on:input={onInput}
		min="0"
		max="359"
	/>
</div>

<style>
	.hue_input .indicator {
		background-color: hsl(var(--hue) 50% 50%);
		height: var(--space_5xl);
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: var(--bg);
		border-top-left-radius: var(--border_radius);
		border-top-right-radius: var(--border_radius);
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
		width: 7rem;
		min-width: 7rem;
		font-size: var(--size_lg);
		text-align: center;
		background-color: transparent;
		border: none;
		border-radius: var(--border_radius);
		/* TODO why is this necessary? */
		height: var(--input_height);
		color: var(--bg);
	}
</style>

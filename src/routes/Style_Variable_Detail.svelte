<script lang="ts">
	import type {Style_Variable} from '$lib/theme.js';

	interface Props {
		variable: Style_Variable | null;
	}

	const {variable} = $props<Props>();

	// TODO @multiple add to $lib?

	// TODO needs a lot of work - for example, enable editing the values directly, and certain values like colors could be rendered
</script>

{#if variable}
	<div class="variable">
		<div class="name"><code>--{variable.name}</code></div>
		{#if variable.summary}<blockquote class="mb_lg">{variable.summary}</blockquote>{/if}
		<label>
			<small class="title">light</small>
			<input disabled={true} value={variable.light ?? ''} />
		</label>
		<br />
		<label>
			<small class="title">dark</small>
			<input disabled={true} value={variable.dark ?? ''} />
		</label>
	</div>
{/if}

<style>
	.variable {
		align-items: flex-start;
		/* ... */
		padding: var(--space_xs) 0;
	}
	.name {
		font-size: var(--size_xl);
		text-align: center;
		margin-bottom: var(--space_xl);
	}
</style>

<script lang="ts">
	import type {Snippet} from 'svelte';

	import type {Alert_Status} from '$lib/alert.js';
	import {alert_status_options} from '$lib/alert.js';

	interface Props {
		status?: Alert_Status;
		// TODO BLOCK what API for icon? replace slot with snippet, but what with this prop? maybe accept a string?
		icon?: string | null | undefined;
		button?: boolean | undefined;
		children?: Snippet | undefined;
	}

	const {status = 'inform', icon, button, children} = $props<Props>();

	const options = $derived(alert_status_options[status]);
	const final_icon = $derived(icon === undefined ? options.icon : icon);
	// TODO change this to use the hue and put transparency on the borders, or add a borderColor option
	const color = $derived(options.color);
</script>

{#if button}
	<button class="message" type="button" style:--color={color} on:click
		>{#if icon !== null}<div class="icon">
				<slot name="icon" icon={final_icon}>{final_icon}</slot>
			</div>{/if}{#if children}{@render children()}{/if}</button
	>
{:else}
	<div class="message panel" style:--color={color}>
		{#if icon !== null}<div class="icon">
				<slot name="icon" icon={final_icon}>{final_icon}</slot>
			</div>{/if}{#if children}{@render children()}{/if}
	</div>
{/if}

<style>
	.message {
		min-height: var(--message_min_height);
		width: 100%;
		color: var(--color);
		font-weight: 700;
		font-size: var(--size_md);
		border-width: var(--border_width_1);
		border-style: var(--border_style);
		border-color: var(--color);
		display: flex;
		justify-content: flex-start; /* override button horizontal centering */
		align-items: center;
		padding: var(--space_xs2) var(--space_lg) var(--space_xs2) var(--space_xs);
		margin-bottom: var(--space_lg);
	}
	.message:last-child {
		margin-bottom: 0;
	}
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-right: var(--space_md);
		font-size: var(--size_xl2);
	}
</style>

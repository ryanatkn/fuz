<script lang="ts">
	import type {Alert_Status} from '$lib/alert.js';
	import {alert_status_options} from '$lib/alert.js';

	export let status: Alert_Status = 'inform';
	export let icon: string | null | undefined = undefined;
	export let button: boolean | undefined = undefined;

	$: options = alert_status_options[status];
	$: final_icon = icon === undefined ? options.icon : icon;
	// TODO change this to use the hue and put transparency on the borders, or add a borderColor option
	$: color = options.color;
</script>

{#if button}
	<button class="message" type="button" style:--color={color} on:click
		>{#if icon !== null}<div class="icon">
				<slot name="icon" icon={final_icon}>{final_icon}</slot>
			</div>{/if}<slot /></button
	>
{:else}
	<div class="message panel" style:--color={color}>
		{#if icon !== null}<div class="icon">
				<slot name="icon" icon={final_icon}>{final_icon}</slot>
			</div>{/if}<slot />
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
		padding: var(--space_2xs) var(--space_lg) var(--space_2xs) var(--space_xs);
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
		font-size: var(--size_2xl);
	}
</style>

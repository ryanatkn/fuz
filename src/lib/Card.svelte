<script lang="ts">
	import {page} from '$app/stores';

	interface Props {
		tag?: string | undefined;
		href?: string | undefined;
		align?: 'left' | 'right' | 'above' | 'below';
		attrs?: any;
		// TODO BLOCK default and `icon` snippets
	}

	const {tag, href, align = 'left', attrs} = $props<Props>();

	const link = $derived(!!href);
	const selected = $derived(link && $page.url.pathname === href);
	const final_tag = $derived(tag || (link ? 'a' : 'div'));
	const inferred_attrs = $derived(link ? {href} : undefined);

	const left = $derived(align === 'left');
	const right = $derived(align === 'right');
	const above = $derived(align === 'above');
	const below = $derived(align === 'below');

	const icon = $derived(link ? '🔗' : '🪧');
</script>

<svelte:element
	this={final_tag}
	class="card"
	{...attrs}
	{...inferred_attrs}
	class:link
	class:selected
	class:left
	class:right
	class:above
	class:below
>
	{#if align === 'left' || align === 'above'}<div class="icon">
			<slot name="icon">{icon}</slot>
		</div>{/if}
	<div class="content"><slot /></div>
	{#if align === 'right' || align === 'below'}<div class="icon">
			<slot name="icon">{icon}</slot>
		</div>{/if}</svelte:element
>

<style>
	.card {
		--icon_size: var(--icon_size_lg);
		--icon_margin: var(--space_lg);
		display: flex;
		font-size: var(--size_xl2);
		align-items: center;
		padding: var(--space_lg);
		width: var(--card_width);
		background-color: var(--fg_1);
		border-radius: var(--border_radius);
		text-decoration: none;
		text-align: left;
	}
	.right {
		justify-content: flex-end;
	}
	.above,
	.below {
		flex-direction: column;
		text-align: center;
	}
	.link.selected .content,
	.link:hover .content {
		text-decoration: underline;
	}
	.left .content {
		padding-right: var(--space_sm);
	}
	.right .content {
		text-align: right;
		padding-left: var(--space_sm);
	}
	.icon {
		font-size: var(--icon_size);
		text-align: center;
		display: flex;
		justify-content: center;
	}
	.left .icon {
		margin-right: var(--icon_margin);
	}
	.right .icon {
		margin-left: var(--icon_margin);
	}
	.above .icon {
		margin-bottom: var(--icon_margin);
	}
	.below .icon {
		margin-top: var(--icon_margin);
	}
	@media (max-width: 460px) {
		.card {
			font-size: var(--size_xl);
		}
	}
	@media (max-width: 380px) {
		.card {
			--icon_size: var(--icon_size_md);
			--icon_margin: var(--space_sm);
			font-size: var(--size_lg);
		}
		.icon {
			font-size: var(--icon_size_md);
			margin-right: var(--space_sm);
		}
		.right .icon {
			margin-right: 0;
			margin-left: var(--space_sm);
		}
	}
</style>

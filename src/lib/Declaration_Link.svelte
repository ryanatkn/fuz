<script lang="ts">
	import type {Snippet} from 'svelte';
	import {get_type_summary, type Enhanced_Declaration} from '$lib/enhanced_declarations.js';
	import {tooltip_context} from '$lib/tooltip_state.svelte.js';
	import {contextmenu_action} from '$lib/contextmenu_state.svelte.js';
	import {create_declaration_contextmenu} from '$lib/declaration_contextmenu.js';

	interface Props {
		/**
		 * The declaration to link to
		 */
		decl: Enhanced_Declaration;
		/**
		 * Module path (e.g., "alert.ts")
		 */
		module_path: string;
		/**
		 * Package name for generating import statements
		 */
		pkg_name: string;
		/**
		 * Repository URL for source links
		 */
		repo_url?: string;
		/**
		 * Homepage URL for docs links
		 */
		homepage_url?: string | null;
		/**
		 * Optional content to display (defaults to declaration name)
		 */
		children?: Snippet;
	}

	const {decl, module_path, pkg_name, repo_url, homepage_url, children}: Props = $props();

	const tooltip = tooltip_context.maybe_get();

	// Generate API URL
	// Convert module path like "./alert.ts" to "alert.ts" and identifier name
	const module_slug = $derived(module_path.replace(/^\.\//, '').replace(/\.(ts|js|svelte)$/, ''));
	const api_url = $derived(
		`/docs/api/${encodeURIComponent(module_slug)}/${encodeURIComponent(decl.name)}`,
	);

	// Contextmenu entries
	const contextmenu_entries = $derived(
		create_declaration_contextmenu(decl, module_path, pkg_name, repo_url, homepage_url),
	);

	// Tooltip content
	const show_tooltip = (e: MouseEvent) => {
		if (!tooltip) return;

		tooltip.show(e.clientX, e.clientY, tooltip_content);
	};

	const hide_tooltip = () => {
		if (!tooltip) return;
		tooltip.hide(150); // Delay to allow moving into tooltip
	};
</script>

<a
	class="declaration_link chip {decl.kind}_declaration"
	href={api_url}
	onmouseenter={show_tooltip}
	onmouseleave={hide_tooltip}
	use:contextmenu_action={contextmenu_entries}
>
	{#if children}
		{@render children()}
	{:else}
		{decl.name}
	{/if}
</a>

{#snippet tooltip_content()}
	{@const type_sig = get_type_summary(decl)}
	<div class="declaration_tooltip">
		<div class="kind_badge">{decl.kind}</div>
		{#if type_sig}
			<code class="type_signature">{type_sig}</code>
		{/if}
		{#if decl.summary}
			<p class="summary">{decl.summary}</p>
		{/if}
		<span class="hint">Click for full docs • Right-click for options</span>
	</div>
{/snippet}

<style>
	.declaration_link {
		cursor: pointer;
		text-decoration: none;
		transition: opacity 0.15s;
		font-family: var(--font_family_mono);
		font-size: var(--font_size_sm);
	}
	.declaration_link:hover {
		opacity: 0.8;
	}

	/* Match existing Package_Detail styles */
	:global(.declaration_tooltip) {
		display: flex;
		flex-direction: column;
		gap: var(--space_xs);
	}
	:global(.declaration_tooltip .kind_badge) {
		display: inline-block;
		padding: 2px 6px;
		background-color: var(--bg_3);
		border-radius: var(--border_radius_xs);
		font-size: var(--font_size_xs);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}
	:global(.declaration_tooltip .type_signature) {
		font-family: var(--font_family_mono);
		font-size: var(--font_size_xs);
		background-color: var(--bg_3);
		padding: var(--space_xs2);
		border-radius: var(--border_radius_xs);
		overflow-wrap: break-word;
	}
	:global(.declaration_tooltip .summary) {
		font-size: var(--font_size_sm);
		margin: 0;
		line-height: 1.4;
	}
	:global(.declaration_tooltip .hint) {
		font-size: var(--font_size_xs);
		color: var(--text_color_3);
		font-style: italic;
	}
</style>

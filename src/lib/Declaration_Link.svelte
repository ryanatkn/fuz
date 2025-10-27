<script lang="ts">
	import {resolve} from '$app/paths';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import type {Snippet} from 'svelte';
	import {get_type_summary, type Src_Module_Declaration} from '$lib/src_json.js';
	import {tooltip_context} from '$lib/tooltip_state.svelte.js';
	import {contextmenu_action} from '$lib/contextmenu_state.svelte.js';
	import {create_declaration_contextmenu} from '$lib/declaration_contextmenu.js';

	const {
		decl,
		module_path,
		pkg_name,
		repo_url,
		homepage_url,
		children,
	}: {
		/**
		 * The declaration to link to
		 */
		decl: Src_Module_Declaration;
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
	} = $props();

	const tooltip = tooltip_context.maybe_get();

	let link_el: HTMLAnchorElement | undefined = $state();

	// Generate API URL with hash-based navigation
	const api_url = $derived(`/docs/api#${encodeURIComponent(decl.name)}`);

	// Contextmenu entries
	const contextmenu_entries = $derived(
		create_declaration_contextmenu(decl, module_path, pkg_name, repo_url, homepage_url),
	);

	/**
	 * Show tooltip on mouse hover with ARIA-compliant delay
	 */
	const show_tooltip_hover = (e: MouseEvent) => {
		if (!tooltip) return;
		// ARIA compliance: show after delay for mouse hover
		tooltip.show_delayed(e.clientX, e.clientY, tooltip_content);
	};

	/**
	 * Show tooltip immediately on keyboard focus for screen reader users
	 */
	const show_tooltip_focus = (_e: FocusEvent) => {
		if (!tooltip || !link_el) return;
		// Show immediately for keyboard focus (screen reader users)
		const rect = link_el.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.bottom;
		tooltip.show(x, y, tooltip_content);
	};

	/**
	 * Hide tooltip with delay on mouse leave (sticky behavior - allows moving into tooltip)
	 */
	const hide_tooltip_hover = () => {
		if (!tooltip) return;
		tooltip.hide_delayed(); // Delay to allow moving into tooltip
	};

	/**
	 * Hide tooltip immediately on blur (no sticky behavior for keyboard)
	 */
	const hide_tooltip_focus = () => {
		if (!tooltip) return;
		tooltip.hide(); // Hide immediately - no sticky behavior for keyboard
	};
</script>

<a
	bind:this={link_el}
	class="declaration_link chip {decl.kind}_declaration"
	href={resolve(api_url as any)}
	aria-describedby={tooltip?.opened ? tooltip.id : undefined}
	onmouseenter={show_tooltip_hover}
	onmouseleave={hide_tooltip_hover}
	onfocus={show_tooltip_focus}
	onblur={hide_tooltip_focus}
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
	<div>
		<p>
			<a href={resolve(api_url as any)}><code>{decl.name}</code></a>
		</p>
		<p class="chip">{decl.kind}</p>
		{#if type_sig}
			<p>
				<Code content={type_sig} lang="ts" />
			</p>
		{/if}
		{#if decl.summary}
			<p>{decl.summary}</p>
		{/if}
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
</style>

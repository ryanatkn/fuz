<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import {tooltip_context} from '$lib/tooltip_state.svelte.js';

	const LIBRARY_ITEM_NAME = 'Tooltip';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const tooltip = tooltip_context.get();

	let focus_button: HTMLButtonElement;
</script>

<Tome_Content {tome}>
	<section>
		<p>
			A global tooltip component with sticky behavior, smart positioning, and ARIA compliance.
			Tooltips appear after a delay on hover and remain open when you move your cursor into them.
		</p>
		<aside>
			The tooltip system uses a global singleton instance. Only one tooltip is shown at a time.
		</aside>
		<ul>
			<li><strong>Sticky</strong> - hover over tooltip to keep it open and select text</li>
			<li><strong>ARIA compliant</strong> - use <code>aria-describedby</code> when open</li>
			<li><strong>Keyboard accessible</strong> - immediate show on focus, delayed on hover</li>
			<li><strong>Auto-dismiss</strong> - <code>Escape</code> key, click outside, or mouse away</li>
		</ul>
	</section>
	<section>
		<Code
			content={`import {tooltip_context} from '@ryanatkn/fuz/tooltip_state.svelte.js';

const tooltip = tooltip_context.get();`}
			lang="ts"
		/>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="Basic usage" />
		<Code
			content={`<button
  onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, content)}
  onmouseleave={() => tooltip.hide_delayed()}
  aria-describedby={tooltip.opened ? tooltip.id : undefined}
>
  hover me
</button>

{#snippet content()}
  <div>This is a tooltip!</div>
{/snippet}`}
		/>
		<button
			type="button"
			class="mb_md"
			onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, basic_content)}
			onmouseleave={() => tooltip.hide_delayed()}
			aria-describedby={tooltip.opened ? tooltip.id : undefined}
		>
			hover me
		</button>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Keyboard focus support" />
		<p>
			For keyboard users, show tooltips immediately with <code>show()</code> (no delay) and use element
			positioning instead of cursor coordinates.
		</p>
		<Code
			content={`<button
  bind:this={focus_button}
  onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, content)}
  onmouseleave={() => tooltip.hide_delayed()}
  onfocus={() => {
    const rect = focus_button.getBoundingClientRect();
    tooltip.show(rect.left + rect.width / 2, rect.bottom, content);
  }}
  onblur={() => tooltip.hide()}
  aria-describedby={tooltip.opened ? tooltip.id : undefined}
>
  hover or focus me
</button>

{#snippet content()}
  <div>Accessible to keyboard and screen reader users!</div>
{/snippet}`}
		/>
		<button
			type="button"
			class="mb_md"
			bind:this={focus_button}
			onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, focus_content)}
			onmouseleave={() => tooltip.hide_delayed()}
			onfocus={() => {
				const rect = focus_button.getBoundingClientRect();
				tooltip.show(rect.left + rect.width / 2, rect.bottom, focus_content);
			}}
			onblur={() => tooltip.hide()}
			aria-describedby={tooltip.opened ? tooltip.id : undefined}
		>
			hover or focus me
		</button>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="Smart positioning" />
		<Code
			content={`<!-- Tooltip automatically flips if near edge -->
<button
  class="ml_auto display_block"
  onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, content)}
  onmouseleave={() => tooltip.hide_delayed()}
>
  hover near right edge
</button>`}
		/>
		<button
			type="button"
			class="mb_md ml_auto display_block"
			onmouseenter={(e) => tooltip.show_delayed(e.clientX, e.clientY, positioning_content)}
			onmouseleave={() => tooltip.hide_delayed()}
			aria-describedby={tooltip.opened ? tooltip.id : undefined}
		>
			hover near right edge
		</button>
	</Tome_Section>
</Tome_Content>

{#snippet basic_content()}
	<div>This is a tooltip!</div>
{/snippet}

{#snippet focus_content()}
	<div>Accessible to keyboard and screen reader users!</div>
{/snippet}

{#snippet positioning_content()}
	<div>Notice how I flip to avoid the edge!</div>
{/snippet}

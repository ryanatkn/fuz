<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';
	import Details from '$lib/Details.svelte';
	import Root_Component_Selector from '$routes/docs/contextmenu/Root_Component_Selector.svelte';
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	/* eslint-disable no-alert */

	const selected = selected_contextmenu_root_component_context.get();
	const Contextmenu_Root_Component = $derived(selected.component);
	const root_component_name = $derived(selected.name);
</script>

<Tome_Section>
	<Tome_Section_Header text="Introduction" />
	<p>
		Fuz provides a customizable contextmenu that overrides the system contextmenu to provide helpful
		capabilities to users. Popular websites with similar features include Google Docs and Discord.
		Below are
		<a href="#caveats">caveats</a>
		about this breaking some user expectations, and a workaround for
		<a href="#ios-compatibility">iOS Safari support</a>. See also the <Mdn_Link
			path="Web/API/Element/contextmenu_event"
		/> docs and
		<a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.
	</p>
	<p>
		When you rightclick inside a <code>Contextmenu_Root</code>, or longpress on touch devices, it
		searches the DOM tree for behaviors defined with <code>Contextmenu</code> starting from the target
		element up to the root. If any behaviors are found, the Fuz contextmenu opens, showing all contextually
		available actions. If no behaviors are found, the default system contextmenu opens.
	</p>
	<p>
		Here's a <code>{root_component_name}</code> with a <code>Contextmenu</code> inside another
		<code>Contextmenu</code>:
	</p>
	<Contextmenu_Root_Component>
		<Contextmenu>
			{#snippet entries()}
				<Contextmenu_Entry run={() => alert('alert A')}>alert A</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md mb_lg">
				<p>alert A -- rightclick or longpress here to open the contextmenu</p>
				<Contextmenu>
					{#snippet entries()}
						<Contextmenu_Entry run={() => alert('alert B')}>alert B</Contextmenu_Entry>
					{/snippet}
					<p class="panel p_md">alert B -- also inherits A</p>
				</Contextmenu>
			</div>
		</Contextmenu>
	</Contextmenu_Root_Component>
	<Details>
		{#snippet summary()}
			view code
		{/snippet}
		<Code
			content={`<${root_component_name}>
	<Contextmenu>
		{#snippet entries()}
			<Contextmenu_Entry run={() => alert('alert A')}>
				alert A
			</Contextmenu_Entry>
		{/snippet}
		<div class="panel p_md mb_lg">
			<p>alert A -- rightclick or longpress here to open the contextmenu</p>
			<Contextmenu>
				{#snippet entries()}
					<Contextmenu_Entry run={() => alert('alert B')}>
						alert B
					</Contextmenu_Entry>
				{/snippet}
				<p class="panel p_md">
					alert B -- also inherits A
				</p>
			</Contextmenu>
		</div>
	</Contextmenu>
</${root_component_name}>`}
		/>
	</Details>
	<p>
		This simple hierarchical pattern gives users the full contextual actions by default -- not just
		the actions for the target being clicked, but all ancestor actions too. This means users don't
		need to hunt for specific parent elements to find the desired action, unlike many systems --
		instead, all actions in the tree are available, improving UX convenience and predictability at
		the cost of more noisy menus. Developers can opt out of this inheritance behavior by simply not
		nesting <code>Contextmenu</code> declarations, and submenus are useful for managing complexity.
	</p>
	<h4>Mouse and keyboard:</h4>
	<ul>
		<li>
			rightclick opens the Fuz contextmenu and not the system contextmenu (minus exceptions for
			input/textarea/contenteditable, which may change)
		</li>
		<li>holding Shift opens the system contextmenu, bypassing the Fuz contextmenu</li>
		<li>
			keyboard navigation and activation should work similarly to the W3C <a
				href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a
			>
		</li>
	</ul>
	<h4>Touch devices:</h4>
	<ul>
		<li>
			longpress opens the Fuz contextmenu and not the system contextmenu (minus exceptions for
			input/textarea/contenteditable, which may change)
		</li>
		<li>
			double-tap-and-hold (tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text, bypassing the Fuz contextmenu
		</li>
		<li>
			double-tap-and-hold can't work for clickable elements like links, longpress on the first
			contextmenu entry for those cases (double-longpress)
		</li>
	</ul>
	<h4>All devices:</h4>
	<ul>
		<li>
			opening the contextmenu on the contextmenu itself shows the system contextmenu, bypassing the
			Fuz contextmenu
		</li>
		<li>
			opening the contextmenu attempts haptic feedback with <Mdn_Link
				path="Web/API/Navigator/vibrate"><code>navigator.vibrate</code></Mdn_Link
			>
		</li>
	</ul>
	<Root_Component_Selector />
</Tome_Section>

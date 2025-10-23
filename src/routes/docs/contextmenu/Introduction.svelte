<script lang="ts">
	import type {Snippet} from 'svelte';

	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Contextmenu from '$lib/Contextmenu.svelte';
	import Contextmenu_Root from '$lib/Contextmenu_Root.svelte';
	import Contextmenu_Entry from '$lib/Contextmenu_Entry.svelte';

	const {
		Contextmenu_Root_Component,
		root_component_name,
		children,
	}: {
		Contextmenu_Root_Component: typeof Contextmenu_Root;
		root_component_name: string;
		children: Snippet;
	} = $props();
</script>

<Tome_Section>
	<Tome_Section_Header text="Introduction" />
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide helpful capabilities to
		users. Popular websites that use this web feature include Google Docs and Discord. For more see
		the <Mdn_Link path="Web/API/Element/contextmenu_event" /> docs and the
		<a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>. Below are
		<a href="#caveats">caveats</a>
		about this breaking some user expectations, and a workaround for
		<a href="#ios-compatibility">iOS Safari support</a>.
	</p>
	<p>
		When you rightclick inside a <code>{root_component_name}</code>, or longpress on touch devices,
		it searches the DOM tree for behaviors defined with <code>Contextmenu</code> starting from the target
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
				<!-- eslint-disable-next-line no-alert -->
				<Contextmenu_Entry run={() => alert('alert A')}>alert A</Contextmenu_Entry>
			{/snippet}
			<div class="panel p_md mb_lg">
				<p>alert A -- rightclick or longpress here to open the contextmenu</p>
				<Contextmenu>
					{#snippet entries()}
						<!-- eslint-disable-next-line no-alert -->
						<Contextmenu_Entry run={() => alert('alert B')}>alert B</Contextmenu_Entry>
					{/snippet}
					<div class="panel p_md">
						<p>alert B -- also inherits A</p>
					</div>
				</Contextmenu>
			</div>
		</Contextmenu>
	</Contextmenu_Root_Component>
	<p>
		This simple hierarchical pattern gives users the full contextual actions by default -- not just
		actions for the target being clicked, but all ancestor actions too. This means users don't need
		to hunt for specific parent elements to find the desired action, like in many systems -- instead
		all actions in the tree are available, at the cost of verbosity. Devs can choose the more common
		granular and restrictive style if they wish by simply not nesting <code>Contextmenu</code> declarations.
	</p>
	<h4>Devices with a mouse</h4>
	<ul>
		<li>
			rightclick opens the Fuz contextmenu and not the system contextmenu (minus some current
			exceptions for input/textarea/contenteditable)
		</li>
		<li>rightclick on the Fuz contextmenu opens the system contextmenu</li>
		<li>rightclick while holding Shift opens the system contextmenu</li>
		<li>
			keyboard navigation and activation should work similarly to the W3C <a
				href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/">APG menubar pattern</a
			>
		</li>
	</ul>
	<h4>Touch devices</h4>
	<ul>
		<li>
			double-tap-and-hold (tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text
		</li>
		<li>
			does not work for clickable elements like links - use two longpresses for those cases instead
		</li>
		<li>longpress opens the Fuz contextmenu and not the system contextmenu</li>
		<li>longpress on the Fuz contextmenu (two longpresses) opens the system contextmenu</li>
		<li>a longpress is canceled if you move the touch past a threshold before it triggers</li>
		<li>
			the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it
		</li>
		<li>
			attempts haptic feedback with <Mdn_Link path="Web/API/Navigator/vibrate"
				><code>navigator.vibrate</code></Mdn_Link
			>
		</li>
	</ul>
	{@render children()}
</Tome_Section>

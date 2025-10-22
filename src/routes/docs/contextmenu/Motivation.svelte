<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
</script>

<Tome_Section>
	<Tome_Section_Header text="Motivation" />
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide helpful capabilities to
		users. See below for
		<a href="#caveats">the caveats</a>
		about this breaking some web platform expectations, and the workaround for
		<a href="#ios-compatibility">iOS Safari support</a>.
	</p>
	<p>
		When you rightclick or longpress inside a <code>Contextmenu_Root</code>, it searches for
		behaviors defined with <code>Contextmenu</code> starting from the target element up to the root.
		If any behaviors are found, the Fuz contextmenu opens. The contextmenu displays the available behaviors
		which you can then activate. If no behaviors are found, the system contextmenu opens.
	</p>
	<h4>Devices with a mouse (both versions)</h4>
	<ul>
		<li>
			rightclick opens the Fuz contextmenu and not the system contextmenu except on
			input/textarea/contenteditable
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
	<p><strong>Both versions:</strong></p>
	<ul>
		<li>
			double-tap-and-hold (aka tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text
		</li>
		<li>
			does not work for clickable elements like links - use two longpresses for those cases instead
		</li>
	</ul>
	<p><strong>Contextmenu_Root_For_Safari_Compatibility only:</strong></p>
	<ul>
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
			(blocked by browsers due to longpress timeout)
		</li>
	</ul>
</Tome_Section>

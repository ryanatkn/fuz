<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	// TODO buggy animations, maybe will be fixed before Svelte 5 release
</script>

<Tome_Section>
	<Tome_Section_Header text="Root component versions" />
	<p>Fuz provides two versions of the contextmenu root component with different tradeoffs:</p>
	<h4>Contextmenu_Root (default, simplified)</h4>
	<ul>
		<li>
			Relies on the browser's native <Mdn_Link path="Web/API/Element/contextmenu_event"
				><span class="font_family_mono">contextmenu</span> event</Mdn_Link
			>
		</li>
		<li>Includes tap-then-longpress bypass gesture for accessing system contextmenu</li>
		<li>
			<strong>Does not work on iOS Safari</strong> which doesn't fire the
			<span class="font_family_mono">contextmenu</span> event (<a
				href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a
			>)
		</li>
		<li>Simpler implementation, easier to understand and customize</li>
		<li>
			<strong>This is the default.</strong> Use this unless you need iOS Safari support
		</li>
	</ul>
	<h4>Contextmenu_Root_For_Safari_Compatibility (opt-in for iOS)</h4>
	<ul>
		<li>
			Implements custom longpress detection to work around iOS Safari's lack of
			<span class="font_family_mono">contextmenu</span> event support
		</li>
		<li>Works on all devices including iOS Safari</li>
		<li>More complex implementation with custom touch event handling and gesture detection</li>
		<li>
			Browsers block <span class="font_family_mono">navigator.vibrate</span> haptic feedback due to timeout-based
			gesture detection
		</li>
		<li>
			<strong>Opt into this version</strong> only if you need iOS Safari support
		</li>
	</ul>
</Tome_Section>
<Tome_Section>
	<Tome_Section_Header text="Expected behaviors" />
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
		to your app.
		<a href="#caveats">See caveats below</a> for why this breaks some web platform expectations.
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
				><span class="font_family_mono">navigator.vibrate</span></Mdn_Link
			>
			(blocked by browsers due to longpress timeout)
		</li>
	</ul>
</Tome_Section>
<Tome_Section>
	<Tome_Section_Header text="Caveats" />
	<p>
		The Fuz contextmenu provides powerful app-specific UX, but it breaks normal browser behavior
		like showing the system contextmenu and device-specific actions like text selection on
		longpress. This has tradeoffs similar to apps like Google Docs.
	</p>
	<p>Mitigations:</p>
	<ul>
		<li>
			The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables.
		</li>
		<li>To bypass on devices with a keyboard, hold Shift while right-clicking.</li>
		<li>
			To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.
		</li>
		<li>
			For links on touch devices, they appear as the first contextmenu entry - longpressing this
			entry performs the default browser action.
		</li>
		<li>
			Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu
			(double-right-click or longpress twice).
		</li>
	</ul>
</Tome_Section>

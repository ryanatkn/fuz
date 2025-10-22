<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
</script>

<Tome_Section>
	<Tome_Section_Header text="iOS compatibility" />
	<p>
		Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event, see
		<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.
	</p>
	<h4>Contextmenu_Root (default, simplified)</h4>
	<ul>
		<li>
			<strong>Does not work on iOS Safari</strong> until
			<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a> is fixed
		</li>
		<li>
			Relies on the browser's native <Mdn_Link path="Web/API/Element/contextmenu_event"
				><code>contextmenu</code> event</Mdn_Link
			>
		</li>
		<li>Includes tap-then-longpress bypass gesture for accessing system contextmenu</li>
		<li>Much simpler implementation, fewer corner cases to go wrong</li>
	</ul>
	<h4>Contextmenu_Root_For_Safari_Compatibility (opt-in for iOS)</h4>
	<ul>
		<li>
			Implements custom longpress detection to work around iOS Safari's lack of
			<code>contextmenu</code> event support
		</li>
		<li>Works on all devices including iOS Safari</li>
		<li>More complex implementation with custom touch event handling and gesture detection</li>
		<li>
			Browsers block <code>navigator.vibrate</code> haptic feedback due to timeout-based gesture detection
		</li>
		<li>
			<strong>Opt into this version</strong> only if you need iOS Safari support
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
		<li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li>
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
			(double-rightclick/longpress).
		</li>
	</ul>
</Tome_Section>

<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Root_Component_Selector from '$routes/docs/contextmenu/Root_Component_Selector.svelte';
</script>

<Tome_Section>
	<Tome_Section_Header text="iOS compatibility" />
	<p>
		Fuz provides two versions of the contextmenu root component with different tradeoffs due to iOS
		Safari not supporting the <code>contextmenu</code> event as of October 2025, see
		<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>.
	</p>
	<h4>Contextmenu_Root</h4>
	<ul>
		<li>standard, default implementation</li>
		<li>
			relies on the browser's <Mdn_Link path="Web/API/Element/contextmenu_event"
				><span class="font_family_mono">contextmenu</span> event</Mdn_Link
			>
		</li>
		<li>much simpler, fewer edge cases that can go wrong</li>
		<li>
			does not work on iOS Safari until <a href="https://bugs.webkit.org/show_bug.cgi?id=213953"
				>WebKit bug #213953</a
			> is fixed
		</li>
	</ul>
	<h4>Contextmenu_Root_For_Safari_Compatibility</h4>
	<ul>
		<li>opt-in for iOS</li>
		<li>
			implements custom longpress detection to work around iOS Safari's lack of
			<code>contextmenu</code> event support
		</li>
		<li>works on all devices including iOS Safari</li>
		<li>more complex implementation with custom touch event handling and gesture detection</li>
		<li>
			some browsers (including mobile Chrome) block <code>navigator.vibrate</code> haptic feedback due
			to the timeout-based gesture detection (because it's not a direct user action)
		</li>
		<li>a longpress is cancelled if you move the touch past a threshold before it triggers</li>
		<li>
			the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it
		</li>
		<li>opt into this version only if you need iOS Safari support</li>
	</ul>
	<Root_Component_Selector />
</Tome_Section>
<Tome_Section>
	<Tome_Section_Header text="Caveats" />
	<p>
		The Fuz contextmenu provides powerful app-specific UX, but it breaks from normal browser
		behavior by replacing the system contextmenu.
	</p>
	<p>To mitigate the downsides:</p>
	<ul>
		<li>
			The Fuz contextmenu only replaces the system contextmenu when the DOM tree has defined
			behaviors. Note that <code>a</code> links have default contextmenu behaviors unless
			<a href="#disable-default-behaviors">disabled</a>. Other interactive elements may have default
			behaviors added in the future.
		</li>
		<li>
			The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables -- however this may change for better app integration, or be
			configurable.
		</li>
		<li>To bypass on devices with a keyboard, hold Shift while rightclicking.</li>
		<li>
			To bypass on touch devices (e.g. to select text), use double-tap-and-hold instead of
			tap-and-hold.
		</li>
		<li>Triggering the contextmenu inside the Fuz contextmenu shows the system contextmenu.</li>
	</ul>
	<p>
		See also the <Mdn_Link path="Web/API/Element/contextmenu_event" /> docs and the
		<a href="https://www.w3.org/TR/uievents/#event-type-contextmenu">w3 spec</a>.
	</p>
</Tome_Section>

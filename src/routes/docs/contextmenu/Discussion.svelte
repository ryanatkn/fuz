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
			Relies entirely on the browser's native <Mdn_Link path="Web/API/Element/contextmenu_event"
				><span class="font_family_mono">contextmenu</span> event</Mdn_Link
			>
		</li>
		<li>~220 lines of code vs ~430 in the compatibility version</li>
		<li>No mobile-specific code or touch event handlers</li>
		<li>Works perfectly on all modern desktop browsers</li>
		<li>
			<strong>Does not work on iOS Safari</strong> which doesn't fire the
			<span class="font_family_mono">contextmenu</span> event (as of 2025, see
			<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>)
		</li>
		<li>Simpler architecture makes it easier to understand, modify, and maintain</li>
		<li>
			<strong>This is the default.</strong> Use this if your app targets desktop users or non-Safari
			mobile browsers
		</li>
	</ul>
	<h4>Contextmenu_Root_For_Safari_Compatibility (opt-in for iOS)</h4>
	<ul>
		<li>
			Implements custom "longpress" detection to work around iOS Safari not supporting the
			<span class="font_family_mono">contextmenu</span> event
		</li>
		<li>~430 lines with complex touch event handling, gesture detection, and state management</li>
		<li>Includes tap-then-longpress bypass gesture and configurable timing/tolerance</li>
		<li>Works on all devices including iOS Safari</li>
		<li>
			Has edge cases and complexity due to working around platform limitations (see
			<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">WebKit bug #213953</a>)
		</li>
		<li>Breaks <span class="font_family_mono">navigator.vibrate</span> on mobile browsers</li>
		<li>
			<strong>Opt into this version</strong> only if you need iOS Safari support and are willing to accept
			the added complexity
		</li>
	</ul>
	<aside>
		<p>
			<strong>Breaking change:</strong> The default <code>Contextmenu_Root</code> is now the
			simplified version. If you need iOS Safari support, explicitly import
			<code>Contextmenu_Root_For_Safari_Compatibility</code> instead.
		</p>
	</aside>
	<p>
		The design choice to provide both versions acknowledges that iOS Safari support adds significant
		complexity, and not all applications require it. The simplified version is the default because
		it demonstrates the core contextmenu pattern without iOS workarounds, making it easier to
		understand, maintain, and customize.
	</p>
</Tome_Section>
<Tome_Section>
	<Tome_Section_Header text="Expected behaviors" />
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
		to your app.
		<a href="#motivation">The motivation docs</a> explain why Fuz breaks web platform expectations.
	</p>
	<p>
		<strong>Note:</strong> The default <code>Contextmenu_Root</code> only handles the standard
		<Mdn_Link path="Web/API/Element/contextmenu_event"
			><span class="font_family_mono">contextmenu</span> event</Mdn_Link
		> and does not include touch device support or iOS workarounds. The behaviors below marked "compatibility
		version only" apply only to <code>Contextmenu_Root_For_Safari_Compatibility</code>.
	</p>
	<p>
		On touch devices with <code>Contextmenu_Root_For_Safari_Compatibility</code>, we detect
		tap-and-hold (aka longpress) instead of simply overriding the web's
		<Mdn_Link path="Web/API/Element/contextmenu_event"
			><span class="font_family_mono">contextmenu</span> event</Mdn_Link
		>
		because iOS does not support this web standard as of 2025 as described in
		<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">this WebKit bug report</a>. The Fuz
		implementation therefore has hacks that may cause corner case bugs on various devices and
		browsers, and it breaks <Mdn_Link path="Web/API/Navigator/vibrate"
			><span class="font_family_mono">navigator.vibrate</span></Mdn_Link
		> on all mobile browsers that I've tested because it triggers the gesture on a timeout, not a user
		action.
	</p>
	<p>
		When you rightclick or longpress inside a <code>Contextmenu_Root</code>, it searches for
		behaviors defined with <code>Contextmenu</code> starting from the target element up to the root.
		If any behaviors are found, the Fuz contextmenu opens, with the caveats below. The contextmenu displays
		the available behaviors which you can then activate. If no behaviors are found, the system contextmenu
		opens.
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
	<h4>Touch devices (Contextmenu_Root_For_Safari_Compatibility only)</h4>
	<ul>
		<li>longpress opens the Fuz contextmenu and not the system contextmenu</li>
		<li>longpress on the Fuz contextmenu (two longpresses) opens the system contextmenu</li>
		<li>
			double-tap-and-hold (aka tap-then-longpress) opens the system contextmenu or performs other
			default behavior like selecting text - does not work for cases where the first tap performs
			some action on an element, like links - use two longpresses for those cases (this may need
			more design work, possibly adding a different gesture or a contextmenu entry for touch devices
			that triggers the system conextmenu on the next longpress)
		</li>
		<li>a longpress is canceled if you move the touch past a threshold before it triggers</li>
		<li>
			the contextmenu closes if you move past a threshold without lifting the longpress touch that
			opened it
		</li>
		<li>
			gives haptic feedback on open with <Mdn_Link path="Web/API/Navigator/vibrate"
				><span class="font_family_mono">navigator.vibrate</span></Mdn_Link
			>
			(currently broken, may remain so due to the iOS longpress workaround)
		</li>
	</ul>
</Tome_Section>
<Tome_Section>
	<Tome_Section_Header text="Motivation" />
	<p>Fuz takes two things very seriously, in no particular order:</p>
	<ol>
		<li>giving users a powerful and customizable UX</li>
		<li>aligning with the web platform and not breaking its standard behaviors</li>
	</ol>
	<p>
		For #1, Fuz includes a custom contextmenu. Like Google Docs, when you right-click or
		tap-and-hold (aka longpress) on an element inside Fuz's
		<code>Contextmenu</code>, you'll see app-specific options and actions for your current context.
	</p>
	<p>
		This is a powerful UX pattern, but it violates #2. The Fuz contextmenu breaks the normal browser
		behavior of showing the system contextmenu and device-specific behaviors like selecting text on
		a longpress.
	</p>
	<p>
		Balancing these two concerns is going to be an ongoing challenge, and my current belief is that
		the contextmenu is too useful and powerful to ignore. I'm open to critical feedback, and I'll do
		what I can to minimize the harmful effects of choices like this. iOS in particular seems buggy
		despite my attempts to accommodate it, help is appreciated.
	</p>
	<p>Mitigations:</p>
	<ul>
		<li>
			The Fuz contextmenu does not open on elements that allow clipboard pasting like inputs,
			textareas, and contenteditables.
		</li>
		<li>To bypass the Fuz contextmenu on a device with a keyboard, hold the Shift key.</li>
		<li>
			To bypass the Fuz contextmenu on a touch device, like to select text, tap one extra time
			before your longpress. This means double-tap-and-hold should behave the same as tap-and-hold
			on standard web pages.
		</li>
		<li>
			Triggering the contextmenu inside of the Fuz contextmenu shows your system contextmenu. This
			means you can either double-right-click or longpress twice to access your system contextmenu
			as an alternative to holding Shift or double-tap-and-hold, However a caveat is that the target
			of your action will be some element inside the Fuz contextmenu, so to select text or access a
			link's system contextmenu on a touch device, you must use double-tap-and-hold. When you open
			the Fuz contextmenu on a link, you'll see the link again in the menu under your pointer by
			default, so to access your system's functionality on links, tap-and-hold twice.
		</li>
	</ul>
</Tome_Section>

<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	// TODO buggy animations, maybe will be fixed before Svelte 5 release
</script>

<section>
	<Tome_Subheading text="Expected behaviors" slug="expected-behaviors" />
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
		to your app.
		<a href="#motivation">The motivation docs</a> explain why Fuz breaks web platform expectations.
	</p>
	<p>
		On touch devices, we detect tap-and-hold (aka longpress) instead of simply overriding the web's
		<Mdn_Link href="Web/API/Element/contextmenu_event"
			><span class="font_mono">contextmenu</span> event</Mdn_Link
		>
		because iOS does not support this web standard as of July 2023 as described in
		<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">this WebKit bug report</a>. The Fuz
		implementation therefore has hacks that may cause corner case bugs on various devices and
		browsers, and it breaks <Mdn_Link href="Web/API/Navigator/vibrate"
			><span class="font_mono">navigator.vibrate</span></Mdn_Link
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
	<h4>Devices with a mouse</h4>
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
			gives haptic feedback on open with <Mdn_Link href="Web/API/Navigator/vibrate"
				><span class="font_mono">navigator.vibrate</span></Mdn_Link
			>
			(currently broken, may remain so due to the iOS longpress workaround)
		</li>
	</ul>
</section>
<section>
	<Tome_Subheading text="Motivation" slug="motivation" />
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
		what I can to minimize the harmful effects of choices like this.
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
</section>

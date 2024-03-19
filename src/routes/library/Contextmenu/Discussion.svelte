<script lang="ts">
	import Mdn_Link from '$lib/Mdn_Link.svelte';

	// TODO BLOCK the flip animations caused the contextmenu wrapper of the children to be nested, make sure it doesn't mess up the contextmenu behavior
</script>

<section>
	<h3>Expected behaviors</h3>
	<p>
		The <code>Contextmenu</code> overrides the system contextmenu to provide capabilities specific
		to your app.
		<a href="https://www.felt.dev/docs/guide/user/known-issues">These docs</a> explain why Fuz breaks
		web platform expectations.
	</p>
	<p>
		On touch devices, we detect tap-and-hold (aka longpress) instead of simply overriding the web's
		<Mdn_Link href="Web/API/Element/contextmenu_event">contextmenu event</Mdn_Link>
		because iOS does not support this web standard as of July 2023 as described in
		<a href="https://bugs.webkit.org/show_bug.cgi?id=213953">this WebKit bug report</a>. The Fuz
		implementation therefore has hacks that may cause corner case bugs on various devices and
		browsers.
	</p>
	<p>
		When you rightclick or longpress, we search for behaviors defined with <code>Contextmenu</code> starting
		from the target element up to the root of the DOM tree. If any behaviors are found, the Fuz contextmenu
		opens, with the caveats below. The contextmenu displays the available behaviors which you can then
		activate. If no behaviors are found, the system contextmenu opens.
	</p>
	<h4>Devices with a mouse</h4>
	<ul>
		<li>rightclick opens the Fuz contextmenu and not the system contextmenu</li>
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
				><code>navigator.vibrate</code></Mdn_Link
			>
			(currently broken, may remain so due to the iOS longpress workaround)
		</li>
	</ul>
</section>

<style>
	.position {
		border-radius: var(--border_radius);
		background-color: var(--bg);
		display: flex;
	}
	.position .icon {
		font-size: var(--icon_size_xl);
	}
	.cats {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cat_wrapper {
		display: flex;
		flex-direction: column;
		width: 120px;
	}
</style>

<script lang="ts">
	// TODO move to a single source of truth (JSON or ts), generate CSS and use to render here
	const sizes = {
		icon_size_xl4: '512px',
		icon_size_xl3: '316px',
		icon_size_xl2: '196px',
		icon_size_xl: '128px',
		icon_size_lg: '80px',
		icon_size_md: '48px',
		icon_size_sm: '32px',
		icon_size_xs: '18px',
	};
</script>

<section class="prose">
	<div>
		<h3>the <code>--icon_size</code> variable's variants</h3>
		<blockquote class="width_sm">
			unlike <code>--size_</code> variables, <code>--icon_</code> variables are in
			<code>px</code>
			not <code>rem</code>, so they're insensitive to browser font size
		</blockquote>
	</div>
</section>
<div class="icon_sizes">
	<!-- TODO make this data driven -->
	<!-- TODO read these vars from the typescript and display their runtime values -->
	<figure>
		<figcaption><code>--icon_size_xs: {sizes.icon_size_xs}</code></figcaption>
		<div
			style="font-size: var(--icon_size_xs); --size: var(--icon_size_xs);"
			title="--icon_size_xs is {sizes.icon_size_xs}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_sm: {sizes.icon_size_sm}</code></figcaption>
		<div
			style="font-size: var(--icon_size_sm); --size: var(--icon_size_sm);"
			title="--icon_size_sm is {sizes.icon_size_sm}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_md: {sizes.icon_size_md}</code></figcaption>
		<div
			style="font-size: var(--icon_size_md); --size: var(--icon_size_md);"
			title="--icon_size_md is {sizes.icon_size_md}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_lg: {sizes.icon_size_lg}</code></figcaption>
		<div
			style="font-size: var(--icon_size_lg); --size: var(--icon_size_lg);"
			title="--icon_size_lg is {sizes.icon_size_lg}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_xl: {sizes.icon_size_xl}</code></figcaption>
		<div
			style="font-size: var(--icon_size_xl); --size: var(--icon_size_xl);"
			title="--icon_size_xl is {sizes.icon_size_xl}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_xl2: {sizes.icon_size_xl2}</code></figcaption>
		<div
			style="font-size: var(--icon_size_xl2); --size: var(--icon_size_xl2);"
			title="--icon_size_xl2 is {sizes.icon_size_xl2}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_xl3: {sizes.icon_size_xl3}</code></figcaption>
		<div
			style="font-size: var(--icon_size_xl3); --size: var(--icon_size_xl3);"
			title="--icon_size_xl3 is {sizes.icon_size_xl3}"
		>
			🐢
		</div>
	</figure>
	<figure>
		<figcaption><code>--icon_size_xl4: {sizes.icon_size_xl4}</code></figcaption>
		<div
			style="font-size: var(--icon_size_xl4); --size: var(--icon_size_xl4);"
			title="--icon_size_xl4 is {sizes.icon_size_xl4}"
		>
			🐢
		</div>
	</figure>
</div>

<style>
	.icon_sizes {
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden; /* TODO hack because emoji are bigger than the defined dimensions, maybe dont use a 🐢? :(  */
	}
	.icon_sizes figure {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--space_xl) 0;
	}
	/* TODO layout with CSS grid */
	.icon_sizes figcaption {
		display: flex;
	}
	.icon_sizes figure > div {
		width: var(--size);
		height: var(--size);
		border: var(--border_width) var(--border_style) var(--border_color);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	code {
		white-space: nowrap;
	}
</style>

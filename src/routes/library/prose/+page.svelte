<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';

	// TODO BLOCK either merge into `classes` or make a new page
	const LIBRARY_ITEM_NAME = 'prose';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<section>
		<aside>⚠️ this may be removed completely</aside>
	</section>
	<section>
		<h3><code>ul</code></h3>
	</section>
	<section>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<section>
		<h3><code>ul</code> with <code>.unstyled</code></h3>
	</section>
	<section>
		<ul class="unstyled">
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<section>
		<h3><code>ol</code></h3>
	</section>
	<section>
		<ol>
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
	</section>
	<section>
		<h3><code>ol</code> with <code>.unstyled</code></h3>
	</section>
	<section>
		<ol class="unstyled">
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
	</section>
	<section>
		<h3><code>menu</code></h3>
	</section>
	<section>
		<menu>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
	</section>
	<section>
		<h3><code>menu</code> with <code>.unstyled</code></h3>
	</section>
	<section>
		<menu class="unstyled">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl3);
	}
</style>

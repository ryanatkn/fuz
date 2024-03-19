<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';

	const LIBRARY_ITEM_NAME = 'prose';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO BLOCK either merge into `classes` or make a new page
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<aside>⚠️ this may be removed completely</aside>
			<aside>
				The <code>.prose</code> CSS class styles HTML <Tome_Link name="elements" /> for document-like
				presentation. The base Fuz stylesheet resets everything for app-like presentation and <Tome_Link
					name="typography"
				/> - e.g. no margin/padding - and
				<code>.prose</code> adds back good defaults.
			</aside>
		</section>
	</div>
	<div class="prose">
		<section>
			<h3><code>ul</code> inside <code>.prose</code></h3>
		</section>
		<section>
			<ul>
				<li>a</li>
				<li>b</li>
				<li>see</li>
			</ul>
		</section>
	</div>
	<div class="prose">
		<section>
			<h3><code>ul</code> without a <code>.prose</code> ancestor</h3>
		</section>
	</div>
	<section>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<div class="prose">
		<section>
			<h3><code>ol</code> inside <code>.prose</code></h3>
		</section>
		<section>
			<ol>
				<li>one</li>
				<li>two</li>
				<li>etc</li>
			</ol>
		</section>
	</div>
	<div class="prose">
		<section>
			<h3><code>ol</code> without a <code>.prose</code> ancestor</h3>
		</section>
	</div>
	<section>
		<ol>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ol>
	</section>
</Tome_Detail>

<style>
	section {
		margin-bottom: var(--space_xl3);
	}
</style>

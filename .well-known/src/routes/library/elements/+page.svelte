<script lang="ts">
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<blockquote>
			styles for plain <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
				>HTML elements</a
			>
		</blockquote>
		<h3>
			<span style="font-size: var(--size_xl3)">👆</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"
				><code>blockquote</code></a
			>
		</h3>
		<h3>
			<span style="font-size: var(--size_xl3)">👇</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"><code>hr</code></a>
			<span style="font-size: var(--size_xl3)">👈</span>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"><code>code</code></a>
		</h3>
	</div>
	<hr />
	<div class="prose">
		<h3>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"
				><code>details</code></a
			>
			and
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"
				><code>summary</code></a
			>
		</h3>
		<details>
			<summary
				>Click me, a <code>summary</code>, to see the rest of the <code>details</code></summary
			>
			<p>so many details</p>
			<Code
				content={`<details>
	<summary>
		Click me, a <code>summary</code>,
		to see the rest of the <code>details</code>
	</summary>
	<Code code={'...'} />
</details>`}
			/>
		</details>
	</div>
	<hr />
	<div class="prose">
		<h3>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
				><code>table</code></a
			>
		</h3>
		<blockquote>this is unfinished and will change</blockquote>
		<Code
			content={`<table>
	<thead>
		<th>th</th>
		<th>th</th>
		<th>th</th>
	</thead>
	<tbody>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
		<tr><td>td</td><td>td</td><td>td</td></tr>
	</tbody>
</table>`}
		/>
		<table>
			<thead>
				<th>th</th>
				<th>th</th>
				<th>th</th>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
		<Code content={`<table class="width_full">\n\t...\n</table>`} />
		<table class="width_full">
			<thead>
				<th>th</th>
				<th>th</th>
				<th>th</th>
			</thead>
			<tbody>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
				<tr><td>td</td><td>td</td><td>td</td></tr>
			</tbody>
		</table>
	</div>
	<hr />
	<div class="prose">
		<h3>
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"
				><code>aside</code></a
			>
		</h3>
		<aside>
			the <code>aside</code> looks like this
		</aside>
		<aside>
			<Code
				content={`<aside>
	<aside>
		<aside>nested asides</aside>
	</aside>
</aside>`}
			/>
			<aside>
				<aside>
					<aside>nested asides</aside>
				</aside>
			</aside>
		</aside>
	</div>
	<hr />
	<div class="prose">TODO more!</div>
</Tome_Detail>

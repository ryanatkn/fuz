<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<blockquote>
			styles for plain <Mdn_Link href="Web/HTML/Element">HTML elements</Mdn_Link>
			with app-like presentation, for document-like presentation see <Tome_Link name="typography" />
			and <Tome_Link name="prose" />
		</blockquote>
		<h3>
			<span style="font-size: var(--size_xl3)">👆</span>
			<Mdn_Link href="Web/HTML/Element/blockquote">blockquote</Mdn_Link>
		</h3>
		<h3>
			<span style="font-size: var(--size_xl3)">👇</span>
			<Mdn_Link href="Web/HTML/Element/hr">hr</Mdn_Link>
			<span style="font-size: var(--size_xl3)">👈</span>
			<Mdn_Link href="Web/HTML/Element/code">code</Mdn_Link>
		</h3>
	</div>
	<hr />
	<div class="prose">
		<h3>
			<Mdn_Link href="Web/HTML/Element/details">details</Mdn_Link>
			and
			<Mdn_Link href="Web/HTML/Element/summary">summary</Mdn_Link>
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
			<Mdn_Link href="Web/HTML/Element/table">table</Mdn_Link>
		</h3>
		<blockquote>this is unfinished and will change</blockquote>
		<Code
			content={`<table>
	<thead>
		<tr>
			<th>th</th>
			<th>th</th>
			<th>th</th>
		</tr>
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
				<tr>
					<th>th</th>
					<th>th</th>
					<th>th</th>
				</tr>
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
				<tr>
					<th>th</th>
					<th>th</th>
					<th>th</th>
				</tr>
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
			<Mdn_Link href="Web/HTML/Element/aside">aside</Mdn_Link>
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

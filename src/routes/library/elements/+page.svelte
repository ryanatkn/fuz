<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Link from '$lib/Tome_Link.svelte';
	import {get_tome} from '$lib/tome.js';
	import Mdn_Link from '$lib/Mdn_Link.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'elements';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO BLOCK add `Details` page and document below
</script>

<Tome_Detail {tome}>
	<blockquote>
		Styles for plain <Mdn_Link href="Web/HTML/Element">HTML elements</Mdn_Link>. See also <Tome_Link
			name="typography"
		/>.
	</blockquote>
	<section>
		<Tome_Subheading slug="blockquote-element">
			<span style="font-size: var(--size_xl3)">👆</span>
			<Mdn_Link href="Web/HTML/Element/blockquote">blockquote</Mdn_Link>
		</Tome_Subheading>
		<Tome_Subheading slug="hr-and-code-elements">
			<span style="font-size: var(--size_xl3)">👇</span>
			<Mdn_Link href="Web/HTML/Element/hr">hr</Mdn_Link>
			<span style="font-size: var(--size_xl3)">👈</span>
			<Mdn_Link href="Web/HTML/Element/code">code</Mdn_Link>
		</Tome_Subheading>
		<hr />
	</section>
	<section>
		<Tome_Subheading slug="details-and-summary-elements">
			<Mdn_Link href="Web/HTML/Element/details">details</Mdn_Link>
			and
			<Mdn_Link href="Web/HTML/Element/summary">summary</Mdn_Link>
		</Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading slug="table-element">
			<Mdn_Link href="Web/HTML/Element/table">table</Mdn_Link>
		</Tome_Subheading>
		<blockquote>⚠️ this is unfinished and will change</blockquote>
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
		<Code content={`<table class="w_100">\n\t...\n</table>`} />
		<table class="w_100">
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
	</section>
	<section>
		<Tome_Subheading slug="aside-element">
			<Mdn_Link href="Web/HTML/Element/aside">aside</Mdn_Link>
		</Tome_Subheading>
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
	</section>
	<section>
		<Tome_Subheading slug="header-element">
			<Mdn_Link href="Web/HTML/Element/footer">header</Mdn_Link>
		</Tome_Subheading>
		<Code content={`<header>header</header>`} />
		<header>header</header>
	</section>
	<section>
		<Tome_Subheading slug="footer-element">
			<Mdn_Link href="Web/HTML/Element/footer">footer</Mdn_Link>
		</Tome_Subheading>
		<Code content={`<footer>footer</footer>`} />
		<footer>footer</footer>
	</section>
	<section>
		<Tome_Subheading slug="section-element">
			<Mdn_Link href="Web/HTML/Element/section">section</Mdn_Link>
		</Tome_Subheading>
		<Code content={`<section>section</section>`} />
		<section>section</section>
	</section>
	<section>
		<Tome_Subheading slug="ul-element"><code>ul</code></Tome_Subheading>
	</section>
	<section>
		<ul>
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<section>
		<Tome_Subheading slug="ul-with-unstyled"
			><code>ul</code> with <code>.unstyled</code></Tome_Subheading
		>
	</section>
	<section>
		<ul class="unstyled">
			<li>a</li>
			<li>b</li>
			<li>see</li>
		</ul>
	</section>
	<section>
		<Tome_Subheading slug="ol-element"><code>ol</code></Tome_Subheading>
	</section>
	<section>
		<ol>
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
	</section>
	<section>
		<Tome_Subheading slug="ol-with-unstyled"
			><code>ol</code> with <code>.unstyled</code></Tome_Subheading
		>
	</section>
	<section>
		<ol class="unstyled">
			<li>one</li>
			<li>two</li>
			<li>etc</li>
		</ol>
	</section>
	<section>
		<Tome_Subheading slug="menu-element"><code>menu</code></Tome_Subheading>
	</section>
	<section>
		<menu>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
	</section>
	<section>
		<Tome_Subheading slug="menu-with-unstyled"
			><code>menu</code> with <code>.unstyled</code></Tome_Subheading
		>
	</section>
	<section>
		<menu class="unstyled">
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</menu>
	</section>
	<p>TODO more!</p>
</Tome_Detail>

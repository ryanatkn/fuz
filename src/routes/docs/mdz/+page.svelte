<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {resolve} from '$app/paths';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Mdz from '$lib/Mdz.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';

	const LIBRARY_ITEM_NAME = 'mdz';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const basic_example = '**Bold** and _italic_ and ~strikethrough~ text.';
	const whitespace_example = ' see \n  how       \n   whitespace    \nis preserved ';
	const code_example = 'To parse markdown directly, use `mdz_parse` from module `mdz.ts`.';
	const code_plain_example = 'This `identifier` does not exist.';
	const link_example = 'See {@link Alert} and {@link Card} components.';
	const linebreak_example = 'First line.\nSecond line.\nThird line.';
	const paragraph_example = 'First paragraph.\n\nSecond paragraph.';
	const triple_linebreak_example =
		'First paragraph.\n\n\nSecond paragraph separated by an extra newline.';
	const hr_example = 'Section one.\n\n---\n\nSection two.';

	let whitespace_example_el: HTMLDivElement;
</script>

<Tome_Content {tome}>
	<section>
		<p>
			mdz is a small markdown dialect that supports Svelte components and a subset of TSDoc. The
			goal is to be friendly to nontechnical users and integrate with other Fuz systems.
		</p>
		<aside>
			⚠️ This is an early proof of concept with missing features. Lists and blockquotes are next.
		</aside>
	</section>

	<section>
		<Code content="import Mdz from '@ryanatkn/fuz/Mdz.svelte';" lang="ts" />
	</section>

	<Tome_Section>
		<Tome_Section_Header text="Basic formatting" />
		<p>Supports <strong>bold</strong>, <em>italic</em>, and strikethrough:</p>
		<Code content={`<Mdz content="${basic_example}" />`} />
		<Mdz content={basic_example} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Preserves whitespace" />
		<p>
			mdz preserves and renders all whitespace exactly as written, minimizing surprise for
			nontechnical users:
		</p>
		<Code content={`<Mdz content="${whitespace_example}" />`} />
		<div class="mb_lg" bind:this={whitespace_example_el}>
			<Mdz content={whitespace_example} />
		</div>
		<button
			type="button"
			onclick={() => {
				const selection = window.getSelection();
				const range = document.createRange();
				range.selectNodeContents(whitespace_example_el);
				selection?.removeAllRanges();
				selection?.addRange(range);
			}}
		>
			click to inspect whitespace
		</button>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Line breaks and paragraphs" />
		<p>Single newlines create line breaks:</p>
		<Code content={linebreak_example} />
		<Mdz content={linebreak_example} class="mb_lg" />
		<p>Double newlines create paragraph breaks:</p>
		<Code content={paragraph_example} />
		<Mdz content={paragraph_example} class="mb_lg" />
		<p>Triple newlines create paragraphs with a blank line between:</p>
		<Code content={triple_linebreak_example} />
		<Mdz content={triple_linebreak_example} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Horizontal rules" />
		<p>
			Use exactly three hyphens (<code>---</code>) at the start of a line to create a horizontal
			rule. Must be separated from other content by blank lines (paragraph breaks), except at
			document start/end:
		</p>
		<Code content={hr_example} />
		<Mdz content={hr_example} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Inline code auto-linking" />
		<p>Backtick code automatically links to identifiers and modules:</p>
		<Code content={code_example} />
		<Mdz content={code_example} />
		<p>Non-identifiers become plain code elements:</p>
		<Code content={code_plain_example} />
		<Mdz content={code_plain_example} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="TSDoc links" />
		<p>Use <code>{'{@link}'}</code> and <code>{'{@see}'}</code> tags:</p>
		<Code content={link_example} />
		<Mdz content={link_example} />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Advanced usage" />
		<p>
			For more control, use <Identifier_Link name="mdz_parse" /> directly with <Identifier_Link
				name="Mdz_Node_View"
			/>:
		</p>
		<Code
			content={`import {mdz_parse} from '@ryanatkn/fuz/mdz.js';
import Mdz_Node_View from '@ryanatkn/fuz/Mdz_Node_View.svelte';

const nodes = mdz_parse(content);`}
			lang="ts"
		/>
		<Code
			content={`<!-- manipulate nodes or customize the wrapper as desired -->
<div class="white_space_pre_wrap">
	{#each nodes as node (node)}
		<Mdz_Node_View {node} />
	{/each}
</div>`}
		/>
		<p>
			For example you may want <code>white_space_pre</code> to avoid wrapping in some circumstances.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Compatibility with other markdowns" />
		<p>mdz has simpler syntax than CommonMark/GFM:</p>
		<ul>
			<li>bold: <code>**text**</code> only</li>
			<li>italic: <code>_text_</code> only</li>
		</ul>
		<p>
			In CommonMark, <code>*text*</code> is italic. In mdz, single <code>*</code> has no special meaning
			and renders as literal text. This choice creates a clear visual distinction between bold and italics.
		</p>
	</Tome_Section>

	<p>
		See also the mdz <a href={resolve('/debug/mdz')}>fixtures debug page</a>.
	</p>
</Tome_Content>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import {resolve} from '$app/paths';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Mdz from '$lib/Mdz.svelte';
	import Identifier_Link from '$lib/Identifier_Link.svelte';
	import {mdz_components_context, mdz_elements_context} from '$lib/mdz_components.js';
	import Alert from '$lib/Alert.svelte';

	const LIBRARY_ITEM_NAME = 'mdz';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	mdz_components_context.set(new Map([['Alert', Alert]]));

	mdz_elements_context.set(
		new Map([
			['code', true],
			['aside', true],
			['marquee', true],
		]),
	);

	const basic_example = '**Bold** and _italic_ and ~strikethrough~ text.';
	const nesting_example = '**~_All_ three~ combi**_ned_';
	const whitespace_example = ' see \n  how       \n   whitespace    \nis preserved ';
	const code_example = 'To parse markdown directly, use `mdz_parse` from module `mdz.ts`.';
	const code_plain_example = 'This `identifier` does not exist.';
	const link_external_example =
		'[Fuz API docs](https://fuz.dev/docs/api) and https://fuz.dev/docs/api and /docs/api';
	const linebreak_example = 'First line.\nSecond line.\nThird line.';
	const paragraph_example = 'First paragraph.\n\nSecond paragraph.\nLinebreak in second paragraph.';
	const triple_linebreak_example =
		'First paragraph.\n\n\nSecond paragraph separated by an extra newline.';
	const hr_example = 'Section one.\n\n---\n\nSection two.';
	const heading_example = '## **Bold** h2 with _italic_';
	const code_block_example = '```ts\nconst z: number = 43;\n```';
	const element_aside_example =
		'<aside>This is _italicized <code>code</code>_ inside an `aside`.</aside>';
	const element_marquee_example = '<marquee>use it or lose it</marquee>';
	const component_example =
		'<Alert>This is an `Alert` with _italicized <code>code</code>_ inside.</Alert>';

	let whitespace_example_el: HTMLDivElement;
</script>

<Tome_Content {tome}>
	<section>
		<p>
			mdz is a small markdown dialect that supports Svelte components, auto-detected URLs prefixed
			with <code>https://</code> and <code>/</code>, and some Fuz features like linkified
			identifiers and modules in <code>`backticks`</code>. The goal is to be friendly to
			nontechnical users and integrate markdown with Svelte and Fuz.
		</p>
		<p>
			mdz prioritizes predictability: strict syntax with one canonical pattern per feature,
			preferring false negatives over false positives to minimize surprise.
		</p>
		<aside>
			⚠️ This is an early proof of concept with missing features. Lists and blockquotes are next.
		</aside>
		<aside>
			<p>Possible changes?</p>
			<ul>
				<li>
					allow ending lines with <code class="white_space_pre"> \</code> to opt out of rendering the
					line break?
				</li>
				<li>loosen/tighten some restrictions like requiring blank newline separators?</li>
			</ul>
		</aside>
	</section>

	<section>
		<Code content="import Mdz from '@ryanatkn/fuz/Mdz.svelte';" lang="ts" />
	</section>

	<Tome_Section>
		<Tome_Section_Header text="Basic formatting" />
		<p>Supports <strong>bold</strong>, <em>italic</em>, and strikethrough:</p>
		<Code content={`<Mdz content="${basic_example}" />`} class="mb_lg" />
		<Mdz content={basic_example} class="mb_xl5" />
		<p>All inline formatting can nest:</p>
		<Code content={`<Mdz content="${nesting_example}" />`} class="mb_lg" />
		<Mdz content={nesting_example} class="mb_xl5" />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Preserves whitespace" />
		<p>
			mdz preserves and renders all whitespace exactly as written, minimizing surprise for
			nontechnical users:
		</p>
		<Code content={`<Mdz content="${whitespace_example}" />`} class="mb_lg" />
		<div class="mb_lg" bind:this={whitespace_example_el}>
			<Mdz content={whitespace_example} class="mb_xl5" />
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
			select text to reveal whitespace
		</button>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Line breaks and paragraphs" />
		<p>Single newlines create line breaks:</p>
		<Code content={linebreak_example} class="mb_lg" />
		<Mdz content={linebreak_example} class="mb_xl5" />
		<p>Double newlines create paragraph breaks:</p>
		<Code content={paragraph_example} class="mb_lg" />
		<Mdz content={paragraph_example} class="mb_xl5" />
		<p>Triple newlines create paragraphs with a blank line between:</p>
		<Code content={triple_linebreak_example} class="mb_lg" />
		<Mdz content={triple_linebreak_example} class="mb_xl5" />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Horizontal rules" />
		<p>
			Use exactly three hyphens (<code>---</code>) at the start of a line to create a horizontal
			rule. Must be separated from other content by blank lines (paragraph breaks), except at
			document start/end:
		</p>
		<Code content={hr_example} class="mb_lg" />
		<Mdz content={hr_example} class="mb_xl5" />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Inline code auto-linking" />
		<p>Backtick code automatically links to identifiers and modules:</p>
		<Code content={code_example} class="mb_lg" />
		<Mdz content={code_example} class="mb_xl5" />
		<p>Non-identifiers become plain code elements:</p>
		<Code content={code_plain_example} class="mb_lg" />
		<Mdz content={code_plain_example} class="mb_xl5" />
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Links" />
		<p>mdz supports three kinds of links:</p>
		<ul>
			<li>standard markdown link syntax</li>
			<li>
				external URLs starting with <code>https://</code> or
				<code>http://</code>
			</li>
			<li>internal paths starting with <code>/</code></li>
		</ul>
		<Code content={link_external_example} class="mb_lg" />
		<Mdz content={link_external_example} class="mb_xl5" />
		<p>
			<strong>Note:</strong> Relative paths (<code>./</code>, <code>../</code>) are not supported.
			mdz content may be rendered at different URLs than where source files live (e.g., TSDoc
			comments from <code>src/lib/foo.ts</code> render at <code>/docs/api/foo.ts</code>).
			Root-relative paths (<code>/docs/...</code>) have unambiguous meaning regardless of render
			location, making them more portable.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="HTML elements" />
		<p>mdz supports an opt-in set of HTML elements for semantic markup and styling.</p>
		<Code content={element_aside_example} class="mb_lg" />
		<Mdz content={element_aside_example} class="mb_xl5" />
		<Code content={element_marquee_example} class="mb_lg" />
		<Mdz content={element_marquee_example} class="mb_xl5" />
		<p>Elements must be registered:</p>
		<Code
			content={`import {mdz_elements_context} from '@ryanatkn/fuz/mdz_components.js';

mdz_elements_context.set(new Map([
	['code', true],
	['aside', true],
	['marquee', true],
]));`}
			lang="ts"
			class="mb_lg"
		/>
		<p>
			Unregistered elements render as <Mdz content="<tag-name />" inline /> placeholders for security.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Svelte components" />
		<p>
			mdz supports Svelte components to a minimal (and possibly expanding) degree. Components are
			distinguished from HTML elements by their uppercase first letter:
		</p>
		<Code content={component_example} class="mb_lg" />
		<Mdz content={component_example} class="mb_xl5" />
		<p>Components must be registered:</p>
		<Code
			content={`import {mdz_components_context} from '@ryanatkn/fuz/mdz_components.js';
import Alert from '@ryanatkn/fuz/Alert.svelte';

mdz_components_context.set(new Map([
	['Alert', Alert],
]));`}
			lang="ts"
			class="mb_lg"
		/>
		<p>
			Unregistered components render as <Mdz content="<ComponentName />" inline />
			placeholders.
		</p>
		<aside>
			tip: You can put a <code>SvelteMap</code> in the component and element registries.
		</aside>
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
			class="mb_lg"
		/>
		<Code
			content={`<div class="custom white_space_pre_wrap">
	{#each nodes as node}
		<Mdz_Node_View {node} />
	{/each}
</div>`}
			class="mb_lg"
		/>
		<p>
			For example you may want <code>white_space_pre</code> to avoid wrapping in some circumstances.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Headings" />
		<p>Use 1-6 hashes followed by a space:</p>
		<Code content={heading_example} class="mb_lg" />
		<Mdz content={heading_example} class="mb_xl5" />
		<p>
			Must start at column 0, have a space after hashes, and be followed by a blank line or EOF.
			Headings can include inline formatting.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Code blocks" />
		<p>Use three or more backticks with optional language hint:</p>
		<Code content={code_block_example} class="mb_lg" />
		<Mdz content={code_block_example} class="mb_xl5" />
		<p>
			Must start at column 0, closing fence must match opening length, and be followed by a blank
			line or EOF.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Compatibility with other markdowns" />
		<p>mdz supports fewer syntax variants than CommonMark/GFM:</p>
		<ul>
			<li>bold: <code>**text**</code> only</li>
			<li>italic: <code>_text_</code> only</li>
		</ul>
		<p>
			In CommonMark, <code>*text*</code> is italic. In mdz, single <code>*</code> has no special meaning
			and renders as literal text. This choice creates a clear visual distinction between bold and italics.
		</p>
		<p>
			In general, mdz wants to minimize surprise to nontechnical users, so it's strict in what it
			accepts and prefers false negatives over false positives. For example, it requires a
			separating blank line and <code>```</code> with no preceding spaces or characters to start a code
			block.
		</p>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Generated docs" />
		<p>For more see the generated mdz docs:</p>
		<ul>
			<li>
				<strong>
					<a href={resolve('/docs/mdz/spec')}>mdz specification</a>
				</strong>
			</li>
			<li>
				<strong>
					<a href={resolve('/docs/mdz/grammar')}>mdz grammar</a>
				</strong>
			</li>
			<li>
				<strong>
					<a href={resolve('/docs/mdz/fixtures')}>fixtures debug page</a>
				</strong>
			</li>
		</ul>
	</Tome_Section>
</Tome_Content>

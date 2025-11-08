<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

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
	const paragraph_example = 'First paragraph.\n\nSecond paragraph.';
</script>

<Tome_Content {tome}>
	<section>
		<p>
			mdz is a user-oriented markdown dialect that supports Svelte components and a subset of TSDoc.
		</p>
		<aside>⚠️ This is an early proof of concept, many features and edge cases are missing.</aside>
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
		<p>mdz retains full source text fidelity, including trailing spaces.</p>
		<Code content={`<Mdz content="${whitespace_example}" />`} />
		<Mdz content={whitespace_example} />
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
		<Tome_Section_Header text="Paragraphs" />
		<p>Double newlines create paragraph breaks:</p>
		<Code content={paragraph_example} />
		<Mdz content={paragraph_example} />
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

const nodes = mdz_parse(content);
// Manipulate nodes if needed
{#each nodes as node (node)}
  <Mdz_Node_View {node} />
{/each}`}
			lang="ts"
		/>
	</Tome_Section>
</Tome_Content>

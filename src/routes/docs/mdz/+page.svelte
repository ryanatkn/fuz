<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import {mdz_parse} from '$lib/mdz.js';
	import Mdz from '$lib/Mdz.svelte';

	const LIBRARY_ITEM_NAME = 'mdz';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const basic_example = '**Bold** and _italic_ text.';
	const code_example = 'To parse markdown, use `mdz_parse` from module `mdz.ts`.';
	const link_example = 'See {@link Alert} and {@link Card} components.';
	const paragraph_example = 'First paragraph.\n\nSecond paragraph.';

	// TODO BLOCK needs to show usage in code blocks
</script>

<Tome_Content {tome}>
	<section>
		<p>
			<code>mdz</code> is a minimal TSDoc markdown parser for Fuz API documentation. It parses a specialized
			markdown dialect with inline formatting and TSDoc tags.
		</p>
	</section>

	<section>
		<Code
			content={`import {mdz_parse} from '@ryanatkn/fuz/mdz.js';
import Mdz from '@ryanatkn/fuz/Mdz.svelte';`}
			lang="ts"
		/>
	</section>

	<Tome_Section>
		<Tome_Section_Header text="Basic formatting" />
		<p>Supports <strong>bold</strong>, <em>italic</em>, and inline code:</p>
		<Code content={basic_example} />
		<div>
			{#each mdz_parse(basic_example) as node (node)}
				<Mdz {node} />
			{/each}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Inline code auto-linking" />
		<p>Backtick code automatically links to identifiers and modules:</p>
		<Code content={code_example} />
		<div>
			{#each mdz_parse(code_example) as node (node)}
				<Mdz {node} />
			{/each}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="TSDoc links" />
		<p>Use <code>{'{@link}'}</code> and <code>{'{@see}'}</code> tags:</p>
		<Code content={link_example} />
		<div>
			{#each mdz_parse(link_example) as node (node)}
				<Mdz {node} />
			{/each}
		</div>
	</Tome_Section>

	<Tome_Section>
		<Tome_Section_Header text="Paragraphs" />
		<p>Double newlines create paragraph breaks:</p>
		<Code content={paragraph_example} />
		<div>
			{#each mdz_parse(paragraph_example) as node (node)}
				<Mdz {node} />
			{/each}
		</div>
	</Tome_Section>
</Tome_Content>

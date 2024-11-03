<script lang="ts">
	import {base} from '$app/paths';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Card from '$lib/Card.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'Card';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	const href = `${base}/library`;
</script>

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Card from '@ryanatkn/fuz/Card.svelte';`} lang="ts" />
		<Code
			content={`<Card>
  just<br />
  a card
</Card>`}
		/>
		<Card>
			just<br />
			a card
		</Card>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With a custom icon" />
		<Code
			content={`<Card>
  custom<br />
  icon
  {#snippet icon()}📖{/snippet}
</Card>`}
		/>
		<Card>
			custom<br />
			icon
			{#snippet icon()}📖{/snippet}
		</Card>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="As a link" />
		<Code
			content={`<Card href="${base}/">
  a<br />
  link
</Card>`}
		/>
		<Card href="{base}/">
			a<br />
			link
		</Card>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="As the selected link" />
		<Code
			content={`<Card href="${href}/card">
  href is<br />
  selected
</Card>`}
		/>
		<Card href="{href}/card">
			href is<br />
			selected
		</Card>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With a custom HTML tag" />
		<Code
			content={`<Card tag="button">
  custom<br />
  tag
</Card>`}
		/>
		<Card tag="button">
			custom<br />
			tag
		</Card>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With custom alignment" />
		<Code
			content={`<Card align="right">
  align<br />
  icon right
</Card>`}
		/>
		<Card align="right">
			align<br />
			icon right
		</Card>
	</Tome_Section>
	<section>
		<Code
			content={`<Card align="above">
  align<br />
  icon above
</Card>`}
		/>
		<Card align="above">
			align<br />
			icon above
		</Card>
	</section>
	<section>
		<Code
			content={`<Card align="below">
  align<br />
  icon below
</Card>`}
		/>
		<Card align="below">
			align<br />
			icon below
		</Card>
	</section>
</Tome_Content>

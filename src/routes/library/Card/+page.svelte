<script lang="ts">
	import {base} from '$app/paths';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Card from '$lib/Card.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Card';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	const href = `${base}/library`;
</script>

<Tome_Detail {tome}>
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
	<section>
		<Tome_Subheading text="With a custom icon" slug="custom-icon" />
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
	</section>
	<section>
		<Tome_Subheading text="As a link" slug="as-a-link" />
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
	</section>
	<section>
		<Tome_Subheading text="As the selected link" slug="as-selected-link" />
		<Code
			content={`<Card href="${base}/library/Card">
  href is<br />
  selected
</Card>`}
		/>
		<Card href="{href}/Card">
			href is<br />
			selected
		</Card>
	</section>
	<section>
		<Tome_Subheading text="With a custom HTML tag" slug="custom-html-tag" />
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
	</section>
	<section>
		<Tome_Subheading text="With custom alignment" slug="custom-alignment" />
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
	</section>
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
</Tome_Detail>

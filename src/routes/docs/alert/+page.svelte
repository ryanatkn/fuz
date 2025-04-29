<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Alert from '$lib/Alert.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	const LIBRARY_ITEM_NAME = 'Alert';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let clicks = $state(0);

	// TODO add examples for colored buttons - visually they're broken because they look like selected buttons
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Alert from '@ryanatkn/fuz/Alert.svelte';`} lang="ts" />
		<Code content={`<Alert>info</Alert>`} />
		<Alert>info</Alert>
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With custom icon" />
		<p><code>icon</code> can be a string prop or snippet:</p>
		<Code
			content={`<Alert icon="▷">
	icon as a string prop
</Alert>`}
		/>
		<Alert icon="▷">icon as a string prop</Alert>
		<Code
			content={`<Alert>
	{#snippet icon(t)}{t}◡{t}{/snippet}
	icon as a snippet
</Alert>`}
		/>
		<Alert>
			{#snippet icon(t)}{t}◡{t}{/snippet}
			icon as a snippet
		</Alert>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="As optional button" />
		<p>
			Alerts can be buttons by including an <code>onclick</code> prop. This API may change because
			it's a bit of a mess - a separate <code>Alert_Button</code> may be better.
		</p>
		<Code
			content={`<Alert onclick={() => clicks++}>
	alerts can be buttons{'.'.repeat(clicks)}
</Alert>`}
		/>
		<Alert onclick={() => clicks++}>
			alerts can be buttons{'.'.repeat(clicks)}
		</Alert>
		<p>clicks: {clicks}</p>
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With custom status" />
		<p>
			The <code>status</code> prop, which defaults to <code>'inform'</code>, changes the default
			icon and color.
		</p>
		<Code
			content="// @ryanatkn/fuz/alert.js
export type Alert_Status = 'inform' | 'help' | 'error';"
			lang="ts"
		/>
		<Code
			content={`<Alert status="error">
	the computer is mistaken
</Alert>`}
		/>
		<Alert status="error">the computer is mistaken</Alert>
		<Code
			content={`<Alert status="help">
	here's how to fix it
</Alert>`}
		/>
		<Alert status="help">here's how to fix it</Alert>
		<Code
			content={`<Alert status="help" color="var(--color_d_5)">
	the <code>color</code> prop overrides the status color
</Alert>`}
		/>
		<Alert status="help" color="var(--color_d_5)"
			>the <code>color</code> prop overrides the status color</Alert
		>
	</Tome_Section>
</Tome_Content>

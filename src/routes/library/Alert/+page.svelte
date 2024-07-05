<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Alert from '$lib/Alert.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Alert';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let clicks = $state(0);

	// TODO add examples for colored buttons - visually they're broken because they look like selected buttons
</script>

<Tome_Detail {tome}>
	<section>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Alert from '@ryanatkn/fuz/Alert.svelte';`} lang="ts" />
		<Code content={`<Alert>info</Alert>`} />
		<Alert>info</Alert>
	</section>
	<section>
		<Tome_Subheading text="With custom icon" slug="custom-icon" />
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
	</section>
	<section>
		<Tome_Subheading text="As optional button" slug="optional-button" />
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
	</section>
	<section>
		<Tome_Subheading text="With custom status" slug="custom-status" />
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
	</section>
</Tome_Detail>

<script lang="ts">
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let value: number = $state(180);
	let value_from_oninput: number | undefined = $state();
</script>

<Tome_Content {tome}>
	<section>
		<Code content={`import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
	</section>
	<section>
		<Tome_Section_Header text="With bind:value">With <code>bind:value</code></Tome_Section_Header>
		<Code content={`<Hue_Input bind:value />`} />
		<Hue_Input bind:value />
		<div class="mt_md" style:--text_color="hsl({value} 62% 31%)">
			<code>bind:value === {value}</code>
		</div>
	</section>
	<section>
		<Tome_Section_Header text="With oninput">With <code>oninput</code></Tome_Section_Header>
		<Code
			content={`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`}
		/>
		<Hue_Input oninput={(v) => (value_from_oninput = v)} />
		<div class="mt_md" style:--text_color="hsl({value} 62% 31%)">
			<code>value_from_oninput === {value_from_oninput + ''}</code>
		</div>
	</section>
	<section>
		<Tome_Section_Header text="With children">With <code>children</code></Tome_Section_Header>
		<Code
			content={`<Hue_Input>
	Some colorful hue input
</Hue_Input>`}
		/>
		<Hue_Input>Some colorful hue input</Hue_Input>
	</section>
</Tome_Content>

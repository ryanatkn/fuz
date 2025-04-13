<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';
	import Tome_Section_Header from '$lib/Tome_Section_Header.svelte';
	import Tome_Section from '$lib/Tome_Section.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let value: number = $state(180);
	let value_from_oninput: number | undefined = $state();
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<Code content={`import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
	</section>
	<Tome_Section>
		<Tome_Section_Header text="With bind:value">With <code>bind:value</code></Tome_Section_Header>
		<Code content={`<Hue_Input bind:value />`} />
		<Hue_Input bind:value />
		<div class="mt_md" style:--text_color="hsl({value} 62% 31%)">
			<code>bind:value === {value}</code>
		</div>
	</Tome_Section>
	<Tome_Section>
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
	</Tome_Section>
	<Tome_Section>
		<Tome_Section_Header text="With children">With <code>children</code></Tome_Section_Header>
		<Code
			content={`<Hue_Input>
	Some colorful hue input
</Hue_Input>`}
		/>
		<Hue_Input>Some colorful hue input</Hue_Input>
	</Tome_Section>
</Tome_Content>

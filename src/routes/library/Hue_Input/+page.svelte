<script lang="ts">
	// TODO @multiple why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. I there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal` with `@ryanatkn/fuz_code` and `prismjs`.
	import Prism from 'prismjs';
	Prism;
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import Tome_Subheading from '$lib/Tome_Subheading.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let value: number = $state(180);
	let value_from_oninput: number | undefined = $state();
</script>

<Tome_Detail {tome}>
	<section>
		<Code content={`import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
	</section>
	<section>
		<Tome_Subheading text="With bind:value" slug="with-bindvalue"
			>With <code>bind:value</code></Tome_Subheading
		>
		<Code content={`<Hue_Input bind:value />`} />
		<Hue_Input bind:value />
		<div class="mt_md" style:--text_color="hsl({value} 62% 31%)">
			<code>bind:value === {value}</code>
		</div>
	</section>
	<section>
		<Tome_Subheading text="With oninput" slug="with-oninput"
			>With <code>oninput</code></Tome_Subheading
		>
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
		<Tome_Subheading text="With children" slug="with-children"
			>With <code>children</code></Tome_Subheading
		>
		<Code
			content={`<Hue_Input>
	Some colorful hue input
</Hue_Input>`}
		/>
		<Hue_Input>Some colorful hue input</Hue_Input>
	</section>
</Tome_Detail>

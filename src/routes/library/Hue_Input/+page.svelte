<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

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
		<h3>With <code>bind:value</code></h3>
		<Code content={`<Hue_Input bind:value />`} />
		<Hue_Input bind:value />
		<div class="mt_md" style:--color="hsl({value} 62% 31%)">
			<code>bind:value === {value}</code>
		</div>
	</section>
	<section>
		<h3>With <code>oninput</code></h3>
		<Code
			content={`<Hue_Input
	oninput={(v) => (value_from_oninput = v)}
/>`}
		/>
		<Hue_Input
			oninput={(v) => {
				value_from_oninput = v;
				if (value !== v) throw Error();
			}}
		/>
		<div class="mt_md" style:--color="hsl({value} 62% 31%)">
			<code>value_from_oninput === {value_from_oninput + ''}</code>
		</div>
	</section>
	<section>
		<h3>With <code>children</code></h3>
		<Code
			content={`<Hue_Input>
	Some colorful hue input
</Hue_Input>`}
		/>
		<Hue_Input>Some colorful hue input</Hue_Input>
	</section>
</Tome_Detail>

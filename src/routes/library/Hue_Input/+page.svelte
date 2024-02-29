<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let value: number;
	let value_from_oninput: number;
</script>

<Tome_Detail {tome}>
	<div class="prose" style:--color="hsl({value} 62% 31%)">
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
		<Code
			content={`<Hue_Input
	bind:value
	oninput={(v) => (value_from_oninput = v)}
/>`}
		/>
		<Hue_Input
			bind:value
			oninput={(v) => {
				value_from_oninput = v;
				if (value !== v) throw Error();
			}}
		/>
		<code class="block my_md">bind:value === {value}</code>
		<code class="block">value_from_oninput === {value_from_oninput + ''}</code>
	</div>
</Tome_Detail>

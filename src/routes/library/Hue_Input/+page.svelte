<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let value: number | undefined = $state(180); // TODO seems like this ought to allow undefined but Svelte doesn't (try again later to see if it changed, I saw some discussion and thought this would have worked)
	let value_from_oninput: number | undefined = $state();
</script>

<Tome_Detail {tome}>
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
	<div style:--color="hsl({value} 62% 31%)">
		<code class="block my_md">bind:value === {value}</code>
		<code class="block">value_from_oninput === {value_from_oninput + ''}</code>
	</div>
</Tome_Detail>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let hue: number;
	let hue_from_callback: number;
</script>

<Tome_Detail {tome}>
	<div class="prose" style:--color="hsl({hue} 62% 31%)">
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Hue_Input from '@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
		<Code
			content={`<Hue_Input
	bind:hue
	oninput={(e) => {
		// bind:hue === ${hue}
		// hue_from_callback === ${hue_from_callback}
	}}
/>`}
		/>
		<Hue_Input
			bind:hue
			oninput={(v) => {
				hue_from_callback = v;
				if (hue !== v) throw Error();
			}}
		/>
	</div>
</Tome_Detail>

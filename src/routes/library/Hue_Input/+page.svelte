<script lang="ts">
	import 'prismjs'; // TODO @multiple why are these needed? `Code` imports these already - vite config?
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Hue_Input from '$lib/Hue_Input.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Hue_Input';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let hue: number;
</script>

<Tome_Detail {tome}>
	<div class="prose" style:--color="hsl({hue} 62% 31%)">
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Hue_Input from\n\t'@ryanatkn/fuz/Hue_Input.svelte';`} lang="ts" />
		<Code
			content={`<Hue_Input
	bind:hue
	on:input={(e) => {
		// hue === e.detail
		// === ${hue}
	}}
/>`}
		/>
		<Hue_Input
			bind:hue
			on:input={(e) => {
				if (hue !== e.detail) throw Error();
			}}
		/>
	</div>
</Tome_Detail>

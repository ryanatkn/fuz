<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome_by_name} from '$lib/tome.js';
	import Pending_Button from '$lib/Pending_Button.svelte';
	import Tome_Content from '$lib/Tome_Content.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Button';
	const tome = get_tome_by_name(LIBRARY_ITEM_NAME);

	let pending_1 = $state(false);
	let pending_2 = $state(true);
</script>

<!-- eslint-disable svelte/no-useless-mustaches -->

<Tome_Content {tome}>
	<section>
		<p>Preserves a button's normal width while animating.</p>
		<aside>
			<p>This component may be replaced with an action in the future or otherwise change.</p>
		</aside>
		<!-- TODO make this a generic data-driven helper -->
		<Code content={`import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';`} lang="ts" />
		<p>
			<button
				type="button"
				onclick={() => {
					pending_1 = !pending_1;
					pending_2 = !pending_2;
				}}>toggle the pending status of the buttons below</button
			>
		</p>
		<Code
			content={`<Pending_Button
	pending={${pending_1}}
	onclick={() => (pending_1 = !pending_1)}
>
	do something async
</Pending_Button>`}
		/>
		<p>
			<Pending_Button pending={pending_1} onclick={() => (pending_1 = !pending_1)}>
				do something async
			</Pending_Button>
		</p>
		<Code
			content={`<Pending_Button
	pending={${pending_2}}
	onclick={() => (pending_2 = !pending_2)}
>
	do another
</Pending_Button>`}
		/>
		<Pending_Button pending={pending_2} onclick={() => (pending_2 = !pending_2)}>
			do another
		</Pending_Button>
	</section>
</Tome_Content>

<script lang="ts">
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Pending_Button from '$lib/Pending_Button.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Pending_Button';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let pending_1 = $state(false);
	let pending_2 = $state(true);
</script>

<!-- TODO maybe Pending_Button shouldn't be a component? action? Or renderless maybe?
		Extract a common thing to make arbitrary things not change width.
	-->

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<p class="width_sm">Preserves a button's normal width while animating.</p>
			<aside class="width_sm">
				<p>This component may be replaced with an action in the future or otherwise change.</p>
			</aside>
			<!-- TODO make this a generic data-driven helper -->
			<Code
				content={`import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';`}
				lang="ts"
			/>
			<p>
				<button
					on:click={() => {
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
	</div>
</Tome_Detail>

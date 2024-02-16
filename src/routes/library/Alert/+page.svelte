<script lang="ts">
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {get_tome} from '$lib/tome.js';
	import Alert from '$lib/Alert.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';

	const LIBRARY_ITEM_NAME = 'Alert';
	const tome = get_tome(LIBRARY_ITEM_NAME);

	let clicks = 0;
	$: dots = Array.from({length: clicks}).reduce((r, _) => r + '.', '');
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<section>
			<!-- TODO make this a generic data-driven helper -->
			<Code content={`import Alert from '@ryanatkn/fuz/Alert.svelte';`} lang="ts" />
			<Code content={`<Alert>info</Alert>`} />
			<Alert>info</Alert>
		</section>
		<section>
			<Code
				content={`<Alert
	icon="😑"
	button={true}
	on:click={() => clicks++}
>
	alerts can be buttons{dots}
</Alert>`}
			/>
			<Alert icon="😑" button={true} on:click={() => clicks++}>
				alerts can be buttons{dots}
			</Alert>
			<aside>⚠️ this API will probably change</aside>
		</section>
		<section>
			<Code
				content={`<Alert status="error">
	the computer is mistaken
</Alert>`}
			/>
			<Alert status="error">the computer is mistaken</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="error" button={true}>
	<div slot="icon">
		<div style:font-size="var(--size_3)">🔥</div>
		😊
	</div>
	remain calm it's only on fire
</Alert>`}
			/>
			<Alert
				status="error"
				button={true}
				on:click={() => {
					alert('the button it does nothing'); // eslint-disable-line no-alert
				}}
			>
				<div slot="icon" style:line-height="1">
					<div style:font-size="var(--size_3)">🔥</div>
					😊
				</div>
				remain calm it's only on fire
			</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="help">
	here's how to fix it
</Alert>`}
			/>
			<Alert status="help">here's how to fix it</Alert>
		</section>
		<section>
			<Code
				content={`<Alert status="help" icon="🗝" button={true}>
	here take this
</Alert>`}
			/>
			<Alert
				status="help"
				icon="🗝"
				button={true}
				on:click={() => {
					alert('you receive: 🗝'); // eslint-disable-line no-alert
				}}
			>
				here take this
			</Alert>
		</section>
		<section>
			<Code
				content={`<Alert icon="🪄">
	<div slot="icon" let:icon style:font-size="var(--icon_size_lg)">
		{icon}
	</div>
	<code>icon</code> is a prop, slot, and slot prop
</Alert>`}
			/>
			<Alert icon="🪄">
				<div slot="icon" let:icon style:font-size="var(--icon_size_lg)">
					{icon}
				</div>
				<code>icon</code> is a prop, slot, and slot prop
			</Alert>
		</section>
	</div>
</Tome_Detail>

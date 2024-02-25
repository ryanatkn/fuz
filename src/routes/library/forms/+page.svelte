<script lang="ts">
	import {fly} from 'svelte/transition';
	import Alert from '$lib/Alert.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	const LIBRARY_ITEM_NAME = 'forms';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	// TODO extract this to where? (where is it used in the css? check all @keyframe)
	const ANIMATION_DURATION_FAST = 91; // ms

	let created_account = false;

	const faces = ['😊', '😑', '🤔', '😉'];

	let username = '';
	let password = '';
	let lifestory = '';

	const radio_items = ['a radio input', 'another radio input'];
	let selected_radio_item = radio_items[0];

	let checked1 = false;
	let checked2 = true;
</script>

<Tome_Detail {tome}>
	<div class="prose">
		<Code
			content={`<form>
	<fieldset>
		<legend>
			a <code>legend</code>
			in a <code>fieldset</code>
		</legend>
		<label>
			<div class="title">
				username
			</div>
			<input
				bind:value={username}
				placeholder=">"
			/>
		</label>
		...
	</fieldset>
	...
</form>`}
		/>
		<br />
		<div class="width_sm">
			<form>
				<fieldset>
					<legend
						>a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"
							><code>legend</code></a
						>
						in a
						<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"
							><code>fieldset</code></a
						></legend
					>
					<label>
						<div class="title">username</div>
						<input bind:value={username} disabled={created_account} placeholder=">" />
					</label>
					<label>
						<div class="title">password</div>
						<input
							type="password"
							bind:value={password}
							disabled={created_account}
							placeholder=">"
						/>
					</label>
					<p>
						More info can be included in <code>{'<'}p></code> tags like this one. Here we could include
						info about passwords.
					</p>
					<label>
						<div class="title">lifestory</div>
						<textarea bind:value={lifestory} disabled={created_account} placeholder="👀" /></label
					>
					<label>
						<div class="title">select</div>
						<select
							class="text_align_center"
							style="font-size: var(--size_5)"
							disabled={created_account}
						>
							{#each faces as face (face)}
								<option value={face}>{face}</option>
							{/each}
						</select>
					</label>
					<button
						type="button"
						disabled={created_account}
						on:click={() => (created_account = true)}
					>
						create account
					</button>
				</fieldset>
			</form>
			{#if created_account}
				<form
					in:fly={{y: -100, duration: ANIMATION_DURATION_FAST}}
					out:fly={{y: 100, duration: ANIMATION_DURATION_FAST}}
				>
					<Alert status="error">cannot create account because this library is fake</Alert>
					<button type="button" on:click={() => (created_account = false)}> undo undo! </button>
				</form>
			{/if}
		</div>
	</div>

	<hr />

	<div class="prose">
		<h3>
			<code>form</code> with range input
		</h3>
		<form>
			<fieldset>
				<Code content={`<input type="range" />`} />
				<input type="range" step={1} min={0} max={100} />
			</fieldset>
			<fieldset>
				<Code content={`<input type="range" disabled />`} />
				<input type="range" step={1} min={0} max={100} disabled />
			</fieldset>
		</form>
	</div>

	<hr />

	<div class="prose">
		<h3>
			<code>form</code> with checkboxes
		</h3>
		<!-- TODO make this a form, but figure out the checkbox problem -- maybe a last-child exception? -->
		<form>
			<fieldset>
				<label class="row">
					<input type="checkbox" bind:checked={checked1} style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" ${checked1 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row">
					<input type="checkbox" bind:checked={checked2} style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" ${checked2 ? 'checked ' : ''}/>`} />
				</label>
				<label class="row disabled">
					<input type="checkbox" disabled style:margin-right="var(--spacing_lg)" />
					<Code content={`<input type="checkbox" disabled />`} /> (disabled)
				</label>
				<label class="row disabled">
					<input type="checkbox" checked disabled />
					<Code content={`<input type="checkbox" checked disabled />`} /> (disabled)
				</label>
			</fieldset>
		</form>
		<aside>
			The above are wrapped with: <Code content={`<label class="row">`} />
			with the <code>.disabled</code> class as needed: <Code
				content={`<label class="row disabled">`}
			/>
		</aside>
	</div>
	<hr />

	<div class="prose">
		<h3>
			<code>form</code> with radio inputs
		</h3>
		<form>
			<fieldset>
				{#each radio_items as radioItem}
					{@const selected = radioItem === selected_radio_item}
					<label class="row" class:selected
						><input type="radio" bind:group={selected_radio_item} value={radioItem} />
						<Code
							content={`<label class="row${selected ? ' selected' : ''}">\n\t<input type="radio" ${
								selected ? 'checked' : ''
							}/>\n</label>`}
						/></label
					>
				{/each}
				<label class="row disabled">
					<input type="radio" disabled />
					<Code content={`<label class="row">\n\t<input type="radio" disabled />\n</label>`} />
				</label>
				<label class="row disabled selected">
					<input type="radio" checked disabled />
					<Code
						content={`<label class="row">\n\t<input type="radio" checked disabled />\n</label>`}
					/>
				</label>
			</fieldset>
		</form>
	</div>
</Tome_Detail>

<script lang="ts">
	import {slide} from 'svelte/transition';
	import {writable} from 'svelte/store';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import Alert from '$lib/Alert.svelte';
	import Tome_Detail from '$lib/Tome_Detail.svelte';
	import {get_tome} from '$lib/tome.js';
	import Dialog from '$lib/Dialog.svelte';
	import Dialogs from '$lib/Dialogs.svelte';
	import {
		dialog_layouts,
		type Dialog_Params,
		type Dialog_Layout,
		to_dialog_params,
	} from '$lib/dialog.js';
	import Text from '$routes/library/Dialog/Text.svelte';

	const LIBRARY_ITEM_NAME = 'Dialog';

	const tome = get_tome(LIBRARY_ITEM_NAME);

	let opened = $state(false);
	let dialog_overflowing_opened = $state(false);
	let dialog_layout_page_opened = $state(false);
	let dialog_nested_1_opened = $state(false);
	let dialog_nested_2_opened = $state(false);
	let dialog_nested_3_opened = $state(false);

	let selected_layout: Dialog_Layout = $state('page');
	const layouts: Dialog_Layout[] = ['centered', 'page'];

	let items: object[] = $state([]);
	const remove_item = (item: object) => {
		items = items.filter((i) => i !== item);
	};
	const add_item = () => {
		items = items.concat({});
	};
	const reset_items = () => {
		items = [];
	};

	const dialogs = writable([] as Dialog_Params[]);
	const add_dialogs = (count: number) => {
		const to_text = (index: number) => '!'.repeat(count * 3 - index * 3);
		$dialogs = Array.from({length: count}, (_, i) =>
			to_dialog_params(Text, {
				text: to_text(i),
				font_size: 'var(--size_xl4)',
				padding: 'var(--space_sm) var(--space_lg)',
			}),
		);
	};
</script>

<Tome_Detail {tome}>
	<div slot="header"><h2>{tome.name}</h2></div>
	<div class="prose w_100">
		<Code
			content={`<button on:click={() => (opened = true)}>
	open a dialog
</button>
{#if opened}
	<Dialog
		let:close
		onclose={() => (opened = false)}
	>
		<div class="pane prose p_xl box">
			<h1>attention</h1>
			<p>this is a dialog</p>
			<button on:click={close}> ok </button>
		</div>
	</Dialog>
{/if}`}
		/>
		<button on:click={() => (opened = true)}> open a dialog </button>
		<hr />
		<button on:click={() => (dialog_overflowing_opened = true)}
			>open a dialog that overflows vertically</button
		>
		<hr />
		<button on:click={() => (dialog_layout_page_opened = true)}
			>open a dialog with <code>layout="page"</code> instead of the default
			<code>layout='centered'</code></button
		>
		<hr />
		<button on:click={() => (dialog_nested_1_opened = true)}
			>open a dialog containing another dialog</button
		>
		<hr />
		<button on:click={() => add_dialogs(5)}>open many dialogs</button>
		<hr />
	</div>
</Tome_Detail>
{#if opened}
	<Dialog let:close onclose={() => (opened = false)}>
		<div class="pane prose p_xl box">
			<h1>attention</h1>
			<p>this is a dialog</p>
			<button on:click={close}> ok </button>
		</div>
	</Dialog>
{/if}
{#if dialog_overflowing_opened}
	<Dialog let:close onclose={() => (dialog_overflowing_opened = false)}>
		<div class="pane prose p_xl">
			<h1>attention</h1>
			{#each {length: 120} as _}
				<p>this is a dialog that overflows vertically</p>
			{/each}
			<button on:click={close}> close </button>
		</div>
	</Dialog>
{/if}
{#if dialog_layout_page_opened}
	<Dialog
		onclose={() => ((dialog_layout_page_opened = false), reset_items())}
		let:close
		layout={selected_layout}
	>
		<div class="pane prose p_xl width_md">
			<h1>attention</h1>
			{#if selected_layout === 'page'}
				<p>
					This is a <code>Dialog</code> with
					<code
						>layout="<select class="inline" bind:value={selected_layout}
							>{#each dialog_layouts as layout}
								<option value={layout}>{layout}</option>
							{/each}
						</select>"</code
					>.
				</p>
				<p>
					Instead of being centered by default, the dialog's contents are aligned to the top of the
					page and grow downward. It's useful when the dialog's contents change in height.
				</p>
			{:else if selected_layout === 'centered'}
				<p>
					This is a <code>Dialog</code> with
					<code
						>layout="<select class="inline" bind:value={selected_layout}
							>{#each dialog_layouts as layout}
								<option value={layout}>{layout}</option>
							{/each}
						</select>"</code
					>, the default value.
				</p>
				<p>
					It's often the best choice, but it can be undesirable in some situations, like when the
					height of the content changes as the user does things, leading to a janky experience.
				</p>
			{:else}
				<Alert status="error">eek a bug! unknown layout "{selected_layout}"</Alert>
			{/if}
			<p>
				<button class="inline" on:click={() => add_item()}>add item</button>
				<button class="inline" disabled={!items.length} on:click={() => reset_items()}
					>remove all</button
				>
			</p>
			{#each items as item (item)}
				<p transition:slide>
					<button class="inline" on:click={() => remove_item(item)}>✕</button>
					new stuff appears {#if selected_layout === 'page'}gracefully{:else if selected_layout === 'centered'}ungracefully{/if}
				</p>
			{/each}
			<hr />
			<form class="box">
				<div class="mb_lg">
					{#each layouts as layout}
						<label class="row">
							<input type="radio" bind:group={selected_layout} value={layout} />
							{layout}
						</label>
					{/each}
				</div>
				<button type="button" on:click={close}> close </button>
			</form>
		</div>
	</Dialog>
{/if}
{#if dialog_nested_1_opened}
	<Dialog onclose={() => (dialog_nested_1_opened = false)}>
		<div class="pane prose p_xl">
			<h1>dialog 1</h1>
			<p>dialogs can open more dialogs</p>
			<button on:click={() => (dialog_nested_2_opened = true)}>open another dialog</button>
		</div>
	</Dialog>
{/if}
{#if dialog_nested_2_opened}
	<Dialog onclose={() => (dialog_nested_2_opened = false)}>
		<div class="pane prose p_xl">
			<h1>dialog 2</h1>
			<p>this dialog can open more dialogs</p>
			<p>this is the second dialog</p>
			<button on:click={() => (dialog_nested_3_opened = true)}>open another dialog</button>
		</div>
	</Dialog>
{/if}
{#if dialog_nested_3_opened}
	<Dialog onclose={() => (dialog_nested_3_opened = false)}>
		<div class="pane prose p_xl" style:margin-bottom="var(--space_xl3)">
			<h1>3 dialogs!</h1>
			<button on:click={() => (dialog_nested_3_opened = false)}>close dialog</button>
		</div>
		<div class="pane prose p_xl">
			<h1>and another <code>.pane</code></h1>
			<button
				on:click={() => {
					dialog_nested_1_opened = dialog_nested_2_opened = dialog_nested_3_opened = false;
				}}>close all dialogs</button
			>
		</div>
	</Dialog>
{/if}
<Dialogs
	{dialogs}
	onclose={() => {
		$dialogs = $dialogs.slice(0, -1);
	}}
	let:dialog
	><div class="pane">
		<svelte:component this={dialog.Component} {...dialog.props} />
	</div>
</Dialogs>

<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import Code from '@ryanatkn/fuz_code/Code.svelte';

	import {swallow} from '$lib/swallow.js';
	import Copy_To_Clipboard from '$lib/Copy_To_Clipboard.svelte';
	import Dialog from '$lib/Dialog.svelte';
	import {render_theme_style, type Style_Variable, type Theme} from '$lib/theme.js';
	import Style_Variable_Detail from '$routes/Style_Variable_Detail.svelte';

	// TODO @multiple add to $lib?

	// TODO should this be merged with `Theme_Input`?

	const dispatch = createEventDispatcher<{save: Theme}>();

	// TODO add UI to change the tint hue/saturation

	export let theme: Theme | null = null; // `null` means creating

	let new_name = theme ? theme.name : 'new theme';
	let new_variables = theme ? theme.variables : []; // TODO `updateVariables` to `Style_Variable_Detail` ?

	let new_theme: Theme;
	$: new_theme = {name: new_name, variables: new_variables};

	$: code = render_theme_style(new_theme, {empty_default_theme: false, specificity: 1});

	$: light_count = new_variables.reduce((c, v) => (v.light ? c + 1 : c), 0);
	$: dark_count = new_variables.reduce((c, v) => (v.dark ? c + 1 : c), 0);

	let selected_variable: Style_Variable | null = null;

	const save = (): void => {
		if (!changed) return;
		dispatch('save', new_theme);
	};

	const edit_variable = (e: MouseEvent, variable: Style_Variable): void => {
		swallow(e);
		selected_variable = variable;
		new_variables = new_variables.slice(); // TODO
	};

	const add_variable = (e: MouseEvent) => {
		swallow(e);
		alert('TODO'); // eslint-disable-line no-alert
	};

	$: editing = !!theme;
	$: changed = theme ? new_name !== theme.name || new_variables !== theme.variables : true;
</script>

<div class="theme_form">
	<div class="prose">
		<h2 class="text_align_center">
			{#if editing}edit{:else}create{/if} theme
		</h2>
	</div>
	<header>
		<div class="variables_header">
			<div class="prose">
				<p>variables: {light_count} light, {dark_count} dark</p>
			</div>
			<button type="button" class="w_100" on:click={add_variable}>add a variable</button>
		</div>
		<form>
			<label>
				<div class="title">name</div>
				<input bind:value={new_name} placeholder=">" />
			</label>
			<button type="button" on:click={save} disabled={!changed}
				>{#if editing}save changes{:else}create theme{/if}</button
			>
		</form>
	</header>
	<div class="content">
		<div class="variables">
			{#each new_variables as variable (variable.name)}
				<button
					type="button"
					class="variable menu_item"
					on:click={(e) => edit_variable(e, variable)}>--{variable.name}</button
				>
			{/each}
		</div>
		<div class="rendered">
			{#if code}
				<div class="copy">
					<Copy_To_Clipboard text={code} />
				</div>
				<Code content={code} lang="css" />
			{/if}
		</div>
	</div>
</div>
{#if selected_variable}
	<Dialog on:close={() => (selected_variable = null)} let:close>
		<div class="pane">
			<div class="panel p_lg box">
				<Style_Variable_Detail variable={selected_variable} />
				<br />
				<aside>this is unfinished</aside>
				<br />
				<button on:click={close}>ok</button>
			</div>
		</div>
	</Dialog>
{/if}

<style>
	.theme_form {
		width: 100%;
	}
	header {
		display: flex;
		gap: 1rem;
		margin-bottom: var(--space_md);
	}
	.variables_header,
	form {
		flex: 1;
	}
	.content {
		display: flex;
	}
	.variables {
		padding-right: var(--space_sm);
	}
	.variable {
		min-height: var(--icon_size_sm);
		width: var(--style_variable_name_width, 240px);
	}
	.rendered {
		position: relative; /* for the .copy button */
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: auto;
	}
	/* TODO this is hacky, maybe pass classes to `Code`? or what else? */
	.rendered :global(.code_example) {
		width: 100%;
	}
	.copy {
		position: absolute;
		top: var(--space_md);
		right: var(--space_md);
	}
</style>

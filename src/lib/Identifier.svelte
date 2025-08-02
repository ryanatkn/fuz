<script lang="ts">
	import {DEV} from 'esm-env';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';
	import type {Src_Module, Src_Module_Declaration} from '@ryanatkn/belt/src_json.js';
	import type {Pkg} from '@ryanatkn/belt/pkg.js';

	import {pkg_context} from '$lib/pkg.js';

	interface Props {
		name: string;
		code_attrs?: SvelteHTMLElements['code_attrs'];
		attrs?: SvelteHTMLElements['a'];
		children?: Snippet;
	}

	const {name, code_attrs, attrs, children}: Props = $props();

	if (DEV && code_attrs && children) {
		// eslint-disable-next-line no-console
		console.error(
			'Identifier: code_attrs and children cannot be used together. Use one or the other.',
		);
	}

	const pkg: Pkg = pkg_context.get();

	/**
	 * Searches for the identifier name in package metadata.
	 * Returns true if the identifier exists in the package modules.
	 */
	const find_identifier = (
		name: string,
		pkg: Pkg,
		// TODO type
	): undefined | {src_module: Src_Module; declaration: Src_Module_Declaration} => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (!pkg?.src_json?.modules) {
			return undefined;
		}

		// Check if name exists in any module's declarations
		for (const src_module_key of Object.keys(pkg.src_json.modules)) {
			const src_module = pkg.src_json.modules[src_module_key];
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
			const declaration = src_module?.declarations?.find((decl) => decl.name === name);
			if (declaration) {
				return {src_module, declaration};
			}
		}

		return undefined;
	};

	const identifier = find_identifier(name, pkg);

	// TODO embed the code info instead of linking to Github
</script>

{#if identifier}
	<a {...attrs} href="{pkg.repo_url}/blob/main/src/lib/{identifier.src_module.path}">
		{#if children}
			{@render children()}
		{:else}
			<code {...code_attrs}>{name}</code>
		{/if}</a
	>
{:else if children}
	{@render children()}
{:else}
	<code {...code_attrs}>{name}</code>
{/if}

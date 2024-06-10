<script lang="ts">
	import type {Snippet} from 'svelte';

	interface Props {
		slug: string;
		children?: Snippet;
	}

	const {slug, children}: Props = $props();
</script>

<a class="hashlink" href="#{slug}" aria-label="hashlink"
	>{#if children}{@render children()}{:else}#{/if}</a
>
<span class="hashlink_scroll_target" id={slug} aria-hidden="true"></span>

<style>
	/* TODO @multiple how can this be done generically so it's composable? currently using `:global` at usage site - ideally we'd continue to use :hover instead of JS */
	/* .some_parent:hover :global(.hashlink) { opacity: 1; } .some_parent { position: relative; } */

	.hashlink {
		font-size: var(--size_lg);
		padding: 0 var(--space_sm);
		margin-left: var(--space_sm);
		opacity: 0;
		transition: opacity var(--duration_2);
	}

	.hashlink_scroll_target {
		position: absolute;
		top: calc(var(--size, var(--size_md)) * -4);
		left: 0;
	}

	/* sync this breakpoint with `Library` */
	@media (max-width: 800px) {
		.hashlink {
			opacity: 1;
		}
	}
</style>

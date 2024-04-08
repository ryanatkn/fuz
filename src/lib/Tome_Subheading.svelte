<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		slug: string;
		attrs?: SvelteHTMLElements['h3'];
		children: Snippet;
	}

	const {slug, attrs, children}: Props = $props();
</script>

<h3 {...attrs}>
	<a href="#{slug}" aria-label="permalink">🔗</a>
	<span class="permalink_scroll_target" id={slug} aria-hidden="true" />
	{@render children()}
</h3>

<style>
	h3 {
		position: relative;
	}
	h3:hover a {
		opacity: 1;
	}

	a {
		font-size: var(--size_lg);
		position: absolute;
		left: -3.5rem;
		top: 0.4rem;
		opacity: 0;
		transition: opacity var(--duration_1);
	}

	.permalink_scroll_target {
		position: absolute;
		top: -10rem;
		left: 0;
	}

	/* sync this breakpoint with `Library` */
	@media (max-width: 1000px) {
		a {
			font-size: var(--size_md);
			left: -2.6rem;
			top: 0.7rem;
		}
	}

	/* sync this breakpoint with `Library` */
	@media (max-width: 800px) {
		a {
			opacity: 1;
		}
	}
</style>

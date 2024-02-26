<div class="library_panel panel">
	<slot />
</div>

<style>
	.library_panel {
		overflow: hidden;
		padding: var(--library_panel_padding, var(--space_lg));
		/* This margin matches the padding between the library menu and main content. */
		margin-bottom: calc(var(--space_md) + var(--space_sm));
	}
</style>

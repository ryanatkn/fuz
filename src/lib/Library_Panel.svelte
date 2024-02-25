<div class="library_panel panel">
	<slot />
</div>

<style>
	.library_panel {
		overflow: hidden;
		padding: var(--library_panel_padding, var(--spacing_lg));
		/* This margin matches the padding between the library menu and main content. */
		margin-bottom: calc(var(--spacing_md) + var(--spacing_sm));
	}
</style>

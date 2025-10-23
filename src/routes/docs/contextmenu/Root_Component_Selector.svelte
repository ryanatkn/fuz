<script lang="ts">
	import {selected_contextmenu_root_component_context} from '$routes/docs/contextmenu/selected_root_component.svelte.js';

	const selected_root_component = selected_contextmenu_root_component_context.get();
</script>

<fieldset>
	<legend><h4>Selected root component</h4></legend>
	<label class="row">
		<input type="radio" bind:group={selected_root_component.variant} value="standard" />
		<div>standard <code>Contextmenu_Root</code></div>
	</label>
	<label class="row">
		<input type="radio" bind:group={selected_root_component.variant} value="compat" />
		<div>iOS compat <code>Contextmenu_Root_For_Safari_Compatibility</code></div>
	</label>
</fieldset>

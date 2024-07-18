<script lang="ts">
	import Alert from '$lib/Alert.svelte';
	import {alert_status_options} from '$lib/alert.js';
	import {Dimensions} from '$lib/dimensions.svelte.js';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
</script>

<main class="box w_100">
	{alert_status_options.inform}
	<Alert status="inform">alert</Alert>
	{Dimensions.toString()}
	<Code content="<div>code</div>" />
</main>

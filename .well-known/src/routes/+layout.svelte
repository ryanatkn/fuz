<script lang="ts">
	import '$lib/style.css';
	import '$lib/theme.css';
	import '@ryanatkn/fuz_code/prism.css';

	import {set_devmode} from '$lib/devmode.js';
	import Devmode_Controls from '$lib/Devmode_Controls.svelte';

	import Themed from '$lib/Themed.svelte';

	const devmode = set_devmode(false);
</script>

<Themed>
	<slot />
</Themed>
<Devmode_Controls {devmode} />

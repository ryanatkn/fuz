<script lang="ts">
	import {base} from '$app/paths';

	// TODO add contextmenu behavior

	export let name: string; // TODO type, generate from `tomes`?

	// TODO active state
</script>

<code {...$$restProps}><a href="{base}/library/{name}"><slot>{name}</slot></a></code>

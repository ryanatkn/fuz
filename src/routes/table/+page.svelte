<script lang="ts">
	import {get_deployments} from '@ryanatkn/fuz_gitops/deployments.js';
	import Table_Page from '@ryanatkn/fuz_gitops/Table_Page.svelte';

	const {deployment, deployments} = get_deployments();
</script>

<Table_Page {deployment} {deployments} />

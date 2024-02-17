<script lang="ts">
	import {get_deployments} from '@ryanatkn/fuz_gitops/deployments.js';
	import Pull_Requests_Page from '@ryanatkn/fuz_gitops/Pull_Requests_Page.svelte';

	const {deployment, deployments, unfetched_deployments} = get_deployments();
</script>

<Pull_Requests_Page
	{deployment}
	{deployments}
	{unfetched_deployments}
	filter_pull_request={(pull) => pull.user.login === 'ryanatkn'}
/>

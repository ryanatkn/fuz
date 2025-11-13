<script lang="ts">
	import type {Snippet} from 'svelte';

	type Status = 'idle' | 'loading' | 'success' | 'error';

	interface User {
		id: number;
		name: string;
	}

	interface Props {
		/** Current status */
		status: Status;
		/** User data */
		user: User | null;
		/** Callback function */
		onclick?: (event: MouseEvent) => void;
		/** Snippet for custom content */
		children?: Snippet;
		/** Array of items */
		items?: Array<string>;
	}

	let {status, user, onclick, children, items}: Props = $props();
</script>

<button {onclick}>
	Status: {status}
	{#if user}User: {user.name}{/if}
	{#if children}{@render children()}{/if}
	{#if items}{items.join(', ')}{/if}
</button>

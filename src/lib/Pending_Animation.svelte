<script lang="ts">
	import type {HTMLAttributes} from 'svelte/elements';

	interface Props {
		running?: boolean;
		attrs?: HTMLAttributes<HTMLDivElement>;
	}

	const {running = true, attrs} = $props<Props>();
</script>

<div {...attrs} class:pending_animation={true}>
	<span class:running style="animation-delay: 0s"><slot index={0}>•</slot></span>
	<span class:running style="animation-delay: 0.09s"><slot index={1}>•</slot></span>
	<span class:running style="animation-delay: 0.3s"><slot index={2}>•</slot></span>
</div>

<style>
	.pending_animation {
		/* TODO upstream to style.css? or maybe delete and manually put them as fallbacks below? */
		--scale_x: 0.42;
		--scale_y: 0.42;
		--scale_z: 0.42;
		display: flex;
	}
	span {
		transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		animation: dot var(--animation_duration, var(--duration_5, 1.5s)) infinite paused;
	}
	.running {
		animation-play-state: running;
	}
	@keyframes dot {
		0% {
			transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		}
		71% {
			transform: scale3d(1, 1, 1);
		}
		100% {
			transform: scale3d(var(--scale_x), var(--scale_y), var(--scale_z));
		}
	}
</style>

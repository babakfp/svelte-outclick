<script>
	import { navigating } from "$app/stores"
	export let delay = 250
	let delayedPreloading = false
	$: setTimeout(() => (delayedPreloading = !!$navigating), delay)
</script>

{#if delayedPreloading}
	<div class="loading-bar bg-white bg-opacity-40">
		<div class="loading-bar__train bg-white" />
	</div>
{/if}

<style lang="postcss">
	.loading-bar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background-clip: padding-box;
		overflow: hidden;
		z-index: 999;
	}
	.loading-bar .loading-bar__train:before,
	.loading-bar .loading-bar__train:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		will-change: left, right;
		@apply bg-white bg-opacity-80;
	}
	.loading-bar .loading-bar__train:before {
		animation: loading-bar__train 2100ms
			cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
	}
	.loading-bar .loading-bar__train:after {
		animation: loading-bar__train-short 2100ms
			cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
		animation-delay: 1.15s;
	}
	@keyframes loading-bar__train {
		0% {
			left: -35%;
			right: 100%;
		}
		60% {
			left: 100%;
			right: -90%;
		}
		100% {
			left: 100%;
			right: -90%;
		}
	}
	@keyframes loading-bar__train-short {
		0% {
			left: -200%;
			right: 100%;
		}
		60% {
			left: 107%;
			right: -8%;
		}
		100% {
			left: 107%;
			right: -8%;
		}
	}
</style>

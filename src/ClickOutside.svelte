<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let excludedElements = []
	export { excludedElements as exclude }
	let slotWraper

	let className
	export { className as class }

	const isExcluded = eventTarget => {
		return excludedElements.includes(eventTarget)
	}

	const isSlotWraper = eventTarget => {
		return slotWraper.contains(eventTarget)
	}

	const onWindowClick = event => {
		if (!isSlotWraper(event.target) && !isExcluded(event.target)) {
			dispatch('clickOutside')
		}
	}
</script>

<svelte:window on:click={onWindowClick} />

<div class={className} bind:this={slotWraper}>
	<slot />
</div>

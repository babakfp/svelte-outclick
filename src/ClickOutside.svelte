<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	let excludedElements = []
	export { excludedElements as exclude }

	// The element that wraps all elements that goes inside the slot.
	let wrapper

	let className
	export { className as class }

	const isClickedOnExcluded = eventTarget => {
		let status = false

		for (let i = 0; i < excludedElements.length; i++) {
			if ( excludedElements[i].contains(eventTarget) ) {
				status = true
				break
			}
		}

		return status
	}

	const onWindowClick = event => {
		if (
			! wrapper.contains(event.target) &&
			! isClickedOnExcluded(event.target)
		) {
			dispatch('clickOutside')
		}
	}
</script>

<svelte:window on:click={onWindowClick} />

<div class={className} bind:this={wrapper}>
	<slot />
</div>

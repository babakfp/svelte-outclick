<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	// DOM elements that get excluded from the event target.
	let excludedElements = []
	export { excludedElements as exclude }

	// A real class name attr as prop.
	let className
	export { className as class }
	
	// Using CSS `display: contents` to somehow ignore the wrapper element.
	export let disableWrapper = true
	
	// DOM element that wraps all stuff that goes inside the component slot.
	let wrapper

	// Whether the excluded elements contain the event target or not.
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
			dispatch('outclick')
		}
	}
</script>

<!-- We have this to capture the window on click event. -->
<svelte:window on:click={onWindowClick} />

<div
	bind:this={wrapper}
	class={className}
	style={disableWrapper && 'display: contents'}
>
	<slot />
</div>

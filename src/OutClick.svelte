<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	// DOM elements that get excluded from the event target.
	let excludeds = []
	export { excludeds as exclude }

	// A real class name attr as prop.
	let className = ''
	export { className as class }

	// Using CSS `display: contents` to somehow ignore the wrapper element.
	export let useWrapper = false

	// If true, wrapper(self) can contain event target.
	// You can use it to close the menu when clicked on the menu itself.
	export let includeSelf = false
	
	// DOM element that wraps all stuff that goes inside the component slot.
	let wrapper

	// Whether the excluded elements contain the event target or not.
	const isClickedOnExcluded = eventTarget => {
		let status = false

		for (let i = 0; i < excludeds.length; i++) {
			if ( excludeds[i].contains(eventTarget) ) {
				status = true
				break
			}
		}

		return status
	}

	const windowClick = event => {
		if (
			(includeSelf ? true : ! wrapper.contains(event.target)) &&
			! isClickedOnExcluded(event.target)
		) {
			dispatch('outclick', {
				wrapper,
			})
		}
	}
</script>

<!-- We have this to capture the window on click event. -->
<svelte:window on:click={windowClick} />

<div
	bind:this={wrapper}
	class="outclick-wrapper {className}"
	style={useWrapper ? '' : 'display: contents'}
>
	<slot />
</div>

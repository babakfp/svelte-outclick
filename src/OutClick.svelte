<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	export let tag = "div"

	// To use it as HTML `class` attr
	let className = null
	export { className as class }

	// Some DOM elements to exclude them from triggering the `outclick` event
	export let excludeByDomNode = []
	export let excludeByQuerySelector = []

	// Whether the component content can contain the event's target or not
	export let includeSelf = false

	// Should outclick event happen on pointerdown or (pointerdown + pointerup)
	export let fullClick = true

	// Using this to handle full click functionality, simulating the click event without the dragging issue: https://github.com/babakfp/svelte-outclick/issues/4
	let didPointerdownOut = false

	// DOM element that wraps all stuff that goes inside the component's <slot />
	let wrapper

	// Whether the excluded elements contain the event's target or not
	const isClickedOnExcluded = eventTarget => {
		let status = false

		for (let i = 0; i < excludeByDomNode.length; i++) {
			if (excludeByDomNode[i] && excludeByDomNode[i].contains(eventTarget)) {
				status = true
				break
			}
		}

		for (let i = 0; i < excludeByQuerySelector.length; i++) {
			let el = document.querySelector(excludeByQuerySelector[i])
			if (el && el.contains(eventTarget)) {
				status = true
				break
			}
		}

		return status
	}

	const didOutsideEventHappen = event => {
		if (
			(includeSelf && wrapper.contains(event.target)) ||
			(!wrapper.contains(event.target) && !isClickedOnExcluded(event.target))
		) {
			return true
		}

		return false
	}

	const handlePointerdown = event => {
		if (didOutsideEventHappen(event)) {
			if (fullClick) {
				didPointerdownOut = true
			} else {
				dispatch("outclick", { wrapper })
			}
		}
	}

	const handlePointerup = event => {
		if (!fullClick) return
		if (didOutsideEventHappen(event) && didPointerdownOut) {
			dispatch("outclick", { wrapper })
		}
		didPointerdownOut = false
	}

	const handleKeydown = event => {
		if (
			// With `on:click`, the A11Y `keydown` event doesn't trigger on `document.body`, so we are just duplicating the same behavior here.
			event.target !== document.body &&
			// With `on:click`, the A11Y `keydown`, only these keys trigger the event
			["Enter", "NumpadEnter", "Space"].includes(event.code)
		) {
			if (didOutsideEventHappen(event)) {
				dispatch("outclick", { wrapper })
			}
		}
	}
</script>

<!-- We have this to capture the window on pointerdown and keydown event. -->
<svelte:window
	on:pointerdown={handlePointerdown}
	on:pointerup={handlePointerup}
	on:keydown={handleKeydown}
/>

<svelte:element
	this={tag}
	bind:this={wrapper}
	class={className}
	style={!className ? "display: contents" : null}
	{...$$restProps}
>
	<slot />
</svelte:element>

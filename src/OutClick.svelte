<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	// Wrapper tag
	export let tag = "div"

	// To use it as HTML `class` attr
	let className = null
	export { className as class }

	// DOM elements to exclude from triggering the `outclick` event
	export let excludeElements = null
	export let excludeQuerySelectorAll = null

	// Now the user can enter a single element or an array of elements. `excludeElements={element}` or `excludeElements={[element1, element2]}`
	$: excludeElements = castArray(excludeElements)

	// If the wrapper did contain the event target, allow the `outclick` event to dispatch
	export let includeSelf = false

	// Should the outclick event happen on (`pointerdown`) or (`pointerdown` + `pointerup`)
	export let halfClick = false

	// Using to handle full-click functionality. Simulating the core click event without having this issue: https://github.com/babakfp/svelte-outclick/issues/4
	let isPointerdownTriggered = false

	// DOM element that wraps everything that goes inside the component slot
	let wrapper

	const isExcludedElementsContainTheEventTarget = eventTarget => {
		let status = false

		for (const element of excludeElements) {
			if (element && element.contains(eventTarget)) {
				status = true
				break
			}
		}

		if (
			excludeQuerySelectorAll &&
			((typeof excludeQuerySelectorAll === "string" && excludeQuerySelectorAll !== "") ||
				(typeof Array.isArray(excludeQuerySelectorAll) && excludeQuerySelectorAll.length > 0))
		) {
			const elements = document.querySelectorAll(excludeQuerySelectorAll)
			for (const element of elements) {
				if (element.contains(eventTarget)) {
					status = true
					break
				}
			}
		}

		return status
	}

	const isOutsideEventHappen = eventTarget => {
		if (
			(includeSelf && wrapper.contains(eventTarget)) ||
			(!wrapper.contains(eventTarget) && !isExcludedElementsContainTheEventTarget(eventTarget))
		) {
			return true
		}

		return false
	}

	const handlePointerdown = event => {
		if (isOutsideEventHappen(event.target)) {
			if (halfClick) {
				dispatch("outclick", { wrapper })
			} else {
				isPointerdownTriggered = true
			}
		}
	}

	const handlePointerup = event => {
		if (halfClick) return
		if (isOutsideEventHappen(event.target) && isPointerdownTriggered) {
			dispatch("outclick", { wrapper })
		}
		isPointerdownTriggered = false
	}

	const handleKeydown = event => {
		if (
			// With `on:click`, the A11Y `keydown` event doesn't trigger on `document.body`, so we are just duplicating the same behavior here.
			event.target !== document.body &&
			// With `on:click`, the A11Y `keydown`, only these keys trigger the event
			["Enter", "NumpadEnter", "Space"].includes(event.code)
		) {
			if (isOutsideEventHappen(event.target)) {
				dispatch("outclick", { wrapper })
			}
		}
	}

	function castArray(value) {
		return Array.isArray(value) ? value : [value]
	}
</script>

<!-- Have this to capture the events -->
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

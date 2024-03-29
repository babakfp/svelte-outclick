<script lang="ts">
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher<{
        outclick: { target: HTMLElement }
    }>()

    type Detail = Parameters<typeof dispatch>[1]

    // Wrapper tag
    export let tag: string = "div"

    // To use it as HTML `class` attr
    let className: string = ""
    export { className as class }

    // DOM elements to exclude from triggering the `outclick` event
    export let excludeElements: HTMLElement | HTMLElement[] = []
    export let excludeQuerySelectorAll: string = ""

    // Now the user can enter a single element or an array of elements. `excludeElements={element}` or `excludeElements={[element1, element2]}`
    $: excludeElementsArray = excludeElements ? castArray(excludeElements) : []

    // If the wrapper did contain the event target, allow the `outclick` event to dispatch
    export let includeSelf: boolean = false

    // Should the outclick event happen on (`pointerdown`) or (`pointerdown` + `pointerup`)
    export let halfClick: boolean = false

    // Using to handle full-click functionality. Simulating the core click event without having this issue: https://github.com/babakfp/svelte-outclick/issues/4
    let isPointerdownTriggered: boolean = false

    // DOM element that wraps everything that goes inside the component slot
    let wrapper: HTMLElement

    const didClickOnExcludedElement = (target: Detail["target"]): boolean => {
        let status: boolean = false

        if (excludeElementsArray && excludeElementsArray.length > 0) {
            for (const element of excludeElementsArray) {
                if (element && element.contains(target)) {
                    status = true
                    break
                }
            }
        }

        if (excludeQuerySelectorAll) {
            const elements = document.querySelectorAll(excludeQuerySelectorAll)
            for (const element of elements) {
                if (element && element.contains(target)) {
                    status = true
                    break
                }
            }
        }

        return status
    }

    const isOutsideEventHappen = (target: Detail["target"]): boolean => {
        if (
            (includeSelf && wrapper.contains(target)) ||
            (!wrapper.contains(target) && !didClickOnExcludedElement(target))
        ) {
            return true
        }

        return false
    }

    const handlePointerdown = (e: PointerEvent): void => {
        const target = e.target as Detail["target"]

        if (isOutsideEventHappen(target)) {
            if (halfClick) {
                dispatch("outclick", { target })
            } else {
                isPointerdownTriggered = true
            }
        }
    }

    const handlePointerup = (e: PointerEvent): void => {
        const target = e.target as Detail["target"]

        if (halfClick) return

        if (isOutsideEventHappen(target) && isPointerdownTriggered) {
            dispatch("outclick", { target })
        }

        isPointerdownTriggered = false
    }

    const handleKeydown = (e: KeyboardEvent): void => {
        const target = e.target as Detail["target"]

        if (
            // With `on:click`, the A11Y `keydown` event doesn't trigger on `document.body`, so we are just duplicating the same behavior here.
            target !== document.body &&
            // With `on:click`, the A11Y `keydown`, only these keys trigger the event
            ["Enter", "NumpadEnter", "Space"].includes(e.code)
        ) {
            if (isOutsideEventHappen(target)) {
                dispatch("outclick", { target })
            }
        }
    }

    function castArray(value: any): any[] {
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
    class={className || undefined}
    style={!className ? "display: contents" : null}
    {...$$restProps}
>
    <slot />
</svelte:element>

<script lang="ts">
    import { type Snippet } from "svelte"
    import { castArray } from "./castArray.js"
    import type { OutClickEvent } from "./OutClickEvent.js"

    const {
        tag = "div",
        class: class_,
        excludeElements,
        excludeQuerySelectorAll,
        includeSelf,
        halfClick,
        children,
        onOutClick,
        ...restProps
    }: {
        /** Wrapper tag. */
        tag?: string
        /** To use it as HTML `class` attr. */
        class?: string
        /** DOM elements to exclude from triggering the `outclick` event. */
        excludeElements?: HTMLElement | HTMLElement[]
        /** DOM elements to exclude from triggering the `outclick` event. */
        excludeQuerySelectorAll?: string
        /** If the wrapper did contain the event target, allow the `outclick` event to dispatch. */
        includeSelf?: boolean
        /** Should the outclick event happen on (`pointerdown`) or (`pointerdown` + `pointerup`). */
        halfClick?: boolean
        /** The component children. */
        children: Snippet
        /** The main `onOutClick` event handler. */
        onOutClick?: (event: OutClickEvent) => void
        /** Any other props (`restProps`). */
        [key: string]: any
    } = $props()

    /** The developer can enter a single element or an array of elements. `excludeElements={element}` or `excludeElements={[element1, element2]}`. */
    const excludeElementsArray = $derived<HTMLElement[]>(
        excludeElements ? castArray(excludeElements) : [],
    )

    /** Using to handle full-click functionality. Simulating the core click event without having this issue: https://github.com/babakfp/svelte-outclick/issues/4. */
    let isPointerDownTriggered = false

    /** DOM element that wraps everything that goes inside the component slot. */
    let wrapper = $state<HTMLElement>()

    const didClickOnExcludedElement = (
        target: OutClickEvent["target"],
    ): boolean => {
        if (!(target instanceof Node)) return false

        let status = false

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

    const isOutsideEventHappen = (target: OutClickEvent["target"]): boolean => {
        if (!wrapper) return false
        if (!(target instanceof Node)) return false

        if (
            (includeSelf && wrapper.contains(target)) ||
            (!wrapper.contains(target) && !didClickOnExcludedElement(target))
        ) {
            return true
        }

        return false
    }

    const handlePointerdown = (e: PointerEvent): void => {
        if (isOutsideEventHappen(e.target)) {
            if (halfClick) {
                onOutClick?.(e)
            } else {
                isPointerDownTriggered = true
            }
        }
    }

    const handlePointerup = (e: PointerEvent): void => {
        if (halfClick) return

        if (isOutsideEventHappen(e.target) && isPointerDownTriggered) {
            onOutClick?.(e)
        }

        isPointerDownTriggered = false
    }

    const handleKeydown = (e: KeyboardEvent): void => {
        if (
            // With `on:click`, the A11Y `keydown` event doesn't trigger on `document.body`, so we are just duplicating the same behavior here.
            e.target !== document.body &&
            // With `on:click`, the A11Y `keydown`, only these keys trigger the event
            ["Enter", "NumpadEnter", "Space"].includes(e.code)
        ) {
            if (isOutsideEventHappen(e.target)) {
                onOutClick?.(e)
            }
        }
    }
</script>

<!-- Have this to capture the events -->
<svelte:window
    onpointerdown={handlePointerdown}
    onpointerup={handlePointerup}
    onkeydown={handleKeydown}
/>

<svelte:element
    this={tag}
    bind:this={wrapper}
    class={class_ || undefined}
    style={class_ ? undefined : "display: contents"}
    {...restProps}
>
    {@render children()}
</svelte:element>

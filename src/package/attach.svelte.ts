import type { Attachment } from "svelte/attachments"
import { castArray } from "./castArray.js"
import type { OutClickEvent } from "./OutClickEvent.js"

type OnOutClickOnOutClick = (event: OutClickEvent) => void
type OnOutClickOptions = {
    /** DOM elements to exclude from triggering the `outclick` event. */
    excludeElements?: HTMLElement | HTMLElement[]
    /** DOM elements to exclude from triggering the `outclick` event. */
    excludeQuerySelectorAll?: string
    /** If the wrapper did contain the event target, allow the `outclick` event to dispatch. */
    includeSelf?: boolean
    /** Should the outclick event happen on (`pointerdown`) or (`pointerdown` + `pointerup`). */
    halfClick?: boolean
}

export const outClick = (
    onOutClick: OnOutClickOnOutClick,
    {
        excludeElements,
        excludeQuerySelectorAll,
        includeSelf,
        halfClick,
    }: OnOutClickOptions = {},
): Attachment => {
    console.log("onOutClick")

    return (wrapper) => {
        /** The developer can enter a single element or an array of elements. `excludeElements={element}` or `excludeElements={[element1, element2]}`. */
        const excludeElementsArray: HTMLElement[] = excludeElements
            ? castArray(excludeElements)
            : []

        /** Using to handle full-click functionality. Simulating the core click event without having this issue: https://github.com/babakfp/svelte-outclick/issues/4. */
        let isPointerDownTriggered = false

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
                const elements = document.querySelectorAll(
                    excludeQuerySelectorAll,
                )
                for (const element of elements) {
                    if (element && element.contains(target)) {
                        status = true
                        break
                    }
                }
            }

            return status
        }

        const isOutsideEventHappen = (
            target: OutClickEvent["target"],
        ): boolean => {
            if (!wrapper) return false
            if (!(target instanceof Node)) return false

            if (
                (includeSelf && wrapper.contains(target)) ||
                (!wrapper.contains(target) &&
                    !didClickOnExcludedElement(target))
            ) {
                return true
            }

            return false
        }

        const handlePointerdown = (e: PointerEvent): void => {
            if (isOutsideEventHappen(e.target)) {
                if (halfClick) {
                    onOutClick(e)
                } else {
                    isPointerDownTriggered = true
                }
            }
        }

        const handlePointerup = (e: PointerEvent): void => {
            if (halfClick) return

            if (isOutsideEventHappen(e.target) && isPointerDownTriggered) {
                onOutClick(e)
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
                    onOutClick(e)
                }
            }
        }

        window.addEventListener("pointerdown", handlePointerdown)
        window.addEventListener("pointerup", handlePointerup)
        window.addEventListener("keydown", handleKeydown)

        return () => {
            window.removeEventListener("pointerdown", handlePointerdown)
            window.removeEventListener("pointerup", handlePointerup)
            window.removeEventListener("keydown", handleKeydown)
        }
    }
}

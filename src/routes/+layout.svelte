<script lang="ts">
    import { navigating, page } from "$app/stores"
    import Counter from "$lib/Counter.svelte"
    import Menu from "$lib/Menu.svelte"
    import { description } from "$lib/description.js"
    import "../app.postcss"
    import { LoadingBar } from "svelte-loading-bar"
    import { fly } from "svelte/transition"

    $: {
        if (navigating) {
            // prettier-ignore
            if ($page.url.pathname === "/") {
				$description = `Click outside of COMPONENT CONTENT to increase the counter. The component captures the event for you, so you can for example use it to close a dropdown, a menu, or do whatever.`
			} else if ($page.url.pathname === "/exclude") {
				$description = "You can exclude some elements from triggering the event."
			} else if ($page.url.pathname === "/half-click") {
				$description = "Trigger the event on pointer-down instead of a full click action (pointer-down + pointer-up)."
			}
        }
    }
</script>

<LoadingBar />

<div class="relative flex items-center justify-between gap-4">
    <Counter />
    <Menu />
</div>

{#key $page.url.pathname}
    <div class="grid gap-2" in:fly={{ y: 64, duration: 300 }}>
        <slot />
    </div>

    {#if $description}
        <p
            class="text-xs leading-5 text-gray-400"
            in:fly={{ y: 32, duration: 300, delay: 100 }}
        >
            {@html $description}
        </p>
    {/if}
{/key}

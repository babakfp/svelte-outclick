<script lang="ts">
    import "../app.css"
    import type { Snippet } from "svelte"
    import { LoadingBar } from "svelte-loading-bar"
    import { fly } from "svelte/transition"
    import { navigating, page } from "$app/stores"
    import Counter from "$lib/Counter.svelte"
    import Menu from "$lib/Menu.svelte"

    let {
        children,
    }: {
        children: Snippet
    } = $props()

    let description = $state("Listen to clicks that happen outside.")
    $effect(() => {
        if (!navigating) return
        if ($page.url.pathname === "/exclude") {
            description = "Exclude elements from triggering the event."
        }
        if ($page.url.pathname === "/half-click") {
            description = "Trigger on pointer-down instead of full click."
        }
    })
</script>

<LoadingBar />

<div>
    <Menu />

    <div
        class="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-80 content-center gap-4 py-12 pb-24"
    >
        <div class="flex items-center gap-2">
            <Counter />
            <span class="text-xs text-gray-400">TIMES CLICKED OUTSIDE</span>
        </div>

        {#key $page.url.pathname}
            <div class="grid gap-2" in:fly={{ y: 64, duration: 300 }}>
                {@render children()}
            </div>

            {#if description}
                <p
                    class="text-xs leading-5 text-gray-400"
                    in:fly={{ y: 32, duration: 300, delay: 100 }}
                >
                    {@html description}
                </p>
            {/if}
        {/key}
    </div>
</div>

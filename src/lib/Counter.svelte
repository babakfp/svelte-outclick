<script lang="ts">
    import { fly } from "svelte/transition"
    import { count } from "./count.svelte.js"
</script>

<div
    class="flex h-8 w-8 items-center justify-center rounded bg-gray-800 text-xs font-medium"
>
    {#key count.value}
        <div
            class="absolute"
            in:fly={{ y: -32, duration: 500 }}
            out:fly={{ y: 32, duration: 500 }}
        >
            {count.value}
        </div>
    {/key}
</div>

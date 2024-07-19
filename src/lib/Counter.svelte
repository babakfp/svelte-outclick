<script lang="ts">
    import { fly } from "svelte/transition"
    import { count } from "$lib/count"
</script>

<div
    class="flex h-8 w-8 items-center justify-center rounded bg-gray-800 text-xs font-medium"
>
    {#key $count}
        <div
            class="absolute"
            in:fly={{ y: -32, duration: 500 }}
            out:fly={{ y: 32, duration: 500 }}
        >
            {$count}
        </div>
    {/key}
</div>

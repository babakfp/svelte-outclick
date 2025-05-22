<script lang="ts">
    import { outClick } from "svelte-outclick"
    import { count } from "$lib/count.svelte.js"
</script>

<div
    class="box box--blue"
    {@attach outClick(() => (count.value += 1), {
        excludeQuerySelectorAll: "#nothing-happens",
    })}
>
    COMPONENT
</div>

<div id="nothing-happens" class="box box--green">
    EXCLUDED (NOTHING HAPPENS)
</div>

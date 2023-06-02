<script lang="ts">
    import { count } from "$lib/count.js"
    import OutClick from "svelte-outclick"
</script>

<OutClick
    class="box bg-stripes-blue-400/10"
    on:outclick={() => $count++}
    excludeQuerySelectorAll="#nothing-happens"
>
    COMPONENT CONTENT
</OutClick>

<div id="nothing-happens" class="box bg-stripes-green-400/10">
    NOTHING HAPPENS
</div>

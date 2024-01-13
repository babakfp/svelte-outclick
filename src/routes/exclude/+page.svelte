<script lang="ts">
    import { count } from "$lib/count.js"
    import OutClick from "svelte-outclick"
</script>

<OutClick
    class="box box--blue"
    on:outclick={() => $count++}
    excludeQuerySelectorAll="#nothing-happens"
>
    COMPONENT
</OutClick>

<div id="nothing-happens" class="box box--green">
    EXCLUDED (NOTHING HAPPENS)
</div>

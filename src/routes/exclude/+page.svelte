<script lang="ts">
    import OutClick from "svelte-outclick"
    import { count } from "$lib/count"
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

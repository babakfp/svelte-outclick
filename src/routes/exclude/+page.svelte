<script lang="ts">
    import { OutClick } from "svelte-outclick"
    import { count } from "$lib/count.svelte.js"
</script>

<OutClick
    class="box box--blue"
    onOutClick={() => (count.value += 1)}
    excludeQuerySelectorAll="#nothing-happens"
>
    COMPONENT
</OutClick>

<div id="nothing-happens" class="box box--green">
    EXCLUDED (NOTHING HAPPENS)
</div>

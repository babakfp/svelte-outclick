<script lang="ts">
    import { count } from "$lib/count.js"
    import OutClick from "svelte-outclick"
</script>

<OutClick
    class="box bg-stripes-blue-400/10"
    halfClick={true}
    on:outclick={() => $count++}
>
    COMPONENT CONTENT
</OutClick>

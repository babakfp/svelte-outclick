<script lang="ts">
    import { count } from "$lib/count.js"
    import OutClick from "svelte-outclick"
</script>

<OutClick class="box" halfClick={true} on:outclick={() => $count++}>
    COMPONENT CONTENT
</OutClick>

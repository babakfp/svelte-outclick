<script lang="ts">
    import { count } from "$lib/count.js"
    import OutClick from "svelte-outclick"
</script>

<OutClick class="box box--blue" halfClick={true} on:outclick={() => $count++}>
    COMPONENT
</OutClick>

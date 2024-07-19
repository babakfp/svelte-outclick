<script lang="ts">
    import OutClick from "svelte-outclick"
    import { count } from "$lib/count"
</script>

<OutClick class="box box--blue" on:outclick={() => $count++}>
    COMPONENT
</OutClick>

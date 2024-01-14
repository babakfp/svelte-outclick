<script lang="ts">
    import { count } from "$lib/count"
    import OutClick from "svelte-outclick"
</script>

<OutClick class="box box--blue" on:outclick={() => $count++}>
    COMPONENT
</OutClick>

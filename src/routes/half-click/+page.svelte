<script lang="ts">
    import { OutClick } from "svelte-outclick"
    import { count } from "$lib/count.svelte.js"
</script>

<OutClick
    class="box box--blue"
    onOutClick={() => (count.value += 1)}
    halfClick={true}
>
    COMPONENT
</OutClick>

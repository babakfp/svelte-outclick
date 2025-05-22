<script lang="ts">
    import { outClick } from "svelte-outclick"
    import { count } from "$lib/count.svelte.js"
</script>

<div class="box box--blue" {@attach outClick(() => (count.value += 1))}>
    COMPONENT
</div>

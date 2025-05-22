<script lang="ts">
    import { count } from "$lib/count.svelte.js"
    import { outClick } from "../../package/attach.svelte.js"
</script>

<div class="box box--blue" {@attach outClick(() => (count.value += 1))}>
    COMPONENT
</div>

<script>
	import { count } from "$libd/count.js"
	import OutClick from "svelte-outclick"
</script>

<OutClick class="box" on:outclick={() => $count++}>COMPONENT CONTENT</OutClick>

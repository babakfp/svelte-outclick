<script lang="ts">
	import OutClick from "svelte-outclick"
	import { count } from "$lib/count.js"
</script>

<OutClick class="box" halfClick={true} on:outclick={() => $count++}>
	COMPONENT CONTENT
</OutClick>

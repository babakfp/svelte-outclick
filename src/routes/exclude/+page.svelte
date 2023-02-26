<script>
	import { count } from "$libd/count.js"
	import OutClick from "svelte-outclick"
</script>

<OutClick
	class="box"
	on:outclick={() => $count++}
	excludeQuerySelectorAll="#nothing-happens"
>
	COMPONENT CONTENT
</OutClick>

<div class="box" id="nothing-happens">NOTHING HAPPENS</div>

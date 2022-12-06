<script>
	import { count } from "$lib/count.js"
	import OutClick from "svelte-outclick"
</script>

<OutClick
	class="box"
	on:outclick={()=> $count++}
	excludeByQuerySelector={['#nothing-happens']}
>
	COMPONENT CONTENT
</OutClick>

<div class="box" id="nothing-happens">
	NOTHING HAPPENS
</div>

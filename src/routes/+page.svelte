<script>
	import OutClick from 'svelte-outclick'
	import { count } from '$lib/count.js'
</script>

<OutClick
	class="box-component"
	on:outclick={()=> $count++}
>
	outclick component
</OutClick>

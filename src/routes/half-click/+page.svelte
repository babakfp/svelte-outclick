<script>
	import OutClick from 'svelte-outclick'
	import { count } from '$lib/count.js'
</script>

<OutClick
	class="box-component"
	fullClick={false}
	on:outclick={()=> $count++}
>
	outclick component
</OutClick>

<p class="text-xs">outclick fires on pointerdown.</p>

<script>
	import OutClick from 'svelte-outclick'
	import { count } from '$lib/count.js'
</script>

<OutClick
	class="box-component"
	on:outclick={()=> $count++}
	excludeByQuerySelector={['.box-excluded']}
>
	outclick component
</OutClick>

<div class="box-excluded">doesn't trigger outclick</div>

<p class="text-xs">for example, exclude the button that opens the dropdown.</p>

<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={()=> count++}
	excludeByQuerySelector={['.this-is-excluded']}
>
	{count} times clicked outside
</OutClick>

<div class="this-is-excluded">
	doesn't trigger outclick
</div>

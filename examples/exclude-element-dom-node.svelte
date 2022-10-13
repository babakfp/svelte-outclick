<script>
	import OutClick from 'svelte-outclick'
	let count = 0
	let thisIsExcluded
</script>

<OutClick
	on:outclick={()=> count++}
	excludeByDomNode={[thisIsExcluded]}
>
	{count} times clicked outside
</OutClick>

<div bind:this={thisIsExcluded}>
	doesn't trigger outclick
</div>

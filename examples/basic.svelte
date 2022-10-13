<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={()=> count++}
>
	{count} times clicked outside
</OutClick>

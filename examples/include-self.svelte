<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick
	on:outclick={()=> count++}
	includeSelf={true}
>
	{count} times clicked outside and inside
</OutClick>

<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<OutClick on:outclick={_=> count++}>
	Content
</OutClick>

<p>Count: {count}</p>

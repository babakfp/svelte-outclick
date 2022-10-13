<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
</script>

<Counter bind:count />

<OutClick
	class="box-component"
	fullClick={true}
	on:outclick={()=> count++}
>
	outclick component
</OutClick>

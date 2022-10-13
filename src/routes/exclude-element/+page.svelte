<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
</script>

<Counter bind:count />

<OutClick
	class="box-component"
	on:outclick={()=> count++}
	excludeByQuerySelector={['.box-excluded']}
>
	outclick component
</OutClick>

<div class="box-excluded">doesn't trigger outclick</div>

<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
	let btn
</script>

<svelte:head>
	<title>Exclude By DOM Node</title>
</svelte:head>

<Counter bind:count />

<div class="content">Some content</div>
<button class="content content--excluded" bind:this={btn}>Button - Excluded</button>

<OutClick class="content content--component" on:outclick={_=> count++} excludeByDOMNode={[btn]}>
	Component content
</OutClick>

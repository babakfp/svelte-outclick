<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
</script>

<Counter bind:count />

<div class="content">Some content</div>
<button class="content content--excluded js-button">Button - Excluded</button>

<OutClick class="content content--component" on:outclick={_=> count++} excludeByQuerySelector={['.js-button']}>
	Component content
</OutClick>

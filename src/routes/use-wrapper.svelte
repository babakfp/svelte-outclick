<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
</script>

<svelte:head>
	<title>Use Wrapper</title>
</svelte:head>

<Counter bind:count />

<div class="content">Some content</div>
<button class="content content--excluded js-button">Button - Excluded</button>

<div>
	<OutClick on:outclick={_=> count++} excludeByQuerySelector={['.js-button']} useWrapper={true}>
		Component content
	</OutClick>
</div>

<style lang="postcss">
	div :global(.outclick) {
		@apply flex items-center justify-center w-full h-20 border-2 border-gray-500 border-dashed uppercase;
		@apply border-svelte border-opacity-80;
	}
</style>

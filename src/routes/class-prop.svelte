<script>
	import OutClick from 'svelte-outclick'
	import Counter from '$lib/Counter.svelte'
	let count = 0
</script>

<svelte:head>
	<title>Class Prop</title>
</svelte:head>

<Counter bind:count />

<div class="content">Some content</div>
<button class="content content--excluded js-button">Button - Excluded</button>

<div>
	<OutClick class="my-custom-class" on:outclick={_=> count++} excludeByQuerySelector={['.js-button']}>
		Component content
	</OutClick>
</div>

<style lang="postcss">
	div :global(.my-custom-class) {
		@apply content content--component;
	}
</style>

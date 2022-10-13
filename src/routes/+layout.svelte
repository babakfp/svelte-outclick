<script>
  import '../app.postcss'
	import Menu from '$lib/Menu.svelte'
	import Counter from '$lib/Counter.svelte'
</script>

<div class="relative | flex gap-4 justify-between">
	<Counter />
	<Menu />
</div>

<div class="grid gap-4">
	<slot />
</div>

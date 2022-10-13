<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<div>
	<OutClick
		class="my-custom-class another-class"
		on:outclick={()=> count++}
	>
		{count} times clicked outside
	</OutClick>
</div>

<style lang="postcss">
	/*
	You need to use :global() here because Svelte sucks.
	You need to use an extra element(div) to wrap the component inside it,
		to prevent your styles from affecting the elements outside of this component.
	*/
	div :global(.my-custom-class) {
		color: red;
	}
</style>

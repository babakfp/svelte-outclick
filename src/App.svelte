<script>
	import ClickOutside from './ClickOutside.svelte'

	let open = false
	let excludeHandle
</script>

<div class="btns-wrapper">
	<button
		class="btn btn--brand"
		bind:this={excludeHandle}
		on:click={_=> open = !open}
	>
		Toggle Content
		<span>Excluded</span>
	</button>
	
	<button	class="btn btn--second">
		Useless btn
		<span>Not Excluded</span>
	</button>
</div>

<div class="my-div">
	{#if open}
		<ClickOutside
			class="component-wrapper-element"
			on:clickOutside={_=> open = false}
			exclude={[excludeHandle]}
		>
			Click outside of the box to close it.
		</ClickOutside>
	{/if}
</div>

<style>
	.my-div :global(.component-wrapper-element) {
		display: grid;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		background: #F8FAFC;
		border: 2px dashed #CBD5E1;
		border-radius: .75rem;
		line-height: 1.5rem;
		text-align: center;
	}
	.btns-wrapper {
		display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
	}
</style>
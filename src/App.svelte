<script>
	import ClickOutside from './ClickOutside.svelte'

	let open = false
	let excludeHandleOne

	const toggleContent =_=> open = !open
	const closeContent =_=> open = false
</script>

<button
	class="toggle-content"
	bind:this={excludeHandleOne}
	on:click={toggleContent}
>
	Click Me
	<span>Excluded</span>
</button>

<div class="my-div">
	{#if open}
		<ClickOutside
			class="component-wrapper-element"
			on:clickOutside={closeContent}
			exclude={[excludeHandleOne]}
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
		max-width: 16rem;
		padding: 1rem;
		background: #F8FAFC;
		border: 2px dashed #CBD5E1;
		border-radius: .75rem;
		line-height: 1.5rem;
		font-size: .875rem;
	}
</style>
<script>
	import OutClick from 'svelte-outclick'

	let excluded
	let count = 0
</script>

<div class="other-content" bind:this={excluded}>Excluded</div>
<div class="other-content">Not excluded</div>

<OutClick on:outclick={_=> count++} exclude={[excluded]}>
	<div class="component-content">Component content</div>
</OutClick>

<p>Count Click Outside: {count}</p>

<style>
	.other-content,
	.component-content {
		padding: 1rem 2rem;
		border-radius: .75rem;
		border: 2px dashed transparent;
		text-align: center;
		line-height: 1.5rem;
		transition: 300ms;
	}
	.other-content {
		background: #F1F5F9;
		border-color: #CBD5E1;
	}
	.component-content {
		background: #DBEAFE;
		border-color: #93C5FD;
	}
	.other-content:hover {
		border-color: #64748B;
	}
	.component-content:hover {
		border-color: #3B82F6;
	}
</style>

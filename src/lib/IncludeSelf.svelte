<script>
	import OutClick from 'svelte-outclick'
	let count = 0
</script>

<button class="other-content my-button">Excluded</button>
<div class="other-content">Not excluded</div>

<OutClick on:outclick={_=> count++} exclude={['.my-button']} includeSelf={true}>
	<div class="component-content">Component content</div>
</OutClick>

<p>Count: {count}</p>

<style>
	.other-content,
	.component-content {
		--color: 71, 85, 105;
		--border-opacity: .3;
		padding: 1rem 2rem;
		border-radius: .75rem;
		border: 2px dashed transparent;
		text-align: center;
		line-height: 1.5rem;
		transition: 300ms;
		background: rgba(var(--color), .05);
		border-color: rgba(var(--color), var(--border-opacity));;
	}
	.component-content {
		--color: 255, 62, 0;
	}
	.other-content:hover,
	.component-content:hover {
		--border-opacity: .6;
	}
</style>

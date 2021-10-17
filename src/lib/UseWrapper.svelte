<script>
	import OutClick from 'svelte-outclick'

	let count = 0
</script>

<section>
	<OutClick on:outclick={_=> count++} useWrapper={true}>
		Content
	</OutClick>
</section>

<p>Count: {count}</p>

<style>
	section :global(.outclick-wrapper) {
		--border-opacity: .3;
		padding: 1rem 2rem;
		border-radius: .75rem;
		border: 2px dashed transparent;
		text-align: center;
		line-height: 1.5rem;
		transition: 300ms;
		background: rgba(71, 85, 105, .05);
		border-color: rgba(71, 85, 105, var(--border-opacity));
	}
	section :global(.outclick-wrapper:hover) {
		--border-opacity: .6;
	}
</style>

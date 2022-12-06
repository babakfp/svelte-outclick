<script>
	import { fly } from "svelte/transition"
	import { count } from "$lib/count.js"
</script>

<div class="flex items-center justify-center | w-8 h-8 bg-gray-800 rounded font-medium text-xs">
	{#key $count}
		<div class="absolute" in:fly={{ y: -32, duration: 500 }} out:fly={{ y: 32, duration: 500 }}>
			{$count}
		</div>
	{/key}
</div>

<span class="text-xs text-gray-400"> TIMES CLICKED OUTSIDE </span>

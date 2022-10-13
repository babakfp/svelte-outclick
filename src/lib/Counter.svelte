<script>
	export let count
</script>

<div class="absolute left-1/2 -translate-x-1/2 | flex items-center gap-2 | text-center">
	<div class="flex items-center justify-center | w-12 h-8 bg-gray-50/5 font-medium">{count}</div>
	<span class="text-xs text-gray-400">times clicked outside</span>
</div>

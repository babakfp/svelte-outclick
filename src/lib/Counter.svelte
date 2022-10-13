<script>
	import { count } from '$lib/count.js'
</script>

<div class="flex items-center gap-2">
	<div class="flex items-center justify-center | w-12 h-8 bg-gray-50/5 font-medium">{$count}</div>
	<span class="text-xs text-gray-400 uppercase">times clicked outside</span>
</div>

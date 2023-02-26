<script>
	import "../app.postcss"

	import { navigating, page } from "$app/stores"
	import { description } from "$libd/description.js"
	import Counter from "$libd/Counter.svelte"
	import Menu from "$libd/Menu.svelte"

	$: {
		if (navigating) {
			// prettier-ignore
			if ($page.url.pathname === "/") {
				$description = `Click outside of <span class="underline">COMPONENT CONTENT</span> to increase the counter. The component captures the event for you, so you can for example use it to close a dropdown, a menu, or do whatever.`
			} else if ($page.url.pathname === "/exclude") {
				$description = "You can exclude some elements from triggering the event."
			} else if ($page.url.pathname === "/half-click") {
				$description = "Trigger the event on pointer-down instead of a full click action (pointer-down + pointer-up)."
			}
		}
	}
</script>

<div class="relative flex items-center justify-between gap-4">
	<Counter />
	<Menu />
</div>

<div class="grid gap-2">
	<slot />
</div>

{#if $description}
	<p class="font-mono text-xs leading-5 text-gray-400">
		{@html $description}
	</p>
{/if}
